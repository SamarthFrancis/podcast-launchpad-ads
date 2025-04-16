
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection: React.FC = () => {
  const faqs = [
    {
      question: "Can I monetize my podcast?",
      answer: "Yes, our platform offers multiple monetization options including dynamic ad insertion, listener subscriptions, and premium content gating."
    },
    {
      question: "Do I need editing skills?",
      answer: "No, our platform includes basic editing tools that are easy to use, and we also offer AI-powered enhancements for audio quality."
    },
    {
      question: "How do I track my listeners?",
      answer: "Our detailed analytics dashboard provides information on listens, downloads, listener demographics, and engagement across all distribution platforms."
    },
    {
      question: "What platforms do you support?",
      answer: "We distribute to over 20 platforms including Spotify, Apple Podcasts, Google Podcasts, YouTube, Amazon Music, Stitcher, and many more."
    },
    {
      question: "Can I migrate my existing podcast?",
      answer: "Absolutely! We offer simple migration tools to move your existing podcast episodes and subscribers to our platform without losing any data."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="font-jakarta font-bold text-3xl md:text-4xl mb-12 text-center text-dark">
          Got Questions?
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="font-jakarta font-semibold text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-manrope text-gray">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
