import { QuotePeriod } from "./enums";

export class IndicatorCore {
    name: string;
    id: number;
    period: QuotePeriod;
}

export class IndicatorInfo {
    indicatorId: number;
    name: string;
    description: string;
    period: QuotePeriod;
    jsonParams: string;
    lastUpdated: Date;
    deleted: boolean;
    chartPlotNumber: number;
    chartColor: string;
    params: {}[];

}

export class IndicatorModel extends IndicatorInfo {
    isNew?: boolean;
    editMode?: boolean;
    expanded?: boolean;
    deleteMode?: boolean;

    constructor() {
        super();

        this.isNew = false;
        this.editMode = false;
        this.expanded = false;
        this.deleteMode = false;
    }
}