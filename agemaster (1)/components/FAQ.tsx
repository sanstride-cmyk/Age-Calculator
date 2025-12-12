import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "How accurate is this age calculator?",
      a: "AgeMaster is 100% accurate. It accounts for leap years, variable days in months, and current time zones to give you a precise result."
    },
    {
      q: "Does this tool calculate age in hours or minutes?",
      a: "Currently, we focus on Years, Months, and Days for clarity. We also provide total days lived for fun trivia."
    },
    {
      q: "Is my date of birth stored?",
      a: "No. AgeMaster runs entirely in your browser. We do not store, save, or transmit your personal data anywhere."
    },
    {
      q: "How do I calculate my next birthday?",
      a: "Simply enter your Date of Birth above, and the tool will automatically display a countdown of days remaining until your next birthday."
    },
    {
      q: "Why do I need to know the day of the week I was born?",
      a: "It's a fun fact! Many people enjoy knowing if they were a 'Monday child' or born on a weekend. It's great for astrology or general curiosity."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div key={index} className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-2">{item.q}</h3>
              <p className="text-slate-600">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;