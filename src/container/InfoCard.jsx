import {Flex} from "@chakra-ui/react";
import SingleCard from "@/components/SingleCard.jsx";
import infos from "@/data/Infos.jsx";

const InfoCard = () => {
    return (
        <Flex flexWrap="wrap" justifyContent="space-evenly" gap="60px">
            {infos.map((info, idx) => (
                <SingleCard key={idx} info={info}/>
            ))}
        </Flex>
    )
}

export default InfoCard