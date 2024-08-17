import { Box, Button, Flex, Image, Text } from "@chakra-ui/react"
import BottomNavBar from "../components/navbar"
import { Logo } from "../common/import"
import { useNavigate } from "react-router-dom";
import { TfiWrite } from "react-icons/tfi";

export const HomePage = () => {
    const navigate = useNavigate();

    return <Flex w={"100%"} h={"100%"} p={"20px"} >
        <Flex direction={"column"} overflow={"scroll"} height={"88%"}>
            <Image src={Logo} w={"60px"} h={"60px"} />
            <Text color={"#0066c8"} fontSize={"1.8rem"} fontWeight={"bold"}>소통해요</Text>
            <Flex padding={"20px"} direction={"column"} gap="5px">
                <Text fontSize={"20px"} fontWeight={"600"}>최신 게시물</Text>
                <Flex border={"1px solid #F0F0F0"} w={"300px"} h={"60px"} justifyContent="center" direction={"column"} padding={"10px"} onClick={() => navigate("/post")}>
                    <Text fontSize={"16px"}>고민 좀 들어주세요</Text>
                    <Text fontSize={"12px"}>요즘 우리 아이 때문에 힘이 들...</Text>
                </Flex>
                <Flex border={"1px solid #F0F0F0"} w={"300px"} h={"60px"} justifyContent="center" direction={"column"} padding={"10px"}>
                    <Text fontSize={"16px"}>자폐를 대처하는 자세</Text>
                    <Text fontSize={"12px"}>아이들이 갑자기 소리를 지르거나...</Text>
                </Flex>
                <Flex border={"1px solid #F0F0F0"} w={"300px"} h={"60px"} justifyContent="center" direction={"column"} padding={"10px"}>
                    <Text fontSize={"16px"}>오늘 있었던 일인데요..</Text>
                    <Text fontSize={"12px"}>오늘 마트에 갔는데 갑자기 아이가...</Text>
                </Flex>
            </Flex>
            <Box h={"15px"} />
            <Flex padding={"20px"} direction={"column"} gap="5px">
                <Text fontSize={"20px"} fontWeight={"600"}>인기 있는 글</Text>
                <Flex border={"1px solid #F0F0F0"} w={"300px"} h={"60px"} justifyContent="center" direction={"column"} padding={"10px"}>
                    <Text fontSize={"16px"}>자폐 아이를 둔 모든 부모들에게</Text>
                    <Text fontSize={"12px"}>자폐 아이를 둔 부모님들...많이...</Text>
                </Flex>
                <Flex border={"1px solid #F0F0F0"} w={"300px"} h={"60px"} justifyContent="center" direction={"column"} padding={"10px"}>
                    <Text fontSize={"16px"}>자폐를 대처하는 자세</Text>
                    <Text fontSize={"12px"}>아이들이 갑자기 소리를 지르거나...</Text>
                </Flex>
                <Flex border={"1px solid #F0F0F0"} w={"300px"} h={"60px"} justifyContent="center" direction={"column"} padding={"10px"}>
                    <Text fontSize={"16px"}>아이와 함께 병원에 갔어요</Text>
                    <Text fontSize={"12px"}>오늘 저희 상호와 병원을 갔어요...</Text>
                </Flex>
            </Flex>
        </Flex>
        <Button position={"fixed"} w={"50px"} h={"50px"} borderRadius={"50%"} bottom={"16%"} right={"20px"} onClick={() => navigate("/write")} backgroundColor={"#0066c8"}>
            <TfiWrite color="white" />
        </Button>
        <BottomNavBar />
    </Flex >
}