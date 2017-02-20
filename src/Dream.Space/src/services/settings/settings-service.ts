import { autoinject } from "aurelia-framework";
import { HttpClient } from 'aurelia-fetch-client';
import {IndicatorService} from "../indicator/indicator-service";
import {SectionInfo} from "../articles/article-models";
import {IndicatorCore} from "../indicator/indicator-models";

@autoinject
export class SettingsService {

    sections: SectionInfo[];
    periods: {}[];
    initialized: boolean;
    homePage: string;
    indicators: IndicatorCore[];
    defaultPeriod: {};


    constructor(private http: HttpClient, private indicatorService: IndicatorService) {

        this.sections = [];
        this.initialized = false;
        this.homePage = 'studies';
        this.indicators = [];

        this.periods = [
            { id: 0, name: 'Daily', url: 'daily' },
            { id: 1, name: 'Weekly', url: 'weekly' }
        ];

        this.defaultPeriod = this.periods[0];
    }

    getStudiesSection() {
        if (this.initialized) {
            return this.sections.find(s => s.url === "studies");
        }
        return null;
    }

    getSection(sectionId) {
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

    getIndicators(period) {
        return this.indicators.filter(indicator => indicator.period === period);
    }

}
