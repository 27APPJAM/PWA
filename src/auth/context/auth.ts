import React from "react";
import { IUserSignUp } from "../../types/user";

export interface IUserSignIn {
    id: string;
    password: string;
}

interface AuthContextType {
    user: any;
    signin: (user: IUserSignIn, callback: VoidFunction) => Promise<void>;
    signup: (user: IUserSignUp, callback: VoidFunction) => Promise<void>;
    signout: (callback: VoidFunction) => Promise<void>;
}

let AuthContext = React.createContext<AuthContextType>(null!);
export default AuthContext;