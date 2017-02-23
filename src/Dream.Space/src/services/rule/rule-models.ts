import {QuotePeriod} from "../indicator/indicator-models";

export interface RuleInfo {
    ruleId: number;
    name: string;
    description: string;
    deleted: boolean;
    period: QuotePeriod;
    dataSourceV1: DataSourceType;
    dataSourceV2: DataSourceType;
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

export enum DataSourceType {

}

export enum TransformFunction {
    First = 0,
    Max = 1,
    Sum = 2,
    Avg = 3,
    Min = 4
}

export enum CompareOperator {
    Greater = 0,
    GreaterOrEqual = 1,
    Equal = 2,
    Less = 3,
    LessOrEqual = 4,
    NotEqual = 5
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