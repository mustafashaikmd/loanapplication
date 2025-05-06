import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ExchangeRates from './pages/ExchangeRates';
import NotFound from './pages/NotFound';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/Navbar';
import { useThemeContext } from './context/ThemeContext';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './themes/themes';

const App = () => {
  const { darkMode } = useThemeContext();
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exchange-rates" element={<ExchangeRates />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;