import { UnlockIcon } from "@chakra-ui/icons"
import
    {
        Flex,
        Heading,
        Spacer,
        useMediaQuery,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom"
import Navbar from "./Navbar";
import SideDrawer from "./SideDrawer";

export default function Header() {
const [isMobile] = useMediaQuery("(max-width: 768px)") ;
  return (
    <Flex as="nav" pb="10px" pt="10px" pr="20px" pl="20px" alignItems="center" minHeight='9vh' >
      <NavLink to="/"><Heading as="h1" color='tertiary' size='lg' >IslamicWills.ca</Heading></NavLink>
      <Spacer  shrink='1'/>
      {isMobile? <SideDrawer/> : <Navbar/>}
    </Flex>
  )
}