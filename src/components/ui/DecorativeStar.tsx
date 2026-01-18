import React from 'react';
import { cn } from '../../lib/utils';

interface DecorativeStarProps {
  className?: string;
}

export const DecorativeStar: React.FC<DecorativeStarProps> = ({ className }) => {
  return (
    // <svg
    //   viewBox="0 0 24 24"
    //   fill="currentColor"
    //   className={cn("text-primary/80 animate-pulse", className)}
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path d="M12 0L14.595 9.405L24 12L14.595 14.595L12 24L9.405 14.595L0 12L9.405 9.405L12 0Z" />
    // </svg>


    <svg  viewBox="0 0 41 41" fill="none"  className={cn("text-primary/80 ", className)} xmlns="http://www.w3.org/2000/svg">
<path d="M16.097 27.4043C15.7258 26.1493 14.7443 25.1678 13.4894 24.7967L0.345767 20.9096C-0.115253 20.7733 -0.115255 20.1203 0.345765 19.984L13.4894 16.097C14.7443 15.7258 15.7258 14.7443 16.097 13.4894L19.984 0.345766C20.1203 -0.115254 20.7733 -0.115256 20.9096 0.345764L24.7967 13.4894C25.1678 14.7443 26.1493 15.7258 27.4043 16.097L40.5479 19.984C41.0089 20.1203 41.0089 20.7733 40.5479 20.9096L27.4043 24.7967C26.1493 25.1678 25.1678 26.1493 24.7967 27.4043L20.9096 40.5479C20.7733 41.0089 20.1203 41.0089 19.984 40.5479L16.097 27.4043Z" fill="#B9FD50" fillOpacity="0.25"/>
</svg>

  );
};