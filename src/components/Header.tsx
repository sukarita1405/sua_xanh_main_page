import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X, ArrowRight, Phone } from 'lucide-react';

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
  currentPage?: 'home' | 'recruitment';
}

export default function Header({ onNavClick, currentPage = 'home' }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(currentPage === 'recruitment' ? 'recrui' : 'home');

  useEffect(() => {
    if (currentPage === 'recruitment') {
      setActiveSection('recrui');
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['home', 'story', 'menu', 'planner', 'stalls', 'faq'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const navItems = [
    { label: 'Trang Chủ', id: 'home' },
    { label: 'Câu Chuyện', id: 'story' },
    { label: 'Thực Đơn', id: 'menu' },
    { label: 'Tự Thiết Kế', id: 'planner' },
    { label: 'Tìm Quầy', id: 'stalls' },
    { label: 'Tuyển dụng', id: 'recrui'},
    { label: 'Hỏi Đáp', id: 'faq' },
  ];

  const handleItemClick = (id: string) => {
    onNavClick(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-blue-500/10 shadow-[0_4px_20px_rgba(14,165,233,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            onClick={() => handleItemClick('home')}
            className="flex items-center space-x-2.5 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
              <Leaf className="w-5 h-5 text-blue-500 fill-blue-500/10" />
            </div>
            <div>
              <span className="block font-display font-extrabold text-lg text-slate-800 tracking-tight leading-none">
                LÀNH <span className="text-blue-500 font-semibold">&amp; SẠCH</span>
              </span>
              <span className="block text-[9px] text-slate-500 font-bold tracking-[0.15em] uppercase mt-0.5">
                Sữa hạt &amp; Ăn sáng
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`px-3.5 py-1.5 rounded text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeSection === item.id
                    ? 'text-blue-600 bg-blue-500/10 border border-blue-500/20 shadow-sm'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-blue-500/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Call To Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:0901234561"
              className="flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-500" />
              <span>0901.234.561</span>
            </a>
            <button
              onClick={() => handleItemClick('planner')}
              className="inline-flex items-center space-x-2 btn-3d-blue px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              <span>Đặt Bữa Sáng</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded text-slate-600 hover:text-blue-600 hover:bg-blue-500/5 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-blue-500/10 px-4 pt-2 pb-6 space-y-2 shadow-lg animate-fade-in-up">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={`block w-full text-left px-4 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all ${
                activeSection === item.id
                  ? 'text-blue-600 bg-blue-500/10'
                  : 'text-slate-600 hover:text-blue-600 hover:bg-blue-500/5'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-blue-500/10 flex flex-col space-y-4">
            <a
              href="tel:0901234561"
              className="flex items-center space-x-3 px-4 py-2 text-slate-600 hover:text-blue-600 text-xs font-bold uppercase tracking-wider"
            >
              <Phone className="w-5 h-5 text-blue-500" />
              <span>Hotline: 0901.234.561</span>
            </a>
            <button
              onClick={() => handleItemClick('planner')}
              className="w-full justify-center inline-flex items-center space-x-2 btn-3d-blue px-6 py-3 rounded text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              <span>Đặt Bữa Sáng Ngay</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
