import { CreateToastFnReturn, useToast } from "@chakra-ui/react";
import { useState } from "react"
import { AuthProvider, authProvider } from "../auth/provider/auth";

type IUserInput = {
    id: string,
    password: string
}

export const useLogin = (toast: any) => {
    const [user, setUser] = useState<IUserInput>({
        id: '',
        password: ''
    });

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

    const loginHandler = async () => {
        if (user.id.length === 0 || user.password.length === 0) {
            toast({
                title: "로그인 실패",
                description: `${user.id.length === 0 ? "아이디" : "비밀번호"}를 입력해주세요`,
                status: 'error',
                duration: 2000,
                isClosable: true
            })
        }


    }

    return { user, setIdHandler, setPasswordHandler, loginHandler }
}