import { TransformFunction, CompareOperator, ChartUpdateMode, QuoteType, RuleDataSource } from "../types/enums";
import { QuotePeriod } from "../../services/services-generated";

export class EnumHelper {
    static getNamesAndValues(e: any) {
        return this.getNames(e).map(_name => { return { name: _name, value: e[_name] as number }; });
    }

    static getNames(e: any) {
        return this.getObjectValues(e).filter(v => typeof v === "string") as string[];
    }

    static getValues(e: any) {
        return this.getObjectValues(e).filter(v => typeof v === "number") as number[];
    }

    private static getObjectValues(e: any): (number | string)[] {
        return Object.keys(e).map(k => e[k]);
    }
}

export class EnumValues {


    static getTransformFunctions() : IdName[] {
        const values = EnumHelper.getNamesAndValues(TransformFunction);
        const result: IdName[] = [];

        values.forEach(item => {
            let name = item.name;
            switch (item.value) {
                case TransformFunction.Avg: {
                    name = "Average";
                    break;
                }
            }
            result.push({id: item.value, name: name});
        });

        return result;
    }

    static getRuleDataSources() : IdName[] {
        const values = EnumHelper.getNamesAndValues(RuleDataSource);
        const result: IdName[] = [];

        values.forEach(item => {
            let name = item.name;
            switch (item.value) {
                case RuleDataSource.HistoricalData: {
                    name = "Historical Data";
                    break;
                }
            }
            result.push({id: item.value, name: name});
        });

        return result;
    }

    static getCompareOperators(): IdName[] {
        const values = EnumHelper.getNamesAndValues(CompareOperator);
        const result: IdName[] = [];

        values.forEach(item => {
            let name = item.name;
            switch (item.value) {
                case CompareOperator.NotEqual: {
                    name = "Not Equal";
                    break;
                }
                case CompareOperator.GreaterOrEqual: {
                    name = "Greater Or Equal";
                    break;
                }
                case CompareOperator.LessOrEqual: {
                    name = "Less Or Equal";
                    break;
                }
            }
            result.push({ id: item.value, name: name });
        });

        return result;
    }

    static getQuotePeriods(): IdName[] {
        const values = EnumHelper.getNamesAndValues(QuotePeriod);
        const result: IdName[] = [];

        values.forEach(item => {
            result.push({ id: item.value, name: item.name });
        });

        return result;
    }

    static getQuotePeriod(period: string): IdName {
        const values = EnumHelper.getNamesAndValues(QuotePeriod);
        let result: IdName = { id: values[0].value, name: values[0].name };

        values.forEach(item => {
            if (item.name.toLowerCase() === period.toLowerCase()) {
                result = {id: item.value, name : item.name};
            }
        });

        return result;
    }

    static geChartUpdateModes(): IdName[] {
        const values = EnumHelper.getNamesAndValues(ChartUpdateMode);
        const result: IdName[] = [];

        values.forEach(item => {
            result.push({ id: item.value, name: item.name });
        });

        return result;
    }

    static geQuoteTypes(): IdName[] {
        const values = EnumHelper.getNamesAndValues(QuoteType);
        const result: IdName[] = [];

        values.forEach(item => {
            result.push({ id: item.value, name: item.name });
        });

        return result;
    }


}

export class IdName {
    id: number;
    name: string;
    active?: boolean;

    constructor() {
        this.active = false;
    }
}

