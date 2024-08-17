import { CreateToastFnReturn, useToast } from "@chakra-ui/react";
import { useState } from "react"
import { AuthProvider, authProvider } from "../auth/provider/auth";
import useAuth from "../auth/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { IUserSignUp } from "../types/user";


export const useJoin = (toast: any) => {
    const [user, setUser] = useState<IUserSignUp>({
        id: '',
        password: '',
        email: '',
    });
    const auth = useAuth();
    const navigate = useNavigate();

    const setIdHandler = (newId: string) => {
        setUser(prevState => (
            { ...prevState, id: newId }
        ));
    }

    const setPasswordHandler = (newPassword: string) => {
        setUser(prevState => (
            { ...prevState, password: newPassword }
        ));
    }

    const setEmailHandler = (newEmail: string) => {
        setUser(prevState => (
            { ...prevState, email: newEmail }
        ));
    }



    const joinHandler = async () => {
        if (user.id.length === 0 || user.password.length === 0) {
            toast({
                title: "회원가입 실패",
                description: `${user.id.length === 0 ? "아이디" : "비밀번호"}를 입력해주세요`,
                status: 'error',
                duration: 2000,
                isClosable: true
            })

            return;
        }

        auth.signup(user, () => {
            navigate("/register", { replace: true });
        })
    }

    return { user, setIdHandler, setPasswordHandler, setEmailHandler, joinHandler }
}