import { useState, useEffect } from 'react';
import type { NavItem } from '../types/index';
import { apiService } from '../services/api';

export const useNavItems = () => {
  const [navItems, setNavItems] = useState<NavItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await apiService.getNavItems();
        setNavItems(response.data);
      } catch (err) {
        // In a real app, log to an error reporting service
        setError('Failed to load navigation.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, []);

  return { navItems, isLoading, error };
};