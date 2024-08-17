import React from "react";
import AuthContext from "../context/auth";

function useAuth() {
    return React.useContext(AuthContext);
}

export default useAuth;
