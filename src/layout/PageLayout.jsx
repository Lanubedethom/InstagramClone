import { Box, Flex, calc } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import SideBar from "../components/SideBar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";

const PageLayout = ({ children }) => {
    const { pathname } = useLocation();
    // te dice si el usuario esta autenticado o no
    const [user, loading, error] = useAuthState(auth);
    // si el usuario esta autenticado y no esta en la pagina de autenticacion, 
    // mostrar el sidebar
    const canRenderSidebar = pathname !== '/auth' && user;
    return (
        <Flex>
            {/*sidebar en la izquierda*/}
            {canRenderSidebar ? (
                <Box w={{ base: '70px', md: '240px' }}>
                    <SideBar />
                </Box>
            ) : null}


            {/*contenido a la derecha*/}
            <Box flex={1} w={{ base: 'calc(100%-70px)', md: 'calc(100%-240px)' }}>
                {children}
            </Box>
        </Flex>

    )
}

export default PageLayout;

