import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react"
import { Logo } from "../common/import"
import { Link } from "react-router-dom"

export const LoginPage = () => {
    return <Flex h={"80%"} direction={"column"} alignItems={"center"} justifyContent={"center"}>
        <Flex alignItems={"center"} justifyContent={"center"} direction={"column"} h={"30%"}>
            <Image src={Logo} marginBottom={"-0.1rem"} />
            <Text fontSize={"1.8rem"} fontWeight={"bold"}>Log in</Text>
        </Flex>
        <Flex direction={"column"} alignItems={"center"} justifyContent={"space-around"} w={"80%"} h={"60%"} border={"1px solid #D7D7D7"} padding={"0px 10px"} borderRadius={"15px"}>
            <Box w={"90%"}>
                <Text fontWeight={"500"} lineHeight={"20px"}>ID</Text>
                <Input fontSize={"16px"} padding={"5px"} marginTop={"5px"} placeholder="아이디를 입력해주세요" w={"98%"} border={"1px solid #D7D7D7"} color={"#D7D7D7"} />
            </Box>
            <Box w={"90%"}>
                <Text fontWeight={"500"} lineHeight={"20px"}>Password</Text>
                <Input fontSize={"16px"} padding={"5px"} marginTop={"5px"} border={"1px solid #D7D7D7"} color={"#D7D7D7"} placeholder="비밀번호를 입력해주세요" w={"98%"} />
            </Box>
            <Button w={"90%"} h={"40px"} backgroundColor={"#0066c8"} border={"none"} color={"white"} fontSize={"16px"} borderRadius={"8px"}>로그인하기</Button>
            <Flex alignItems={"start"} w={"90%"}>
                <Link to="/join" >회원가입하기</Link>
            </Flex>
        </Flex>
    </Flex >
}