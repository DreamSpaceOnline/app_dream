import { ArticleBlockType, ArticleBlockAction, HeadingType } from "./enums";

export interface ArticleInfo {
    title:string;
    summary: string;
    url: string;
    articleId: number;
    categoryId: number;
    editMode: boolean;
    deleted: boolean;
    selected: boolean;
    isFeatured: boolean;
    blocks: ArticleBlockInfo [];
}

export interface ArticleSectionInfo {

}

export interface ArticleCategory {
    isActive: boolean;
    url: string;
}

export interface ArticleCategoryInfo {
    categoryId: number;
    url: string;
}

export interface SectionInfo {
    url: string;
    sectionId: number;
    title: string;
}

export interface ArticleBlockInfo {
    valid?: boolean;
    editMode: boolean;
    type: ArticleBlockType;
    action: ArticleBlockAction;
    text: string;
    headingType?: HeadingType;
    imageUrl?:string;
    items?:{text: string, valid: boolean}[];
}

