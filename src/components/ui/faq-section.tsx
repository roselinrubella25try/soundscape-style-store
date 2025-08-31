import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What makes Beats headphones different?",
      answer: "Beats headphones deliver signature sound with deep, powerful bass and crystal-clear highs. Our advanced acoustic engineering and premium materials ensure an unmatched listening experience."
    },
    {
      question: "How long does the battery last?",
      answer: "Battery life varies by model. Our latest headphones offer up to 40 hours of listening time with noise cancelling off, and up to 22 hours with noise cancelling on."
    },
    {
      question: "Are Beats headphones compatible with all devices?",
      answer: "Yes, Beats headphones work with any Bluetooth-enabled device. They're optimized for Apple devices with features like one-touch pairing and seamless switching between devices."
    },
    {
      question: "What's included in the warranty?",
      answer: "All Beats products come with a one-year limited warranty covering manufacturing defects. Extended warranty options are available for additional protection."
    },
    {
      question: "How do I clean my Beats headphones?",
      answer: "Use a soft, dry cloth to clean the exterior. For ear cushions, use a slightly damp cloth with mild soap. Avoid getting moisture in any openings and ensure they're completely dry before use."
    },
    {
      question: "Can I use Beats headphones for sports and workouts?",
      answer: "Many Beats models are designed for active use with sweat and water resistance. Check your specific model's IPX rating for detailed water resistance specifications."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to the most common questions about our products
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg bg-card px-6 py-2 hover:bg-accent/5 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4 leading-relaxed">
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

export default FAQSection;