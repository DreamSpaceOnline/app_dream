import {bindable} from "aurelia-framework";
import {ArticleBlock} from "../../../services/services-generated";

//TODO: use EventEmitter
export class ArticlePartActions {
    @bindable part: ArticleBlock;

    remove() {
        if (this.part) {
            //this.part.action = "Remove";
        }
    }
    moveUp() {
        if (this.part) {
            //this.part.action = "MoveUp";
        }
    }
    moveDown() {
        if (this.part) {
            //this.part.action = "MoveDown";
        }
    }
}