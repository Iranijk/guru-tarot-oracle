
import { Card } from "@/components/ui/card";

const Process = () => {
  const steps = [
    {
      title: "Preparação",
      description: "Escolha um local tranquilo, sem distrações. Venha com perguntas claras ou mente aberta para receber as orientações que mais necessita."
    },
    {
      title: "A Consulta",
      description: "A sessão é realizada via chamada de vídeo pelo WhatsApp. Iniciamos com uma breve mentalização para melhorar a conexão com as cartas."
    },
    {
      title: "Interpretação",
      description: "Explicamos cada carta e a energia que ela traz para sua situação. Ao final, resumimos os pontos-chave e oferecemos conselhos práticos."
    }
  ];

  return (
    <section className="py-20 bg-tarot-darkPurple text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="gradient-text">Como Funciona a Leitura</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="bg-white/5 backdrop-blur-sm border-tarot-gold/30 overflow-hidden group hover:border-tarot-gold transition-all duration-300"
            >
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center mb-6 group-hover:animate-float">
                  <span className="text-xl font-bold text-tarot-darkPurple">{index + 1}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-tarot-gold">
                  {step.title}
                </h3>
                
                <p className="text-white/90">
                  {step.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-lg text-tarot-gold/80 italic">
            "As cartas são apenas um instrumento. A verdadeira magia está na conexão 
            entre o consulente, o tarôlogo e as energias universais que nos cercam."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
