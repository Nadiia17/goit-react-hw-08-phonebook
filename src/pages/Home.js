// export default function Home() {
//   return <h1>Home page</h1>;
// }

import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { LuContact } from 'react-icons/lu';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Helmet } from 'react-helmet';

export default function Home() {
  const { isLoggedIn } = useAuth();

  const iconColor = useColorModeValue('teal.800', 'teal.50');
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Flex align="center" justify="center" p={8}>
        <Box fontSize="6xl" color={iconColor}>
          <LuContact size="6em" />
        </Box>
        <Box ml={8}>
          <Heading size="xl">Welcome to PhoneBook!</Heading>
          <Text fontSize="lg" my={4}>
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
              <Button as={NavLink} to="/login" size="lg" ml={2}>
                Log In
              </Button>
            </>
          )}
        </Box>
      </Flex>
    </>
  );
}
