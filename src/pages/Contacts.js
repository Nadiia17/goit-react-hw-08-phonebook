import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/operations';
import { Box } from '@chakra-ui/react';
import toast from 'react-hot-toast';
import { selectError } from 'redux/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts()); // Завантаження контактів при монтуванні сторінки
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(`Error loading contacts: ${error}`);
    }
  }, [error]);

  return (
    <Box maxW="xl" mx="auto" mt={8} w="90%">
      <Box mb={4}>
        <ContactForm />
      </Box>
      <Box mb={4}>
        <Filter />
      </Box>
      <Box>
        <ContactList />
      </Box>
    </Box>
  );
}
