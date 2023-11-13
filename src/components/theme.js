import { extendTheme, theme as baseTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  components: {
    Divider: {
      baseStyle: ({ colorMode }) => ({
        borderColor: colorMode === 'dark' ? 'teal.700' : 'teal.200',
      }),
    },
    Button: {
      // Базові стилі для всіх кнопок
      baseStyle: ({ colorMode }) => ({
        bg: colorMode === 'dark' ? 'teal.600' : 'teal.200', // Початковий фон
        color: colorMode === 'dark' ? 'white' : 'teal.800', // Колір тексту
        _hover: {
          bg: colorMode === 'dark' ? 'teal.700' : 'teal.300', // Фон при наведенні
        },
      }),
      variants: {
        solid: ({ colorMode }) => ({
          bg: colorMode === 'dark' ? 'teal.600' : 'teal.200', // Початковий фон для варіанту 'solid'
          color: colorMode === 'dark' ? 'white' : 'teal.800', // Колір тексту для варіанту 'solid'
          _hover: {
            bg: colorMode === 'dark' ? 'teal.700' : 'teal.300', // Фон при наведенні для варіанту 'solid'
          },
        }),
      },
    },
    Input: {
      // Стилі для інпутів
      baseStyle: ({ colorMode }) => ({
        field: {
          bg: colorMode === 'dark' ? 'gray.700' : 'white',
          color: colorMode === 'dark' ? 'white' : 'gray.800',
        },
      }),
    },
    Heading: {
      // Стилі для заголовків
      baseStyle: ({ colorMode }) => ({
        color: colorMode === 'dark' ? 'teal.300' : 'teal.700',
      }),
    },
    Flex: {
      // Стилі для Flex контейнерів
      baseStyle: ({ colorMode }) => ({
        bg: colorMode === 'dark' ? 'gray.700' : 'teal.50',
      }),
    },
    FormControl: {
      // Стилі для FormControl
      baseStyle: ({ colorMode }) => ({
        label: {
          color: colorMode === 'dark' ? 'teal.300' : 'teal.600',
        },
      }),
    },

    // Інші компоненти...
  },
  styles: {
    global: props => ({
      body: {
        bg: props.colorMode === 'dark' ? 'teal.800' : 'teal.50',
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
      },
      // ... тут можна додати глобальні стилі для інших елементів
    }),
  },
});

export default theme;
