import { autoinject, bindable } from "aurelia-framework";
import { BindingEngine, Disposable } from 'aurelia-binding';
import { ArticleBlockInfo } from "../../../common/types/article-models";
import { HeadingType } from "../../../common/types/enums";

@autoinject
export class ArticlePartHeading {
    @bindable part: ArticleBlockInfo;

    headingTypes: HeadingType[];
    textValid: boolean;
    typeValid: boolean;
    subscriptions: Disposable[];

    constructor (private bindingEngine: BindingEngine) {
        this.headingTypes = ['H1','H2','H3','H4','H5'];
        this.textValid = true;
        this.typeValid = true;
        this.subscriptions = [];
    }

    attached() {
        if (!this.part.headingType) {
            this.part.headingType = 'H3';
        }

        if (!this.part.text) {
            this.part.text = '';
        }

        this.subscriptions.push(this.bindingEngine.propertyObserver(this.part, 'text')
            .subscribe(() => this.onChange()));

        this.validate();
    }


    detached() {
        if (this.subscriptions.length > 0) {
            this.subscriptions.forEach(subscription => {
                subscription.dispose();
            });
        }

    }

    onChange() {
        this.validate();
    }    
    
    validate() {
        this.typeValid = this.part.headingType.length === 2;
        this.textValid = this.part.text.length > 0;

        this.part.valid = this.typeValid && this.textValid;
    }
}