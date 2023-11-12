import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Box, Link } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box display="flex" alignItems="center" gap="4">
      {/* <Link as={NavLink} to="/" px="2">
        Home
      </Link> */}
      {/* {isLoggedIn && (
        <Link as={NavLink} to="/contacts" px="2">
          Contacts
        </Link>
      )} */}
    </Box>
  );
};
