import * as toastr from "toastr";
import { autoinject } from "aurelia-framework";
import { EventAggregator, Subscription } from "aurelia-event-aggregator";
import { ValidationRules, ValidationController, validateTrigger } from "aurelia-validation";
import { Router, RouteConfig, NavigationInstruction } from "aurelia-router";

import { Navigation } from "./navigation";
import { StrategyService} from "../../services/strategy-service";
import { BootstrapFormRenderer} from "../../form-validation/bootstrap-form-renderer";
import { AccountService} from "../../services/account-service";
import { StrategySummary, StrategyViewModel } from "../../common/types/strategy-models";

@autoinject
export class Strategy {

    powerUser = false;
    editMode = false;
    subscriptions: Subscription[] = [];
    errors: {}[] = [];
    summaries: StrategySummary[] = [];
    strategy: StrategyViewModel;
    originalStrategy: StrategyViewModel;
    router: Router;
    routeName: string;

    constructor(
        private eventAggregator: EventAggregator,
        private strategyService: StrategyService,
        account: AccountService,
        private validation: ValidationController,
        private strategyNavigation: Navigation
    ) {
        this.powerUser = account.currentUser.isAuthenticated;
        this.validation.validateTrigger = validateTrigger.change;
        this.validation.addRenderer(new BootstrapFormRenderer());
    }

    async activate(params, routeConfig: RouteConfig, navigationInstruction: NavigationInstruction) {
        this.router = navigationInstruction.router;
        this.routeName = routeConfig.name;

        this.summaries = await this.strategyService.getSummaries();
        await this.loadStrategy(params.strategyUrl);
    }

    addStrategy() {
        this.strategy = new StrategyViewModel();
        this.startEdit();
        this.validation.validate();
    }

    async deleteStrategy() {

        if (this.strategy && this.strategy.strategyId > 0) {
            try {
                await this.strategyService.deleteStrategy(this.strategy.strategyId);
                toastr.success("Strategy deleted successfully", "Strategy Deleted");
                this.setEditMode(false);
                this.router.navigate("/strategies");

            } catch (e) {
                toastr.error("Failed to delete strategy", "Delete Failed");
            } 
        }
    }

    setActiveStatus(flag) {
        this.strategy.active = flag;
        const summary = this.summaries.find(s => s.strategyId === this.strategy.strategyId);
        if (summary) {
            summary.active = flag;
        }
    }

    navigateToStrategy(url) {
        if (url && url.length > 0) {
            this.setEditMode(false);
            const strategyUrl = `/strategies/strategy/${url}`;
            this.router.navigate(strategyUrl);
        }
    }

    async loadStrategy(url) {
        if (url && url.length > 0) {
            try {
                this.strategy = await this.strategyService.getByUrl(url);
                if (!this.strategy.blocks) {
                    this.strategy.blocks = [];
                }
                this.selectActiveSummary(this.strategy.strategyId);
            } catch (e) {
                toastr.error("Failed to load strategy", "Load Failed");
            } 
        } else {
            this.navigateToDefaultStrategy();
        }
    }

    selectActiveSummary(id) {
        this.summaries.forEach(item => {
            item.selected = item.strategyId === id;
        });

        this.strategyNavigation.configureNavigation(this.strategy.url);
    }

    navigateToDefaultStrategy() {
        if (this.summaries && this.summaries.length > 0) {
            const strategyUrl = `/strategies/strategy/${this.summaries[0].url}`;
            this.router.navigate(strategyUrl);
        }
    }

    setEditMode(editMode) {
        this.editMode = editMode;
        this.eventAggregator.publish("article-edit-mode-changed", editMode);
    }

    startEdit() {
        this.originalStrategy = Object.assign({}, this.strategy);

        this.setEditMode(true);

        ValidationRules
            .ensure((u: StrategyViewModel) => u.title).displayName("Strategy name").required().withMessage(`\${$displayName} cannot be blank.`)
            .ensure((u: StrategyViewModel) => u.summary).displayName("Summary").required().withMessage(`\${$displayName} cannot be blank.`)
            .ensure((u: StrategyViewModel) => u.url).displayName("Strategy url").required().withMessage(`\${$displayName} cannot be blank.`)
            .on(this.strategy);

    }

    cancelEdit() {
        this.setEditMode(false);

        if (this.strategy.strategyId > 0) {
            this.strategy = this.originalStrategy;
            this.strategy.editMode = false;
        } else {
            this.strategy.deleted = true;
        }
        this.validation.reset();
    }

    async trySaveArticle() {
        let valid = false;

        const response = await this.validation.validate();
        if (response.valid) {
            if (this.articlePartsValidate()) {
                valid = true;
            }
        }
        if (valid) {
            await this.saveStrategy();

        } else {
            toastr.warning("Please correct validation errors.", "Validation Errors");
        }

    }

    articlePartsValidate() {
        if (this.strategy.blocks.length > 0) {
            const index = this.strategy.blocks.findIndex(b => !b.valid);
            return index === -1;
        } else {
            toastr.warning("Article is empty", "Validation Errors");
            return false;
        }
    }

    async saveStrategy() {

        this.setEditMode(false);

        try {
            const response = await this.strategyService.update(this.strategy);
            if (response.url.length > 0) {
                toastr.success(`Strategy staved successfully!`, 'Strategy saved');
                this.navigateToStrategy(response.url);
            }
        } catch (e) {
            toastr.error(`Failed to save strategy!`, "Application Error");
        } 
    }

}