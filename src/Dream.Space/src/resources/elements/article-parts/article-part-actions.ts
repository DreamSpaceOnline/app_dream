import {bindable} from "aurelia-framework";
import {ArticleBlockInfo} from "../../../common/types/article-models";

export class ArticlePartActions {
    @bindable part: ArticleBlockInfo;

    remove() {
        if (this.part) {
            this.part.action = "Remove";
        }
    }
    moveUp() {
        if (this.part) {
            this.part.action = "MoveUp";
        }
    }
    moveDown() {
        if (this.part) {
            this.part.action = "MoveDown";
        }
    }
}