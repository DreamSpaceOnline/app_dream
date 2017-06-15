import { autoinject } from "aurelia-framework";
import { ValidationController, validateTrigger } from "aurelia-validation"
import * as Bootstrapformrenderer from "../../../form-validation/bootstrap-form-renderer";
import {SettingsService} from "../../../services/settings-service";
import {AccountService} from "../../../services/account-service";
import {SectionModel, CategoryModel, ArticlesApiClient } from "../../../services/services-generated";

@autoinject
export class Categories {

    powerUser: boolean;
    editMode: boolean;
    section: SectionModel;
    sectionId: number;
    categories: CategoryModel[];
    sections: SectionModel[];

    constructor(
        private readonly articleService: ArticlesApiClient,
        private readonly settings: SettingsService,
        private readonly account: AccountService,
        private readonly validation: ValidationController
    ) {

        this.powerUser = this.account.currentUser.isAuthenticated;
        this.validation.validateTrigger = validateTrigger.change;
        this.validation.addRenderer(new Bootstrapformrenderer.BootstrapFormRenderer());

        this.editMode = false;
        this.categories = [];
        this.sections = this.settings.sections;
        this.sectionId = 0;
    }

    async activate(params) {

        if (!params.section) {
            if (this.sections && this.sections.length > 0) {
                this.sectionId = this.sections[0].sectionId;
            }
        }

        if (this.sectionId > 0) {
            this.section = this.settings.getSection(this.sectionId);
            this.categories = await this.articleService.getCategories(this.sectionId);
        } 

    }

    getSectionUrl(section) {
        return "/categories/" + section.SectionId;
    }

}