import {autoinject, bindable } from "aurelia-framework";
import {BindingEngine, Disposable} from 'aurelia-binding';
import {ArticleBlockInfo} from "../../../common/types/article-models";

@autoinject()
export class ArticlePartParagraph {
    @bindable part: ArticleBlockInfo;
    subscriptions: Disposable[];
    textValid: boolean;

    constructor (private bindingEngine: BindingEngine) {
        this.subscriptions = [];
    }

    attached() {
        if (!this.part.text) {
            this.part.text = '';
        }

        this.subscriptions.push(this.bindingEngine.propertyObserver(this.part, "text")
            .subscribe(() => this.onChange()));

        this.validate();
    }

    detached() {
        if (this.subscriptions.length > 0) {
            this.subscriptions.forEach( subscription => {
                subscription.dispose();
            });
        }

    }

    onChange() {
        this.validate();
    }    
    
    validate() {
        this.textValid = this.part.text.length > 0;

        this.part.valid = this.textValid;
    }

}