import { useState, useEffect } from 'react';
import type { Brand } from '../types';
import { apiService } from '../services/api';

export const useTrustedBrands = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await apiService.getTrustedBrands();
        setBrands(response.data);
      } catch (err) {
        setError('Failed to load brands.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBrands();
  }, []);

  return { brands, isLoading, error };
};