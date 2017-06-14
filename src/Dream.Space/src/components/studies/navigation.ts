import { autoinject } from "aurelia-framework";
import { Router } from "aurelia-router";
import {SettingsService} from "../../services/settings-service";
import {ArticlesApiClient, Category, Section } from "../../services/services-generated";

@autoinject
export class Navigation {

    router: Router;
    section: Section;
    menu: IMenuNavigationItem;
    
    constructor(private readonly articleService: ArticlesApiClient, private readonly settings: SettingsService) {
        this.section = this.settings.getStudiesSection();

        this.menu = {
            editMode: false,
            section: this.section,
            editModeUrl: "",
            items: []
        };

        this.loadCategories(this.section.sectionId);
    }

    async loadCategories(sectionId) {
        const categories = await this.articleService.getCategories(sectionId);
        this.menu.items = categories;
    }

    configureRouter(config, router: Router) {
        config.title = this.section.title;


        config.map([
            { route: ["", ":category", ":category/:article"], moduleId: "./study/study", name: "study" },
            { route: ["categories"], moduleId: "./categories/categories", name: "categories", title: "Manage categories", nav: true }
        ]);

        this.router = router;
    }

    selectMenuItem(categoryUrl) {
        if (this.menu && this.menu.items) {
            this.menu.items.forEach(item => {
                if (item.url === categoryUrl) {
                    
                }
            });
        }
    }

}

export interface IMenuNavigationItem {
    editMode: boolean;
    section: Section;
    editModeUrl: string;
    items:Category[];
}