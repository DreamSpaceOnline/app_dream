import { autoinject, bindable } from "aurelia-framework";
import { ValidationRules, ValidationController, validateTrigger } from "aurelia-validation"
import { EnumValues, IdName } from "../../../../common/helpers/enum-helper";
import { JournalModel, TradeAccountApiClient, AccountModel, StrategiesApiClient, StrategySummary, RuleSetsApiClient,
    RuleSetValidationResult } from "../../../../services/services-generated";
import { BootstrapFormRenderer } from "../../../../form-validation/bootstrap-form-renderer";

@autoinject()
export class JournalCreate {
    directions: IdName[];
    journal: JournalModel;
    @bindable entryDatePicker: any;

    accounts: AccountModel[] = [];
    account: AccountModel;
    strategies: StrategySummary[] = [];
    ruleSets: RuleSetValidationResult[] = [];
    strategy: StrategySummary;
    maxRiskValue: number;
    maxSharesCount: number;

    constructor(
        private readonly validation: ValidationController,
        private readonly accountService: TradeAccountApiClient,
        private readonly strategiesService: StrategiesApiClient,
        private readonly ruleSetService: RuleSetsApiClient,
    ) {

        this.validation.validateTrigger = validateTrigger.change;
        this.validation.addRenderer(new BootstrapFormRenderer());

        this.directions = EnumValues.getDirectionTypes();
        this.journal = new JournalModel();
        this.journal.entryDate = new Date();

        ValidationRules
            .ensure((m: JournalModel) => m.ticker).displayName("Ticker").required().withMessage(`\${$displayName} cannot be blank.`)
            .ensure((m: JournalModel) => m.entryDate).displayName("Entry date").required().withMessage(`\${$displayName} cannot be blank.`)
            .ensure((m: JournalModel) => m.takeProfitPrice).displayName("Target price").required().withMessage(`\${$displayName} cannot be blank.`)
            .ensure((m: JournalModel) => m.entryPrice).displayName("Entry price").required().withMessage(`\${$displayName} cannot be blank.`)
            .ensure((m: JournalModel) => m.stopLossPrice).displayName("Stop loss price").required().withMessage(`\${$displayName} cannot be blank.`)
            .ensure((m: JournalModel) => m.maxRiskValuePrice).displayName("Risk value($)").required().withMessage(`\${$displayName} cannot be blank.`)
            .ensure((m: JournalModel) => m.rewardRiskRatio).displayName("Reward / Risk ratio").required().withMessage(`\${$displayName} cannot be blank.`)
            .ensure((m: JournalModel) => m.maxSharesCount).displayName("Max shares count").required().withMessage(`\${$displayName} cannot be blank.`)

            .on(this.journal);
    }

    async activate() {
        this.accounts = await this.accountService.getAccounts();
        this.strategies = await this.strategiesService.geStrategySummaries();
    }

    async trySaveJournal() {
        const response = await this.validation.validate();
        if (response.valid) {
        }
    }

    async onAccountSelected(accountId: number) {
        this.account = null;
        if (accountId && accountId > 0) {
            this.account = this.accounts.find(item => item.accountId === accountId);
        }
    }

    async onStrategySelected(strategyId: number) {
        this.strategy = null;

        if (strategyId && strategyId > 0) {
            this.strategy = this.strategies.find(item => item.strategyId === strategyId);
            if (this.strategy != null) {
                await this.loadStrategyRules(strategyId);
            }
        }
    }

    async loadStrategyRules(strategyId: number) {
        this.ruleSets = [];
        if (strategyId > 0) {
            let ruleSets = await this.ruleSetService.getStrategyRuleSets(strategyId);
            if (ruleSets && ruleSets.length > 0) {
                ruleSets.forEach(item => {
                    let ruleset = new RuleSetValidationResult();
                    ruleset.ruleSetId = item.ruleSetId;
                    ruleset.ruleSetName = item.ruleSetName;

                    this.ruleSets.push(ruleset);
                });
            }
        }
    }

    cancelEdit() {
        
    }

}