
import * as Rulemodels from "../rule/rule-models";
import * as Articlemodels from "../articles/article-models";

export interface StrategySummary {
    active: boolean;
    url: string;
    summary: string;
    strategyId: number;
    title: string;
}

export interface StrategyInfo {
    ruleSets: Rulemodels.StrategyRuleSetInfo[];
    blocks: Articlemodels.ArticleBlockInfo[];
    strategyId: number;
    title: string;
    deleted: boolean;
    summary: string;
    active: boolean;
    url: string;
}

export interface StrategyEntity {
    strategyId: number;
    bane: string;
    url: string;
    jsonArticleBlocks: string;
    description: string;
    deleted: boolean;
    active: boolean;
}