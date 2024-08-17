import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react"
import BottomNavBar from "../components/navbar"
import { IoIosSend } from "react-icons/io"
import Logo from "../../public/icon.png";
import { CiHeart, CiBookmark } from "react-icons/ci";

export const PostPage = () => {
    return <Flex w={"100%"} h={"100%"} direction={"column"}>
        <Flex justifyContent={"center"} alignItems={"center"} p={"20px"} h={"80px"} backgroundColor={"#0066C8"}>
            <Image src={Logo} w={"50px"} />
        </Flex>
        <Flex direction={"column"} padding={"20px"} borderBottom={"1px solid #F0F0F0"} h={"100px"}>
            <Text fontSize={"26px"} fontWeight="bold">Q. 고민 좀 들어주세요</Text>
            <Text fontSize={"12px"}>testte**** • 2024.08.18</Text>
        </Flex>
        <Flex p={"20px"} borderBottom={"1px solid #F0F0F0"} w={"100%"}>
            <Text fontSize={"16px"}>요즘 우리 아이 때문에 힘이 들어요. 아이가 공공장소에서 갑자기 돌발행동을 일으켜 주변 사람들을 당황스럽게 하네요. 이 상황에서 제가 어떻게 대처해야 할까요?</Text>
        </Flex>
        <Flex justifyContent={"space-between"} alignItems={"center"} p={"10px"}>
            <Text fontSize={"20px"} fontWeight={"bold"}>댓글</Text>
            <Flex>
                <CiHeart fontSize={"30px"} />
                <CiBookmark fontSize={"30px"} />
            </Flex>
        </Flex>
        <Flex position={"absolute"} bottom={"12%"} justifyContent={"space-between"} left={0} width={"100%"} height={"10%"} p={"10px"}>
            <Input backgroundColor={"#f5f5f7"} w={"80%"} borderRadius={"15px"} />
            <Button w={`40px`} h={"40px"} borderRadius={"50%"} backgroundColor={"#0066C8"} >
                <Flex>
                    <IoIosSend color={"white"} />
                </Flex>
            </Button>
        </Flex>
        <BottomNavBar />
    </Flex>
}
