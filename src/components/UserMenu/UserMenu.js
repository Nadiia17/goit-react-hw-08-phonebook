import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Text, Button, Flex, useColorModeValue } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const backgroundColor = useColorModeValue('teal.50', 'teal.800');
  const color = useColorModeValue('gray.800', 'white');
  const hoverBgColor = useColorModeValue('teal.100', 'teal.700');
  const boxShadowColor = useColorModeValue(
    'rgba(0, 0, 0, 0.1)',
    'rgba(0, 0, 0, 0.9)'
  );

  return (
    <Flex
      align="center"
      justify="space-between"
      p={4}
      borderRadius="md"
      boxShadow={`0 0 8px 2px ${boxShadowColor}`}
      bg={backgroundColor}
      color={color}
      spacing={4}
    >
      <Text fontSize="md" mr={4}>
        Welcome, {user.name}
      </Text>
      <Button size="sm" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Flex>
  );
};
