export class UserInfo {
    username: string;
    firstName: string;
    isAuthenticated: boolean;
}

export class LoginResponse {
    user: UserInfo;
    status: number;
}

export class UserUpdateResponse {
    status: number;
    user: UserInfo;
}