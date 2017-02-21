import {autoinject, bindable} from "aurelia-framework";
import {BindingEngine, Disposable} from 'aurelia-binding';
import {EventAggregator, Subscription} from 'aurelia-event-aggregator';
import { ArticleBlockInfo, ArticleBlockAction} from "../../../services/articles/article-models";

@autoinject
export class ArticleParts {
    @bindable parts: ArticleBlockInfo[];
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
        let part: ArticleBlockInfo = {
            type: "Unset",
            editMode: true,
            text:"",
            action: "Unset"
        };

        let index = this.parts.findIndex(p => p.type === part.type);
        if (index === -1) {
            this.parts.push(part);
        }
    }
    
    onPartsChanged() {
        this.renewPartsSubscriptions();
    }

    renewPartsSubscriptions() {
        if (this.partsSubscriptions.length > 0) {
            this.partsSubscriptions.forEach(function(subscription) {
                subscription.dispose();
            });

            this.partsSubscriptions = [];
        }    

        if (this.parts  && this.parts.length > 0) {
            let self = this;

            this.parts.forEach(function(item) {
                self.partsSubscriptions.push(
                    self.bindingEngine.propertyObserver(item, 'action')
                        .subscribe((action) => self.onPartActionChange(action)));
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
        let index = this.parts.findIndex(p => p.action === "Remove");
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