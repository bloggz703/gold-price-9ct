import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How accurate is the gold calculator?",
      answer: "Our gold calculator uses real-time market prices and standard industry formulas to provide highly accurate estimates. However, actual selling prices may vary based on dealer premiums and local market conditions."
    },
    {
      question: "How often are gold prices updated?",
      answer: "Our gold prices are updated every few seconds to reflect the latest market movements, ensuring you have access to the most current valuations."
    },
    {
      question: "What factors affect the price of gold?",
      answer: "Gold prices are influenced by various factors including market demand, economic conditions, currency values, geopolitical events, and central bank policies."
    },
    {
      question: "How do I know the purity of my gold?",
      answer: "Gold purity is typically marked on jewelry items (e.g., 9ct, 14ct, 18ct, 22ct, 24ct). If unmarked, a professional jeweler can test the purity for you."
    },
    {
      question: "Can I use this calculator for all types of gold items?",
      answer: "Yes, our calculator works for any gold item including jewelry, coins, and bars. Simply input the correct weight and purity (carat) to get an estimate."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-[#D4AF37] mb-12">Frequently Asked Questions</h1>
      <div className="max-w-3xl mx-auto space-y-8">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-[#242424] rounded-xl p-6 border border-[#D4AF37]/20">
            <h2 className="text-xl font-semibold text-[#D4AF37] mb-3">{faq.question}</h2>
            <p className="text-[#D4AF37]/90">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;