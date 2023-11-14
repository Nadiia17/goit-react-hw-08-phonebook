import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react';
import { LuContact } from 'react-icons/lu';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Helmet } from 'react-helmet';

export default function Home() {
  const { isLoggedIn } = useAuth();

  const iconColor = useColorModeValue('teal.800', 'teal.100');
  const iconSize = useBreakpointValue({ base: '4em', md: '6em' }); // Менша іконка на мобільних
  const headingSize = useBreakpointValue({ base: 'lg', md: 'xl' }); // Менший розмір заголовку на мобільних
  const textSize = useBreakpointValue({ base: 'md', md: 'lg' }); // Менший розмір тексту на мобільних

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="center"
        p={8}
        textAlign={{ base: 'center', md: 'left' }}
      >
        <Box fontSize={{ base: '4xl', md: '6xl' }} color={iconColor}>
          <LuContact size={iconSize} />
        </Box>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 8 }}>
          <Heading size={headingSize}>Welcome to PhoneBook!</Heading>
          <Text fontSize={textSize} my={4}>
            Everything you need to manage your contacts with ease.
          </Text>
          {isLoggedIn ? (
            <Button as={NavLink} to="/contacts" size="lg">
              Contacts
            </Button>
          ) : (
            <>
              <Button as={NavLink} to="/register" size="lg">
                Register
              </Button>
              <Button
                as={NavLink}
                to="/login"
                size="lg"
                ml={{ base: 0, sm: 2 }}
              >
                Log In
              </Button>
            </>
          )}
        </Box>
      </Flex>
    </>
  );
}
