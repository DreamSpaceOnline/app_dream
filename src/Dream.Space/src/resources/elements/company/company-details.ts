import { bindable } from "aurelia-framework";
import * as moment from "moment";
import {CompanyModel} from "../../../services/services-generated";

export class CompanyDetails {
    @bindable company: CompanyModel;

    formatDate(date) {
        let date1 = moment(date);
        let date2 = moment(new Date());

        let diff = date2.diff(date1);
        let duration = moment.duration(diff);
        let days = duration.asDays();

        return Math.round(days) + ' days ago';
    }
}