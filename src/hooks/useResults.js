import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (serachTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: serachTerm,
          location: 'New York City',
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      setErrorMessage('Something went wrong');
    }
  };

  useEffect(() => {
    searchApi();
  }, []);

  return [searchApi, results, errorMessage];
};
