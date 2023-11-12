// import { FilterContainer, FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

import { Box, FormControl, Input, Text } from '@chakra-ui/react';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="md"
      boxShadow="base"
      bg="brand.100"
    >
      <Text mb={2} fontSize="md" fontWeight="bold" color="brand.700">
        Find contacts by name
      </Text>
      <FormControl>
        <Input
          type="text"
          name="filter"
          placeholder="Enter name to find"
          value={filter}
          onChange={handleChange}
          bg="white"
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
