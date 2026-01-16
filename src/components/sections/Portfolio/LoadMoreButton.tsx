import React from 'react';
import { Loader2 } from 'lucide-react';
import { Button } from '../../common/Button';

export const LoadMoreButton: React.FC = () => {
  return (
    <div className="mt-12 flex justify-center">
      <Button variant="ghost" className="border border-white/10 bg-background-secondary px-8 py-3 text-text hover:bg-white/5 hover:text-primary">
        {/* Spinner Icon (Optional loading state ke liye) */}
        <Loader2 className="mr-2 h-4 w-4 animate-spin text-primary hidden" /> 
        Load More
      </Button>
    </div>
  );
};