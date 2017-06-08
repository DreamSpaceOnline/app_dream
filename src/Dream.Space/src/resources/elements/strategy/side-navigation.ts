import * as toastr from "toastr";
import { autoinject, bindable } from "aurelia-framework";
import { Router } from 'aurelia-router';
import {StrategySummary, StrategiesApiClient } from "../../../services/services-generated";

@autoinject
export class SideNavigation {

    @bindable strategyurl: string;
    summaries: StrategySummary[] = [];
    currentModuleName: string;

    constructor(private readonly strategyService: StrategiesApiClient, private readonly router: Router ) {
        this.currentModuleName = this.router.currentInstruction.config.name;
    }

    async strategyurlChanged(newValue: string) {

        if (newValue && newValue.length > 0) {
            if (this.summaryNotFound(newValue)) {

                try {
                    this.summaries = await this.strategyService.geStrategySummaries();
                    this.setActiveStrategy(newValue);
                } catch (e) {
                    toastr.error("Failed to load summaries", "Load Summaries Failed");
                }

            } else {
                this.setActiveStrategy(newValue);
            }
        }
    }


    summaryNotFound(url) {
        let result = true;

        if (this.summaries && this.summaries.length > 0) {
            result = this.summaries.findIndex(s => s.url.toLowerCase() === url.toLowerCase()) === -1;
        }

        return result;
    }


    setActiveStrategy(url) {

        if (this.summaryNotFound(url)) {
            this.navigateToDefaultStrategy();

        } else {

            if (this.summaries) {
                this.summaries.forEach(item => {
                    if (item.url.toLowerCase() === url.toLowerCase()) {
                        //
                    }
                });
            }
        }
    }

    navigateToDefaultStrategy() {
        if (this.summaries && this.summaries.length > 0) {
            const strategyUrl = `/strategies/${this.currentModuleName}/${this.summaries[0].url}`;
            this.router.navigate(strategyUrl);
        }
    }

    navigateToStrategy(url) {
        if (url && url.length > 0) {
            const strategyUrl = `/strategies/${this.currentModuleName}/${url}`;
            this.router.navigate(strategyUrl);
        }
    }


}