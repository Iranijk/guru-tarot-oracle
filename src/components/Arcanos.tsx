
import { Card, CardContent } from "@/components/ui/card";

const Arcanos = () => {
  return (
    <section id="arcanos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center text-tarot-darkPurple">
          72 <span className="text-tarot-purple">Arcanos</span> de Sabedoria
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Major Arcana */}
          <Card className="bg-gradient-to-tr from-tarot-blue/5 to-tarot-purple/10 border border-tarot-gold/30 overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-mystical flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-white">22</span>
                </div>
                <h3 className="text-2xl font-bold text-tarot-purple">Os Arcanos Maiores</h3>
              </div>
              
              <p className="text-lg text-gray-800 mb-6">
                Representam as lições cármicas e os desafios espirituais que enfrentamos em nossa jornada.
                São os símbolos mais poderosos do tarô, revelando os grandes movimentos do destino.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {['O Louco', 'O Mago', 'A Sacerdotisa', 'A Imperatriz', 'O Imperador'].map((card) => (
                  <span 
                    key={card} 
                    className="bg-tarot-purple/10 text-tarot-purple px-3 py-1 rounded-full text-sm"
                  >
                    {card}
                  </span>
                ))}
                <span className="bg-tarot-purple/10 text-tarot-purple px-3 py-1 rounded-full text-sm">
                  + 17 cartas
                </span>
              </div>
              
              <div className="relative h-48 overflow-hidden rounded-md">
                <div className="absolute inset-0 bg-gradient-to-r from-tarot-darkPurple/80 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
                  alt="Arcanos Maiores" 
                  className="w-full h-full object-cover"
                />
              </div>
            </CardContent>
          </Card>
          
          {/* Minor Arcana */}
          <Card className="bg-gradient-to-tr from-tarot-gold/5 to-tarot-blue/10 border border-tarot-gold/30 overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-tarot-darkPurple">56</span>
                </div>
                <h3 className="text-2xl font-bold text-tarot-blue">Os Arcanos Menores</h3>
              </div>
              
              <p className="text-lg text-gray-800 mb-6">
                Revelam as situações cotidianas e as energias que influenciam nossa vida material.
                Divididos em quatro naipes, representam os elementos e aspectos práticos da existência.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {['Copas', 'Espadas', 'Ouros', 'Paus'].map((suit) => (
                  <span 
                    key={suit} 
                    className="bg-tarot-blue/10 text-tarot-blue px-3 py-1 rounded-full text-sm"
                  >
                    {suit}
                  </span>
                ))}
              </div>
              
              <div className="relative h-48 overflow-hidden rounded-md">
                <div className="absolute inset-0 bg-gradient-to-r from-tarot-blue/80 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027" 
                  alt="Arcanos Menores" 
                  className="w-full h-full object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Arcanos;
