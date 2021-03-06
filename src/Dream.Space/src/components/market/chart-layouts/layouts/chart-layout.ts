﻿import { autoinject, bindable } from "aurelia-framework";
import { ValidationRules, ValidationController, validateTrigger } from "aurelia-validation";
import { BootstrapFormRenderer } from "../../../../form-validation/bootstrap-form-renderer";
import { SettingsService } from "../../../../services/settings-service";
import { EventEmitter, ILayoutIndicatorMoved } from "../../../../infrastructure/event-emitter";
import * as Enums from "../../../../common/types/enums";
import { Subscription } from "aurelia-event-aggregator";
import {IndicatorCore, LayoutApiClient, ChartLayoutModel } from "../../../../services/services-generated";

@autoinject()
export class ChartLayout {

    @bindable layout: ChartLayoutModel;
    originalLayout: ChartLayoutModel;
    definedIndicators: IndicatorCore[];
    subscriptions: Subscription[] = [];

    expanded = false;
    editMode = false;
    addingMode = false;
    newIndicatorId: number = 0;

    constructor(private readonly validation: ValidationController, private readonly layoutService: LayoutApiClient,
        private readonly globalSettings: SettingsService, private readonly eventEmitter: EventEmitter) {

        this.validation.validateTrigger = validateTrigger.change;
        this.validation.addRenderer(new BootstrapFormRenderer());
        this.subscribe();
    }

    subscribe() {
        this.subscriptions.push(this.eventEmitter.subscribe("LayoutIndicatorMoved", (event) => {
            this.onLayoutIndicatorMoved(event);
        }));
    }

    detached() {
        if (this.subscriptions.length > 0) {
            this.subscriptions.forEach(subscription => {
                subscription.dispose();
            });
        }
    }

    layoutChanged() {
        if (this.layout != null && this.layout.layoutId > 0) {
            this.definedIndicators = this.globalSettings.getIndicators(this.layout.period);
        }
    }

    toggleExpand() {
        this.expanded = !this.expanded;
    }

    startEdit() {
        this.editMode = true;
        this.originalLayout = Object.assign({}, this.layout) as ChartLayoutModel;

        ValidationRules
            .ensure((u: ChartLayoutModel) => u.title).displayName("Layout name").required().withMessage(`\${$displayName} cannot be blank.`)
            .ensure((u: ChartLayoutModel) => u.description).displayName("Description").required().withMessage(`\${$displayName} cannot be blank.`)
            .on(this.layout);
    }

    async confirmSave() {
        let valid = false;

        const response = await this.validation.validate();
        if (response.valid) {
            valid = true;
        }
        if (valid) {
            this.saveLayout();

        } else {
            toastr.warning("Please correct validation errors.", "Validation Errors");
        }
    }

    cancelSave() {
        this.editMode = false;
        this.layout = this.originalLayout;
        this.validation.reset();
    }

    async saveLayout() {
        await this.layoutService.saveLayout(this.layout);

        this.editMode = false;
    }

    addIndicator() {
        this.addingMode = true;
    }

    confirmAddIndicator() {

        //if (this.newIndicatorId > 0) {
        //    if (this.layout.indicators == null) {
        //        this.layout.indicators = [];
        //    }

        //    let ind = this.getIndicatorCore(this.newIndicatorId);

        //    let indicator = new LayoutIndicatorInfo();
        //    indicator.indicatorId = ind.id;
        //    indicator.layoutId = this.layout.layoutId;
        //    indicator.name = ind.name;
        //    indicator.indicator = new IndicatorInfo();

        //    this.layout.indicators.push(indicator);

        //    this.addingMode = false;
        //}
    }

    getIndicatorCore(indicatorId: number): IndicatorCore {
        return this.definedIndicators.find(i => i.id === indicatorId);
    }

    cancelAddIndicator() {
        this.addingMode = false;
    }


    onLayoutIndicatorMoved(event: ILayoutIndicatorMoved) {
//        let index = this.layout.indicators.findIndex(indicator => indicator.indicatorId === event.indicatorId && indicator.layoutId === event.layoutId);

        if (event.direction === Enums.Direction.Up) {

        //    if (index > 0) {
        //        this.layout.indicators.splice(index - 1, 0, this.layout.indicators.splice(index, 1)[0]);
        //    }

        //} else {
        //    if (index > -1 && index < this.layout.indicators.length - 1) {
        //        this.layout.indicators.splice(index + 1, 0, this.layout.indicators.splice(index, 1)[0]);
        //    }
        }
    }

} 