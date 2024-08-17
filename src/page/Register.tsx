import { Box, Button, Flex, Image, Input, Progress, Select, Text, Textarea, VStack } from "@chakra-ui/react"
import { ChangeEvent, useRef, useState } from "react";
import { MotionBox, MotionFlex } from "../framer/component";
import { Logo, Profile } from "../common/import";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useNavigate } from "react-router-dom";

type Title = "우리 아이 정보 등록" | "프로필 등록"
type Grade = "1등급" | "2등급" | "3등급";

export const RegisterPage = () => {
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [nickname, setNickname] = useState<string>("");
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const progressPercent = [12, 50, 100];
    const [idx, setIdx] = useState<number>(0);
    const [isFirstPage, togglePage] = useState(true);
    const [title, setTitle] = useState<Title>("우리 아이 정보 등록");
    const [grade, setGrade] = useState<Grade>("1등급");
    const [details, setDetails] = useState<string>("");
    const [isOpen, toggleOpen] = useState(false);

    const setNicknamneHandler = (content: string) => {
        if (content.length === 0) setIdx(1);
        else if (content.length !== 0) setIdx(2);
        setNickname(content);
    }

    const fileSelectedHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const file = event.target.files?.[0] || null;
        setSelectedFile(file);

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };


    const toggleDropdown = () => {
        toggleOpen(!isOpen);
    };

    const inputDetailsHandler = (content: string) => {
        if (content.length === 0) setIdx(0);
        else if (content.length !== 0) setIdx(1);
        setDetails(content);
    }

    const handleImageClick = () => {
        fileInputRef.current?.click();
    };


    const ChangeGradeHandler = (content: Grade) => {
        setGrade(content);
        toggleDropdown();
    }

    return <Box h={"100%"} overflow={"hidden"} m={"30px"}>
        <Flex h={"20%"} alignItems={"start"} direction={"column"} w={"100%"} justifyContent={"center"} gap={"5px"} position={"relative"} >
            <Image src={Logo} position={"relative"} top={0} left={`calc(${progressPercent[idx]}% - 30px)`} transition={"all 0.3s ease-in-out"} transform={`rotate(${(progressPercent[idx] - 12) * 1.8}deg)`} w={"30px"} h={"30px"} />
            <Progress value={progressPercent[idx]} w={"100%"} h={"10px"} borderRadius={"10px"} sx={{
                "& > div:first-child": {
                    transitionProperty: "width"
                }
            }} transition={"all 1s ease-in-out"} />
            <Text fontSize={'24px'} fontWeight={"bold"}>{title}</Text>
        </Flex>
        <Flex w={"200%"} >
            <MotionFlex direction={"column"} w={"120%"} h={"80%"} alignItems={"start"}
                animate={{
                    x: isFirstPage ? 0 : "-100%",
                }}
                transition={{
                    type: 'spring',
                    stiffness: 70,
                    damping: 10,
                }} >
                <Text fontSize={"18px"} fontWeight={"600"}>자폐 스펙트럼 장애 등급</Text>
                <Box position="relative" width="200px">
                    <Flex
                        onClick={toggleDropdown}
                        border={"1px solid #D7D7D7"}
                        color="black"
                        padding="8px"
                        borderRadius="md"
                        cursor="pointer"
                        textAlign="center"
                        alignItems={"center"}
                        justifyContent={"space-between"}
                    >
                        <Text>{grade}</Text>
                        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </Flex>
                    <MotionBox
                        initial={{ opacity: 0, y: -20, display: 'none' }}
                        animate={{
                            opacity: isOpen ? 1 : 0,
                            y: isOpen ? 0 : -20,
                            display: isOpen ? 'block' : 'none',
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        position="absolute"
                        mt="4px"
                        left="0"
                        right="0"
                        bg="white"
                        borderRadius="md"
                        boxShadow="md"
                        overflow="hidden"
                        zIndex="1"
                    >
                        <VStack align="stretch" p={4}>
                            <Text cursor="pointer" onClick={e => ChangeGradeHandler("1등급")}>1등급</Text>
                            <Text cursor="pointer" onClick={e => ChangeGradeHandler("2등급")}>2등급</Text>
                            <Text cursor="pointer" onClick={e => ChangeGradeHandler("3등급")}>3등급</Text>
                        </VStack>
                    </MotionBox>
                </Box>
                <Box h={"30px"} />
                <Text fontSize={"18px"} fontWeight={"600"} >우리 아이의 특이사항</Text>
                <Textarea placeholder="챗봇 생성에 도움이 돼요!" w={"90%"} value={details} onChange={(e) => inputDetailsHandler(e.target.value)}></Textarea>
                <Box h={"30px"} />
                <Button w={"90%"} h={"40px"} backgroundColor={"#0066c8"} border={"none"} color={"white"} fontSize={"16px"} borderRadius={"8px"}
                    onClick={() => {
                        togglePage(false)
                        setTitle("프로필 등록")
                    }} >다음으로</Button>
            </MotionFlex>
            <MotionFlex w={"100%"} animate={{
                x: isFirstPage ? "100%" : "-115%",
            }}
                transition={{
                    type: 'spring',
                    stiffness: 70,
                    damping: 10,
                }} alignItems={"center"} direction={"column"}>
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={fileSelectedHandler}
                />
                <Image src={previewUrl || Profile}
                    onClick={handleImageClick} w={"180px"} h={"180px"} borderRadius={"50%"} border={"1px solid #D7D7D7"} />
                <Box h={"30px"} />
                <Text fontWeight={"500"} lineHeight={"20px"}>닉네임</Text>
                <Input fontSize={"16px"} padding={"5px"} marginTop={"5px"} border={"1px solid #D7D7D7"} borderRadius={"5px"} placeholder="비밀번호를 입력해주세요" w={"98%"} value={nickname} onChange={(e) => setNicknamneHandler(e.target.value)} />
                <Box h={"30px"} />
                <Button w={"90%"} h={"40px"} backgroundColor={"#0066c8"} border={"none"} color={"white"} fontSize={"16px"} borderRadius={"8px"}
                    onClick={() => {
                        navigate("/home", { replace: true })
                    }} >시작하기</Button>
            </MotionFlex>
        </Flex>
    </Box >
}
