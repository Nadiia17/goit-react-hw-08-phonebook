import { Box, Button, Flex, Text, useTheme } from '@chakra-ui/react';
import { FiUser, FiUserX } from 'react-icons/fi';
import { AiOutlinePhone } from 'react-icons/ai';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import toast from 'react-hot-toast';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success('Contact deleted successfully');
      })
      .catch(() => {
        toast.error('Failed to delete contact');
      });
  };

  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Box>
        <Flex alignItems="center">
          <FiUser size="1.2em" />
          <Text ml="2">{name}</Text>
        </Flex>
        <Flex alignItems="center">
          <AiOutlinePhone size="1.2em" />
          <Text ml="2">{number}</Text>
        </Flex>
      </Box>

      <Button borderRadius="5px" px="3" py="2" onClick={handleDelete}>
        <FiUserX size="1.2em" />
        <Text ml="2">Delete</Text>
      </Button>
    </Flex>
  );
};

// import toast from 'react-hot-toast';
// import {
//   ContactItemContainer,
//   ContactText,
//   DeleteButton,
//   StyledContactIcon,
//   StyledDeleteContact,
//   StyledPhoneIcon,
// } from './ContactItem.styled';
// import { useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/operations';

// export const ContactItem = ({ name, number, id }) => {
//   const dispatch = useDispatch();

//   const handleDelete = () => {
//     dispatch(deleteContact(id))
//       .unwrap() // Розпакування Promise, що повертається createAsyncThunk
//       .then(() => {
//         toast.success('Contact deleted successfully');
//       })
//       .catch(() => {
//         toast.error('Failed to delete contact');
//       });
//   };

//   return (
//     <ContactItemContainer>
//       <ContactText>
//         <StyledContactIcon />
//         {name}
//       </ContactText>
//       <ContactText>
//         <StyledPhoneIcon />
//         {number}
//       </ContactText>

//       <DeleteButton onClick={handleDelete}>
//         <StyledDeleteContact />
//         Delete
//       </DeleteButton>
//     </ContactItemContainer>
//   );
// };
