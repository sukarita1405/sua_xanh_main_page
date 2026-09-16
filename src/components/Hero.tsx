import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

interface HeroProps {
  onCtatClick: (sectionId: string) => void;
}

export default function Hero({ onCtatClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 bg-transparent overflow-hidden flex items-center"
    >
      {/* Background glowing decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl -z-10 transform translate-x-1/4 -translate-y-1/4 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '8s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8 text-left max-w-2xl lg:max-w-none">
            {/* Blue Pill Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded text-blue-600 text-[10px] sm:text-xs font-bold tracking-[0.15em] uppercase shadow-sm">
              <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
              <span>Dinh Dưỡng Thực Vật Tiện Lợi</span>
            </div>

            {/* Display Typography */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1] galaxy-glowing-text">
                Sữa Hạt Nguyên Chất &amp;
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-emerald-500 mt-1">
                  Bữa Sáng Lành Mạnh
                </span>
              </h1>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                Khởi đầu ngày mới tràn đầy sinh khí với sự kết hợp tinh túy từ 100% sữa hạt béo bùi hữu cơ cùng khoai lang mật ấm nóng, bánh chuối dẻo ngọt quyện nước cốt dừa thơm phức. Bữa sáng thuần tự nhiên chuẩn bị chỉ trong <strong>30 giây</strong> tại hệ thống quầy di động!
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3.5 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => onCtatClick('planner')}
                className="inline-flex items-center justify-center space-x-2 btn-3d-blue px-7 py-3.5 text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                <span>Tự Thiết Kế Combo</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onCtatClick('menu')}
                className="inline-flex items-center justify-center space-x-2 btn-3d-slate px-7 py-3.5 text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                <span>Xem Thực Đơn Sáng</span>
              </button>
            </div>

            {/* Quick Guarantees */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-4">
              <div className="flex items-start space-x-2">
                <ShieldCheck className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs sm:text-sm font-semibold text-slate-800 leading-tight">
                    100% Tự Nhiên
                  </span>
                  <span className="block text-[10px] text-slate-500 mt-0.5">
                    Không đường tinh luyện
                  </span>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs sm:text-sm font-semibold text-slate-800 leading-tight">
                    An Lành Tiêu Hóa
                  </span>
                  <span className="block text-[10px] text-slate-500 mt-0.5">
                    Giàu chất xơ dồi dào
                  </span>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Zap className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs sm:text-sm font-semibold text-slate-800 leading-tight">
                    Nhận Sau 30 Giây
                  </span>
                  <span className="block text-[10px] text-slate-500 mt-0.5">
                    Quầy tủ ấm nóng tiện lợi
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Showcase */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Decorative rotated background shape */}
            <div className="absolute inset-0 bg-blue-500/5 rounded-[32px] rotate-[-5deg] transform scale-[1.03] -z-10 transition-transform duration-500 hover:rotate-[-2deg]"></div>
            
            {/* Main Hero Photo */}
            <div className="relative rounded-2xl overflow-hidden border border-blue-500/10 shadow-[0_10px_30px_rgba(14,165,233,0.1)] aspect-video lg:aspect-square">
              <img
                src="/images/sx-anh-bia-moi.jpg"
                alt="Đội ngũ Sữa Xanh - Tụi Con Bán Sữa Hạt tại quầy bán sữa hạt"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Micro Floating badge 1: Calories */}
            <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-sm border border-blue-100 p-3 sm:p-4 rounded shadow-md flex items-center space-x-3 hover:translate-y-1 transition-transform">
              <div className="w-9 h-9 rounded bg-blue-50 flex items-center justify-center text-blue-600 font-semibold text-sm">
                🔥
              </div>
              <div>
                <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider">Chỉ từ</span>
                <span className="block text-xs sm:text-sm font-extrabold text-slate-800 leading-none mt-1.5">
                  250 Kcal / Bữa
                </span>
              </div>
            </div>

            {/* Micro Floating badge 2: Stalls */}
            <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-sm border border-blue-100 p-3 sm:p-4 rounded shadow-md flex items-center space-x-3 hover:-translate-y-1 transition-transform">
              <div className="w-9 h-9 rounded bg-blue-50 flex items-center justify-center text-blue-500 font-bold text-base">
                📍
              </div>
              <div>
                <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider">Hệ thống chuỗi</span>
                <span className="block text-xs sm:text-sm font-extrabold text-slate-800 leading-none mt-1.5">
                  5+ Quầy TP.HCM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
