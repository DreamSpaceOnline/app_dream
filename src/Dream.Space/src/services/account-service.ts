import { autoinject } from "aurelia-framework";
import { AccountApiClient, LoginResponse, UserInfo, LoginViewModel, UpdateProfileResponse } from "./services-generated";

@autoinject
export class AccountService {

    currentUser: UserInfo;

    constructor(private account: AccountApiClient) {
    }

    async initialize() : Promise<UserInfo> {
        this.currentUser = await this.account.currentUser();
        return this.currentUser;
    }


    async login(username, password): Promise<LoginResponse> {

        const loginRequest = new LoginViewModel();
        loginRequest.email = username;
        loginRequest.password = password;
        loginRequest.rememberMe = true;

        const response = await this.account.login(loginRequest);
        this.currentUser = response.user;
        return response;
    }

    async logout() {
        await this.account.logout();
    }

    async update(user: UserInfo): Promise<UpdateProfileResponse> {

        const response = await this.account.updateProfile(user);
        this.currentUser = response.user;

        return response;
    }

}

