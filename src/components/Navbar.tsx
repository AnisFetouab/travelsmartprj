
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10 py-4",
        scrolled ? "glass shadow-md" : "bg-transparent"
      )}
    >
      <nav className="container mx-auto flex items-center justify-between">
        <a 
          href="#" 
          className="text-xl md:text-2xl font-semibold tracking-tighter"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            TravelSmart
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Fonctionnalités</a>
          <a href="#planner" className="text-sm font-medium hover:text-primary transition-colors">Planifier</a>
          <a href="#destinations" className="text-sm font-medium hover:text-primary transition-colors">Destinations</a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">À propos</a>
          <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md transition-colors text-sm font-medium">
            S'inscrire
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden focus-ring rounded-md p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          "fixed inset-0 top-[60px] z-40 glass-dark md:hidden overflow-hidden transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center justify-center space-y-8 pt-12 h-full">
          <a 
            href="#features" 
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Fonctionnalités
          </a>
          <a 
            href="#planner" 
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Planifier
          </a>
          <a 
            href="#destinations" 
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Destinations
          </a>
          <a 
            href="#about" 
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            À propos
          </a>
          <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md transition-colors text-lg font-medium mt-4">
            S'inscrire
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
