import { autoinject } from "aurelia-framework";
import { HttpClient, json } from "aurelia-fetch-client";
import {UserInfo, LoginResponse, UserUpdateResponse } from "./account-models";

@autoinject
export class AccountService {

    currentUser: UserInfo;

    constructor(private http: HttpClient) {
    }

    async initialize() : Promise<UserInfo> {
        let response = await this.http.fetch("account/user");
        this.currentUser = await response.json();

        return this.currentUser;
    }


    async login(username, password): Promise<LoginResponse> {
        const loginRequest = {
            Email: username,
            Password: password,
            RememberMe: true
        };

        const response = await this.http.fetch("account/login",
            { method: 'post', body: json(loginRequest) }
        );

        const result = await response.json() as LoginResponse;
        this.currentUser = result.user;

        return result;
    }

    async logout() {
        await this.http.fetch("account/logout", { method: 'post' });
    }

    async update(user: UserInfo): Promise<UserUpdateResponse> {
        let updateRequest = {
            Username: user.username,
            FirstName: user.firstName
        };

        let response = await this.http.fetch("account/update",
        {
            method: "put",
            body: json(updateRequest)
            });

        let result = await response.json() as UserUpdateResponse;
        this.currentUser = result.user;

        return result;
    }

}

