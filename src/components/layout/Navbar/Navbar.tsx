import React, { useState } from 'react';
import { useNavItems } from '../../../services/useNavItem';
import { Button } from '../../common/Button';
import { NavLink } from './Navlink';
import { Menu, X } from 'lucide-react'; 

export const Navbar: React.FC = () => {
  const { navItems, isLoading } = useNavItems();
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <header className="fixed top-0 z-50 w-full bg-[#111204]/80 backdrop-blur-sm border-b border-white/5">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-3xl font-bold text-text">
            Kro<span className="text-primary">nix.</span>
          </a>
        </div>

        {/* Desktop Navigation Links (HIDDEN on Mobile) */}
        <nav className="hidden items-center font-thin gap-8 md:flex">
          {!isLoading &&
            navItems.map((item) => <NavLink key={item.id} item={item} />)}
        </nav>

  
        <div className="flex items-center gap-4">
          
        
          <div className="hidden sm:block"> 
            <Button>Get Started</Button>
          </div>

     
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white focus:outline-none md:hidden"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}
    
      {isOpen && (
        <div className="absolute top-20 left-0 w-full border-b border-white/5 bg-[#111204] px-4 py-6 md:hidden shadow-2xl">
          <nav className="flex flex-col gap-6">
            {!isLoading && navItems.map((item) => (
              <NavLink 
                key={item.id} 
                item={item} 
                onClick={() => setIsOpen(false)}
              />
            ))}
            
            {/* Mobile CTA Button */}
            <div className="sm:hidden pt-4">
               <Button className="w-full">Get Started</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};