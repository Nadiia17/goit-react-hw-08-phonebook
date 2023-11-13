import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import {
  Text,
  Button,
  Flex,
  useColorModeValue,
  HStack,
  useBreakpointValue,
} from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const backgroundColor = useColorModeValue('teal.50', 'teal.800');
  const color = useColorModeValue('gray.800', 'white');
  // const hoverBgColor = useColorModeValue('teal.100', 'teal.700');
  const boxShadowColor = useColorModeValue(
    'rgba(0, 0, 0, 0.1)',
    'rgba(0, 0, 0, 0.4)'
  );
  const buttonSize = useBreakpointValue({ base: 'xs', sm: 'sm' });
  return (
    <HStack
      spacing={0}
      p={2}
      borderRadius="md"
      boxShadow={`0 0 8px 2px ${boxShadowColor}`}
      bg={backgroundColor}
      color={color}
      ml={2}
    >
      <Text fontSize="md" mr={2}>
        Welcome, {user.name}
      </Text>
      <Button size="sm" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </HStack>
  );
};
