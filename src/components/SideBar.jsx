import { Avatar, Box, Flex, Link, Tooltip } from "@chakra-ui/react";
import { Link as Routerlink } from "react-router-dom";
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from "../assets/constants";
import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";

const sidebar = () => {
    const sidebarItems = [
        {
            icon: <AiFillHome size={25} />,
            text: 'Home',
            link: '/'
        },
        {
            icon: <SearchLogo/>,
            text: 'Search'
        },
        {
            icon: <NotificationsLogo/>,
            text: 'Notifications'
        },
        {
            icon: <CreatePostLogo/>,
            text: 'Create'
        },
        {
            icon: <Avatar size={'sm'} name="Algo" src="/profilepic.png" />,
            text: 'Profile',
            link: '/asaprogrammer'
        }
    ]
    return (
        <Box 
                height={'100vh'} 
                borderRight={'1px solid'} 
                py={8}
                top={0}
                left={0}
                position={'sticky'}
                px={{base:2, md:4}}
                borderColor={'whiteAlpha.300'}
                >

                    <Flex direction={'column'} gap={'10'} w={'full'} height={'full'}>
                        <Link to={'/'} as={Routerlink} pl={2} display={{base:'none', md:'block'}} cursor={'pointer'}>
                            <InstagramLogo />
                        </Link>
                        <Link 
                            to={'/'} 
                            as={Routerlink} 
                            borderRadius={6}
                            p={2} 
                            w={10}
                            __hover={{bg:'whiteAlpha.200'}}
                            display={{base:'block', md:'none'}} 
                            cursor={'pointer'}>
                            <InstagramMobileLogo/>
                        </Link>

                        <Flex direction={'column'} gap={'4'} cursor={'pointer'}>
                            {sidebarItems.map((item, index) => (
                                <Tooltip 
                                    key={index}
                                    hasArrow
                                    label={item.text}
                                    placement="right"
                                    ml={1}
                                    openDelay={500}
                                    display={{base:'block', md:'none'}}
                                >
                                    <Link 
                                        display={'flex'}
                                        alignItems={'center'}
                                        gap={4}
                                        to={item.link || null} 
                                        as={Routerlink} 
                                        borderRadius={6}
                                        p={2} 
                                        w={{base: 10, md: 'full'}}
                                        justifyContent={{base:'center', md:'flex-start'}}
                                        _hover={{bg:'whiteAlpha.400'}}
                                    >
                                        {item.icon}
                                        <Box display={{base: 'none', md:'block'}}>
                                            {item.text}
                                        </Box>
                                    </Link>
                                </Tooltip>
                            ))}
                        </Flex>

                        <Tooltip 
                    
                                    hasArrow
                                    label={'Logout'}
                                    placement="right"
                                    ml={1}
                                    openDelay={500}
                                    display={{base:'block', md:'none'}}
                                >
                                    <Link 
                                        display={'flex'}
                                        alignItems={'center'}
                                        gap={4}
                                        to={'/auth'} 
                                        as={Routerlink} 
                                        borderRadius={6}
                                        p={2} 
                                        mt={'auto'} 
                                        w={{base: 10, md: 'full'}}
                                        justifyContent={{base:'center', md:'flex-start'}}
                                        _hover={{bg:'whiteAlpha.400'}}
                                    >
                                        <BiLogOut size={25} />
                                        <Box display={{base: 'none', md:'block'}}>
                                            Logout
                                        </Box>
                                    </Link>
                                </Tooltip>
                    </Flex>

            </Box>
    )
}

export default sidebar;

