import {bindable} from "aurelia-framework";
import { ArticleBlockAction } from "../../../common/types/enums";
import { ArticleBlock, ArticleBlockType } from "../../../services/services-generated";

export class ArticlePartNew {
    @bindable part: ArticleBlock;
    @bindable editMode: boolean;

    partTypes: ArticleBlockType[];
    partAction: ArticleBlockAction;
    canAdd: boolean;
    selectedType: ArticleBlockType;

    constructor () {
        this.partTypes = [ArticleBlockType.Unset, ArticleBlockType.Heading, ArticleBlockType.Image, ArticleBlockType.List];

        this.canAdd = false;
        this.selectedType = ArticleBlockType.Unset;
    }

    onTypeChange() {
        this.canAdd = this.selectedType !== ArticleBlockType.Unset;
    }

    add() {
        this.part.blockType = this.selectedType;
    }

    cancel() {
        //this.part.action = "Remove";
    }
}