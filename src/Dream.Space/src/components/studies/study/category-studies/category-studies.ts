import { bindable, autoinject } from "aurelia-framework";
import { CategoryModel, ArticlesApiClient, ArticleHeader } from "../../../../services/services-generated";

@autoinject()
export class CategoryStudies {

    @bindable category: CategoryModel;
    articles: ArticleHeader[];

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

    navigateToArticle(url: string) {
        console.log(url);
    }

    deleteArticle() {
        
    }

    addArticle() {
        
    }

}