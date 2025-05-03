
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "A leitura foi incrivelmente precisa sobre situações que eu nem havia mencionado. Me deu a clareza que precisava para tomar uma decisão importante.",
      author: "Ana Carolina"
    },
    {
      quote: "As recomendações de ervas e práticas energéticas mudaram completamente minha rotina. Nunca me senti tão alinhada.",
      author: "Rafael Souza"
    },
    {
      quote: "A previsão semestral acertou eventos que eu não poderia imaginar. Recomendo a todos que querem se preparar para o futuro.",
      author: "Mariana Gomes"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-tarot-purple/5">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center text-tarot-darkPurple">
          <span className="text-tarot-gold">Depoimentos</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white border-tarot-gold/30 hover:border-tarot-gold shadow-lg transition-all duration-300 h-full"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-tarot-gold h-5 w-5 fill-current" />
                  ))}
                </div>
                
                <blockquote className="flex-1">
                  <p className="text-gray-800 italic mb-4">"{testimonial.quote}"</p>
                </blockquote>
                
                <footer className="mt-4 pt-4 border-t border-tarot-gold/20">
                  <p className="font-medium text-tarot-purple">- {testimonial.author}</p>
                </footer>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
