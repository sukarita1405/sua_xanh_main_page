import React, { useState } from 'react';
import { FAQS } from '../data/mockData';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQSection() {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS[0].id);

  const toggleFaq = (id: string) => {
    if (openFaqId === id) {
      setOpenFaqId(null);
    } else {
      setOpenFaqId(id);
    }
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase block">
            Hỏi đáp dinh dưỡng
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-800 tracking-tight">
            Giải Đáp Thắc Mắc Thường Gặp
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Chúng tôi luôn minh bạch 100% về nguyên liệu, quy trình chế biến và phương thức bảo quản để bạn hoàn toàn an tâm nạp năng lượng sạch mỗi sáng.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white rounded border overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-blue-500 shadow-[0_2px_8px_rgba(37,99,235,0.08)]' : 'border-slate-200'
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between space-x-4 cursor-pointer bg-transparent"
                >
                  <div className="flex items-center space-x-3.5">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-400'}`} />
                    <span className="font-display font-bold text-slate-800 text-sm sm:text-base leading-tight">
                      {faq.question}
                    </span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {/* Content Panel */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-[500px] border-t border-slate-100' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 py-5 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal bg-slate-50/50">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
