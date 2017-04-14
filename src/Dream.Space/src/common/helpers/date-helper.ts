import * as moment from "moment";

export class DateHelper {

    static getUIDate(date: Date): string {
        return moment(date).format("D-MMM-YYYY  HH:mm")
    }

    static runTime(fromDate: Date, toDate:Date) :string {
        let result: string = null
        if (fromDate != null && toDate != null) {

            let diff = moment(toDate).diff(moment(fromDate));
            let duration = moment.duration(diff);
            let seconds = duration.asSeconds();

            result = this.secondsToTime(seconds);
        }
        return result;

    }

    private static secondsToTime(secs) {
        secs = Math.round(secs);
        var hours = Math.floor(secs / (60 * 60));

        var divisor_for_minutes = secs % (60 * 60);
        var minutes = Math.floor(divisor_for_minutes / 60);

        var divisor_for_seconds = divisor_for_minutes % 60;
        var seconds = Math.ceil(divisor_for_seconds);

        if (hours > 0) {
            return `${hours}h ${minutes}m`;
        }
        if (minutes > 0) {
            return `${minutes}m ${seconds}s`;
        }
        return `${seconds}s`;
    }

}