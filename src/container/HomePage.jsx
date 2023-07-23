import {Flex, useMediaQuery} from "@chakra-ui/react";
import Header from "@/components/Header.jsx";
import InfoCard from "@/container/InfoCard.jsx";
import Announcement from "@/container/Announcement.jsx";
import Note1 from "@/components/Note1.jsx";
import Note2 from "@/components/Note2.jsx";
import Footer from "@/components/Footer.jsx";

const HomePage = () => {
    const [isMobile] = useMediaQuery("(max-width: 768px)");

    return (

        <Flex gap="60px" flexDir="column" w={isMobile ? "100%" : "70%"}>
            <Header/>
            <Announcement/>
            <Note1/>
            <InfoCard/>
            <Note2/>
            <Footer/>
        </Flex>

    )
}

export default HomePage;