import React, { useState, useEffect, useRef } from 'react';
import {
  Briefcase,
  Calendar,
  Clock,
  MapPin,
  Phone,
  User,
  Bike,
  Zap,
  Bus,
  MessageSquare,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  Award,
  Coffee,
  ArrowRight,
  Check,
  AlertCircle
} from 'lucide-react';

interface RecruitmentPageProps {
  onNavigateHome: (sectionId?: string) => void;
}

interface ApplicationData {
  id: string;
  fullName: string;
  phone: string;
  birthMonth: string;
  birthYear: string;
  address: string;
  preferredDistricts: string[];
  transportation: 'Xe máy' | 'Xe điện' | 'Xe bus';
  contactMethod: 'Zalo' | 'Gọi điện trực tiếp';
  preferredShift: string;
  notes?: string;
  createdAt: string;
}

// Visual slides for the horizontal image slider
const SLIDER_IMAGES = [
  {
    id: 1,
    image: '/src/assets/images/kiosk_staff_smile_1788665091500.jpg',
    title: 'Phục Vụ Bữa Sáng Bằng Nụ Cười',
    subtitle: 'Năng lượng tích cực lan tỏa đến từng khách hàng trên mọi cung đường Sài Gòn mỗi sớm mai.',
    tag: 'Môi Trường Thân Thiện'
  },
  {
    id: 2,
    image: '/src/assets/images/kiosk_team_energy_1788665104734.jpg',
    title: 'Đội Ngũ Trẻ Trung & Nhiệt Huyết',
    subtitle: 'Đồng đội gắn kết, hỗ trợ lẫn nhau, môi trường tôn trọng và tạo cơ hội phát triển tối đa.',
    tag: 'Văn Hóa Gắn Kết'
  },
  {
    id: 3,
    image: '/src/assets/images/nut_milk_bottle_1784087725157.jpg',
    title: 'Sản Phẩm Sạch Từ Tự Nhiên',
    subtitle: 'Tự hào trao tận tay khách hàng những chai sữa hạt óc chó, hạnh nhân, sen dừa nguyên chất.',
    tag: '100% Thuần Tự Nhiên'
  },
  {
    id: 4,
    image: '/src/assets/images/hero_breakfast_1784087707586.jpg',
    title: 'Bữa Sáng Dinh Dưỡng Miễn Phí',
    subtitle: 'Mỗi ngày làm việc đều được nạp năng lượng bằng sữa hạt ấm và củ quả lành mạnh miễn phí.',
    tag: 'Phúc Lợi Hàng Ngày'
  },
  {
    id: 5,
    image: '/src/assets/images/steamed_banana_1784087740481.jpg',
    title: 'Đào Tạo Kỹ Năng Chuyên Nghiệp',
    subtitle: 'Học cách vận hành quầy, quản lý hàng hóa, kỹ năng giao tiếp và làm việc nhóm hiệu quả.',
    tag: 'Đào Tạo Bài Bản'
  }
];

// District options explicitly specified by user: Quận 10, 1, 2, 3, 4, Tân Bình
const DISTRICT_OPTIONS = [
  { id: 'q1', name: 'Quận 1', note: 'Bến Nghé, Đa Kao, Nguyễn Thị Minh Khai' },
  { id: 'q2', name: 'Quận 2 (TP. Thủ Đức)', note: 'Trần Não, Thảo Điền, An Phú' },
  { id: 'q3', name: 'Quận 3', note: 'Võ Văn Tần, CMT8, Nam Kỳ Khởi Nghĩa' },
  { id: 'q4', name: 'Quận 4', note: 'Hoàng Diệu, Bến Vân Đồn, Đoàn Văn Bơ' },
  { id: 'q10', name: 'Quận 10', note: 'Sư Vạn Hạnh, Ba Tháng Hai, Lý Thường Kiệt' },
  { id: 'qtb', name: 'Tân Bình', note: 'Cộng Hòa, Hoàng Văn Thụ, Trường Chinh' },
];

// Transportation options explicitly specified by user: Xe máy, xe điện, xe bus
const TRANSPORTATION_OPTIONS = [
  {
    id: 'Xe máy',
    name: 'Xe máy',
    desc: 'Chủ động di chuyển giữa các tuyến đường',
    icon: Bike
  },
  {
    id: 'Xe điện',
    name: 'Xe điện',
    desc: 'Bảo vệ môi trường, di chuyển êm ái',
    icon: Zap
  },
  {
    id: 'Xe bus',
    name: 'Xe bus',
    desc: 'Tiện lợi với các điểm dừng gần Kiosk',
    icon: Bus
  },
];

// Contact method options explicitly specified by user: Zalo, Gọi điện trực tiếp
const CONTACT_METHODS = [
  {
    id: 'Zalo',
    name: 'Nhắn tin qua Zalo',
    desc: 'Trao đổi nhanh qua tin nhắn, gửi lịch hẹn chi tiết',
    icon: MessageSquare
  },
  {
    id: 'Gọi điện trực tiếp',
    name: 'Gọi điện thoại trực tiếp',
    desc: 'Bộ phận nhân sự trao đổi trực tiếp qua cuộc gọi',
    icon: Phone
  },
];

const MONTHS = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'));
const YEARS = Array.from({ length: 26 }, (_, i) => String(2008 - i)); // 2008 down to 1983

export default function RecruitmentPage({ onNavigateHome }: RecruitmentPageProps) {
  // Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Form States
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [birthMonth, setBirthMonth] = useState('01');
  const [birthYear, setBirthYear] = useState('2002');
  const [address, setAddress] = useState('');
  const [selectedDistricts, setSelectedDistricts] = useState<string[]>(['Quận 1']);
  const [transportation, setTransportation] = useState<'Xe máy' | 'Xe điện' | 'Xe bus'>('Xe máy');
  const [contactMethod, setContactMethod] = useState<'Zalo' | 'Gọi điện trực tiếp'>('Zalo');
  const [preferredShift, setPreferredShift] = useState('Ca sáng sớm (5h30 - 9h00)');
  const [notes, setNotes] = useState('');

  // Status & Validation
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [applicationReceipt, setApplicationReceipt] = useState<ApplicationData | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Auto scroll slider
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDER_IMAGES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDER_IMAGES.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDER_IMAGES.length) % SLIDER_IMAGES.length);
  };

  const handleToggleDistrict = (districtName: string) => {
    if (selectedDistricts.includes(districtName)) {
      if (selectedDistricts.length === 1) return; // keep at least one
      setSelectedDistricts(selectedDistricts.filter((d) => d !== districtName));
    } else {
      setSelectedDistricts([...selectedDistricts, districtName]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validations
    if (!fullName.trim()) {
      setErrorMessage('Vui lòng nhập họ và tên của bạn.');
      return;
    }

    const cleanPhone = phone.trim().replace(/[\s.-]/g, '');
    if (!/^0[0-9]{9}$/.test(cleanPhone)) {
      setErrorMessage('Số điện thoại không hợp lệ. Vui lòng nhập 10 số (bắt đầu bằng số 0).');
      return;
    }

    if (!address.trim()) {
      setErrorMessage('Vui lòng nhập địa chỉ hiện tại để chúng tôi sắp xếp quầy gần bạn nhất.');
      return;
    }

    if (selectedDistricts.length === 0) {
      setErrorMessage('Vui lòng chọn ít nhất 1 khu vực bạn muốn làm việc.');
      return;
    }

    setIsSubmitting(true);

    const newApplication: ApplicationData = {
      id: `LS-TD-${Date.now().toString().slice(-6)}`,
      fullName: fullName.trim(),
      phone: cleanPhone,
      birthMonth,
      birthYear,
      address: address.trim(),
      preferredDistricts: selectedDistricts,
      transportation,
      contactMethod,
      preferredShift,
      notes: notes.trim(),
      createdAt: new Date().toISOString()
    };

    // Simulate server response and persist locally
    setTimeout(() => {
      try {
        const stored = localStorage.getItem('lanhvasach_recruitment_apps');
        const list = stored ? JSON.parse(stored) : [];
        list.push(newApplication);
        localStorage.setItem('lanhvasach_recruitment_apps', JSON.stringify(list));
      } catch (err) {
        console.error('LocalStorage write error', err);
      }

      setApplicationReceipt(newApplication);
      setIsSubmitting(false);
      setIsSuccess(true);

      // Scroll to confirmation panel
      const formCard = document.getElementById('application-form-card');
      if (formCard) {
        formCard.scrollIntoView({ behavior: 'smooth' });
      }
    }, 800);
  };

  const handleResetForm = () => {
    setFullName('');
    setPhone('');
    setAddress('');
    setNotes('');
    setIsSuccess(false);
    setApplicationReceipt(null);
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen text-slate-800">
      {/* Breadcrumb Navigation & Back To Home */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center justify-between">
          <nav className="flex items-center space-x-2 text-xs font-semibold text-slate-500">
            <button
              onClick={() => onNavigateHome('home')}
              className="hover:text-blue-600 transition-colors cursor-pointer"
            >
              Trang chủ
            </button>
            <span>/</span>
            <span className="text-blue-600 font-bold">Tuyển dụng Kiosk Lành &amp; Sạch</span>
          </nav>

          <button
            onClick={() => onNavigateHome('home')}
            className="inline-flex items-center space-x-1.5 text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors cursor-pointer bg-white px-3 py-1.5 rounded border border-slate-200 shadow-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Quay lại trang chủ</span>
          </button>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          {/* Decorative subtle background accents */}
          <div className="absolute -right-16 -top-16 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute right-1/4 -bottom-20 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl space-y-5">
            <div className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-md border border-white/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>Gia nhập Đội ngũ Kiosk Lành &amp; Sạch 2026</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight leading-tight">
              Bắt Đầu Ngày Mới Tràn Năng Lượng &amp; Thu Nhập Ổn Định
            </h1>

            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Hệ thống quầy sữa hạt hữu cơ &amp; ăn sáng lành mạnh tuyển dụng vị trí <strong>Nhân viên Quầy Kiosk Sáng</strong> và <strong>Trưởng Ca Kiosk</strong> tại các quận trung tâm TP.HCM. Ca làm linh hoạt, môi trường thân thiện, không yêu cầu kinh nghiệm, được đào tạo bài bản!
            </p>

            {/* Key benefits highlight badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 text-xs font-bold">
              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-lg p-3">
                <Clock className="w-4 h-4 text-cyan-300 mb-1" />
                <span>Ca 5h30 - 9h00 sáng</span>
                <p className="text-[11px] font-normal text-blue-200 mt-0.5">Không vướng lịch học</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-lg p-3">
                <Award className="w-4 h-4 text-yellow-300 mb-1" />
                <span>25k - 35k / giờ</span>
                <p className="text-[11px] font-normal text-blue-200 mt-0.5">+ Thưởng doanh số ngày</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-lg p-3">
                <Coffee className="w-4 h-4 text-emerald-300 mb-1" />
                <span>Bữa sáng miễn phí</span>
                <p className="text-[11px] font-normal text-blue-200 mt-0.5">01 phần sữa &amp; củ quả</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-lg p-3">
                <ShieldCheck className="w-4 h-4 text-purple-300 mb-1" />
                <span>Cấp đồng phục 100%</span>
                <p className="text-[11px] font-normal text-blue-200 mt-0.5">Tạp dề, áo, nón quầy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HORIZONTAL IMAGE SLIDER (Slider ảnh lướt ngang) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold tracking-widest text-blue-600 uppercase block">
                Không gian &amp; Hoạt động
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-800">
                Hình Ảnh Thực Tế Đội Ngũ Kiosk
              </h2>
            </div>

            {/* Slider navigation buttons */}
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrevSlide}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-colors cursor-pointer"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextSlide}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-colors cursor-pointer"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Slider Container */}
          <div
            ref={sliderRef}
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
            className="relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-200 shadow-md h-[340px] sm:h-[440px]"
          >
            {SLIDER_IMAGES.map((item, index) => {
              const isActive = index === currentSlide;
              return (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
                    <div className="max-w-2xl space-y-2 transform transition-all duration-500">
                      <span className="inline-block bg-blue-600/90 backdrop-blur-md text-white px-3 py-0.5 rounded text-[11px] font-extrabold uppercase tracking-wider">
                        {item.tag}
                      </span>
                      <h3 className="text-xl sm:text-3xl font-display font-bold leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-200 max-w-xl font-normal leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Slide Indicator Dots */}
            <div className="absolute bottom-4 right-6 z-20 flex space-x-2">
              {SLIDER_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    i === currentSlide ? 'w-7 bg-blue-500' : 'w-2 bg-white/50 hover:bg-white'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Form & Job Description Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Job Overview & Requirements (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">
                  Vị trí tuyển dụng
                </span>
                <h3 className="text-xl font-display font-bold text-slate-800 mt-1">
                  Nhân Viên Phục Vụ Bữa Sáng Kiosk
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Hình thức: Part-time / Full-time • Số lượng: 15 bạn
                </p>
              </div>

              {/* Work schedule */}
              <div className="space-y-3 pt-4 border-t border-slate-100 text-xs">
                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-700 block">Khung giờ làm việc linh động:</strong>
                    <ul className="list-disc list-inside text-slate-600 space-y-1 mt-1">
                      <li><strong>Ca A (Ca chuẩn sáng):</strong> 5h30 – 9h00 (3.5 tiếng)</li>
                      <li><strong>Ca B (Ca sáng dài):</strong> 6h00 – 11h30 (5.5 tiếng)</li>
                      <li>Đăng ký linh hoạt 4 - 6 buổi/tuần tùy lịch học hoặc việc bận</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-3 pt-2">
                  <Briefcase className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-700 block">Mô tả công việc chính:</strong>
                    <ul className="list-disc list-inside text-slate-600 space-y-1 mt-1">
                      <li>Chào hỏi, đóng gói và trao bữa sáng cho khách hàng mang đi</li>
                      <li>Thu ngân qua mã QR / tiền mặt và vệ sinh quầy kiosk cuối ca</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-3 pt-2">
                  <HeartHandshake className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-700 block">Yêu cầu ứng viên:</strong>
                    <ul className="list-disc list-inside text-slate-600 space-y-1 mt-1">
                      <li>Độ tuổi từ 18 - 28 tuổi (ưu tiên sinh viên cần việc làm thêm ca sáng)</li>
                      <li>Tính cách vui vẻ, niềm nở, nhanh nhẹn, có tính kỷ luật giờ giấc</li>
                      <li>Có phương tiện di chuyển cá nhân hoặc xe bus thuận tiện</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Direct Support Hotline */}
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-bold text-blue-600 block">
                    Hotline Tuyển Dụng Trực Tiếp
                  </span>
                  <a
                    href="tel:0901234561"
                    className="font-bold text-slate-800 hover:text-blue-600 transition-colors text-sm"
                  >
                    0901.234.561 (Ms. Mai - P. Nhân Sự)
                  </a>
                  <span className="text-[10px] text-slate-500 block mt-0.5">
                    Hỗ trợ Zalo &amp; cuộc gọi từ 7h30 - 20h30 hàng ngày
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: REGISTRATION FORM (Form đăng ký) (7 Cols) */}
          <div id="application-form-card" className="lg:col-span-7">
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-9 shadow-md">
              
              {!isSuccess ? (
                <div>
                  {/* Form Header */}
                  <div className="mb-6 pb-5 border-b border-slate-100">
                    <span className="text-xs font-bold tracking-wider text-blue-600 uppercase block">
                      Đăng Ký Ứng Tuyển Nhanh
                    </span>
                    <h3 className="text-2xl font-display font-extrabold text-slate-800 mt-1">
                      Điền Thông Tin Ứng Viên
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Chỉ mất 2 phút. Bộ phận nhân sự sẽ liên lạc với bạn qua Zalo hoặc điện thoại trong vòng 24 giờ làm việc.
                    </p>
                  </div>

                  {/* Error Notification */}
                  {errorMessage && (
                    <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex items-start space-x-3 text-red-700 text-xs">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* 1. Họ tên & 2. Số điện thoại */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Họ tên */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                          1. Họ và tên của bạn: <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                          <input
                            type="text"
                            required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Ví dụ: Nguyễn Văn An"
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-400"
                          />
                        </div>
                      </div>

                      {/* Số điện thoại */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                          2. Số điện thoại: <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Ví dụ: 0901234567"
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-400"
                          />
                        </div>
                      </div>
                    </div>

                    {/* 3. Tháng năm sinh */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        3. Tháng và Năm sinh: <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="relative">
                          <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                          <select
                            value={birthMonth}
                            onChange={(e) => setBirthMonth(e.target.value)}
                            className="w-full pl-10 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all appearance-none cursor-pointer"
                          >
                            {MONTHS.map((m) => (
                              <option key={m} value={m}>Tháng {m}</option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                            ▼
                          </div>
                        </div>

                        <div className="relative">
                          <select
                            value={birthYear}
                            onChange={(e) => setBirthYear(e.target.value)}
                            className="w-full px-4 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all appearance-none cursor-pointer"
                          >
                            {YEARS.map((y) => (
                              <option key={y} value={y}>Năm {y}</option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                            ▼
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 4. Địa chỉ */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        4. Địa chỉ nơi ở hiện tại: <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          required
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="Ví dụ: 120/4 Trần Hưng Đạo, Quận 1, TP.HCM"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    {/* 5. Chọn khu vực làm việc (quận 10, 1, 2, 3, 4, Tân Bình) */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                          5. Chọn khu vực làm việc mong muốn: <span className="text-red-500">*</span>
                        </label>
                        <span className="text-[11px] text-slate-500">
                          (Có thể chọn nhiều quận thuận tiện)
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {DISTRICT_OPTIONS.map((dist) => {
                          const isSelected = selectedDistricts.includes(dist.name);
                          return (
                            <button
                              key={dist.id}
                              type="button"
                              onClick={() => handleToggleDistrict(dist.name)}
                              className={`p-3 rounded-lg border text-left transition-all cursor-pointer flex flex-col justify-between ${
                                isSelected
                                  ? 'bg-blue-50 border-blue-600 text-blue-800 shadow-sm ring-1 ring-blue-500/20'
                                  : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-700'
                              }`}
                            >
                              <div className="flex items-center justify-between w-full mb-1">
                                <span className="font-bold text-xs">{dist.name}</span>
                                <div
                                  className={`w-4 h-4 rounded border flex items-center justify-center ${
                                    isSelected
                                      ? 'bg-blue-600 border-blue-600 text-white'
                                      : 'border-slate-300 bg-white'
                                  }`}
                                >
                                  {isSelected && <Check className="w-3 h-3" />}
                                </div>
                              </div>
                              <span className="text-[10px] text-slate-500 leading-tight">
                                {dist.note}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* 6. Chọn phương tiện di chuyển (Xe máy, xe điện, xe bus) */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        6. Chọn phương tiện di chuyển đi làm: <span className="text-red-500">*</span>
                      </label>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {TRANSPORTATION_OPTIONS.map((item) => {
                          const isSelected = transportation === item.id;
                          const IconComp = item.icon;
                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => setTransportation(item.id as any)}
                              className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer flex items-center space-x-3 ${
                                isSelected
                                  ? 'bg-blue-50 border-blue-600 text-blue-800 shadow-sm ring-1 ring-blue-500/20'
                                  : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-700'
                              }`}
                            >
                              <div
                                className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                                  isSelected ? 'bg-blue-600 text-white' : 'bg-white text-slate-600 border border-slate-200'
                                }`}
                              >
                                <IconComp className="w-5 h-5" />
                              </div>
                              <div className="flex-1">
                                <span className="block font-bold text-xs">{item.name}</span>
                                <span className="text-[10px] text-slate-500">{item.desc}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* 7. Phương thức liên hệ tuyển dụng (Zalo, Gọi điện trực tiếp) */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        7. Phương thức liên hệ phỏng vấn: <span className="text-red-500">*</span>
                      </label>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {CONTACT_METHODS.map((item) => {
                          const isSelected = contactMethod === item.id;
                          const IconComp = item.icon;
                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => setContactMethod(item.id as any)}
                              className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer flex items-center space-x-3 ${
                                isSelected
                                  ? 'bg-blue-50 border-blue-600 text-blue-800 shadow-sm ring-1 ring-blue-500/20'
                                  : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-700'
                              }`}
                            >
                              <div
                                className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                                  isSelected ? 'bg-blue-600 text-white' : 'bg-white text-slate-600 border border-slate-200'
                                }`}
                              >
                                <IconComp className="w-5 h-5" />
                              </div>
                              <div className="flex-1">
                                <span className="block font-bold text-xs">{item.name}</span>
                                <span className="text-[10px] text-slate-500">{item.desc}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Extra Notes / Preferred shift */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                          Khung ca mong muốn:
                        </label>
                        <select
                          value={preferredShift}
                          onChange={(e) => setPreferredShift(e.target.value)}
                          className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all cursor-pointer"
                        >
                          <option value="Ca sáng sớm (5h30 - 9h00)">Ca sáng sớm (5h30 - 9h00)</option>
                          <option value="Ca sáng dài (6h00 - 11h30)">Ca sáng dài (6h00 - 11h30)</option>
                          <option value="Xoay ca linh hoạt theo tuần">Xoay ca linh hoạt theo tuần</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                          Ghi chú thêm (Tùy chọn):
                        </label>
                        <input
                          type="text"
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="Ví dụ: Đã có kinh nghiệm phục vụ cà phê / quán ăn..."
                          className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4 border-t border-slate-100">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center space-x-2 btn-3d-blue py-3.5 px-6 rounded-lg text-xs font-bold uppercase tracking-wider cursor-pointer transition-all disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Đang gửi hồ sơ tuyển dụng...</span>
                          </>
                        ) : (
                          <>
                            <ArrowRight className="w-4 h-4" />
                            <span>Nộp Hồ Sơ Đăng Ký Tuyển Dụng</span>
                          </>
                        )}
                      </button>
                      <p className="text-center text-[11px] text-slate-400 mt-2.5">
                        Cam kết bảo mật thông tin cá nhân. Phòng nhân sự không thu bất kỳ khoản phí nào khi ứng tuyển.
                      </p>
                    </div>
                  </form>
                </div>
              ) : (
                /* SUCCESS RECEIPT STATE */
                <div className="space-y-6 py-4 animate-fade-in-up">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 block">
                      Ứng tuyển thành công
                    </span>
                    <h3 className="text-2xl font-display font-bold text-slate-800">
                      Hồ Sơ Đã Được Tiếp Nhận!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Cảm ơn bạn <strong>{applicationReceipt?.fullName}</strong> đã quan tâm và đăng ký gia nhập chuỗi quầy Kiosk Lành &amp; Sạch.
                    </p>
                  </div>

                  {/* Receipt Details Card */}
                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-3 text-xs">
                    <div className="flex justify-between items-center pb-3 border-b border-slate-200 text-slate-500">
                      <span>Mã ứng tuyển:</span>
                      <strong className="text-blue-600 font-mono text-sm">{applicationReceipt?.id}</strong>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <span className="text-slate-500 block">Số điện thoại:</span>
                        <strong className="text-slate-800">{applicationReceipt?.phone}</strong>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Sinh năm:</span>
                        <strong className="text-slate-800">{applicationReceipt?.birthMonth}/{applicationReceipt?.birthYear}</strong>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <span className="text-slate-500 block">Khu vực đã chọn:</span>
                        <strong className="text-slate-800">{applicationReceipt?.preferredDistricts.join(', ')}</strong>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Phương tiện:</span>
                        <strong className="text-slate-800">{applicationReceipt?.transportation}</strong>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <span className="text-slate-500 block">Liên hệ ưu tiên qua:</span>
                        <strong className="text-emerald-700 font-bold">{applicationReceipt?.contactMethod}</strong>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Ca mong muốn:</span>
                        <strong className="text-slate-800">{applicationReceipt?.preferredShift}</strong>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-200">
                      <span className="text-slate-500 block">Địa chỉ:</span>
                      <span className="text-slate-700">{applicationReceipt?.address}</span>
                    </div>
                  </div>

                  {/* Next Steps Notification */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-xs text-blue-900 space-y-1">
                    <strong className="block font-bold">Quy trình bước tiếp theo:</strong>
                    <p>
                      Bộ phận Nhân sự Lành &amp; Sạch sẽ liên hệ bạn qua <strong>{applicationReceipt?.contactMethod}</strong> số <strong>{applicationReceipt?.phone}</strong> trong vòng <strong>24 giờ làm việc</strong> để sắp xếp lịch gặp gỡ và hướng dẫn nhận việc tại quầy thuận tiện nhất!
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <button
                      onClick={handleResetForm}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      Nộp hồ sơ khác
                    </button>
                    <button
                      onClick={() => onNavigateHome('home')}
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 btn-3d-blue px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider cursor-pointer"
                    >
                      <span>Về Trang Chủ Lành &amp; Sạch</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
