import * as toastr from "toastr";
import { autoinject } from "aurelia-framework";
import { Router, RouteConfig, NavigationInstruction } from "aurelia-router";
import { SettingsService} from "../../services/settings-service";
import { IdName} from "../../common/helpers/enum-helper";
import {StrategySummary, StrategiesApiClient, CompaniesApiClient, StockApiClient, PlaygroundApiClient, CompanyModel,
    CompanySearchRequest, CompanyChartData, CompanyHeader } from "../../services/services-generated";
//import { EventEmitter } from "../../infrastructure/event-emitter";

@autoinject
export class StrategyPlayground {

    router: Router;
    playgroundModel: CompanyChartData;
    periods: IdName[] = [];
    strategy: StrategySummary;
    company: CompanyModel;
    searchCriteria = "";
    companies: CompanyHeader[] = [];
    chartWeeklyContainer = "weekly-container";
    playgroundLoaded = false;
    routeName: string;

    constructor(
        private readonly strategyService: StrategiesApiClient,
        private readonly companyService: CompaniesApiClient,
        private readonly stockService: StockApiClient,
        private readonly playgroundService: PlaygroundApiClient,
        private readonly settings: SettingsService//,
        //private eventEmitter: EventEmitter
    ) {
        this.periods = this.settings.periods;
    }

    async activate(params, routeConfig: RouteConfig, navigationInstruction: NavigationInstruction) {
        this.router = navigationInstruction.router;
        this.routeName = routeConfig.name;

        this.playgroundLoaded = false;

        if (params.strategyUrl) {
            try {
                const response = await this.strategyService.getStrategySummaryByUrl(params.strategyUrl);
                if (response && response.strategyId > 0) {
                    this.strategy = response;

                    if (params.ticker) {
                        const company = await this.companyService.getCompany(params.ticker);
                        if (company && company.ticker) {
                            this.company = company;
                            await this.loadPlayground();
                        }
                    }

                } else {
                    toastr.error(`Failed to load summary for url ${params.strategyUrl}`, "Load Summary Failed");
                }
            } catch (e) {
                toastr.error(`Failed to load summary for url ${params.strategyUrl}`, "Exception");
            } 
        }
    }


    async searchCompanies() {
        const request = new CompanySearchRequest();
        request.ticker = this.searchCriteria;
        request.maxCount = 15;

        this.companies = await this.companyService.search(request);
    }

    selectCompany(company) {
        const url = `/strategies/strategy-playground/${this.strategy.url}/${company.ticker.toLowerCase()}`;
        company.expanded = false;
        this.playgroundLoaded = false;

        this.router.navigate(url);
    }


    async updateCompany(ticker) {
        try {
            await this.stockService.updateQuotes(ticker);
            this.company = await this.companyService.getCompany(ticker);
            //this.company.show = true;

        } catch (e) {
            toastr.error(`Failed to load company for ticker ${ticker}`, "Exception");
        } 
    }


    streaming = false;

    async streamData() {
        const self = this;
        await this.loadNext().then(data => {
            const flag = data;
            setTimeout(() => {
                if (self.streaming && flag) {
                    self.streamData();
                }
            }, 500);
        });
    }


    startStreaming() {
        this.streaming = true;
        this.streamData();
    }

    stopStreaming() {
        this.streaming = false;
    }

    async loadPlayground() {
        try {
            const playground = await this.playgroundService.loadPlayground(this.company.ticker, this.strategy.strategyId, 100, 0);
            if (playground && playground.company) {
                this.playgroundLoaded = true;
                this.playgroundModel = playground;
            } else {
                toastr.error(`Failed to load playground for company ${this.company.name}`, "Load Playground Failed");
            }
        } catch (e) {
            toastr.error(`Failed to load playground`, "Exception");
        } 
    }

    async loadNext() {
        try {
            const playground = await this.playgroundService.next(this.company.ticker, this.strategy.strategyId);
            if (playground && playground.company) {
                this.playgroundModel = playground;
            }

        } catch (e) {
            toastr.error(`Failed to load next playground`, "Exception");
        } 
    }

    async loadPrev() {
        try {
            const playground = await this.playgroundService.prev(this.company.ticker, this.strategy.strategyId);
            if (playground && playground.company) {
                this.playgroundModel = playground;
            }
            
        } catch (e) {
            toastr.error(`Failed to load previous playground`, "Exception");
        } 
    }
  

}