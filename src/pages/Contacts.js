import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/operations';
import { Box } from '@chakra-ui/react';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts()); // Завантаження контактів при монтуванні сторінки
  }, [dispatch]);

  return (
    <Box maxW="1200px" mx="auto" mt={8}>
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
