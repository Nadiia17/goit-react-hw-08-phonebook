import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';

import { Flex, Box, Heading } from '@chakra-ui/react';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Flex
      as="header"
      bg="brand.100"
      color="brand.500"
      px="6"
      py="4"
      align="center"
      justify="space-between"
    >
      <Heading
        size="lg"
        as={NavLink}
        to="/"
        _hover={{ color: 'brand.700', textDecoration: 'none' }}
      >
        PhoneBook
      </Heading>
      <Box>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Box>
    </Flex>
  );
};
