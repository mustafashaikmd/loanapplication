import React from 'react';
import { useExchangeRates } from '../hooks/useExchangeRates';
import { useCurrencyContext } from '../context/CurrencyContext';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Select, MenuItem } from '@mui/material';

const ExchangeRates = () => {
  const { currency, setCurrency } = useCurrencyContext();
  const { rates, loading, error } = useExchangeRates(currency);

  if (loading) return <Typography>Loading exchange rates...</Typography>;
  if (error) return <Typography>Error loading exchange rates: {error.message}</Typography>;

  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <div style={{ padding: '16px' }}>
        <Select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          {Object.keys(rates).map((curr) => (
            <MenuItem key={curr} value={curr}>{curr}</MenuItem>
          ))}
        </Select>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Currency</TableCell>
            <TableCell>Rate (1 {currency} = ?)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(rates).map(([currency, rate]) => (
            <TableRow key={currency}>
              <TableCell>{currency}</TableCell>
              <TableCell>{rate.toFixed(6)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ExchangeRates;