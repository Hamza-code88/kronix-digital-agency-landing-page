import { useState, useEffect } from 'react';
import type{ PortfolioItem } from '../types';
import { apiService } from '../services/api';

export const usePortfolioItems = () => {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await apiService.getPortfolioItems();
        setItems(response.data);
      } catch (error) {
        console.error('Failed to load portfolio items', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchItems();
  }, []);

  return { items, isLoading };
};