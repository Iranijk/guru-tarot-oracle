
import { Moon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-tarot-darkPurple text-white/70 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Moon className="text-tarot-gold mr-2" size={20} />
            <h3 className="text-xl font-semibold text-white">
              <span className="gradient-text">GURU</span> TAROT
            </h3>
          </div>
          
          <div className="text-sm">
            <p>"O espelho da alma revela os mistérios do destino"</p>
            <p className="mt-2">&copy; {new Date().getFullYear()} Guru Tarot. Todos os direitos reservados.</p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <a 
              href="https://www.youtube.com/@GURUXAM%C3%82-BR" 
              target="_blank" 
              rel="noreferrer"
              className="text-white/70 hover:text-tarot-gold transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
