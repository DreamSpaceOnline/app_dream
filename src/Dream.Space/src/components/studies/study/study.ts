import * as toastr from "toastr";
import { autoinject } from "aurelia-framework";
import { EventAggregator } from 'aurelia-event-aggregator';
import { Router, RouteConfig, NavigationInstruction } from "aurelia-router";
import { Navigation } from "../navigation"
import { ValidationRules, ValidationController, validateTrigger } from "aurelia-validation";
import {BootstrapFormRenderer} from "../../../form-validation/bootstrap-form-renderer";
import {AccountService} from "../../../services/account-service";
import {ArticlesApiClient, ArticleModel, Category } from "../../../services/services-generated";

@autoinject
export class Study {

    powerUser: boolean;
    router: Router;
    articleUrl: string;
    subscriptions: {}[];
    editMode: boolean;
    article: ArticleModel;
    category: Category;
    articles: ArticleModel[];
    originalArticle: ArticleModel;

    constructor(
        private readonly eventAggregator: EventAggregator,
        private readonly articleService: ArticlesApiClient,
        private readonly navigation: Navigation,
        private readonly account: AccountService,
        private readonly validation: ValidationController) {

        this.powerUser = this.account.currentUser.isAuthenticated;
        this.validation.validateTrigger = validateTrigger.change;
        this.validation.addRenderer(new BootstrapFormRenderer());

        this.subscriptions = [];
        this.editMode = false;
    }

    activate(params, routeconfig: RouteConfig, navigationInstruction: NavigationInstruction) {
        this.router = navigationInstruction.router;

        this.articleUrl = routeconfig.name;
        this.articleUrl = "default";
        
        if (!params.category) {
            params.category = "default";
        }

        if (params.article) {
            this.articleUrl = params.article;
        }

        this.loadCategory(params.category);
    }

    async loadArticles(categoryId: number) {
        this.articles = await this.articleService.getArticles(categoryId);
        this.selectSideNavigationItem();
    }

    async loadCategory(categoryUrl) {
        this.setEditMode(false);

        this.category = await this.articleService.getCategory(categoryUrl);

        if (this.category && this.category.categoryId > 0) {
            this.navigation.selectMenuItem(this.category.url);

            const result = await this.articleService.getArticleByUrl(this.category.categoryId, this.articleUrl);
            if(result.articleId > 0) {
                this.article = result;
                this.setEditMode(false);
                
                await this.loadArticles(this.category.categoryId);
            }
        }
    }

    setEditMode(editMode) {
        this.editMode = editMode;
        this.navigation.menu.editMode = editMode;
        this.eventAggregator.publish("article-edit-mode-changed", editMode);
    }

    startEdit() {
        this.originalArticle = Object.assign({}, this.article);

        this.setEditMode(true);

        ValidationRules
            .ensure((u: ArticleModel) => u.title).displayName('Strategy name').required().withMessage(`\${$displayName} cannot be blank.`)
            .ensure((u: ArticleModel) => u.summary).displayName('Summary').required().withMessage(`\${$displayName} cannot be blank.`)
            .ensure((u: ArticleModel) => u.url).displayName('Strategy url').required().withMessage(`\${$displayName} cannot be blank.`)
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
        this.article.blocks = [];
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

    navigateToArticle(url) {
        if (url && url.length > 0) {
            this.setEditMode(false);
            const articleUrl = `/${this.navigation.section.url}/${this.category.url}/${url}`;
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
                    toastr.warning("Please correct validation errors.", "Validation Errors");
                }
            });
    }

    articlePartsValidate() {
        if (this.article.blocks.length > 0) {
            const index = this.article.blocks.findIndex(b => !b.valid);
            return index === -1;
        } else {
            toastr.warning("Article is empty", "Validation Errors");
            return false;
        }
    }

    async saveArticle() {
        this.setEditMode(false);

        const a = await this.articleService.saveArticle(this.article);
        if(a.url && a.url.length > 0) {
            toastr.success(`Article staved successfully!`, "Strategy saved");
            this.navigateToArticle(a.url);
        }

    }
}
