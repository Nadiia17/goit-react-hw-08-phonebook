// import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { ColorModeSwitcher } from 'components/ColorModeSwitcher/ColorModeSwitcher';

import { Flex, Box, Heading, useColorModeValue } from '@chakra-ui/react';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  const bgColor = useColorModeValue('teal.100', 'teal.900');
  const textColor = useColorModeValue('teal.600', 'white');

  const hoverColorLight = useColorModeValue('teal.600', 'teal.400');
  const hoverTransform = 'scale(1.05)';
  const transition = 'transform 0.2s, color 0.2s';

  return (
    <Flex
      as="header"
      px="6"
      py="4"
      align="center"
      justify="space-between"
      bg={bgColor}
      color={textColor}
      w="full"
    >
      <Heading
        size="lg"
        as={NavLink}
        to="/"
        _hover={{
          textDecoration: 'none',
          color: hoverColorLight, // Колір при наведенні для світлої/темної теми
          transform: hoverTransform, // Ефект масштабування при наведенні
          transition: transition, // Плавна анімація для ефектів
        }}
      >
        PhoneBook
      </Heading>
      <Box>
        {/* <Navigation /> */}
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Box>
      <ColorModeSwitcher />
    </Flex>
  );
};
