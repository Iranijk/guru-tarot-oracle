
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-tarot-darkPurple text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="gradient-text">Agende Sua Consulta</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          <div>
            <Card className="bg-white/5 backdrop-blur-sm border-tarot-gold/30 p-6">
              <h3 className="text-2xl font-semibold mb-6 text-tarot-gold">
                Entre em Contato
              </h3>
              
              <p className="text-lg mb-8">
                Entre em contato pelo WhatsApp para marcar sua consulta personalizada
              </p>
              
              <Button 
                className="w-full bg-tarot-gold hover:bg-tarot-gold/80 text-black text-lg py-6"
                onClick={() => window.open("https://wa.me/5567984678018", "_blank")}
              >
                WhatsApp: 67 9 8467 8018
              </Button>
              
              <div className="mt-8">
                <h4 className="font-semibold text-tarot-gold mb-2">
                  Horário de Atendimento
                </h4>
                <p className="text-white/90 mb-4">
                  Diariamente das 11h às 22h<br />
                  (Confirmação por WhatsApp)
                </p>
                
                <h4 className="font-semibold text-tarot-gold mb-2">
                  Formas de Pagamento
                </h4>
                <p className="text-white/90">
                  PIX: gurutarot@mail.com
                </p>
              </div>
            </Card>
          </div>
          
          <div className="text-center">
            <div className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
                alt="Conexão com o místico" 
                className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-tarot-gold/30"
              />
            </div>
            
            <blockquote className="text-lg italic mb-6">
              "O momento perfeito para buscar orientação é sempre agora. 
              As energias cósmicas estão constantemente em movimento, trazendo 
              novas oportunidades e desafios."
            </blockquote>
            
            <p className="text-tarot-gold">- Equipe Guru Tarot</p>
            
            <div className="mt-8">
              <a 
                href="https://www.youtube.com/@GURUXAM%C3%82-BR" 
                target="_blank" 
                rel="noreferrer" 
                className="text-tarot-gold hover:text-tarot-gold/80 underline"
              >
                Visite nosso canal no YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
