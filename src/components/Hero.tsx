
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-tarot-darkPurple text-white relative overflow-hidden py-20 px-4">
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-blue-purple opacity-30"></div>
      
      <div className="container mx-auto z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          <span className="gradient-text">GURU TAROT</span>
        </h1>
        
        <p className="text-xl md:text-2xl italic mb-8 text-tarot-gold font-medium">
          "O espelho da alma revela os mistérios do destino"
        </p>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl mb-10">
            Descubra as respostas que o Universo preparou para você através da sabedoria milenar do Tarô.
            Nossos especialistas utilizam este oráculo ancestral como um aliado valioso no processo de 
            autoanálise e autoconhecimento.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <Button 
              className="bg-tarot-gold hover:bg-tarot-gold/80 text-black text-lg py-6 px-8"
              onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}
            >
              Agendar Consulta
            </Button>
            <Button 
              variant="outline" 
              className="border-tarot-gold text-tarot-gold hover:bg-tarot-gold/10 text-lg py-6 px-8"
              onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-10 w-16 h-16 border border-tarot-gold rounded-full opacity-40 animate-float"></div>
      <div className="absolute top-1/4 right-14 w-10 h-10 border border-tarot-gold/60 rounded-full opacity-30"></div>
      <div className="absolute bottom-1/4 right-1/3 w-20 h-20 border border-tarot-purple/50 rounded-full opacity-20"></div>
    </section>
  );
};

export default Hero;
