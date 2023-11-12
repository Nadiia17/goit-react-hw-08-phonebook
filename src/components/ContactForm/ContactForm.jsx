import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledButton,
  StyledErrorMessage,
  StyledField,
  StyledForm,
  StyledLabel,
} from './ContactForm.styled';
import { selectContacts } from 'redux/selectors';
import toast from 'react-hot-toast';

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

  return (
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
      <StyledForm>
        <StyledLabel>
          Name
          <StyledField name="name" placeholder="Enter name" />
          <StyledErrorMessage name="name" component="div" />
        </StyledLabel>

        <StyledLabel>
          Number
          <StyledField name="number" placeholder="Enter number XXX-ХXX-ХХXX" />
          <StyledErrorMessage name="number" component="div" />
        </StyledLabel>
        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    </Formik>
  );
};
