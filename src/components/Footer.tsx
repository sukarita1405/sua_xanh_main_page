import React from 'react';
import { Leaf, Instagram, Facebook, Mail, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onLinkClick: (sectionId: string) => void;
}

export default function Footer({ onLinkClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          {/* Brand Info Column: 4 Columns */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-3.5">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center border border-blue-100">
                <Leaf className="w-4.5 h-4.5 text-blue-600 fill-blue-600/10" />
              </div>
              <span className="font-display font-extrabold text-base text-slate-800 tracking-tight">
                LÀNH <span className="text-blue-600 font-semibold">&amp; SẠCH</span>
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-sm">
              Chuỗi Kiosk sữa hạt hữu cơ nguyên chất &amp; bữa sáng tự nhiên lành mạnh tiên phong tại TP.HCM.
            </p>

            <div className="flex items-center space-x-3 pt-1">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-all shadow-2xs"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-all shadow-2xs"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:hotro@lanhvasach.vn"
                className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-all shadow-2xs"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Column 1: Về Chúng Tôi (2.5 -> lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-blue-600 uppercase tracking-wider whitespace-nowrap">
              Về Chúng Tôi
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px]">
              <li>
                <button onClick={() => onLinkClick('home')} className="text-slate-600 hover:text-blue-600 cursor-pointer transition-colors whitespace-nowrap">
                  Trang chủ
                </button>
              </li>
              <li>
                <button onClick={() => onLinkClick('story')} className="text-slate-600 hover:text-blue-600 cursor-pointer transition-colors whitespace-nowrap">
                  Câu chuyện cốt lõi
                </button>
              </li>
              <li>
                <button onClick={() => onLinkClick('menu')} className="text-slate-600 hover:text-blue-600 cursor-pointer transition-colors whitespace-nowrap">
                  Thực đơn dinh dưỡng
                </button>
              </li>
              <li>
                <button onClick={() => onLinkClick('stalls')} className="text-slate-600 hover:text-blue-600 cursor-pointer transition-colors whitespace-nowrap">
                  Tìm hệ thống quầy
                </button>
              </li>
              <li>
                <button onClick={() => onLinkClick('recrui')} className="text-slate-600 hover:text-blue-600 cursor-pointer transition-colors inline-flex items-center whitespace-nowrap">
                  <span>Tuyển dụng Kiosk</span>
                  <span className="ml-1.5 px-1.5 py-0.2 bg-blue-100 text-blue-700 text-[9px] font-bold rounded">Mới</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Dành Cho Khách Hàng (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-blue-600 uppercase tracking-wider whitespace-nowrap">
              Dành Cho Khách Hàng
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px]">
              <li>
                <button onClick={() => onLinkClick('planner')} className="text-slate-600 hover:text-blue-600 cursor-pointer transition-colors whitespace-nowrap">
                  Tự thiết kế bữa sáng
                </button>
              </li>
              <li>
                <button onClick={() => onLinkClick('faq')} className="text-slate-600 hover:text-blue-600 cursor-pointer transition-colors whitespace-nowrap">
                  Câu hỏi thường gặp FAQ
                </button>
              </li>
              <li>
                <button onClick={() => onLinkClick('contact')} className="text-slate-600 hover:text-blue-600 cursor-pointer transition-colors whitespace-nowrap">
                  Đăng ký ưu đãi giảm 20%
                </button>
              </li>
              <li>
                <a href="tel:0901234561" className="text-slate-600 hover:text-blue-600 transition-colors inline-flex items-center whitespace-nowrap">
                  <span>Hotline:</span>
                  <span className="ml-1 font-semibold text-slate-800">0901.234.561</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Partner Column: Mô Hình Hợp Tác (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-blue-600 uppercase tracking-wider whitespace-nowrap">
              Mô Hình Hợp Tác
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px]">
              <li>
                <button onClick={() => onLinkClick('contact')} className="text-slate-600 hover:text-blue-600 cursor-pointer transition-colors inline-flex items-center whitespace-nowrap">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 shrink-0"></span>
                  <span>Nhượng quyền Kiosk di động</span>
                </button>
              </li>
              <li>
                <button onClick={() => onLinkClick('contact')} className="text-slate-600 hover:text-blue-600 cursor-pointer transition-colors inline-flex items-center whitespace-nowrap">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 shrink-0"></span>
                  <span>Cung cấp bữa sáng văn phòng</span>
                </button>
              </li>
              <li>
                <span className="text-slate-600 inline-flex items-center whitespace-nowrap">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 mr-1.5 shrink-0" />
                  <span>Chứng nhận ATVSTP quốc gia</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Lower row details - compact and clean single-line on sm+ */}
        <div className="border-t border-slate-200 pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span className="whitespace-nowrap">
            &copy; {currentYear} Lành &amp; Sạch. Bảo lưu toàn bộ quyền thương hiệu.
          </span>
          <span className="text-[11px] text-slate-400 whitespace-nowrap">
            Hệ thống quầy Kiosk xanh • TP. Hồ Chí Minh
          </span>
        </div>
      </div>
    </footer>
  );
}
