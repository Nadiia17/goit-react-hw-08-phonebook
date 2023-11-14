import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import toast from 'react-hot-toast';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const formBackgroundColor = useColorModeValue('teal.300', 'teal.700');
  const buttonBackgroundColor = useColorModeValue('teal.400', 'teal.600');
  const buttonHoverColor = useColorModeValue('teal.500', 'teal.500');

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    try {
      await dispatch(
        register({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      ).unwrap();
      toast.success('Registration successful!');
      form.reset();
    } catch (error) {
      toast.error(error || 'Failed to register.');
    }
  };

  return (
    <Box
      bg={formBackgroundColor}
      w="90%"
      maxW="md"
      p={8}
      boxShadow="base"
      borderRadius="md"
      mx="auto"
      my={8}
    >
      <VStack as="form" onSubmit={handleSubmit} autoComplete="off" spacing={4}>
        <FormControl id="name" isRequired>
          <FormLabel>Username</FormLabel>
          <Input type="text" name="name" />
        </FormControl>
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
          Register
        </Button>
      </VStack>
    </Box>
  );
};
