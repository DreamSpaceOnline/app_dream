
import { autoinject } from "aurelia-framework";
import { ValidationController, validateTrigger } from "aurelia-validation"
import * as Bootstrapformrenderer from "../../form-validation/bootstrap-form-renderer";
import {SectionInfo, ArticleCategory } from "../../common/types/article-models";
import {ArticleService} from "../../services/article-service";
import {SettingsService} from "../../services/settings-service";
import {AccountService} from "../../services/account-service";

@autoinject
export class Categories {

    powerUser: boolean;
    editMode: boolean;
    section: SectionInfo;
    sectionId: number;
    categories: ArticleCategory[];
    sections: SectionInfo[];

    constructor(
        private articleService: ArticleService,
        private settings: SettingsService,
        private account: AccountService,
        private validation: ValidationController
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
        return '/categories/' + section.SectionId;
    }

}