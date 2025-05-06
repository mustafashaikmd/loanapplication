import React from 'react';
import { Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography paragraph>
        The page you're looking for doesn't exist or has been moved.
      </Typography>
      <Button variant="contained" component={Link} to="/">
        Go Back Home
      </Button>
    </Container>
  );
};

export default NotFound;