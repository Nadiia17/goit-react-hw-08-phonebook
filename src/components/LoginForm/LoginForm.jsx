import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  useColorModeValue,
  Box,
} from '@chakra-ui/react';

import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const formBackgroundColor = useColorModeValue('teal.300', 'teal.700');
  const buttonBackgroundColor = useColorModeValue('teal.400', 'teal.600');
  const buttonHoverColor = useColorModeValue('teal.500', 'teal.500');

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box
      bg={formBackgroundColor}
      p={8}
      w="90%"
      boxShadow="base"
      borderRadius="md"
      mx="auto"
      my={8}
      maxW="md"
    >
      <VStack as="form" onSubmit={handleSubmit} autoComplete="off" spacing={4}>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" name="password" />
        </FormControl>
        <Button
          type="submit"
          size="md"
          fontSize="md"
          width="full"
          bg={buttonBackgroundColor}
          _hover={{
            bg: buttonHoverColor,
          }}
        >
          Log In
        </Button>
      </VStack>
    </Box>
  );
};
