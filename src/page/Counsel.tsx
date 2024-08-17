import { Flex, Spinner, Text } from "@chakra-ui/react"
import BottomNavBar from "../components/navbar"
import { useEffect, useState } from "react"

export const CounselPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 6000);
    }, []);

    return <Flex alignItems={"center"} justifyContent={"center"} w={"100%"} h={"100%"}>
        {
            loading ? <Flex direction={"column"} alignItems={"center"} gap="30px">
                <Text>AI 마음이가 상담사를 찾고 있어요...</Text>
                <Spinner size='xl' />
            </Flex> : <Flex direction={"column"} alignItems={"center"} gap="30px">
                <Text fontSize="60px">😭</Text>
                <Text fontSize={"30px"} fontWeight={"bold"}>상담사를 찾지 못했어요</Text>
            </Flex>
        }
        <BottomNavBar />
    </Flex>
}