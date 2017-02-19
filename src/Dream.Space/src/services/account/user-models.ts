export class UserInfo {
    username: string;
    firstName: string;
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