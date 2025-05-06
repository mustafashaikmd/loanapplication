import React from 'react';
import { AppBar, Toolbar, Typography, Button, Switch, Box, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { darkMode, setDarkMode } = useThemeContext();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>Loan Calculator</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {!isMobile && (
            <>
              <Button color="inherit" component={Link} to="/">Home</Button>
              <Button color="inherit" component={Link} to="/exchange-rates">Exchange Rates</Button>
              <Button color="inherit" component={Link} to="/error">Error Page</Button>
            </>
          )}
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;