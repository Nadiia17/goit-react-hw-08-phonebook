// import { FilterContainer, FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

import {
  Box,
  FormControl,
  Input,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  const filterBgColor = useColorModeValue('teal.200', 'teal.700');

  return (
    <Box
      p={6}
      borderWidth="1px"
      borderRadius="md"
      boxShadow="base"
      bg={filterBgColor}
    >
      <Text mb={2} fontSize="md" fontWeight="bold">
        Find contacts by name
      </Text>
      <FormControl>
        <Input
          type="text"
          name="filter"
          placeholder="Enter name to find"
          value={filter}
          onChange={handleChange}
        />
      </FormControl>
    </Box>
  );
};
//   return (
//     <FilterContainer>
//       <p>Find contacts by name</p>
//       <FilterInput
//         type="text"
//         name="filter"
//         placeholder="Enter name to find"
//         value={filter}
//         onChange={handleChange}
//       />
//     </FilterContainer>
//   );
// };
