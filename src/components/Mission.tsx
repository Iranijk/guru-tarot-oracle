
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const Mission = () => {
  const tarotDecks = [
    "Tarô de Marselha",
    "Baralho Espanhol",
    "Tarô Zen de Osho"
  ];

  return (
    <section id="mission" className="py-20 bg-gradient-to-b from-white to-tarot-purple/10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center text-tarot-darkPurple">
          Nossa <span className="text-tarot-purple">Missão</span>
        </h2>
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xl italic text-tarot-purple mb-6">
            "Como tarólogos, nossa missão é oferecer uma visão ampla e uma nova perspectiva para 
            ajudá-lo a alcançar seu potencial máximo."
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <ul className="space-y-6">
              {[
                "Trabalhando como mediador entre as energias cósmicas e sua essência, traremos confiança e segurança na resolução de desafios e no entendimento das forças que o cercam.",
                "Cada leitura é uma jornada única de descoberta, onde as cartas revelam mensagens divinas para esclarecer suas dúvidas em diversos aspectos da sua vida.",
              ].map((text, index) => (
                <li key={index} className="flex">
                  <Star className="text-tarot-gold mt-1 mr-3 flex-shrink-0" size={20} />
                  <p className="text-lg text-gray-800">{text}</p>
                </li>
              ))}
            </ul>
            
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-tarot-darkPurple mb-4">
                Baralhos Utilizados
              </h3>
              <div className="flex flex-wrap gap-3">
                {tarotDecks.map((deck) => (
                  <span 
                    key={deck}
                    className="bg-tarot-purple/10 text-tarot-purple px-4 py-2 rounded-md"
                  >
                    {deck}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <Card className="bg-tarot-darkPurple text-white p-8 mystical-quote relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-4 text-tarot-gold">
                  Sabedoria Cósmica
                </h3>
                <p className="text-lg leading-relaxed mb-4">
                  "O Tarô não prevê um destino fixo, mas ilumina o caminho que você está trilhando 
                  e as energias que o influenciam. O livre-arbítrio sempre prevalece."
                </p>
                <p className="text-right text-tarot-gold/80 italic">- Ensinamentos Esotéricos</p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-tarot-gold/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-tarot-blue/10 rounded-full blur-3xl"></div>
            </Card>
            
            <Card className="bg-tarot-purple/5 border-tarot-gold/20 p-6 mt-6">
              <h3 className="text-xl font-semibold text-tarot-purple mb-2">
                Por que escolher o Guru Tarot?
              </h3>
              <p className="text-gray-700">
                Nosso diferencial está na interpretação sensível e intuitiva, aliada ao profundo 
                conhecimento da simbologia esotérica e psicológica de cada arcano.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
