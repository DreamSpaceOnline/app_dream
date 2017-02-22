export class UserInfo {
    username: string;
    firstName: string;
    isAuthenticated: boolean;
}

export class LoginResponse {
    user: UserInfo;
    status: LoginResponseType;
}

export class UserUpdateResponse {
    status: number;
    user: UserInfo;
}

export type LoginResponseType = "success" | "requiresVerification";