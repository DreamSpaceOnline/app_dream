import { autoinject } from "aurelia-framework";
import { Router, RouteConfig, NavigationInstruction } from "aurelia-router";
import { IndicatorService } from "../../../services/indicator-service";
import { SettingsService } from "../../../services/settings-service";
import { IdName } from "../../../common/helpers/enum-helper";
import { IndicatorModel } from "../../../common/types/indicator-models";
import { QuotePeriod } from "../../../common/types/enums";

@autoinject
export class Indicators {

    indicators: IndicatorModel[] = [];
    activePeriod: IdName;
    periods: IdName[] = [];
    router: Router;
    routeName: string;

    constructor(private indicatorService: IndicatorService, private globalSettings: SettingsService) {
        this.activePeriod = this.globalSettings.defaultPeriod;
        this.periods = this.globalSettings.periods;
    }

    activate(params, routeConfig: RouteConfig, navigationInstruction: NavigationInstruction) {
        this.router = navigationInstruction.router;

        this.routeName = routeConfig.name;
        if (params.period) {
            this.activePeriod = this.activatePeriod(params.period);
            this.loadIndicators(this.activePeriod.id);

        } else {
            const defaultUrl = `/strategies/indicators/${this.activePeriod.name.toLowerCase()}`;
            this.router.navigate(defaultUrl);
        }
    }


    activatePeriod(periodUrl) : IdName {

        this.periods.forEach(element => {
            element.active = false;
        });

        let result:IdName;

        const index = this.periods.findIndex(i => i.name.toLowerCase() === periodUrl.toLowerCase());
        if (index === -1) {
            result = this.activePeriod;
        } else {
            result = this.periods[index];
        }
        return result;
    }

    addIndicator() {
        const indicator = new IndicatorModel();
        indicator.isNew = true;
        indicator.expanded = true;
        indicator.period = this.activePeriod.id as QuotePeriod;
        indicator.description = "New Indicator";
        indicator.params = [];

        this.indicators.push(indicator);
    }

    loadIndicatorsForPeriod(period) {
        let url = `/strategies/indicators/${period.url}`;
        this.router.navigate(url);
    }

    isPeriodActive(period) {
        return period.id === this.activePeriod.id;
    }

    async loadIndicators(periodId) {
        this.indicators = await this.indicatorService.getIndicatorsForPeriod(periodId);
    }


}