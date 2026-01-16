import { useState, useEffect } from 'react';
import type { ProcessStep } from '../types';
import { apiService } from '../services/api';

export const useProcessSteps = () => {
  const [steps, setSteps] = useState<ProcessStep[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSteps = async () => {
      try {
        const response = await apiService.getProcessSteps();
        setSteps(response.data);
      } catch (error) {
        console.error('Failed to load process steps', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSteps();
  }, []);

  return { steps, isLoading };
};