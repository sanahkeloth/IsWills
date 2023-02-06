import { 
  Button,
  Flex, 
  Heading, 
  useMediaQuery,
} from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

export default function Navbar()
{
  const [isMobile] = useMediaQuery("(max-width: 768px)") ;
  return (
    <Flex as="nav" ml="10px" direction={isMobile? 'column':'row'} justify={isMobile? 'space-evenly':'flex-end'} alignItems={isMobile? 'center':"flex-end"}>
            <NavLink to="create"><Heading color='tertiary' fontSize={isMobile? 'lg':'xl'} fontWeight={'normal'} mb={isMobile? '10px':'0px'} ml={isMobile? '0px':"25px"} variant='ghost'>Create a will</Heading></NavLink>
            <NavLink to="faq"><Heading color='tertiary' fontSize={isMobile? 'lg':'xl'} fontWeight={'normal'} mb={isMobile? '10px':'0px'}  ml={isMobile? '0px':"25px"} variant='ghost'>FAQ</Heading></NavLink>
            <NavLink to="donate"><Heading color='tertiary' fontSize={isMobile? 'lg':'xl'} fontWeight={'normal'} mb={isMobile? '10px':'0px'}  ml={isMobile? '0px':"25px"} variant='ghost'>Donate</Heading></NavLink>
            <NavLink to="endorsements"><Heading color = 'tertiary' fontSize = { isMobile? 'lg': 'xl'} fontWeight={'normal'} mb = { isMobile? '10px':'0px'}  ml={isMobile? '0px':"25px"} variant='ghost'>Endorsements</Heading></NavLink>
    </Flex>
  )
}
