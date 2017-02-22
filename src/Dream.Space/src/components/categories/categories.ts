
import { autoinject } from "aurelia-framework";
//import { EventAggregator, Subscription } from 'aurelia-event-aggregator';
import {ArticleService} from "../../services/articles/article-service";
import { ValidationController, validateTrigger } from "aurelia-validation"
import * as Accountservice from "../../services/account/account-service";
import * as Bootstrapformrenderer from "../../form-validation/bootstrap-form-renderer";
import {SettingsService} from "../../services/settings/settings-service";
import {SectionInfo, ArticleCategory } from "../../services/articles/article-models";

@autoinject
export class Categories {

    powerUser: boolean;
    editMode: boolean;
    //subscriptions: Subscription[];
    section: SectionInfo;
    sectionId: number;
    categories: ArticleCategory[];
    sections: SectionInfo[];

    constructor(
        //private eventAggregator: EventAggregator,
        private articleService: ArticleService,
        private settings: SettingsService,
        private account: Accountservice.AccountService,
        private validation: ValidationController
    ) {

        this.powerUser = this.account.currentUser.isAuthenticated;
        this.validation.validateTrigger = validateTrigger.change;
        this.validation.addRenderer(new Bootstrapformrenderer.BootstrapFormRenderer());

        //this.subscriptions = [];
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