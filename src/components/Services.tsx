
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Tarô Semestral",
      description: "Até uma hora de duração com as previsões para sua vida nos próximos 6 meses",
      price: "R$ 100,00",
      duration: "60 min"
    },
    {
      title: "Tarô Mensal",
      description: "Até 30 minutos de consultas. Previsões para sua vida nos próximos 30 dias",
      price: "R$ 50,00",
      duration: "30 min"
    },
    {
      title: "Tarô do Amor",
      description: "Revelações sobre sua vida amorosa e relacionamentos",
      price: "R$ 50,00",
      duration: "30 min"
    },
    {
      title: "Conselho Rápido",
      description: "Resposta direta a um assunto urgente",
      price: "R$ 20,00",
      duration: "15 min"
    }
  ];

  return (
    <section id="services" className="py-20 bg-tarot-purple/5">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center text-tarot-darkPurple">
          Nossos <span className="text-tarot-purple">Serviços</span>
        </h2>
        
        <p className="text-lg text-center text-gray-700 mb-16 max-w-2xl mx-auto">
          Serviços personalizados para suas necessidades específicas
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="service-card"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-tarot-purple">
                  {service.title}
                </h3>
                
                <div className="flex items-center text-tarot-gold/80 mb-4">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">{service.duration}</span>
                </div>
                
                <p className="text-gray-700 mb-6">
                  {service.description}
                </p>
                
                <p className="text-2xl font-bold text-tarot-darkPurple">
                  {service.price}
                </p>
              </CardContent>
              
              <CardFooter className="pt-0 px-6 pb-6">
                <Button 
                  className="w-full bg-tarot-darkPurple hover:bg-tarot-purple text-white"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                >
                  Agendar
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
