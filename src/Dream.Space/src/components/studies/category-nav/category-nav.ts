import { bindable } from "aurelia-framework";
import {MenuNavigationItem} from "../navigation";

export class CategoryNav {

    @bindable menu: MenuNavigationItem;
    categoriesUrl: string;

    constructor() {
        this.categoriesUrl = "";
    }

    menuChanged() {
        this.categoriesUrl = this.menu.section.url + "/categories/" + this.menu.section.sectionId;
    }

    getUrl(menuItem) {
        return "" + this.menu.section.url + "/" + menuItem.url;
    }

}