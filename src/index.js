import React from 'react';
import ReactDOM from 'react-dom/client';
import { ColorModeScript } from "@chakra-ui/react";
import './index.css';
import App from './App';
import theme from "./theme";

// 1. Import the extendTheme function
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
  
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App/>
    
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

