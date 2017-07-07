import * as moment from "moment";

export class DateHelper {

    static getUIDate(date: Date): string {
        return moment(date).format("D-MMM-YYYY  HH:mm")
    }

    static runTime(fromDate: Date, toDate:Date) :string {
        let result: string = null
        if (fromDate != null && toDate != null) {

            const diff = moment(toDate).diff(moment(fromDate));
            const duration = moment.duration(diff);
            const seconds = duration.asSeconds();

            result = this.secondsToTime(seconds);
        }
        return result;

    }

    private static secondsToTime(secs: number) {
        secs = Math.round(secs);
        const hours = Math.floor(secs / (60 * 60));

        const divisorForMinutes = secs % (60 * 60);
        const minutes = Math.floor(divisorForMinutes / 60);

        const divisorForSeconds = divisorForMinutes % 60;
        const seconds = Math.ceil(divisorForSeconds);

        if (hours > 0) {
            return `${hours}h ${minutes}m`;
        }
        if (minutes > 0) {
            return `${minutes}m ${seconds}s`;
        }
        return `${seconds}s`;
    }

}