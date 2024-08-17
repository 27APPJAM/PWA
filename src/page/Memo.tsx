import { Box, Flex, Image, Text, useToast } from "@chakra-ui/react"
import BottomNavBar from "../components/navbar"
import AI from "../../public/icon.png";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const getRandom = (min: number, max: number) => Math.random() * (max - min) + min;

export const MemoPage = () => {
    const toast = useToast();
    const [value, onChange] = useState<Value>(new Date());
    const [mark, setMark] = useState([]);
    const list = ["혼자 몸을 끊임없이 흔들었다", "계속 박수를 친다..", "친구와 싸운 날"]

    return <Flex w={"100%"} h={"100%"} direction={"column"}>
        <Flex w={"100%"} h={"98%"} alignItems={"center"} justifyContent={"center"} direction={"column"}>
            <Calendar onChange={(value, event) => {
                let idx = 0;
                // @ts-ignore
                if (value!.getDate() === 17) idx = 1;
                // @ts-ignore
                else if (value!.getDate() === 14) idx = 2;

                onChange(value);
                toast({
                    position: 'top',
                    // @ts-ignore
                    title: `${value!.getDate()}일의 메모`,
                    description: list[idx],
                    duration: 3000,
                    isClosable: true,
                })
            }}
                minDetail="month"
                value={value}
                showNeighboringMonth={false}
                className="mx-auto w-full text-sm border-b"
                tileContent={({ date, view }) => {
                    if (date.getDate() === 17 || date.getDate() === 14 || date.getDate() === 6) {
                        return (
                            <>
                                <div className="flex justify-center items-center absoluteDiv">
                                    <div className="dot"></div>
                                </div>
                            </>
                        );
                    }
                }} />
        </Flex>
        <AIChat />
        <BottomNavBar />
    </Flex >
}

const AIChat = () => {
    return <Flex w={"100%"} position={"relative"} h={"100px"} bottom={"16%"} left={"0"}>
        <Box position={"absolute"} left={"20px"} top={"70px"}>
            <Image src={AI} w={"40px"} h={"40px"} borderRadius={"50%"} />
        </Box>
        <Box border={"2px solid #979DAC"} position={"absolute"} left={"70px"} top={"-10px"} p={"10px"} borderRadius={"15px 15px 15px 0px"} w={"70%"}>
            <Text>
                {"AI 마음이의 분석 결과 저번 달보다 자기자극행동이 36% 증가했고, 다음 달 자기자극행동이 더 증가할 것으로 보여요"}
            </Text>
        </Box>
    </Flex>
}
