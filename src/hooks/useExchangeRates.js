import { useState, useEffect } from 'react';
import axios from 'axios';

export const useExchangeRates = (base = 'USD') => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(
          `https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/${base}`
        );
        if (response.data.result === 'success') {
          setRates(response.data.conversion_rates);
        } else {
          setError(new Error(response.data['error-type']));
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, [base]);

  return { rates, loading, error };
};