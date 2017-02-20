import { autoinject } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";
import {ArticleInfo, ArticleSectionInfo, ArticleCategory, ArticleCategoryInfo } from "./article-models";

@autoinject
export class ArticleService {

    constructor(private http: HttpClient) {
    }


    async getArticle(id: number) : Promise<ArticleInfo> {
        const response = await this.http.fetch("article/" + id);
        return await response.json();
    }

    async deleteArticle(id: number) {
        const response = await this.http.fetch("article/" + id, { method: 'delete' });
        return await response.json();
    }

    async getArticleByUrl(categotyId: number, articleUrl: string): Promise<ArticleInfo> {
        const response = await this.http.fetch("article/url/" + categotyId + "/" + articleUrl);
        return await response.json();
    }

    async getSection(url: string) : Promise<ArticleSectionInfo> {
        const response = await this.http.fetch("article/section/" + url);
        return await response.json();
    }

    async getCategories(sectionId: number): Promise<ArticleCategory[]> {
        const response = await this.http.fetch("article/categories/" + sectionId);
        return await response.json();
    }

    async getCategory(categoryUrl: string) : Promise<ArticleCategoryInfo> {
        const response = await this.http.fetch("article/category/" + categoryUrl);
        return await response.json();
    }

    async getFeatured(categoryId: number) : Promise<ArticleInfo> {
        const response = await this.http.fetch("article/" + categoryId + "/featured");
        return await response.json();
    }   

    async getArticles(categoryId): Promise<ArticleInfo[]>{
        let response = await this.http.fetch("article/" + categoryId + "/all");
        return await response.json();

    }
}

