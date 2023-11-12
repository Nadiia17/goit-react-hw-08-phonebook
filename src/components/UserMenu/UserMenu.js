import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Box, Text, Button, Flex } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Flex
      align="center"
      justify="space-between"
      bg="brand.100"
      p={4}
      borderRadius="md"
      boxShadow="md"
      spacing={4}
    >
      <Text fontSize="md" color="brand.700" mr={4}>
        Welcome, {user.name}
      </Text>
      <Button colorScheme="brand" size="sm" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Flex>
  );
};
