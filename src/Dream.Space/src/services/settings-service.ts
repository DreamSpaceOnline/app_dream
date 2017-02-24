import { autoinject } from "aurelia-framework";
import { HttpClient } from 'aurelia-fetch-client';
import { SectionInfo } from "../common/types/article-models";
import { IndicatorCore } from "../common/types/indicator-models";
import { IndicatorService } from "./indicator-service";
import {EnumValues, IdName } from "../common/helpers/enum-helper";
import {QuotePeriod} from "../common/types/enums";

@autoinject
export class SettingsService {

    sections: SectionInfo[];
    periods: IdName[];
    initialized: boolean;
    homePage: string;
    indicators: IndicatorCore[];
    defaultPeriod: IdName;


    constructor(private http: HttpClient, private indicatorService: IndicatorService) {

        this.sections = [];
        this.initialized = false;
        this.homePage = 'studies';
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
        let sectionsResponse = await this.http.fetch("article/sections");
        this.sections = await sectionsResponse.json() as SectionInfo[];

        this.indicators = await this.indicatorService.getNames();
        this.initialized = true;
    }

    getIndicators(period: QuotePeriod) {
        return this.indicators.filter(indicator => indicator.period === period);
    }

}
