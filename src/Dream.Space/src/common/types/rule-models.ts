import {QuotePeriod, TransformFunction, CompareOperator, RuleDataSource } from "./enums";

export class RuleInfo {
    ruleId: number;
    name: string;
    description: string;
    deleted: boolean;
    period: QuotePeriod;
    dataSourceV1: RuleDataSource;
    dataSourceV2: RuleDataSource;
    dataSeriesV1: number;
    dataSeriesV2: number;
    constV1: string;
    constV2: string;
    skipItemsV1: number;
    skipItemsV2: number;
    takeItemsV1: number;
    takeItemsV2: number;
    transformItemsV1: TransformFunction;
    transformItemsV2: TransformFunction;
    condition: CompareOperator;
}


export class RuleSetInfo {
    rules: RuleModel[];
    period: QuotePeriod;
    ruleSetId: number;
    name: string;
    deleted: boolean;
    description: string;
}

export class RuleModel {
    ruleId: number;
    name: string;
    deleted?: boolean;
    description: string;
    ruleSetId: number;
    orderId?: number;
    expanded?: boolean;
    deleteMode?: boolean;

    constructor() {
        this.deleted = false;
        this.expanded = false;
        this.deleteMode = false;
        this.orderId = 0;
    }

}


export class StrategyRuleSetInfo {
    strategyId: number;
    strategyActive: boolean;
    ruleSetId: number;
    ruleSetName: string;
    ruleSetDescription: string;
    ruleSetPeriod: QuotePeriod;
    ruleSetOrderId: number;
    ruleSetOptional: boolean;

    expanded?: boolean;
    deleteMode?: boolean;

    constructor() {
        this.expanded = false;
        this.deleteMode = false;
    }

}