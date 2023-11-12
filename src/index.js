import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import { store, persistor } from 'redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

const theme = {
  colors: {
    errorColor: '#bc4749',
    primaryText: '#22223b', // Основний текст і елементи
    secondaryText: '#4a4e69', // Додатковий текст і кнопки
    listItemBg: '#9a8c98', // Фон елементів списку
    buttonBg: '#c9ada7', // Фон кнопок
    buttonHoverBg: '#9a8c98', // Фон кнопок при наведенні
    background: '#f2e9e4', // Основний фон
  },
};
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
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
  </React.StrictMode>
);
