import { autoinject } from "aurelia-framework";
import { HttpClient, json } from "aurelia-fetch-client";

@autoinject
export class UserService {

    user: UserInfo;

    constructor(private http: HttpClient) {
    }

    async initialize() : Promise<UserInfo> {
        let response = await this.http.fetch("account/user");
        this.user = await response.json();

        return this.user;
    }


    async login(username, password) : Promise<UserInfo> {
        const loginRequest = {
            Email: username,
            Password: password,
            RememberMe: true
        };

        const response = await this.http.fetch("account/login",
            { method: 'post', body: json(loginRequest) }
        );

        const result = await response.json() as LoginResponse;
        if (result.status === 0) {
            this.user = result.user;
        }

        return this.user;
    }

    async logout() {
        let response = await this.http.fetch("account/logout",
        {
            method: 'post'
        });

        return await response.json();
    }

    async update(user: UserInfo) :Promise<number> {
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
        if (result.status === 0) {
            this.user = result.user;
        }
        return result.status;
    }

}

export class UserInfo {
    username: string;
    firstName:string;
}

export class LoginResponse {
    user: UserInfo;
    status: number;
    isAuthenticated: boolean;
}

export class UserUpdateResponse {
    status: number;
    user: UserInfo;
}