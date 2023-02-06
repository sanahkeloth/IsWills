import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Container, ChakraProvider, extendTheme } from '@chakra-ui/react';
import { breakpoints, colors, fonts } from './assets/themeStyles';

const theme = extendTheme({
  breakpoints: { ...breakpoints },
  colors: { ...colors },
  fonts: {
    heading: `'Poppins', 'roboto', 'sans-serif'`,
    body: `'Poppins', 'roboto', 'sans-serif'`,
  },
  components: {
    Progress: {
      baseStyle: {
        filledTrack: {
          bg: 'tertiary',
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <Container
        minHeight='100vh'
        minWidth='100vw'
        bg='primary'
        padding='0'>
        <App />
      </Container>
    </React.StrictMode>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
