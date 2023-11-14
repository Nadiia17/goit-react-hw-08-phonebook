import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { ColorModeSwitcher } from 'components/ColorModeSwitcher/ColorModeSwitcher';

import {
  Flex,
  Heading,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  const bgColor = useColorModeValue('teal.100', 'teal.900');
  const textColor = useColorModeValue('teal.600', 'white');

  const logoSize = useBreakpointValue({ base: 'md', md: 'lg' });
  const paddingX = useBreakpointValue({ base: 2, md: 6 });
  const buttonSize = useBreakpointValue({ base: 'sm', md: 'md' });

  const hoverColorLight = useColorModeValue('teal.600', 'teal.400');
  const hoverTransform = 'scale(1.05)';
  const transition = 'transform 0.2s, color 0.2s';

  return (
    <Flex
      as="header"
      px={paddingX}
      py="2"
      align="center"
      justify="space-between"
      bg={bgColor}
      color={textColor}
      w="full"
    >
      <Heading
        size={logoSize}
        as={NavLink}
        to="/"
        _hover={{
          textDecoration: 'none',
          color: hoverColorLight,
          transform: hoverTransform,
          transition: transition,
        }}
      >
        PhoneBook
      </Heading>
      <Flex align="center">
        {isLoggedIn ? (
          <UserMenu buttonSize={buttonSize} />
        ) : (
          <AuthNav buttonSize={buttonSize} />
        )}
        <ColorModeSwitcher ml={2} size={buttonSize} />
      </Flex>
    </Flex>
  );
};
