import {
  Box,
  Button,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  const activeBgColor = useColorModeValue('teal.400', 'teal.800');
  const buttonSize = useBreakpointValue({ base: 'sm', md: 'md' });

  return (
    <Box>
      <Button
        as={NavLink}
        to="/register"
        size={buttonSize}
        mx="2"
        _active={{
          bg: activeBgColor,
        }}
      >
        Register
      </Button>
      <Button
        as={NavLink}
        to="/login"
        size={buttonSize}
        mx="2"
        _active={{
          bg: activeBgColor,
        }}
      >
        Log In
      </Button>
    </Box>
  );
};

//   return (
//     <Box>
//       <Button as={NavLink} to="/register" size="md" mx="2">
//         Register
//       </Button>
//       <Button as={NavLink} to="/login" size="md" mx="2">
//         Log In
//       </Button>
//     </Box>
//   );
// };
