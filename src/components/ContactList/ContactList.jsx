import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
// import { Contact, List } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Loader } from 'components/Loader/Loader';
import toast from 'react-hot-toast';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/selectors';
import { Box, VStack } from '@chakra-ui/react';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (error) {
      toast.error(`Error loading contacts: ${error}`);
    }
  }, [error]);

  const filteredContacts = useSelector(selectVisibleContacts);
  return (
    <Box>
      {isLoading && <Loader />}

      <VStack spacing={4} align="stretch">
        {filteredContacts.map(contact => (
          <Box
            key={contact.id}
            p={4}
            borderWidth="1px"
            borderRadius="md"
            boxShadow="base"
          >
            <ContactItem
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

//   return (
//     <>
//       {isLoading && <Loader />}

//       <List>
//         {filteredContacts.map(contact => (
//           <Contact key={contact.id}>
//             <ContactItem
//               name={contact.name}
//               number={contact.number}
//               id={contact.id}
//             />
//           </Contact>
//         ))}
//       </List>
//     </>
//   );
// };
