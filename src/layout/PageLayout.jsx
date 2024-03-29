import { Box, Flex, Spinner, calc } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar.jsx";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import Navbar from "../components/Navbar";


const PageLayoutSpinner = () => {
    return (
        <Flex flexDir={'column'} h={'100vh'} alignItems={'center'} justifyContent={'center'}>
            <Spinner size={'xl'} />
        </Flex>
    )
}

const PageLayout = ({ children }) => {
    const { pathname } = useLocation();
    // te dice si el usuario esta autenticado o no
    const [user, loading] = useAuthState(auth);
    // si el usuario esta autenticado y no esta en la pagina de autenticacion, 
    // mostrar el sidebar
    const canRenderSidebar = pathname !== '/auth' && user;
    const canRenderNavbar = !user && !loading && pathname !== '/auth';


    const checkingUserIsAuth = !user && loading;
    if (checkingUserIsAuth) return <PageLayoutSpinner />;

    return (
        <Flex flexDir={canRenderNavbar ? 'column' : 'row'}>
            {/*sidebar en la izquierda*/}
            {canRenderSidebar ? (
                <Box w={{ base: '70px', md: '240px' }}>
                    <SideBar />
                </Box>
            ) : null}

            {/*navbar*/}
            {canRenderNavbar ? <Navbar /> : null}


            {/*contenido a la derecha*/}
            <Box flex={1} w={{ base: 'calc(100%-70px)', md: 'calc(100%-240px)' }} mx={'auto'}>
                {children}
            </Box>
        </Flex>

    )
}

export default PageLayout;

