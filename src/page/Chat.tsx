import { Box, Button, Flex, Image, Input } from "@chakra-ui/react"
import { Logo, Profile } from "../common/import"
import BottomNavBar from "../components/navbar"
import { IoIosSend } from "react-icons/io";
import AI from "../../public/icon.png";
import { useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useNavigate } from "react-router-dom";


const apiKey = "AIzaSyAdhceZxxYYzl1r9JboB-jQn8F8azTK6bM";
const gemini = new GoogleGenerativeAI(apiKey);

export const ChatPage = () => {
    const navigate = useNavigate();
    const [chatList, setChatList] = useState(["환영합니다! AI 마음이예요! 무엇이든 물어보세요"]);
    const [chat, setChat] = useState("");

    const sendChat = async () => {
        setChatList(prevState => {
            return [...prevState, chat]
        })
        const prompt = `넌 자폐 아동을 키우는 부모를 위한 상담사야. '${chat}' 라는 고민을 가진 부모에게 해줄 수 있는 조언을 말해줘`
        setChat("");

        try {
            const model = gemini.getGenerativeModel({ model: 'gemini-pro' });
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = await response.text();

            if (text) {
                text.replaceAll("*", " ");
                setChatList(prevState => {
                    return [...prevState, text]
                })
                return 200
            }
        } catch (error) {
            console.error(`서버 에러가 발생했습니다: ${error}`);
        }
    }

    return <Flex w={"100%"} h={"100%"}>
        <Flex h={"78%"} w={"100%"} overflow={"scroll"} direction={"column"}>
            <Flex justifyContent={"center"} w={"100%"}>
                <Image src={Logo} w={"120px"} h={"120px"} m={"20px"} />
            </Flex>
            {/* <Box h={"6px"} /> */}
            {
                chatList.length > 0 && chatList.map((item, index) =>
                    index % 2 === 0 ?
                        <AIChat content={item} key={index} />
                        :
                        <UserChat content={item} key={index} />
                )
            }
            {
                chatList.length === 3 && <Button position={"absolute"} bottom={"30%"} left={"10%"} w={"80%"} margin={"0 auto"} backgroundColor={"black"} color={"white"} onClick={() => navigate("/counsel")}>상담사와 연결하기</Button>
            }
        </Flex>
        <Flex position={"absolute"} bottom={"12%"} justifyContent={"space-between"} left={0} width={"100%"} height={"10%"} p={"10px"}>
            <Input backgroundColor={"#f5f5f7"} w={"80%"} borderRadius={"15px"} value={chat} onChange={(e) => setChat(e.target.value)} />
            <Button w={`40px`} h={"40px"} borderRadius={"50%"} backgroundColor={"#0066C8"} onClick={() => sendChat()}>
                <Flex>
                    <IoIosSend color={"white"} />
                </Flex>
            </Button>
        </Flex>
        <BottomNavBar />
    </Flex>
}

const AIChat = ({ content }: { content: string }) => {
    return <Flex w={"100%"} position={"relative"} h={"100px"}>
        <Box position={"absolute"} left={"20px"} top={"30px"}>
            <Image src={AI} w={"40px"} h={"40px"} borderRadius={"50%"} />
        </Box>
        <Box border={"2px solid #979DAC"} position={"absolute"} left={"70px"} top={"-10px"} p={"10px"} borderRadius={"15px 15px 15px 0px"} w={"60%"}>{content}</Box>
    </Flex>
}

const UserChat = ({ content }: { content: string }) => {
    return <Flex w={"100%"} position={"relative"} h={"100px"}>
        <Box position={"absolute"} right={"20px"} top={"10px"}>
            <Image src={Profile} w={"40px"} h={"40px"} borderRadius={"50%"} />
        </Box>
        <Box border={"2px solid #979DAC"} position={"absolute"} left={"70px"} top={"-10px"} p={"10px"} borderRadius={"15px 15px 0px 15px"} w={"60%"}>{content}</Box>
    </Flex>
}