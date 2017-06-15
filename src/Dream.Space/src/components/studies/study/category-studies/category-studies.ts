import { bindable, autoinject } from "aurelia-framework";
import { CategoryModel, ArticlesApiClient, ArticleModel } from "../../../../services/services-generated";

@autoinject()
export class CategoryStudies {

    @bindable category: CategoryModel;
    articles: ArticleModel[];

    constructor(private readonly articleService: ArticlesApiClient) {
        
    }

    async categoryChanged() {
        if (this.category && this.category.categoryId > 0) {
            await this.loadArticles(this.category.categoryId);
        }
    }

    async loadArticles(categoryId: number) {
        this.articles = await this.articleService.getArticles(categoryId);
    }

}