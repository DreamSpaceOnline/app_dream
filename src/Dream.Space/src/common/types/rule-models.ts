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


export interface RuleSetInfo {
    rules: RuleModel[];
    period: QuotePeriod;
    ruleSetId: number;
    name: string;
    deleted: boolean;
    description: string;
}

export interface RuleModel {
    ruleId: number;
    name: string;
    deleted: boolean;
    description: string;
    ruleSetId: number;
    orderId: number;
}


export interface StrategyRuleSetInfo {
    strategyId: number;
    strategyActive: boolean;
    ruleSetId: number;
    ruleSetName: string;
    ruleSetDescription: string;
    ruleSetPeriod: QuotePeriod;
    ruleSetOrderId: number;
    ruleSetOptional: boolean;
}