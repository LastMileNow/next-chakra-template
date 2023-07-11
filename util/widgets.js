import {Center, Flex} from '@chakra-ui/react'

export default function ScreenCenter({children}) {
    return (
        <Flex width={"100vw"} height={"100vh"} alignContent={"center"} justifyContent={"center"}>
            <Center>
                {children}
            </Center>
        </Flex>
    )
}