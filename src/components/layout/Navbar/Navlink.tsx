import React from 'react';
import type { NavItem } from '../../../types';

interface NavLinkProps {
  item: NavItem;
  onClick?: () => void; 
}

export const NavLink: React.FC<NavLinkProps> = ({ item, onClick }) => {
  return (
    <a
      href={item.href}
      onClick={onClick} // Click handler yahan lagaya
      className="text-sm font-thin tracking-wide text-text transition-colors hover:text-primary"
    >
      {item.label}
    </a>
  );
};