import React, { useState } from 'react';
import { STALL_LOCATIONS } from '../data/mockData';
import { StallLocation } from '../types';
import { MapPin, Phone, Clock, Search, Navigation, Compass, Star, Check } from 'lucide-react';

export default function StallLocator() {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeStallId, setActiveStallId] = useState<string>(STALL_LOCATIONS[0].id);
  const [showCopiedMessage, setShowCopiedMessage] = useState<boolean>(false);

  // Extract unique regions
  const regions = ['All', 'Quận 1', 'Quận 3', 'Quận 5', 'Quận Bình Thạnh', 'Quận Phú Nhuận'];

  const filteredStalls = STALL_LOCATIONS.filter((stall) => {
    const matchesRegion = selectedRegion === 'All' || stall.region === selectedRegion;
    const matchesSearch =
      stall.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stall.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const activeStall = STALL_LOCATIONS.find((s) => s.id === activeStallId) || STALL_LOCATIONS[0];

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(activeStall.address);
    setShowCopiedMessage(true);
    setTimeout(() => setShowCopiedMessage(false), 3000);
  };

  const getStatusBadge = (status: 'open' | 'busy' | 'closed') => {
    switch (status) {
      case 'open':
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950/40 text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-1.5 animate-pulse"></span>
            Đang Mở
          </span>
        );
      case 'busy':
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-950/40 text-amber-400 border border-amber-500/20 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-1.5"></span>
            Đông Khách
          </span>
        );
      case 'closed':
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-[#1e1b4b]/60 text-slate-400 border border-purple-500/15 uppercase tracking-wider">
            ● Đã Đóng
          </span>
        );
    }
  };

  return (
    <section id="stalls" className="py-20 md:py-28 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase block">
            Hệ thống phân phối
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-800 tracking-tight">
            Tìm Quầy Bữa Sáng Gần Nhất
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Hệ thống các quầy sữa hạt thông minh phủ sóng trên các trục đường chính và tòa nhà văn phòng tại TP.HCM. Hãy chọn điểm đỗ thuận lợi nhất trên hành trình đi làm sáng mai của bạn.
          </p>
        </div>

        {/* Interactive Layout: Search & Lists + Custom Vector Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* List & Controls: 5 Columns */}
          <div className="lg:col-span-5 flex flex-col space-y-5">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Tìm theo tên đường hoặc khu vực..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 pl-11 pr-4 py-3 border border-slate-200 focus:border-blue-500 text-slate-800 focus:ring-1 focus:ring-blue-500 rounded text-sm transition-all focus:outline-none placeholder:text-slate-400"
              />
            </div>

            {/* Region Filter Pills */}
            <div className="flex flex-wrap gap-1.5 pb-2">
              {regions.map((reg) => (
                <button
                  key={reg}
                  onClick={() => setSelectedRegion(reg)}
                  className={`px-3.5 py-1.5 rounded text-xs font-bold transition-all cursor-pointer border ${
                    selectedRegion === reg
                      ? 'bg-blue-50 border-blue-600 text-blue-700 shadow-[0_2px_4px_rgba(37,99,235,0.1)]'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300'
                  }`}
                >
                  {reg === 'All' ? 'Tất cả Quận' : reg}
                </button>
              ))}
            </div>

            {/* Stalls List */}
            <div className="overflow-y-auto space-y-4 max-h-[500px] pr-1">
              {filteredStalls.length > 0 ? (
                filteredStalls.map((stall) => {
                  const isActive = stall.id === activeStallId;
                  return (
                    <div
                      key={stall.id}
                      onClick={() => setActiveStallId(stall.id)}
                      className={`p-5 rounded border transition-all cursor-pointer text-left ${
                        isActive
                          ? 'bg-white border-blue-600 shadow-[0_4px_12px_rgba(37,99,235,0.08)] ring-1 ring-blue-500/15'
                          : 'bg-slate-50/50 border-slate-200 hover:border-blue-500/30 hover:bg-white'
                      }`}
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div className="space-y-1.5">
                          <span className="text-[9px] font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded uppercase tracking-wider">
                            {stall.region}
                          </span>
                          <h4 className="font-display font-bold text-slate-800 text-sm sm:text-base leading-tight mt-1">
                            {stall.name.split(' - ')[1]}
                          </h4>
                        </div>
                        {getStatusBadge(stall.status)}
                      </div>

                      <p className="text-xs text-slate-600 font-normal leading-relaxed mt-2.5 flex items-start">
                        <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0 mr-1.5 mt-0.5" />
                        <span>{stall.address}</span>
                      </p>

                      <div className="flex items-center justify-between border-t border-slate-100 pt-3 mt-4 text-xs">
                        <span className="text-slate-500 flex items-center">
                          <Clock className="w-3.5 h-3.5 text-blue-500 mr-1.5" />
                          {stall.openingHours}
                        </span>
                        <a
                          href={`tel:${stall.phone.replace(/\./g, '')}`}
                          onClick={(e) => e.stopPropagation()}
                          className="font-bold text-slate-600 hover:text-blue-600 transition-colors flex items-center"
                        >
                          <Phone className="w-3.5 h-3.5 text-blue-500 mr-1" />
                          {stall.phone}
                        </a>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="bg-slate-50 rounded border border-slate-200 p-8 text-center space-y-2">
                  <span className="text-3xl">🔍</span>
                  <p className="text-sm font-semibold text-slate-600">Không tìm thấy quầy nào phù hợp</p>
                  <p className="text-xs text-slate-500">Bạn hãy thử thay đổi từ khóa hoặc bộ lọc quận khác.</p>
                </div>
              )}
            </div>
          </div>

          {/* Interactive Map Mockup Panel: 7 Columns */}
          <div className="lg:col-span-7 bg-slate-50 rounded border border-slate-200 p-6 flex flex-col justify-between shadow-md relative overflow-hidden min-h-[400px]">
            {/* Top Details Panel */}
            <div className="z-10 bg-white/95 backdrop-blur-sm border border-slate-200 p-4.5 rounded shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex-1">
                <span className="text-[10px] uppercase font-bold text-slate-500">Quầy đang chọn</span>
                <h4 className="font-display font-bold text-slate-800 text-base sm:text-lg leading-tight mt-0.5">
                  {activeStall.name}
                </h4>
                <p className="text-xs text-slate-600 font-normal mt-0.5">{activeStall.address}</p>
                
                {showCopiedMessage && (
                  <div className="mt-2 text-xs text-emerald-600 font-bold flex items-center space-x-1 animate-pulse">
                    <Check className="w-3.5 h-3.5" />
                    <span>Đã sao chép địa chỉ quầy vào Clipboard!</span>
                  </div>
                )}
              </div>
              <button
                onClick={handleCopyAddress}
                className="inline-flex items-center space-x-1.5 btn-3d-blue px-4 py-2.5 rounded text-xs font-bold uppercase tracking-wider cursor-pointer self-stretch sm:self-auto justify-center"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Chỉ Đường</span>
              </button>
            </div>

            {/* Vector Styled Map Mockup Graphic */}
            <div className="absolute inset-0 bg-[#f1f5f9] -z-0 flex items-center justify-center">
              {/* Decorative grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.12]"
                style={{
                  backgroundImage: 'radial-gradient(#2563eb 1.5px, transparent 1.5px)',
                  backgroundSize: '24px 24px',
                }}
              ></div>

              {/* Mock roads and blocks */}
              <svg className="w-full h-full opacity-35 absolute inset-0" xmlns="http://www.w3.org/2000/svg">
                {/* Horizontal roads */}
                <line x1="0" y1="120" x2="1000" y2="120" stroke="#cbd5e1" strokeWidth="24" />
                <line x1="0" y1="280" x2="1000" y2="280" stroke="#cbd5e1" strokeWidth="32" />
                {/* Vertical roads */}
                <line x1="180" y1="0" x2="180" y2="1000" stroke="#cbd5e1" strokeWidth="28" />
                <line x1="620" y1="0" x2="620" y2="1000" stroke="#cbd5e1" strokeWidth="24" />
                {/* Diagonal park or river */}
                <path d="M 0 500 Q 300 450 600 520 T 1000 480" fill="none" stroke="#e2e8f0" strokeWidth="64" />
              </svg>

              {/* Interactive Floating Markers representing stalls */}
              {STALL_LOCATIONS.map((stall, index) => {
                const isActive = stall.id === activeStallId;
                // Predefined mock coordinates on the vector graphic map
                const positions = [
                  { x: '180px', y: '120px' },
                  { x: '180px', y: '280px' },
                  { x: '620px', y: '120px' },
                  { x: '620px', y: '280px' },
                  { x: '450px', y: '200px' },
                ];
                const pos = positions[index] || { x: '50%', y: '50%' };

                return (
                  <div
                    key={stall.id}
                    className="absolute cursor-pointer group transition-transform hover:scale-110"
                    style={{ left: pos.x, top: pos.y, transform: 'translate(-50%, -50%)' }}
                    onClick={() => setActiveStallId(stall.id)}
                  >
                    <div className="relative">
                      {isActive ? (
                        <>
                          <div className="absolute -inset-2 bg-blue-500/25 rounded-full animate-ping"></div>
                          <MapPin className="w-8 h-8 text-blue-600 fill-blue-50" />
                          <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white border border-slate-700 font-extrabold text-[10px] px-2 py-0.5 rounded shadow whitespace-nowrap z-20">
                            {stall.name.split(' - ')[1]}
                          </div>
                        </>
                      ) : (
                        <MapPin className="w-6 h-6 text-slate-400 fill-slate-100 hover:text-blue-500" />
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Vector Compass details */}
              <div className="absolute bottom-5 left-5 bg-white border border-slate-200 rounded-full p-2.5 shadow-sm text-blue-600">
                <Compass className="w-5 h-5 animate-spin" style={{ animationDuration: '20s' }} />
              </div>
            </div>

            {/* Bottom operational state summary */}
            <div className="z-10 bg-white border border-slate-200 p-4 rounded flex items-center justify-between text-xs sm:text-sm text-slate-700 mt-auto">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
                <span>Đánh giá trung bình hệ thống: <strong>4.9★ (350+ lượt vote)</strong></span>
              </div>
              <span className="hidden sm:inline-block text-[11px] font-bold text-blue-600 uppercase">Lành &amp; Sạch Việt Nam</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
