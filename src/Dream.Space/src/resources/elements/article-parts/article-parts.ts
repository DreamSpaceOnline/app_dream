import { autoinject, bindable } from "aurelia-framework";
import { BindingEngine, Disposable } from 'aurelia-binding';
import { Subscription } from 'aurelia-event-aggregator';
import { ArticleBlockAction } from "../../../common/types/enums";
import { ArticleBlock, ArticleBlockType } from "../../../services/services-generated";

@autoinject
export class ArticleParts {
    @bindable parts: ArticleBlock[];
    @bindable editMode: boolean;

    partsSubscriptions: Subscription[];
    eventSubscriptions: Subscription[];
    partsChangedSubscription: Disposable;

    constructor (private bindingEngine: BindingEngine) {
        this.parts = [];
        this.partsSubscriptions = [];
        this.partsChangedSubscription = null;
        this.eventSubscriptions = [];
    }

    
    partsChanged(newValue: ArticleBlock[]) {
        if (newValue ) {
            if( !this.partsChangedSubscription) {
                this.partsChangedSubscription = this.bindingEngine.collectionObserver(this.parts).subscribe( () => this.onPartsChanged());
            }   

            this.renewPartsSubscriptions();
        }
    }

    editModeChanged(newValue: boolean) {
        if (newValue) {
            
        }
    }

    isParagraph(part: ArticleBlock):boolean {
        return part.type === ArticleBlockType.Paragraph;
    }

    isHeading(part: ArticleBlock): boolean {
        return part.type === ArticleBlockType.Heading;
    }

    isImage(part: ArticleBlock): boolean {
        return part.type === ArticleBlockType.Image;
    }

    isList(part: ArticleBlock): boolean {
        return part.type === ArticleBlockType.List;
    }

    isUnset(part: ArticleBlock): boolean {
        return part.type === ArticleBlockType.Unset;
    }

    detached() {
        if (this.partsChangedSubscription) {
            this.partsChangedSubscription.dispose();
        }

        if (this.eventSubscriptions.length > 0) {
            this.eventSubscriptions.forEach(subscription => {
                subscription.dispose();
            });
        }        
        
        if (this.partsSubscriptions.length > 0) {
            this.partsSubscriptions.forEach( subscription => {
                subscription.dispose();
            });
        }
    }

    addPart() {

        const part = new ArticleBlock();
        part.type = ArticleBlockType.Unset;
        part.text = "";

        const index = this.parts.findIndex(p => p.type === part.type);
        if (index === -1) {
            this.parts.push(part);
        }
    }
    
    onPartsChanged() {
        this.renewPartsSubscriptions();
    }

    renewPartsSubscriptions() {
        if (this.partsSubscriptions.length > 0) {
            this.partsSubscriptions.forEach(subscription => {
                subscription.dispose();
            });

            this.partsSubscriptions = [];
        }    

        if (this.parts  && this.parts.length > 0) {
            this.parts.forEach(item => {
                this.partsSubscriptions.push(
                    this.bindingEngine.propertyObserver(item, "action")
                    .subscribe((action) => this.onPartActionChange(action)));
            });
        }
    }

    onPartActionChange(action: ArticleBlockAction) {
        
        switch (action) {
            case "Remove":
                this.removeDeletedPart();
            break;
            case "MoveUp":
                this.movePartUp();
            break;
            case "MoveDown":
                this.movePartDown();
            break;
        default:
        }
    }

    removeDeletedPart() {
        //const index = this.parts.findIndex(p => p.action === "Remove");
        //if (index !== -1) {
        //    this.parts.splice(index, 1);
        //}
    }


    movePartUp() {
        //let index = this.parts.findIndex(p => p.action === "MoveUp");
        //if(index > 0) {
        //    this.parts.splice(index - 1, 0, this.parts.splice(index, 1)[0]);
        //    this.parts[index - 1].action = "Unset";
        //}
    }

    movePartDown() {
        //let index = this.parts.findIndex(p => p.action === "MoveDown");
        //if(index > -1 && index < this.parts.length - 1) {
        //    this.parts.splice(index + 1, 0, this.parts.splice(index, 1)[0]);
        //    this.parts[index + 1].action = "Unset";
        //}
    }


}