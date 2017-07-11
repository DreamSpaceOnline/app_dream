import { autoinject } from "aurelia-framework";
import { Subscription } from "aurelia-event-aggregator";
import { Router, RouteConfig, NavigationInstruction } from "aurelia-router";
import { Navigation } from "../navigation"
import { ValidationRules, ValidationController, validateTrigger } from "aurelia-validation";
import { BootstrapFormRenderer } from "../../../form-validation/bootstrap-form-renderer";
import { ArticlesApiClient, ArticleModel, CategoryModel, ArticleHeader } from "../../../services/services-generated";
import { EventEmitter } from "../../../infrastructure/event-emitter";

@autoinject
export class Study {

    powerUser: boolean;
    editMode: boolean;
    article: ArticleModel;
    category: CategoryModel;
    articles: ArticleHeader[];

    private router: Router;
    private articleUrl: string;
    private readonly subscriptions: Subscription[] = [];
    private originalArticle: ArticleModel;

    constructor(
        private readonly eventEmitter: EventEmitter,
        private readonly articleService: ArticlesApiClient,
        private readonly navigation: Navigation,
        private readonly validation: ValidationController) {

        this.validation.validateTrigger = validateTrigger.change;
        this.validation.addRenderer(new BootstrapFormRenderer());

        this.subscriptions.push(this.eventEmitter.subscribe("Article-StartEdit", () => this.startEdit()));
        this.subscriptions.push(this.eventEmitter.subscribe("Article-CancelEdit", () => this.cancelEdit()));
        this.subscriptions.push(this.eventEmitter.subscribe("router:navigation:complete", () => this.onNavigatioComplete()));

        this.editMode = false;
    }

    onNavigatioComplete() {
        const categoryUrl = this.router.currentInstruction.config.name;
        this.loadPage(categoryUrl);
    }

    detached() {
        this.subscriptions.forEach(item => item.dispose());
    }

    activate(params: IStudyParams, routeconfig: RouteConfig, navigationInstruction: NavigationInstruction) {
        this.router = navigationInstruction.router;

        this.articleUrl = "default";
      
        if (params.articleUrl && routeconfig) {
            this.articleUrl = params.articleUrl;
        }
    }

    async loadPage(categoryUrl: string) {
        this.category = await this.articleService.getCategory(categoryUrl);
        if (this.category) {
            this.article = await this.articleService.getArticleByUrl(this.category.categoryId, this.articleUrl);
            this.articles = await this.articleService.getArticles(this.category.categoryId);
            this.selectSideNavigationItem();
        }
    }

    setEditMode(editMode: boolean) {
        this.editMode = editMode;
    }

    startEdit() {
        this.originalArticle = Object.assign({}, this.article);

        this.setEditMode(true);

        ValidationRules
            .ensure((u: ArticleModel) => u.title).displayName("Strategy name").required().withMessage(`\${$displayName} cannot be blank.`)
            .ensure((u: ArticleModel) => u.summary).displayName("Summary").required().withMessage(`\${$displayName} cannot be blank.`)
            .ensure((u: ArticleModel) => u.url).displayName("Strategy url").required().withMessage(`\${$displayName} cannot be blank.`)
            .on(this.article);

    }

    cancelEdit() {
        this.setEditMode(false);

        if (this.article.articleId > 0) {
            this.article = this.originalArticle;
            this.editMode = false;
        } else {
            this.article.deleted = true;
        }
        this.validation.reset();
    }



    addArticle() {
        this.article = new ArticleModel();
        this.article.articleId = 0;
        this.article.categoryId = this.category.categoryId;
        this.article.isFeatured = false;
        this.article.deleted = false;
        this.article.title = "New Article";
        this.article.url = "new-article";
        this.article.articleBlocks = [];
        this.article.summary = "";
    

        this.startEdit();
        this.validation.validate();
    }

    selectSideNavigationItem() {
        const self = this;

        if (this.articles && this.articles.length > 0) {
            this.articles.forEach(item => {
                if (item.articleId === self.article.articleId) {
                    
                }
            });
        }
    }

    navigateToArticle(url: string) {
        if (url && url.length > 0) {
            this.setEditMode(false);
            const articleUrl = `/${this.navigation.section}/${this.category.url}/${url}`;
            this.router.navigate(articleUrl);
        }
    }

    async deleteArticle() {
        if (this.article && this.article.articleId > 0) {
            await this.articleService.deleteArticle(this.article.articleId);
        } else {
            toastr.warning("Article is not selected", "Delete Failed");
        }
    }

    trySaveArticle() {
        this.validation.validate()
            .then(response => {
                let valid = false;
                if (response.valid) {
                    if (this.articlePartsValidate()) {
                        valid = true;
                    }
                }
                if (valid) {
                    this.saveArticle();

                } else {
                    //toastr.warning("Please correct validation errors.", "Validation Errors");
                }
            });
    }

    articlePartsValidate() {
        if (this.article.articleBlocks.length > 0) {
            const index = this.article.articleBlocks.findIndex(b => !b.valid);
            return index === -1;
        } else {
            //toastr.warning("Article is empty", "Validation Errors");
            return false;
        }
    }

    async saveArticle() {
        this.setEditMode(false);

        const a = await this.articleService.saveArticle(this.article);
        if(a.url && a.url.length > 0) {
            //toastr.success(`Article staved successfully!`, "Strategy saved");
            this.navigateToArticle(a.url);
        }

    }
}


interface IStudyParams {
    articleUrl: string;
}
