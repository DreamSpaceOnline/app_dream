import { autoinject, bindable } from "aurelia-framework";
import { BindingEngine, Disposable } from 'aurelia-binding';
import {ArticleBlock, HeadingType } from "../../../services/services-generated";

@autoinject
export class ArticlePartHeading {
    @bindable part: ArticleBlock;
    @bindable editMode: boolean;

    headingTypes: HeadingType[];
    textValid: boolean;
    typeValid: boolean;
    subscriptions: Disposable[];

    constructor (private readonly bindingEngine: BindingEngine) {
        this.headingTypes = [HeadingType.H1, HeadingType.H2, HeadingType.H3, HeadingType.H4, HeadingType.H5];

        this.textValid = true;
        this.typeValid = true;
        this.subscriptions = [];
    }

    attached() {
        if (!this.part.headingType) {
            this.part.headingType = HeadingType.H3;
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
        this.typeValid = (this.part.headingType) ? true : false;
        this.textValid = this.part.text.length > 0;

        this.part.valid = this.typeValid && this.textValid;
    }
}