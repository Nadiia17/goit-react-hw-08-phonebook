import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import { store, persistor } from 'redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#f7fafc', // Світлий відтінок для фону
      100: '#edf2f7', // Для карток або панелей
      200: '#e2e8f0', // Для інших елементів фону
      300: '#cbd5e0', // Темніший для шрифтів або іконок
      400: '#a0aec0', // Акцентні кольори
      500: '#718096', // Основний колір тексту
      600: '#4a5568',
      700: '#2d3748',
      800: '#1a202c',
      900: '#171923',
    },

    errorColor: '#bc4749',
    primaryText: '#22223b', // Основний текст і елементи
    secondaryText: '#4a4e69', // Додатковий текст і кнопки
    listItemBg: '#9a8c98', // Фон елементів списку
    buttonBg: '#c9ada7', // Фон кнопок
    buttonHoverBg: '#9a8c98', // Фон кнопок при наведенні
    background: '#f2e9e4', // Основний фон
  },
  space: {
    // Обмежений набір значень для відступів
    1: '4px',
    2: '8px',
    4: '16px',
    6: '24px',
    8: '32px',
  },
  sizes: {
    // Обмежений набір розмірів
    full: '100%',
    xs: '20rem',
    md: '28rem',
    xl: '36rem',
  },
  shadows: {
    // Обмежений набір тіней
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  },
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <ThemeProvider theme={theme}>
              <App />
              <GlobalStyle />
            </ThemeProvider>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
