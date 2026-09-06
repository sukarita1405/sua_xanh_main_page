import React, { useState } from 'react';
import { MENU_ITEMS, COMBO_ITEMS } from '../data/mockData';
import { MenuItem, ComboItem } from '../types';
import { Info, Flame, Sparkles, Scale, Percent } from 'lucide-react';

interface MenuSectionProps {
  onSelectIngredient: (type: 'milk' | 'carb', id: string) => void;
}

type MenuFilter = 'all' | 'milk' | 'carb' | 'combo';

export default function MenuSection({ onSelectIngredient }: MenuSectionProps) {
  const [activeFilter, setActiveFilter] = useState<MenuFilter>('all');

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  const filteredItems = MENU_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'milk') return item.type === 'milk';
    if (activeFilter === 'carb') return item.type === 'carb';
    return false;
  });

  const showCombos = activeFilter === 'all' || activeFilter === 'combo';

  return (
    <section id="menu" className="py-20 md:py-28 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-blue-600 uppercase block">
            Thực đơn lành mạnh
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-800 tracking-tight galaxy-glowing-text">
            Menu Dinh Dưỡng Mỗi Sáng
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Mọi thành phẩm đều được tính toán kỹ càng các chỉ số dinh dưỡng (Calories, Chất xơ, Đạm) giúp bạn dễ dàng theo dõi chế độ ăn uống (Eat Clean, Giảm Cân, Sống Lành Mạnh).
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-slate-50 border border-slate-200 p-1 rounded shadow-inner space-x-1">
            {(
              [
                { label: 'Tất cả', value: 'all' },
                { label: 'Sữa Hạt Nguyên Chất', value: 'milk' },
                { label: 'Món Sáng Sợi Xơ', value: 'carb' },
                { label: 'Gói Combo Tiết Kiệm', value: 'combo' },
              ] as { label: string; value: MenuFilter }[]
            ).map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeFilter === tab.value
                    ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-md'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-blue-500/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="space-y-16">
          {/* Main Items Grid */}
          {filteredItems.length > 0 && (
            <div>
              {activeFilter === 'all' && (
                <h3 className="text-lg font-display font-bold text-slate-800 mb-6 flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span>Món Lẻ Dinh Dưỡng</span>
                </h3>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="card-3d overflow-hidden flex flex-col justify-between group bg-white border border-slate-100 shadow-sm"
                  >
                    <div>
                      {/* Product Image and badges */}
                      <div className="relative aspect-square overflow-hidden bg-slate-50">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        {/* Tags */}
                        <div className="absolute top-4 left-4 flex flex-wrap gap-1.5 max-w-[80%]">
                          {item.tags.map((tag, i) => (
                            <span
                              key={i}
                              className={`text-[9px] font-bold px-2 py-0.5 rounded shadow-sm uppercase tracking-wider ${
                                i === 0
                                  ? 'bg-blue-600 text-white'
                                  : 'bg-white/95 text-slate-600 border border-blue-100 shadow-sm'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        {/* Price Tag Overlay */}
                        <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-3 py-1.5 rounded shadow text-xs font-extrabold">
                          {formatPrice(item.price)}
                        </div>
                      </div>

                      {/* Info Content */}
                      <div className="p-6 space-y-4">
                        <div>
                          <span className="text-[9px] uppercase font-bold tracking-[0.15em] text-blue-600">
                            {item.type === 'milk' ? 'Sữa Hạt Tự Nhiên' : 'Tinh bột lành mạnh'}
                          </span>
                          <h4 className="text-lg font-display font-bold text-slate-800 tracking-tight mt-1 group-hover:text-blue-600 transition-colors">
                            {item.name}
                          </h4>
                          <p className="text-slate-600 text-xs mt-2 line-clamp-2 leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        {/* Nutritional Panel */}
                        <div className="bg-blue-50/50 rounded-lg p-3 grid grid-cols-4 gap-2 border border-blue-100">
                          <div className="text-center">
                            <span className="block text-[8px] font-bold text-slate-500 uppercase">Kcal</span>
                            <span className="inline-flex items-center text-xs font-extrabold text-orange-500 mt-0.5">
                              <Flame className="w-3 h-3 mr-0.5" />
                              {item.calories}
                            </span>
                          </div>
                          <div className="text-center border-l border-blue-500/10">
                            <span className="block text-[8px] font-bold text-slate-500 uppercase">Đạm</span>
                            <span className="block text-xs font-extrabold text-slate-700 mt-0.5">
                              {item.protein}g
                            </span>
                          </div>
                          <div className="text-center border-l border-blue-500/10">
                            <span className="block text-[8px] font-bold text-slate-500 uppercase">Xơ</span>
                            <span className="block text-xs font-extrabold text-emerald-600 mt-0.5">
                              {item.fiber}g
                            </span>
                          </div>
                          <div className="text-center border-l border-blue-500/10">
                            <span className="block text-[8px] font-bold text-slate-500 uppercase">Béo</span>
                            <span className="block text-xs font-extrabold text-slate-700 mt-0.5">
                              {item.fat}g
                            </span>
                          </div>
                        </div>

                        {/* Benefits list */}
                        <div className="space-y-1.5 pt-1">
                          <span className="block text-[9px] font-bold text-blue-600 uppercase tracking-wider">
                            Công dụng chính:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {item.benefits.map((benefit, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center text-[10px] font-medium text-slate-600 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1.5"></span>
                                {benefit}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Footer button */}
                    <div className="p-6 pt-0">
                      <button
                        onClick={() => onSelectIngredient(item.type, item.id)}
                        className="w-full inline-flex items-center justify-center space-x-1.5 btn-3d-slate py-2.5 text-xs font-bold uppercase tracking-wider cursor-pointer"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                        <span>Tự thiết kế Combo với món này</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Combos Grid */}
          {showCombos && (
            <div>
              <h3 className="text-sm font-display font-bold uppercase tracking-wider text-slate-800 mb-6 flex items-center space-x-2">
                <span className="w-2 h-2 rounded bg-blue-500 animate-pulse"></span>
                <span>Gói Combo Bữa Sáng Đầy Đủ (Tiết kiệm 5.000đ)</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {COMBO_ITEMS.map((combo) => (
                  <div
                    key={combo.id}
                    className="card-3d overflow-hidden flex flex-col justify-between group bg-white border border-slate-100 shadow-sm"
                  >
                    <div>
                      {/* Product Image and badges */}
                      <div className="relative aspect-video overflow-hidden bg-slate-50">
                        <img
                          src={combo.image}
                          alt={combo.name}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        {/* Tags */}
                        <div className="absolute top-4 left-4 flex flex-wrap gap-1.5 max-w-[80%]">
                          {combo.tags.map((tag, i) => (
                            <span
                              key={i}
                              className={`text-[9px] font-bold px-2 py-0.5 rounded shadow-sm uppercase tracking-wider ${
                                tag.includes('Tiết kiệm')
                                  ? 'bg-blue-600 text-white animate-pulse'
                                  : 'bg-white/95 text-slate-600 border border-blue-100 shadow-sm'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        {/* Discount Sticker */}
                        <div className="absolute top-4 right-4 bg-gradient-to-br from-blue-600 to-sky-500 text-white w-10 h-10 rounded-full flex flex-col items-center justify-center shadow-md font-bold text-[10px] leading-tight shadow-blue-500/10">
                          <span>Giảm</span>
                          <span>5k</span>
                        </div>
                      </div>

                      {/* Info Content */}
                      <div className="p-6 space-y-4">
                        <div>
                          <div className="flex items-center space-x-1.5 text-blue-600 text-[10px] font-bold uppercase tracking-wider">
                            <Percent className="w-3.5 h-3.5 text-blue-500" />
                            <span>Combo trọn vẹn</span>
                          </div>
                          <h4 className="text-lg font-display font-bold text-slate-800 tracking-tight mt-1 group-hover:text-blue-600 transition-colors">
                            {combo.name}
                          </h4>
                          <p className="text-slate-600 text-xs mt-2 line-clamp-3 leading-relaxed font-normal">
                            {combo.description}
                          </p>
                        </div>

                        {/* Nutrition bar summary */}
                        <div className="flex items-center justify-between text-[11px] text-slate-600 bg-blue-50/50 rounded p-3 border border-blue-100">
                          <span className="flex items-center">
                            <Flame className="w-3.5 h-3.5 text-orange-500 mr-1" />
                            <strong>{combo.calories} kcal</strong>
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500/20"></span>
                          <span>Đạm: <strong>{combo.protein}g</strong></span>
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500/20"></span>
                          <span>Xơ: <strong>{combo.fiber}g</strong></span>
                        </div>
                      </div>
                    </div>

                    {/* Footer price and CTA */}
                    <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-4">
                      <div>
                        <span className="block text-[10px] text-slate-500 line-through">
                          {formatPrice(combo.originalPrice)}
                        </span>
                        <span className="block text-base font-extrabold text-blue-600">
                          {formatPrice(combo.price)}
                        </span>
                      </div>
                      <button
                        onClick={() => {
                          onSelectIngredient('milk', combo.milkId);
                          onSelectIngredient('carb', combo.carbId);
                        }}
                        className="inline-flex items-center space-x-1.5 btn-3d-blue px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider cursor-pointer"
                      >
                        <span>Đặt Combo Này</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
