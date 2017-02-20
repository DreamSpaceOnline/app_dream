import {MenuNavigationItem} from "../navigation";

export class CategoryNav {

    constructor() {
        this.categoriesUrl = "";
    }

    activate(menu: MenuNavigationItem) {
        this.menu = menu;
        this.categoriesUrl = this.menu.section.url + "/categories/" + this.menu.section.sectionId;
    }

    getUrl(menuItem) {
        return "" + this.menu.section.url + "/" + menuItem.url;
    }

    categoriesUrl: string;
    menu: MenuNavigationItem;
}