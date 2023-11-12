import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import toast from 'react-hot-toast';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

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
      <Button type="submit" colorScheme="brand" size="md" fontSize="md">
        Register
      </Button>
    </VStack>
  );
};
