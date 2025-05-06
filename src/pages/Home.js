import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Grid,
  Paper,
  Box
} from '@mui/material';
import { useEMICalculator } from '../hooks/useEMICalculator';

const Home = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [termYears, setTermYears] = useState(5);
  const [emi, setEmi] = useState(null);

  // Move the calculation logic directly into the component
  const calculateEMI = () => {
    const R = interestRate / 12 / 100;
    const N = termYears * 12;
    const calculatedEMI = (loanAmount * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEmi(calculatedEMI);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Loan Calculator
      </Typography>
      
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Loan Calculator Dashboard
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Loan Amount"
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(parseFloat(e.target.value))}
              variant="outlined"
            />
          </Grid>
          
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Interest Rate (%)"
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(parseFloat(e.target.value))}
              variant="outlined"
            />
          </Grid>
          
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Term (Years)"
              type="number"
              value={termYears}
              onChange={(e) => setTermYears(parseFloat(e.target.value))}
              variant="outlined"
            />
          </Grid>
        </Grid>
        
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Button 
            variant="contained" 
            color="primary" 
            size="large"
            onClick={calculateEMI}
          >
            CALCULATE
          </Button>
        </Box>
        
        {emi && (
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6">
              Monthly EMI: ₹{emi.toFixed(2)}
            </Typography>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default Home;