import {
  useColorMode,
  IconButton,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

export const ColorModeSwitcher = () => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaSun, FaMoon);
  const hoverBg = useColorModeValue('teal.300', 'teal.700');

  const buttonSize = useBreakpointValue({ base: 'sm', md: 'md' });

  return (
    <IconButton
      size={buttonSize}
      fontSize="lg"
      aria-label={`Switch on ${useColorModeValue('dark', 'light')} theme`}
      variant="ghost"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      _hover={{ bg: hoverBg }}
    />
  );
};
