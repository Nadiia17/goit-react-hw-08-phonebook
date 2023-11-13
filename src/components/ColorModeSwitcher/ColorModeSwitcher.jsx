import { useColorMode, IconButton, useColorModeValue } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

export const ColorModeSwitcher = () => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaSun, FaMoon);
  const hoverBg = useColorModeValue('teal.300', 'teal.700');

  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Switch on ${useColorModeValue('dark', 'light')} theme`}
      variant="ghost"
      // color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      _hover={{ bg: hoverBg }}
    />
  );
};
