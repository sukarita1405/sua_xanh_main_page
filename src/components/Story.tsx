import React from 'react';
import { Heart, Wheat, Clock, ChevronRight } from 'lucide-react';

interface StoryProps {
  onLearnMoreClick: (sectionId: string) => void;
}

export default function Story({ onLearnMoreClick }: StoryProps) {
  const pillars = [
    {
      icon: <Heart className="w-6 h-6 text-blue-500" />,
      title: 'Sữa Hạt 100% Nguyên Chất',
      description: 'Lựa chọn kỹ càng các loại hạt nhập khẩu hữu cơ như óc chó, macca, hạnh nhân hòa quyện với hạt sen thuần Việt. Cam kết không dùng sữa đặc, không chất bảo quản, chỉ tạo ngọt tự nhiên bằng quả chà là ngọt thanh nhẹ nhàng.',
      bgColor: 'bg-blue-50/50',
      borderColor: 'border-blue-100',
    },
    {
      icon: <Wheat className="w-6 h-6 text-emerald-500" />,
      title: 'Tinh Hoa Tinh Bột Phức Hợp',
      description: 'Nói KHÔNG với các món chiên dầu mỡ. Chuối dẻo hấp cách thủy xốt cốt dừa mộc mạc và khoai lang mật vàng đượm ấm bụng cung cấp dồi dào chất xơ tự nhiên, kali, sắt và khoáng chất, giúp duy trì mức đường huyết ổn định.',
      bgColor: 'bg-emerald-50/50',
      borderColor: 'border-emerald-100',
    },
    {
      icon: <Clock className="w-6 h-6 text-sky-500" />,
      title: 'Phục Vụ Nhanh Gọn 30 Giây',
      description: 'Chúng tôi hiểu buổi sáng đô thị cực kỳ hối hả. Nhờ mô hình quầy di động (kiosk) gọn gàng, tủ nhiệt giữ nóng chuyên dụng, bạn chỉ mất đúng 30 giây rẽ qua là đã cầm trên tay gói combo sữa khoai dẻo thơm, nóng hổi.',
      bgColor: 'bg-sky-50/50',
      borderColor: 'border-sky-100',
    },
  ];

  return (
    <section id="story" className="py-20 md:py-28 bg-slate-50 border-y border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title / Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-blue-600 uppercase block">
            Câu chuyện thương hiệu
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-800 tracking-tight galaxy-glowing-text">
            Khi Sức Khỏe Gặp Gỡ Sự Tiện Lợi Buổi Sáng
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Hàng triệu người trẻ đô thị đang bỏ bữa sáng hoặc nạp vào cơ thể những món ăn nhanh nhiều dầu mỡ, nhiều đường tinh luyện do không có thời gian. <strong>Sữa Xanh</strong> được ra đời với sứ mệnh mang đến giải pháp thay thế hoàn hảo: thuần thực vật, mộc mạc, lành mạnh mà vẫn cực kỳ nhanh chóng.
          </p>
        </div>

        {/* Real photo band */}
        <div className="rounded-2xl overflow-hidden border border-blue-500/10 shadow-[0_10px_30px_rgba(14,165,233,0.08)] mb-20">
          <img
            src="/images/sx-quay-day-chai.jpg"
            alt="Dàn sữa hạt tươi nấu mới mỗi ngày tại quầy Sữa Xanh"
            className="w-full h-56 sm:h-72 md:h-96 object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Content Section (Visual + Highlights) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-bold text-slate-800 leading-snug">
              Trả lại hương vị nguyên bản của nông sản Việt
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Chúng tôi trân quý hạt ngọc trời ban và những củ khoai lang chín mật, quả chuối chín cây từ vườn Nam Bộ. Không đao to búa lớn, bữa sáng tại quầy <strong>Sữa Xanh</strong> là ly sữa hạt xay nguyên hạt thơm béo, là món khoai chuối trứng ấm nóng mộc mạc.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Mỗi chai sữa hạt đều được nấu mới mỗi ngày, giữ nguyên nguồn dinh dưỡng, không chất bảo quản - đúng với tinh thần của chuỗi sữa hạt lâu đời nhất Sài Gòn suốt 12 năm qua.
            </p>
            <div className="pt-4 flex">
              <button
                onClick={() => onLearnMoreClick('menu')}
                className="inline-flex items-center space-x-1.5 text-blue-600 font-bold hover:text-blue-700 text-xs sm:text-sm uppercase tracking-wider transition-colors group cursor-pointer"
              >
                <span>Khám phá thực đơn tự nhiên</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="card-3d p-6 border-blue-500/10 space-y-3">
              <span className="text-3xl">🌱</span>
              <h4 className="font-display font-bold text-slate-800 text-sm sm:text-base">Thuần Chay 100%</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Không chứa sữa bò, lactose, phù hợp cho cả người ăn chay hay dị ứng sữa bò.
              </p>
            </div>
            <div className="card-3d p-6 border-blue-500/10 space-y-3">
              <span className="text-3xl">❌</span>
              <h4 className="font-display font-bold text-slate-800 text-sm sm:text-base">0% Đường Hoá Học</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Nói không với siro nhân tạo, chất bảo quản và phụ gia tạo độ sánh giả tạo.
              </p>
            </div>
            <div className="card-3d p-6 border-blue-500/10 space-y-3">
              <span className="text-3xl">🔋</span>
              <h4 className="font-display font-bold text-slate-800 text-sm sm:text-base">No Lâu Bền Bỉ</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Nhờ tinh bột phức hấp thu chậm trong khoai lang giúp giữ năng lượng ổn định, tránh sụt đường huyết giữa buổi.
              </p>
            </div>
            <div className="card-3d p-6 border-blue-500/10 space-y-3">
              <span className="text-3xl">🚲</span>
              <h4 className="font-display font-bold text-slate-800 text-sm sm:text-base">Sống Xanh Bảo Vệ Môi Trường</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Khuyến khích mang bình nước cá nhân để giảm giá 3,000đ. Bao bì khoai, chuối bằng giấy Kraft dễ phân hủy sinh học.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Pillars Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg border card-3d flex flex-col justify-between`}
            >
              <div className="space-y-4">
                <div className="w-10 h-10 bg-blue-50 rounded flex items-center justify-center shadow-sm border border-blue-100">
                  {pillar.icon}
                </div>
                <h3 className="text-base sm:text-lg font-display font-bold text-slate-800">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
