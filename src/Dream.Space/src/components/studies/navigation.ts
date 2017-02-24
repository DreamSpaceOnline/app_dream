import { autoinject } from "aurelia-framework";
import { Router } from "aurelia-router";
import {ArticleService} from "../../services/article-service";
import {SettingsService} from "../../services/settings-service";
import {SectionInfo, ArticleCategory } from "../../common/types/article-models";

@autoinject
export class Navigation {

    router: Router;
    section: SectionInfo;
    //menus: MenuNavigationItem [];
    menu: MenuNavigationItem;
    
    constructor(private articleService: ArticleService, private settings: SettingsService) {
        this.section = this.settings.getStudiesSection();
        //this.menus = [];

        this.menu = {
            editMode: false,
            section: this.section,
            editModeUrl: "",
            items: []
        };

        this.loadCategories(this.section.sectionId);
    }

    async loadCategories(sectionId) {
        let categories = await this.articleService.getCategories(sectionId);
        this.menu.items = categories;
        //this.menus.push(this.menu);
    }

    configureRouter(config, router: Router) {
        config.title = this.section.title;


        config.map([
            { route: ["", ':category', ':category/:article'], moduleId: "./study", name: "study" }
        ]);

        this.router = router;
    }

    selectMenuItem(categoryUrl) {
        if (this.menu && this.menu.items) {
            this.menu.items.forEach(item => {
                item.isActive = item.url === categoryUrl;
            });
        }
    }

}

export interface MenuNavigationItem {
    editMode: boolean;
    section;
    editModeUrl: string;
    items: ArticleCategory[];
}