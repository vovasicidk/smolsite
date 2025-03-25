import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const faqs: FAQItem[] = [
    {
      question: "When will Bestvovsos be available?",
      answer:
        "We're planning to launch Bestvovsos in Q3 2025. By joining our waitlist, you'll be among the first to know when we're ready for early access.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes, we'll offer a 14-day free trial for all new users. Waitlist members will get an extended 30-day trial as a thank you for their early interest.",
    },
    {
      question: "What makes Bestvovsos different from Сосисочная у дома?",
      answer: "Bestvovsos is just the goat...",
    },
    {
      question: "Will there be mobile apps available?",
      answer:
        "Yes, we're developing iOS and Android apps that will be released shortly after our web platform launches. All your data will sync seamlessly across devices.",
    },
    {
      question: "How much will Bestvovsos cost?",
      answer:
        "We'll offer tiered pricing plans starting at $9.99/month.This includes 3 bawarskaya sausages,5 normal sausages, and 1 bestvovsos original.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Find answers to common questions about Bestvovsos.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem
                value={`item-${index}`}
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border-none"
              >
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-3">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
