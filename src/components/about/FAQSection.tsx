import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Box, Stack } from '@/components/layout';
import { FAQItem } from '@/utils/schema';

export interface FAQSectionProps {
  faqs: FAQItem[];
}

export const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <Box className="bg-surface rounded-3xl border border-line" p={6}>
      <h2 className="text-xl sm:text-2xl font-bold text-text-main pb-3 border-b border-line/30 mb-6">
        Frequently Asked Questions
      </h2>
      <Stack className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndexes.includes(index);
          const headerId = `faq-header-${index}`;
          const panelId = `faq-panel-${index}`;

          return (
            <Box
              key={index}
              className="bg-surface-alt/40 border border-line/60 rounded-2xl hover:border-accent/40 transition-all overflow-hidden"
            >
              <button
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(index)}
                className="w-full text-left font-bold text-text-main text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-2xl transition-colors cursor-pointer"
              >
                <Stack direction="row" align="center" justify="between" p={4} className="gap-4">
                  <span>{faq.question}</span>
                  <ChevronDown
                    width={20}
                    height={20}
                    className={`text-accent shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </Stack>
              </button>

              {isOpen && (
                <Box
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  px={4}
                  pb={4}
                >
                  <p className="text-xs sm:text-sm text-text-body leading-relaxed pt-2 border-t border-line/30">
                    {faq.answer}
                  </p>
                </Box>
              )}
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};
