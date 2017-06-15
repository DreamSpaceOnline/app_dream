import { autoinject } from "aurelia-framework";
import {EnumValues, IdName } from "../common/helpers/enum-helper";
import {IndicatorCore, IndicatorsApiClient, QuotePeriod, ArticlesApiClient, SectionModel } from "./services-generated";

@autoinject
export class SettingsService {

    sections: SectionModel[];
    periods: IdName[];
    initialized: boolean;
    homePage: string;
    indicators: IndicatorCore[];
    defaultPeriod: IdName;


    constructor(private readonly indicatorService: IndicatorsApiClient, private readonly articleService: ArticlesApiClient) {

        this.sections = [];
        this.initialized = false;
        this.homePage = "studies";
        this.indicators = [];

        this.periods = EnumValues.getQuotePeriods();
        this.defaultPeriod = this.periods[0];
    }

    getStudiesSection() {
        if (this.initialized) {
            return this.sections.find(s => s.url === "studies");
        }
        return null;
    }

    getSection(sectionId: number) {
        if (this.initialized) {
            return this.sections.find(s => s.sectionId === sectionId);
        }
        return null;
    }

    async initialize() {
        this.sections = await this.articleService.getSections();
        this.indicators = await this.indicatorService.getIndicators();
        this.initialized = true;
    }

    getIndicators(period: QuotePeriod) {
        return this.indicators.filter(indicator => indicator.period === period);
    }

}
