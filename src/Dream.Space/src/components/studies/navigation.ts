import { autoinject } from "aurelia-framework";
import { Router, RouterConfiguration } from "aurelia-router";
import {SettingsService} from "../../services/settings-service";
import {ArticlesApiClient, CategoryModel, SectionModel } from "../../services/services-generated";

@autoinject
export class Navigation {

    router: Router;
    section: SectionModel;
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

    async loadCategories(sectionId: number) {
        const categories = await this.articleService.getCategories(sectionId);
        this.menu.items = categories;
    }

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = this.section.title;


        config.map([
            { route: ["", ":category", ":category/:article"], moduleId: "./study/study", name: "study" },
            { route: ["categories"], moduleId: "./categories/categories", name: "categories", title: "Manage categories", nav: true }
        ]);

        this.router = router;
    }

    selectMenuItem(categoryUrl: string) {
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
    section: SectionModel;
    editModeUrl: string;
    items:CategoryModel[];
}