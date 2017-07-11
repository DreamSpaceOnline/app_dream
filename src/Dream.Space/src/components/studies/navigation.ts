import { autoinject } from "aurelia-framework";
import { Router, RouterConfiguration, RouteConfig } from "aurelia-router";
import { ArticlesApiClient } from "../../services/services-generated";

@autoinject
export class Navigation {

    router: Router;
    section: "studies";

    constructor(private readonly articleService: ArticlesApiClient) {
    }


    async configureRouter(config: RouterConfiguration, router: Router) {

        config.title = "Studies";
        const routes: RouteConfig[] = [];

        const section = await this.articleService.getSection("studies");
        if (section) {
            const categories = await this.articleService.getCategories(section.sectionId);

            if (categories && categories.length > 0) {
                categories.forEach(category => {

                    routes.push({
                        route: [category.url, `${category.url}/:articleUrl`],
                        moduleId: "./study/study",
                        name: category.url,
                        title: category.title,
                        nav: true
                    });

                });
            }
        }

        routes.push({ route: [""], moduleId: "./study/study", name: "study" });
        routes.push({ route: ["categories"], moduleId: "./categories/categories", name: "categories", title: "Manage categories" });

        config.map(routes);
        this.router = router;
    }
}
