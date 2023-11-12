import { Box, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Box>
      <Button as={NavLink} to="/register" variant="solid" size="md" mx="2">
        Register
      </Button>
      <Button as={NavLink} to="/login" variant="solid" size="md" mx="2">
        Log In
      </Button>
    </Box>
  );
};
