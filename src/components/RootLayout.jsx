import { Flex } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import Header from "./Header";

export default function RootLayout() {
  
  return (
    <Flex direction={'column'}>
        <Header/>
        <Outlet />
    </Flex>
  )
}
