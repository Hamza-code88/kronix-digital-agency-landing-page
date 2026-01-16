import type  { ApiResponse, Brand, NavItem, ProcessStep, PortfolioItem } from '../types';
import { MOCK_BRANDS, MOCK_NAV_ITEMS, MOCK_PROCESS_STEPS, MOCK_PORTFOLIO_ITEMS } from './mockData';

// Simulate network delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const apiService = {
  getNavItems: async (): Promise<ApiResponse<NavItem[]>> => {
    await delay(200); // Simulate fast load
    return { data: MOCK_NAV_ITEMS };
  },
getProcessSteps: async (): Promise<ApiResponse<ProcessStep[]>> => {
    // await delay(200); // Optional delay
    return { data: MOCK_PROCESS_STEPS };
  },
  getTrustedBrands: async (): Promise<ApiResponse<Brand[]>> => {
    await delay(300);
    return { data: MOCK_BRANDS };
  },

  getPortfolioItems: async (): Promise<ApiResponse<PortfolioItem[]>> => {
    // await delay(300); // Optional loading simulation
    // Real app mein pagination logic yahan hoga
    return { data: MOCK_PORTFOLIO_ITEMS };
  },
};