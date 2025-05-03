
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "As cartas online funcionam como pessoalmente?",
      answer: "Absolutamente. A energia flui independente do meio físico. Importa sua intenção e fé na conexão espiritual que estabelecemos durante a leitura."
    },
    {
      question: "Posso fazer perguntas sobre outras pessoas?",
      answer: "O Tarô trabalha melhor quando focado em você e nas energias que você emana. Podemos analisar como as pessoas ao seu redor interagem com seu campo energético, mas a leitura é sempre sobre você."
    },
    {
      question: "Quanto tempo antes devo agendar?",
      answer: "Recomendamos agendar com pelo menos 24 horas de antecedência para que possamos nos preparar energeticamente para sua leitura."
    },
    {
      question: "E se eu me atrasar?",
      answer: "Temos tolerância máxima de 5 minutos. Após esse período, será considerado como não comparecimento, conforme nossas políticas."
    },
    {
      question: "Posso gravar a consulta?",
      answer: "Sim, você pode gravar para revisitar os conselhos posteriormente. Muitos consulentes encontram novas camadas de significado ao revisitar as leituras."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center text-tarot-darkPurple">
          Perguntas <span className="text-tarot-purple">Frequentes</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-tarot-gold/30"
              >
                <AccordionTrigger className="text-lg font-medium text-tarot-darkPurple hover:text-tarot-purple">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-center text-tarot-purple">
            O Que Posso Perguntar?
          </h3>
          
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-800 mb-6">
              Nossa consulta abrange todas as áreas da sua vida. Você pode pedir conselhos sobre:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Relações amorosas e familiares",
                "Desafios profissionais",
                "Situação financeira",
                "Desenvolvimento pessoal",
                "Questões espirituais"
              ].map((topic, index) => (
                <div 
                  key={index} 
                  className="bg-tarot-purple/5 p-3 rounded-md text-tarot-purple border border-tarot-purple/20"
                >
                  {topic}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
