import { Box, Button, Flex, Image, Input, Text, useToast } from "@chakra-ui/react"
import { Logo } from "../common/import"
import { Link } from "react-router-dom"
import { useJoin } from "../hooks/useJoin";

export const JoinPage = () => {
    const toast = useToast();
    const { user, setIdHandler, setPasswordHandler, setEmailHandler, joinHandler } = useJoin(toast);

    return <Flex h={"80%"} direction={"column"} alignItems={"center"} justifyContent={"center"}>
        <Flex alignItems={"center"} justifyContent={"center"} direction={"column"} h={"30%"}>
            <Image src={Logo} marginBottom={"-0.1rem"} />
            <Text fontSize={"1.8rem"} fontWeight={"bold"}>Sign Up</Text>
        </Flex>
        <Flex direction={"column"} alignItems={"center"} justifyContent={"space-around"} w={"80%"} h={"80%"}>
            <Box w={"90%"}>
                <Text fontWeight={"500"} lineHeight={"20px"}>ID</Text>
                <Input fontSize={"16px"} padding={"5px"} marginTop={"5px"} borderRadius={"5px"} placeholder="아이디를 입력해주세요" w={"98%"} border={"1px solid #D7D7D7"} value={user.id} onChange={(e) => setIdHandler(e.target.value)} />
            </Box>
            <Box w={"90%"}>
                <Text fontWeight={"500"} lineHeight={"20px"}>Email</Text>
                <Input fontSize={"16px"} padding={"5px"} marginTop={"5px"} borderRadius={"5px"} placeholder="이메일을 입력해주세요" w={"98%"} border={"1px solid #D7D7D7"} value={user.email} onChange={(e) => setEmailHandler(e.target.value)} />
            </Box>
            <Box w={"90%"}>
                <Text fontWeight={"500"} lineHeight={"20px"}>Password</Text>
                <Input fontSize={"16px"} padding={"5px"} marginTop={"5px"} border={"1px solid #D7D7D7"} borderRadius={"5px"} placeholder="비밀번호를 입력해주세요" w={"98%"} value={user.password} onChange={(e) => setPasswordHandler(e.target.value)} />
            </Box>
            <Box w={"90%"}>
                <Text fontWeight={"500"} lineHeight={"20px"}>Password Check</Text>
                <Input fontSize={"16px"} padding={"5px"} marginTop={"5px"} border={"1px solid #D7D7D7"} borderRadius={"5px"} placeholder="비밀번호를 입력해주세요" w={"98%"} />
            </Box>
            <Button onClick={() => joinHandler()} w={"90%"} h={"40px"} backgroundColor={"#0066c8"} border={"none"} color={"white"} fontSize={"16px"} borderRadius={"8px"}>회원가입하기</Button>
            <Flex alignItems={"start"} w={"90%"}>
                <Link to="/login" >로그인하기</Link>
            </Flex>
        </Flex>
    </Flex >
}