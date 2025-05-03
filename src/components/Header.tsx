
import { useState } from 'react';
import { Menu, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="fixed w-full bg-tarot-darkPurple/90 backdrop-blur-md z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Moon className="text-tarot-gold mr-2" size={24} />
          <h1 className="text-xl md:text-2xl font-semibold text-white">
            <span className="gradient-text">GURU</span> TAROT
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-white/90">
          <a href="#about" className="hover:text-tarot-gold transition-colors">O Tarô</a>
          <a href="#arcanos" className="hover:text-tarot-gold transition-colors">Arcanos</a>
          <a href="#mission" className="hover:text-tarot-gold transition-colors">Nossa Missão</a>
          <a href="#services" className="hover:text-tarot-gold transition-colors">Serviços</a>
          <a href="#contact" className="hover:text-tarot-gold transition-colors">Contato</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:bg-tarot-purple/20"
          >
            <Menu size={24} />
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="bg-tarot-darkPurple/95 py-4 px-4 md:hidden">
          <ul className="space-y-4 text-white/90">
            <li>
              <a 
                href="#about" 
                className="block py-2 hover:text-tarot-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                O Tarô
              </a>
            </li>
            <li>
              <a 
                href="#arcanos" 
                className="block py-2 hover:text-tarot-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Arcanos
              </a>
            </li>
            <li>
              <a 
                href="#mission" 
                className="block py-2 hover:text-tarot-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Nossa Missão
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                className="block py-2 hover:text-tarot-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="block py-2 hover:text-tarot-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
