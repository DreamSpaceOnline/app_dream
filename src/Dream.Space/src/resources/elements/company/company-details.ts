import { bindable } from "aurelia-framework";
import * as moment from "moment";
import {CompanyModel} from "../../../services/services-generated";

export class CompanyDetails {
    @bindable company: CompanyModel;

    formatDate(date: Date) {
        const date1 = moment(date);
        const date2 = moment(new Date());

        const diff = date2.diff(date1);
        const duration = moment.duration(diff);
        const days = duration.asDays();

        return Math.round(days) + " days ago";
    }
}