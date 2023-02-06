import { EditIcon } from '@chakra-ui/icons';
import {
  useMediaQuery,
  Box,
  Flex,
  Button,
  Spacer,
  Image,
  Square,
  Text,
  Heading,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import source from '../assets/logo.svg';
import { CardItem } from '../components/Cards';

export default function Home() {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  return (
    <>
      <Flex
        bg='primary'
        minHeight={isMobile ? '80vh' : '80vh'}
        direction={isMobile ? 'column-reverse' : 'row'}
        justify={'center'}
        p={isMobile ? '0' : '20px'}
        align='center'
        gap={2}>
        <Flex
          direction='column'
          // minHeight={isMobile ? '30vh' : '40vh'}
          justify={isMobile ? 'center' : 'space-between'}
          align={isMobile ? 'center' : 'flex-start'}
          p='5%'
          gap='5'>
          <Box align={isMobile ? 'center' : 'flex-start'}>
            <Heading
              as='h1'
              color='tertiary'
              size='xl'>
              Free Islamic Wills in Canada
            </Heading>
            <Heading
              as='h1'
              color='secondary'
              size='lg'
              fontWeight={'normal'}>
              Create yours in just a few clicks
            </Heading>
          </Box>
          <Spacer gap='5' />
          <NavLink to='/create'>
            <Button
              bg='tertiary'
              color='primary'
              size='md'
              width='max-content'
              px='2em'
              rounded={'full'}
              fontWeight={'normal'}
              leftIcon={<EditIcon />}
              variant='solid'
              _hover={{ bg: 'secondary' }}>
              Create a will
            </Button>
          </NavLink>
        </Flex>
        {!isMobile && <Spacer />}
        <Image
          src={source}
          alt='picture of a will'
          p='5%'
          boxSize='30%'
        />
      </Flex>
      <CardItem />
    </>
  );
}
