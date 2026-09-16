import React from 'react';
import { REVIEWS } from '../data/mockData';
import { Star, Quote } from 'lucide-react';

export default function FeedbackSection() {
  return (
    <section id="feedback" className="py-20 md:py-28 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
      {/* Visual ornaments */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase block">
            Cảm nhận khách hàng
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-800 tracking-tight">
            Đồng Hành Cùng Sức Khỏe Cộng Đồng
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Hơn 2,000+ khách hàng tin chọn giải pháp bữa sáng mộc mạc hữu cơ mỗi ngày. Sự tin tưởng của quý khách chính là năng lượng bền bỉ nhất của tập thể Sữa Xanh.
          </p>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="card-3d bg-white border border-slate-100 p-8 relative flex flex-col justify-between"
            >
              {/* Quote icon decorative element */}
              <div className="absolute top-6 right-6 text-blue-500/10">
                <Quote className="w-10 h-10 transform scale-x-[-1]" />
              </div>

              {/* Star ratings */}
              <div className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic font-normal">
                  "{review.text}"
                </p>
              </div>

              {/* Customer Profile Row */}
              <div className="flex items-center space-x-3 pt-6 border-t border-slate-100 mt-6">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-11 h-11 rounded-full object-cover border border-slate-200"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display font-bold text-slate-800 text-sm sm:text-base">
                    {review.name}
                  </h4>
                  <span className="block text-[11px] text-slate-500 font-medium">
                    {review.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
