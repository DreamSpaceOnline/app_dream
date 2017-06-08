import {bindable, autoinject} from 'aurelia-framework';
import {BindingEngine, Disposable} from 'aurelia-binding';
import { ArticleBlock, ArticleBlockItem } from "../../../services/services-generated";

@autoinject
export class ArticlePartList {
    
    @bindable part:ArticleBlock;
    itemsChangedSubscription: Disposable;
    itemsSubscriptions: Disposable[];

    constructor (private bindingEngine: BindingEngine) {
        this.itemsSubscriptions = [];
        this.itemsChangedSubscription = null;
    }

    partChanged(newValue) {
        if (newValue ) {

            if (!this.part.items) {
                this.part.items = [];
            }

            if (this.part.items.length === 0) {
                this.addItem();
            }

            if( !this.itemsChangedSubscription) {
                this.itemsChangedSubscription = this.bindingEngine.collectionObserver(this.part.items)
                    .subscribe( () => this.onItemsChanged());
            }   

            this.renewItemsSubscriptions();
        }
    }

    addItem() {
        const item = new ArticleBlockItem();
        item.text = "";
        item.valid = false;

        this.part.items.push(item);
    }
    
    deleteItem(index) {
        this.part.items.splice(index, 1);
    }

    onItemsChanged() {
        this.renewItemsSubscriptions();
    }

    renewItemsSubscriptions() {
        if (this.itemsSubscriptions.length > 0) {
            this.itemsSubscriptions.forEach( subscription => {
                subscription.dispose();
            });

            this.itemsSubscriptions = [];
        }    

        if (this.part.items  && this.part.items.length > 0) {
            let self = this;

            this.part.items.forEach( item => {
                self.itemsSubscriptions.push(
                    self.bindingEngine.propertyObserver(item, 'text')
                        .subscribe(() => self.onItemTextChange()));
            });
        }

        this.validate();
    }

    onItemTextChange() {
        this.validate();
    }

    validate() {
        let valid = false;
        if (this.part.items && this.part.items.length > 0) {
            this.part.items.forEach( item => {
                item.valid = item.text && item.text.length > 0;
            });

            valid = this.part.items.findIndex(i => !i.valid) === -1;
        }
        this.part.valid = valid;
    }

    detached() {
        if (this.itemsChangedSubscription) {
            this.itemsChangedSubscription.dispose();
        }

        if (this.itemsSubscriptions.length > 0) {
            this.itemsSubscriptions.forEach( subscription => {
                subscription.dispose();
            });
        }
    }
}