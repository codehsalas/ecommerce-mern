import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Flex, HStack, Image, Text, useColorMode } from '@chakra-ui/react'
import { PlusSquareIcon } from '@chakra-ui/icons'
import { IoMoon } from 'react-icons/io5'
import { LuSun } from 'react-icons/lu'
import logo from '../../public/logo_onlinestore.svg';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Container maxW={"1140px"} px={4}>
            <Flex
                h={16}
                alignItems={"center"}
                justifyContent={"space-between"}
                flexDir={{
                    base: "column",
                    sm: "row"
                }}
            >
                <Image src={logo}  width={100}/>
                <Text
                    fontSize={{ base: "22", sm: "28" }}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    textAlign={"center"}
                    bgGradient={"linear(to-r, cyan.400, blue.500)"}
                    bgClip={"text"}
                >
                    <Link to={"/"} style={{textTransform: "capitalize"}}>Welcome to OnlineStore 🛒 </Link>
                </Text>

                <HStack spacing={2} alignItems={"center"}>
                    <Link to={"/create"}>
                        <Button>
                            <PlusSquareIcon fontSize={20} />
                        </Button>
                    </Link>
                    <Button onClick={toggleColorMode}>{colorMode === 'light' ? <IoMoon /> : <LuSun size="20" />}</Button>
                </HStack>

            </Flex>
        </Container>
    )
}

export default Navbar