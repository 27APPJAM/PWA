import React from "react";
import AuthContext, { IUserSignIn } from "../context/auth";
import { IUserSignUp } from "../../types/user";

export const authProvider = {
    isAuthenticated: false,
    signin(callback: VoidFunction) {
        authProvider.isAuthenticated = true;
        setTimeout(callback, 100); // fake async
    },
    signup(callback: VoidFunction) {
        authProvider.isAuthenticated = true;
        setTimeout(callback, 100); // fake async
    },
    signout(callback: VoidFunction) {
        authProvider.isAuthenticated = false;
        setTimeout(callback, 100);
    },
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    let [user, setUser] = React.useState<any>(null);

    let signin = async (newUser: IUserSignIn, callback: VoidFunction) => {
        return authProvider.signin(() => {
            setUser(newUser);
            callback();
        });
    };

    let signup = async (newUser: IUserSignUp, callback: VoidFunction) => {
        return authProvider.signup(() => {
            setUser(newUser);
            callback();
        });
    };

    let signout = async (callback: VoidFunction) => {
        return authProvider.signout(() => {
            setUser(null);
            callback();
        });
    };

    let value = { user, signin, signup, signout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
