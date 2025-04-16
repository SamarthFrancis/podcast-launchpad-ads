
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
      question: "How quickly can I get my podcast distributed?",
      answer: "Most podcasts are distributed to all major platforms within 24-48 hours of submission. Our one-click distribution makes the process seamless."
    },
    {
      question: "Do I need editing skills?",
      answer: "No, our platform includes easy-to-use editing tools, and we also offer AI-powered enhancements for audio quality."
    },
    {
      question: "How do I track my listeners?",
      answer: "Our detailed analytics dashboard provides real-time information on listens, downloads, listener demographics, and engagement across all distribution platforms."
    },
    {
      question: "What platforms do you support?",
      answer: "We distribute to over 20 platforms including Spotify, Apple Podcasts, Google Podcasts, YouTube, Amazon Music, JioSaavn, Audible, and many more."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="font-jakarta font-bold text-3xl md:text-4xl mb-12 text-center text-dark">
          Still Curious?
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="font-jakarta font-semibold text-lg py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-manrope text-gray text-base pb-6">
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
