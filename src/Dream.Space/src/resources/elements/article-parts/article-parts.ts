import { autoinject, bindable } from "aurelia-framework";
import { BindingEngine, Disposable } from 'aurelia-binding';
import { EventAggregator, Subscription } from 'aurelia-event-aggregator';
import { ArticleBlockAction } from "../../../common/types/enums";
import { ArticleBlock, ArticleBlockType} from "../../../services/services-generated";

@autoinject
export class ArticleParts {
    @bindable parts: ArticleBlock[];
    editMode: boolean;

    partsSubscriptions: Subscription[];
    eventSubscriptions: Subscription[];
    partsChangedSubscription: Disposable;

    constructor (private bindingEngine: BindingEngine, private eventAggregator: EventAggregator) {
        this.parts = [];
        this.editMode = false;
        this.partsSubscriptions = [];
        this.partsChangedSubscription = null;
        this.eventSubscriptions = [];
    }

    attached() {
        this.eventSubscriptions.push(
            this.eventAggregator.subscribe("article-edit-mode-changed", flag => this.setEditMode(flag)));

    }

    setEditMode(flag) {
        this.editMode = flag;
        if (this.parts) {
            this.parts.forEach(item => {
                item.editMode = flag;
            });
        }
    }

    partsChanged(newValue) {
        if (newValue ) {
            if( !this.partsChangedSubscription) {
                this.partsChangedSubscription = this.bindingEngine.collectionObserver(this.parts).subscribe( () => this.onPartsChanged());
            }   

            this.renewPartsSubscriptions();
        }
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
        part.blockType = ArticleBlockType.Unset;
        part.text = "";

        const index = this.parts.findIndex(p => p.blockType === part.blockType);
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
        const index = this.parts.findIndex(p => p.action === "Remove");
        if (index !== -1) {
            this.parts.splice(index, 1);
        }
    }


    movePartUp() {
        let index = this.parts.findIndex(p => p.action === "MoveUp");
        if(index > 0) {
            this.parts.splice(index - 1, 0, this.parts.splice(index, 1)[0]);
            this.parts[index - 1].action = "Unset";
        }
    }

    movePartDown() {
        let index = this.parts.findIndex(p => p.action === "MoveDown");
        if(index > -1 && index < this.parts.length - 1) {
            this.parts.splice(index + 1, 0, this.parts.splice(index, 1)[0]);
            this.parts[index + 1].action = "Unset";
        }
    }


}