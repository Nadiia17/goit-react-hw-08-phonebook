import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { selectContacts } from 'redux/selectors';
import toast from 'react-hot-toast';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  VStack,
  useColorModeValue,
  Box,
} from '@chakra-ui/react';

const PhonebookSchema = Yup.object().shape({
  name: Yup.string().min(3).required('Name is required'),
  number: Yup.string()
    .matches(
      /^\d{3}-\d{3}-\d{4}$/,
      'Phone number is not valid. Must be XXX-XXX-XXXX'
    )
    .required('Phone number is required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const currentContacts = useSelector(selectContacts);

  const formBackgroundColor = useColorModeValue('teal.200', 'teal.700');
  const buttonBackgroundColor = useColorModeValue('teal.100', 'teal.600');
  const buttonHoverColor = useColorModeValue('teal.300', 'teal.500');

  return (
    <Box
      bg={formBackgroundColor}
      p={6}
      boxShadow="base"
      borderRadius="md"
      mx="auto"
      my={8}
    >
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={PhonebookSchema}
        onSubmit={(values, actions) => {
          const isContactExists = currentContacts.some(
            contact => contact.name.toLowerCase() === values.name.toLowerCase()
          );
          if (isContactExists) {
            toast.error(`${values.name} is already in the phonebook`);
          } else {
            dispatch(addContact({ name: values.name, number: values.number }));
            actions.resetForm();
            toast.success(`${values.name} added to the phonebook`);
          }
        }}
      >
        {props => (
          <Form>
            <VStack spacing={4} align="start" maxW="100%" mx="auto">
              <Field name="name">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Input {...field} id="name" placeholder="Enter name" />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="number">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.number && form.touched.number}
                  >
                    <FormLabel htmlFor="number">Number</FormLabel>
                    <Input
                      {...field}
                      id="number"
                      placeholder="Enter number XXX-XXX-XXXX"
                    />
                    <FormErrorMessage>{form.errors.number}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Button
                mt={4}
                mx="auto"
                type="submit"
                bg={buttonBackgroundColor}
                _hover={{
                  bg: buttonHoverColor,
                }}
              >
                Add contact
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

// import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'redux/operations';
// import { Formik } from 'formik';
// import * as Yup from 'yup';
// import {
//   StyledButton,
//   StyledErrorMessage,
//   StyledField,
//   StyledForm,
//   StyledLabel,
// } from './ContactForm.styled';
// import { selectContacts } from 'redux/selectors';
// import toast from 'react-hot-toast';

// const PhonebookSchema = Yup.object().shape({
//   name: Yup.string().min(3).required('Name is required'),
//   number: Yup.string()
//     .matches(
//       /^\d{3}-\d{3}-\d{4}$/,
//       'Phone number is not valid. Must be XXX-XXX-XXXX'
//     )
//     .required('Phone number is required'),
// });

// export const ContactForm = () => {
//   const dispatch = useDispatch();
//   const currentContacts = useSelector(selectContacts);

//   return (
//     <Formik
//       initialValues={{
//         name: '',
//         number: '',
//       }}
//       validationSchema={PhonebookSchema}
//       onSubmit={(values, actions) => {
//         const isContactExists = currentContacts.some(
//           contact => contact.name.toLowerCase() === values.name.toLowerCase()
//         );
//         if (isContactExists) {
//           toast.error(`${values.name} is already in the phonebook`);
//         } else {
//           dispatch(addContact({ name: values.name, number: values.number }));
//           actions.resetForm();
//           toast.success(`${values.name} added to the phonebook`);
//         }
//       }}
//     >
//       <StyledForm>
//         <StyledLabel>
//           Name
//           <StyledField name="name" placeholder="Enter name" />
//           <StyledErrorMessage name="name" component="div" />
//         </StyledLabel>

//         <StyledLabel>
//           Number
//           <StyledField name="number" placeholder="Enter number XXX-ХXX-ХХXX" />
//           <StyledErrorMessage name="number" component="div" />
//         </StyledLabel>
//         <StyledButton type="submit">Add contact</StyledButton>
//       </StyledForm>
//     </Formik>
//   );
// };
