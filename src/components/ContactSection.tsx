import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, Building, ShieldCheck } from 'lucide-react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [type, setType] = useState('promotion'); // promotion, franchise, office
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API submit
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setType('promotion');
    setMessage('');
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Info Side: 5 Columns */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-xs font-bold tracking-widest text-blue-600 uppercase block">
                Hợp tác &amp; Liên hệ
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-800 tracking-tight leading-tight">
                Gắn Kết Cùng Sữa Xanh
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Cho dù bạn là khách hàng cá nhân muốn săn mã ưu đãi giảm giá, doanh nghiệp muốn tổ chức bữa sáng dinh dưỡng định kỳ cho nhân viên, hay đối tác yêu mến mô hình muốn nhượng quyền thương hiệu (kiosk) – chúng tôi luôn sẵn lòng chào đón.
              </p>
            </div>

            {/* Quick benefits grids for partner */}
            <div className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 mt-0.5 border border-blue-100">
                  <ShieldCheck className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-800 text-sm">Hợp tác nhượng quyền tối giản</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Vốn cực nhỏ, bàn giao tủ sấy giữ nhiệt và quy trình pha chế sữa trong 3 ngày, thu hồi vốn nhanh.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded bg-blue-50 flex items-center justify-center text-blue-500 shrink-0 mt-0.5 border border-blue-100">
                  <Building className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-800 text-sm">Dịch vụ ăn sáng văn phòng trọn gói</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Đặt định kỳ theo tuần/tháng, giao tận văn phòng, đầy đủ hóa đơn chứng từ, chiết khấu lên đến 20%.</p>
                </div>
              </div>
            </div>

            {/* General contacts */}
            <div className="text-xs text-slate-600 space-y-1 bg-slate-50 p-4.5 rounded border border-slate-200 mt-6">
              <span className="font-bold block text-blue-600">🏢 TRỤ SỞ CHÍNH SỮA XANH</span>
              <p>Địa chỉ: 296 Võ Thành Trang, Phường Bảy Hiền, TP. Hồ Chí Minh</p>
              <p>Hotline hỗ trợ: 082.559.6160</p>
              <p>Fanpage: facebook.com/TuiConBanSuaHat</p>
            </div>
          </div>

          {/* Form Side: 7 Columns */}
          <div className="lg:col-span-7 bg-slate-50 rounded border border-slate-200 p-6 sm:p-10 shadow-md flex flex-col justify-center">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Họ và tên của bạn:</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ví dụ: Trần Văn B"
                      className="w-full bg-white px-4 py-3 border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded text-sm transition-all focus:outline-none text-slate-800 placeholder-slate-400"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Số điện thoại liên hệ:</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ví dụ: 0901xxxxxx"
                      className="w-full bg-white px-4 py-3 border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded text-sm transition-all focus:outline-none text-slate-800 placeholder-slate-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Địa chỉ Email:</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Vi dụ: contact@domain.com"
                      className="w-full bg-white px-4 py-3 border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded text-sm transition-all focus:outline-none text-slate-800 placeholder-slate-400"
                    />
                  </div>

                  {/* Query Type */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Mục đích liên hệ:</label>
                    <div className="relative">
                      <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="w-full bg-white px-4 py-3 border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded text-sm transition-all focus:outline-none appearance-none pr-10 text-slate-800"
                      >
                        <option value="promotion" className="bg-white text-slate-800">Đăng ký nhận mã giảm 20% (Cá nhân)</option>
                        <option value="franchise" className="bg-white text-slate-800">Yêu cầu tư vấn nhượng quyền quầy</option>
                        <option value="office" className="bg-white text-slate-800">Cung cấp bữa sáng định kỳ cho Công ty</option>
                        <option value="other" className="bg-white text-slate-800">Ý kiến đóng góp / Khác</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Lời nhắn hoặc yêu cầu chi tiết (Tùy chọn):</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hãy ghi chi tiết số lượng phần ăn, thời gian giao hoặc địa bàn bạn dự kiến muốn mở quầy để chúng tôi chuẩn bị thông tin nhé..."
                    className="w-full bg-white px-4 py-3 border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded text-sm transition-all focus:outline-none resize-none text-slate-800 placeholder-slate-400"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center space-x-2 btn-3d-blue py-3.5 text-xs font-bold uppercase tracking-wider cursor-pointer text-white bg-blue-600 hover:bg-blue-700"
                >
                  <Send className="w-4 h-4" />
                  <span>Gửi Thông Tin Liên Hệ</span>
                </button>
              </form>
            ) : (
              /* Success State */
              <div className="text-center space-y-5 py-6 animate-fade-in-up">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto text-blue-600 border border-blue-100">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-display font-extrabold text-slate-800">Thông Tin Đã Được Gửi Đi!</h4>
                  <p className="text-sm text-slate-600 px-6 max-w-md mx-auto">
                    Cảm ơn <strong className="text-blue-600">{name}</strong>! Chúng tôi đã nhận được thông tin liên hệ về <strong className="text-blue-600">{
                      type === 'promotion' ? 'Mã ưu đãi cá nhân' :
                      type === 'franchise' ? 'Nhượng quyền thương hiệu' :
                      type === 'office' ? 'Bữa sáng doanh nghiệp' : 'Ý kiến đóng góp'
                    }</strong>. Nhân viên hỗ trợ sẽ liên lạc với bạn qua số điện thoại <strong className="text-blue-600">{phone}</strong> trong vòng tối đa 2 giờ làm việc.
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="btn-3d-slate px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-700"
                  >
                    Gửi lại liên hệ khác
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
