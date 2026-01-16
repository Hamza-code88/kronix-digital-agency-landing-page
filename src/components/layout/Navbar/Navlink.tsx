import React from 'react';
import type { NavItem } from '../../../types';

interface NavLinkProps {
  item: NavItem;
}

export const NavLink: React.FC<NavLinkProps> = ({ item }) => {
  return (
    <a
      href={item.href}
      className="text-sm font-thin tracking-wide  text-text transition-colors hover:text-primary"
    >
      {item.label}
    </a>
  );
};