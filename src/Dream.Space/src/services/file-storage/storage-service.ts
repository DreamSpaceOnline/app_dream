import { autoinject } from "aurelia-framework";
import { HttpClient, json } from 'aurelia-fetch-client';

@autoinject
export class StorageService {


    constructor(private http: HttpClient) {
    }


    async uploadFile(fileName, fileBody): Promise<string> {
        const payload = {
            fileName: fileName,
            fileBody: fileBody
        };

        const response = await this.http.fetch("blob/upload",
        {
            method: 'post',
            body: json(payload)
        });

        return await response.json();
    }

}

