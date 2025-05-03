
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-tarot-darkPurple to-tarot-purple/80 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="gradient-text">O Que é o Tarô?</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="bg-white/5 backdrop-blur-sm border-tarot-gold/30 p-6 mystical-quote">
              <p className="text-xl leading-relaxed">
                O Tarô é uma ferramenta mágica e ancestral, um conselheiro pessoal para aqueles que buscam 
                direcionamento, conselhos ou respostas em todas as áreas de suas vidas. 
              </p>
              <p className="text-lg mt-4 text-tarot-gold italic">
                - Sabedoria Ancestral
              </p>
            </Card>
            
            <div className="mt-10">
              <p className="text-lg mb-6 leading-relaxed">
                Originado na Europa do século XV, o Tarô transcendeu seu uso como simples jogo de cartas 
                para se tornar um poderoso instrumento de introspecção e orientação psicológica. Cada arcano 
                maior e menor representa arquétipos universais que dialogam diretamente com nosso inconsciente.
              </p>
              <p className="text-lg leading-relaxed">
                Na Guru Tarot, nossa missão é oferecer uma visão ampla e uma nova perspectiva para 
                ajudá-lo a alcançar seu potencial máximo, trazendo confiança e segurança na resolução de 
                desafios e no entendimento das energias sutis que envolvem sua jornada.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Main card image */}
              <img 
                src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb" 
                alt="Cartas de tarô místicas" 
                className="rounded-lg shadow-2xl z-10 relative tarot-card"
              />
              
              {/* Decorative cards */}
              <div className="absolute -bottom-6 -left-6 w-28 h-40 bg-tarot-purple/80 rounded-md shadow-xl rotate-12 z-0"></div>
              <div className="absolute -top-6 -right-6 w-28 h-40 bg-tarot-gold/30 rounded-md shadow-xl -rotate-6 z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
