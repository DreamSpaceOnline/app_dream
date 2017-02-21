import {bindable} from "aurelia-framework";
import {ArticleBlockInfo, ArticleBlockType, ArticleBlockAction } from "../../../services/articles/article-models";

export class ArticlePartNew {
    @bindable part: ArticleBlockInfo;

    partTypes: ArticleBlockType[];
    partAction: ArticleBlockAction;
    canAdd: boolean;
    selectedType: ArticleBlockType;

    constructor () {
        this.partTypes = ["Paragraph" , "Heading" , "Image" , "List"];

        this.canAdd = false;
        this.selectedType = "Unset";
    }

    onTypeChange() {
        this.canAdd = this.selectedType !== "Unset";
    }

    add() {
        this.part.type = this.selectedType;
    }

    cancel() {
        this.part.action = "Remove";
    }
}