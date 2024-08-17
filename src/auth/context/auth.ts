import React from "react";

interface AuthContextType {
    user: any;
    signin: (user: string, callback: VoidFunction) => Promise<void>;
    signout: (callback: VoidFunction) => Promise<void>;
}

let AuthContext = React.createContext<AuthContextType>(null!);
export default AuthContext;