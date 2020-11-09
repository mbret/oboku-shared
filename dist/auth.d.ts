import { User } from "./users";
export declare type AuthenticationResponse = {
    token?: string;
    user?: User;
};
export declare type MutationSignupVariables = {
    email: string;
    password: string;
};
export declare type MutationSigninVariables = {
    email: string;
    password: string;
};
export declare type MutationEditUserVariables = {
    id: string;
    contentPassword?: string | null;
};
