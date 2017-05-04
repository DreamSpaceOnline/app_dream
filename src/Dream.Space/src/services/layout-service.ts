import { autoinject } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";
import { LayoutInfo } from "../common/types/layout-models";
import { EnumValues } from "../common/helpers/enum-helper";

@autoinject
export class LayoutService {


    constructor(private http: HttpClient) {
        if (this.http != null) {
            
        }
    }

    async getLayouts(periodUrl: string): Promise<LayoutInfo[]> {
        const period = EnumValues.getQuotePeriod(periodUrl).id;
        const response = await this.http.fetch(`layout/period/${period}`, { method: "get" });
        return await response.json();
    }

    async getDefaultLayout(periodUrl: string): Promise<LayoutInfo> {
        const period = EnumValues.getQuotePeriod(periodUrl).id;
        const response = await this.http.fetch(`layout/period/${period}/default`, { method: "get" });
        return await response.json();
    }

    async getLayout(id: number): Promise<LayoutInfo> {
        const response = await this.http.fetch(`layout/${id}`, { method: "get" });
        return await response.json();
    }
}

