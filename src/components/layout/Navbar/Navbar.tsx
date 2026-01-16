import React from 'react';
import { useNavItems } from '../../../services/useNavItem';
import { Button } from '../../common/Button';
import { NavLink } from './Navlink';

export const Navbar: React.FC = () => {
  const { navItems, isLoading } = useNavItems();

  return (
    <header className="fixed top-0 z-50 w-full bg-transparent backdrop-blur-sm border-b border-white/5">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-3xl font-bold text-text">
            Kro<span className="text-primary">nix.</span>
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="hidden items-center font-thin gap-8 md:flex ">
          {!isLoading &&
            navItems.map((item) => <NavLink key={item.id} item={item} />)}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
           {/* Mobile Menu Trigger could go here */}
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  );
};