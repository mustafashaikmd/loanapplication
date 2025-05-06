import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeContextProvider } from './context/ThemeContext';
import { CurrencyContextProvider } from './context/CurrencyContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeContextProvider>
      <CurrencyContextProvider>
        <CssBaseline />
        <App />
      </CurrencyContextProvider>
    </ThemeContextProvider>
  </BrowserRouter>
);