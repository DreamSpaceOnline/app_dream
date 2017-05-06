import { autoinject } from "aurelia-framework";
import { HttpClient, json } from "aurelia-fetch-client";
import { LayoutInfo } from "../common/types/layout-models";

@autoinject
export class LayoutService {


    constructor(private http: HttpClient) {
        if (this.http != null) {
            
        }
    }

    async getLayouts(period: number): Promise<LayoutInfo[]> {
        const response = await this.http.fetch(`layout/period/${period}`, { method: "get" });
        return await response.json();
    }

    async getDefaultLayout(period: number): Promise<LayoutInfo> {
        const response = await this.http.fetch(`layout/period/${period}/default`, { method: "get" });
        return await response.json();
    }

    async getLayout(id: number): Promise<LayoutInfo> {
        const response = await this.http.fetch(`layout/${id}`, { method: "get" });
        return await response.json();
    }

    async saveLayout(layout: LayoutInfo): Promise<LayoutInfo> {
        const response = await this.http.fetch("layout", { method: 'post', body: json(layout) });

        return await response.json();
    }
}

