import React from 'react';
import { Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Oops! Something went wrong.
      </Typography>
      <Typography paragraph>
        We're sorry for the inconvenience. Please try again later.
      </Typography>
      <Button variant="contained" component={Link} to="/">
        Go Back Home
      </Button>
    </Container>
  );
};

export default ErrorPage;