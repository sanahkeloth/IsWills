import
  {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    IconButton,
    Button,
    Img,
    Box,
    useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import React from 'react';
import Navbar from './Navbar';
import source from "../assets/will.png";

export default function SideDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <IconButton ref={btnRef} color='tertiary' fontSize='xl' onClick={onOpen}
        icon={<HamburgerIcon />}
      />
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg='primary'>
          <DrawerCloseButton color='tertiary' variant='ghost'/>
          <DrawerHeader color='tertiary'>
            <Box boxSize='15%'>
    <Img src={source} alt='will document' />
  </Box>
          </DrawerHeader>

          <DrawerBody>
            <Navbar/>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' bg='tertiary' mr={3} onClick={onClose}>
              Close
            </Button>
            {/* <Button colorScheme='blue'>Save</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}