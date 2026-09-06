import React, { useState, useEffect } from 'react';
import { MENU_ITEMS, STALL_LOCATIONS } from '../data/mockData';
import { MenuItem } from '../types';
import { Check, RotateCcw, Sparkles, Clock, User, ShoppingBag, MapPin, ShieldAlert, BadgeCheck, Flame, ChevronRight, Phone } from 'lucide-react';

interface BreakfastPlannerProps {
  preselectedMilkId: string | null;
  preselectedCarbId: string | null;
  onResetPreselected: () => void;
}

interface Topping {
  id: string;
  name: string;
  price: number;
  calories: number;
  protein: number;
  fiber: number;
}

const EXTRA_TOPPINGS: Topping[] = [
  { id: 't1', name: 'Dừa Sợi Bào Tươi', price: 2000, calories: 15, protein: 0.1, fiber: 0.5 },
  { id: 't2', name: 'Hạt Chia Hữu Cơ', price: 4000, calories: 20, protein: 0.8, fiber: 1.6 },
  { id: 't3', name: 'Hạt Điều Giã Nhuyễn', price: 5000, calories: 35, protein: 1.1, fiber: 0.3 },
  { id: 't4', name: 'Yến Mạch Giòn Rắc', price: 3000, calories: 25, protein: 0.7, fiber: 0.6 },
];

export default function BreakfastPlanner({
  preselectedMilkId,
  preselectedCarbId,
  onResetPreselected,
}: BreakfastPlannerProps) {
  // Main Selection States
  const [selectedMilk, setSelectedMilk] = useState<MenuItem | null>(null);
  const [selectedCarb, setSelectedCarb] = useState<MenuItem | null>(null);
  const [sweetness, setSweetness] = useState<string>('30% Sweet (Khuyên dùng)');
  const [selectedToppings, setSelectedToppings] = useState<Topping[]>([]);

  // Checkout Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [pickupStall, setPickupStall] = useState(STALL_LOCATIONS[0].id);
  const [pickupTime, setPickupTime] = useState('07:30');
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [pickupCode, setPickupCode] = useState('');

  // Handle pre-selections from the Menu Section triggers
  useEffect(() => {
    if (preselectedMilkId) {
      const milk = MENU_ITEMS.find((item) => item.id === preselectedMilkId);
      if (milk) {
        setSelectedMilk(milk);
        // Scroll to planner section smoothly so the user sees their pre-populated choices
        const plannerSection = document.getElementById('planner');
        if (plannerSection) {
          plannerSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    if (preselectedCarbId) {
      const carb = MENU_ITEMS.find((item) => item.id === preselectedCarbId);
      if (carb) {
        setSelectedCarb(carb);
        const plannerSection = document.getElementById('planner');
        if (plannerSection) {
          plannerSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, [preselectedMilkId, preselectedCarbId]);

  const handleReset = () => {
    setSelectedMilk(null);
    setSelectedCarb(null);
    setSweetness('30% Sweet (Khuyên dùng)');
    setSelectedToppings([]);
    onResetPreselected();
  };

  const handleToppingToggle = (topping: Topping) => {
    if (selectedToppings.some((t) => t.id === topping.id)) {
      setSelectedToppings(selectedToppings.filter((t) => t.id !== topping.id));
    } else {
      setSelectedToppings([...selectedToppings, topping]);
    }
  };

  const sweetnessOptions = [
    '0% Sweet (Không Đường)',
    '30% Sweet (Khuyên dùng)',
    '50% Sweet (Ngọt Vừa)',
    '100% Sweet (Ngọt Truyền Thống)',
  ];

  // Nutritional & Price Calculations
  const milks = MENU_ITEMS.filter((item) => item.type === 'milk');
  const carbs = MENU_ITEMS.filter((item) => item.type === 'carb');

  const calcTotal = () => {
    let price = 0;
    let calories = 0;
    let protein = 0;
    let fiber = 0;
    let fat = 0;

    if (selectedMilk) {
      price += selectedMilk.price;
      calories += selectedMilk.calories;
      protein += selectedMilk.protein;
      fiber += selectedMilk.fiber;
      fat += selectedMilk.fat;
    }

    if (selectedCarb) {
      price += selectedCarb.price;
      calories += selectedCarb.calories;
      protein += selectedCarb.protein;
      fiber += selectedCarb.fiber;
      fat += selectedCarb.fat;
    }

    selectedToppings.forEach((top) => {
      price += top.price;
      calories += top.calories;
      protein += top.protein;
      fiber += top.fiber;
    });

    // Apply 5,000 VND Combo Discount if BOTH Milk & Carb are selected!
    const isCombo = selectedMilk !== null && selectedCarb !== null;
    const discount = isCombo ? 5000 : 0;
    const finalPrice = Math.max(0, price - discount);

    return {
      subtotal: price,
      discount,
      finalPrice,
      calories: Math.round(calories),
      protein: parseFloat(protein.toFixed(1)),
      fiber: parseFloat(fiber.toFixed(1)),
      fat: parseFloat(fat.toFixed(1)),
      isCombo,
    };
  };

  const summary = calcTotal();

  // Custom health badges based on what they select
  const getDinhDuongGrade = () => {
    if (!selectedMilk && !selectedCarb) return 'Chọn các món để đánh giá dinh dưỡng';
    if (summary.protein >= 6.5 && summary.fiber >= 5.5) {
      return 'Bữa Sáng Toàn Diện: Giàu Đạm & Đồi Dào Chất Xơ';
    }
    if (summary.protein >= 6.0) {
      return 'Bữa Sáng Cơ Bắp: Ưu Tiên Đạm Thực Vật';
    }
    if (summary.fiber >= 5.5) {
      return 'Bữa Sáng Tiêu Hóa: Siêu Giàu Chất Xơ Lành Mạnh';
    }
    if (summary.calories <= 200 && summary.calories > 0) {
      return 'Bữa Sáng Thon Dáng: Ít Calories, Đủ Dưỡng Chất';
    }
    return 'Bữa Sáng Cân Bằng: Đầy Đủ Năng Lượng Tự Nhiên';
  };

  // Recommended Daily Intake percentage calculations (Target breakfast: 350 kcal, 10g protein, 8g fiber)
  const percentCal = Math.min(100, Math.round((summary.calories / 350) * 100));
  const percentProt = Math.min(100, Math.round((summary.protein / 10) * 100));
  const percentFib = Math.min(100, Math.round((summary.fiber / 8) * 100));

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  const handlePreOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) return;

    // Generate a beautiful pickup code
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setPickupCode(`LNS-${randomNum}`);
    setOrderConfirmed(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (orderConfirmed) {
      setOrderConfirmed(false);
      setCustomerName('');
      setCustomerPhone('');
      handleReset();
    }
  };

  return (
    <section id="planner" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden border-y border-slate-200">
      <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-blue-600 via-sky-500 to-emerald-500"></div>
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase block">
            Công cụ tương tác
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-800 tracking-tight">
            Tự Thiết Kế Combo Bữa Sáng
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Kết hợp sữa hạt bạn thích và món khoai, chuối dẻo yêu thích để tạo ra bữa sáng của riêng bạn. Xem ngay chỉ số Calories và Dinh dưỡng trực quan được tính toán tức thì!
          </p>
        </div>
 
        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Builder Options: 7 Columns */}
          <div className="lg:col-span-7 space-y-10">
            {/* Step 1: Nut Milk Selection */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-display font-bold text-slate-800 flex items-center space-x-2">
                  <span className="w-6 h-6 rounded bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold border border-blue-100">1</span>
                  <span>Chọn Sữa Hạt Nguyên Chất</span>
                </h3>
                {selectedMilk && (
                  <button
                    onClick={() => setSelectedMilk(null)}
                    className="text-xs text-slate-500 hover:text-blue-600 cursor-pointer transition-colors"
                  >
                    Bỏ chọn
                  </button>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {milks.map((milk) => {
                  const isSelected = selectedMilk?.id === milk.id;
                  return (
                    <div
                      key={milk.id}
                      onClick={() => setSelectedMilk(milk)}
                      className={`p-4 cursor-pointer flex flex-col justify-between border-2 rounded transition-all duration-150 ${
                        isSelected
                          ? 'border-blue-600 bg-white shadow-[0_4px_0_#2563eb] translate-y-[3px]'
                          : 'border-slate-200 bg-white hover:border-blue-500/40 hover:shadow-[0_4px_0_rgba(37,99,235,0.15)] active:translate-y-[3px]'
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="aspect-square rounded overflow-hidden bg-slate-50 w-16 h-16 mx-auto sm:mx-0">
                          <img
                            src={milk.image}
                            alt={milk.name}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <h4 className="font-display font-bold text-slate-800 text-sm leading-tight text-center sm:text-left mt-2">
                          {milk.name}
                        </h4>
                        <span className="block text-[11px] text-slate-600 leading-tight line-clamp-2 text-center sm:text-left">
                          {milk.description}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-4 border-t border-slate-100 pt-2">
                        <span className="text-xs font-extrabold text-blue-600">{formatPrice(milk.price)}</span>
                        {isSelected ? (
                          <span className="w-5 h-5 rounded bg-blue-600 text-white flex items-center justify-center"><Check className="w-3 h-3" /></span>
                        ) : (
                          <span className="text-[10px] text-slate-400">Chọn</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
 
            {/* Step 2: Carb Selection */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-display font-bold text-slate-800 flex items-center space-x-2">
                  <span className="w-6 h-6 rounded bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold border border-blue-100">2</span>
                  <span>Chọn Tinh Bột Lành Mạnh</span>
                </h3>
                {selectedCarb && (
                  <button
                    onClick={() => setSelectedCarb(null)}
                    className="text-xs text-slate-500 hover:text-blue-600 cursor-pointer transition-colors"
                  >
                    Bỏ chọn
                  </button>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {carbs.map((carb) => {
                  const isSelected = selectedCarb?.id === carb.id;
                  return (
                    <div
                      key={carb.id}
                      onClick={() => setSelectedCarb(carb)}
                      className={`p-4 cursor-pointer flex flex-col justify-between border-2 rounded transition-all duration-150 ${
                        isSelected
                          ? 'border-blue-600 bg-white shadow-[0_4px_0_#2563eb] translate-y-[3px]'
                          : 'border-slate-200 bg-white hover:border-blue-500/40 hover:shadow-[0_4px_0_rgba(37,99,235,0.15)] active:translate-y-[3px]'
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="aspect-square rounded overflow-hidden bg-slate-50 w-16 h-16 mx-auto sm:mx-0">
                          <img
                            src={carb.image}
                            alt={carb.name}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <h4 className="font-display font-bold text-slate-800 text-sm leading-tight text-center sm:text-left mt-2">
                          {carb.name}
                        </h4>
                        <span className="block text-[11px] text-slate-600 leading-tight line-clamp-2 text-center sm:text-left">
                          {carb.description}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-4 border-t border-slate-100 pt-2">
                        <span className="text-xs font-extrabold text-blue-600">{formatPrice(carb.price)}</span>
                        {isSelected ? (
                          <span className="w-5 h-5 rounded bg-blue-600 text-white flex items-center justify-center"><Check className="w-3 h-3" /></span>
                        ) : (
                          <span className="text-[10px] text-slate-400">Chọn</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
 
            {/* Step 3: Customizer Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
              {/* Sweetness Option */}
              <div className="space-y-4">
                <h3 className="text-base font-display font-bold text-slate-800 flex items-center space-x-2">
                  <span className="w-6 h-6 rounded bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold border border-blue-100">3a</span>
                  <span>Độ Ngọt Của Sữa</span>
                </h3>
                <div className="space-y-2 bg-white p-4 rounded border border-slate-200">
                  {sweetnessOptions.map((opt) => (
                    <label
                      key={opt}
                      className="flex items-center space-x-3 text-xs sm:text-sm text-slate-600 cursor-pointer p-2 rounded hover:bg-blue-500/5 transition-colors"
                    >
                      <input
                        type="radio"
                        name="sweetness"
                        checked={sweetness === opt}
                        onChange={() => setSweetness(opt)}
                        disabled={!selectedMilk}
                        className="w-4 h-4 text-blue-600 border-slate-300 bg-white focus:ring-blue-500 disabled:opacity-40"
                      />
                      <span className={!selectedMilk ? 'opacity-40 select-none' : ''}>{opt}</span>
                    </label>
                  ))}
                  {!selectedMilk && (
                    <span className="block text-[10px] text-blue-600/90 font-medium italic mt-1">
                      * Hãy chọn một chai sữa hạt ở bước 1 để tinh chỉnh độ ngọt.
                    </span>
                  )}
                </div>
              </div>
 
              {/* Toppings Option */}
              <div className="space-y-4">
                <h3 className="text-base font-display font-bold text-slate-800 flex items-center space-x-2">
                  <span className="w-6 h-6 rounded bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold border border-blue-100">3b</span>
                  <span>Topping Thêm Đỉnh</span>
                </h3>
                <div className="space-y-2 bg-white p-4 rounded border border-slate-200">
                  {EXTRA_TOPPINGS.map((top) => {
                    const isChecked = selectedToppings.some((t) => t.id === top.id);
                    return (
                      <label
                        key={top.id}
                        className="flex items-center justify-between text-xs sm:text-sm text-slate-600 cursor-pointer p-2 rounded hover:bg-blue-500/5 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleToppingToggle(top)}
                            disabled={!selectedCarb}
                            className="w-4 h-4 text-blue-600 border-slate-300 rounded bg-white focus:ring-blue-500 disabled:opacity-40"
                          />
                          <span className={!selectedCarb ? 'opacity-40 select-none' : ''}>{top.name}</span>
                        </div>
                        <span className={`text-[11px] font-semibold text-blue-600 ${!selectedCarb ? 'opacity-40' : ''}`}>
                          +{formatPrice(top.price)}
                        </span>
                      </label>
                    );
                  })}
                  {!selectedCarb && (
                    <span className="block text-[10px] text-blue-600/90 font-medium italic mt-1">
                      * Hãy chọn một món tinh bột ở bước 2 để thêm các loại hạt rắc lên trên.
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
 
          {/* Real-time Dashboard: 5 Columns */}
          <div className="lg:col-span-5 bg-white rounded border border-slate-200 p-6 sm:p-8 space-y-6 lg:sticky lg:top-24 shadow-md card-3d">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-display font-bold uppercase tracking-wider text-slate-800">
                Thẻ Thực Đơn Của Bạn
              </h3>
              <button
                onClick={handleReset}
                className="inline-flex items-center space-x-1 text-xs text-slate-500 hover:text-blue-600 cursor-pointer transition-colors"
                title="Đặt lại thiết lập"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>
 
            {/* Display Plate Selection List */}
            <div className="space-y-3.5 py-4 border-y border-slate-100">
              {/* Milk Row */}
              <div className="flex items-center justify-between">
                <span className="text-slate-500 text-xs sm:text-sm">Sữa hạt chọn:</span>
                <span className="font-semibold text-slate-800 text-xs sm:text-sm text-right">
                  {selectedMilk ? `${selectedMilk.name}` : <span className="text-slate-400 font-normal italic">Chưa chọn sữa</span>}
                </span>
              </div>
              {selectedMilk && (
                <div className="flex items-center justify-between bg-slate-50 px-3 py-1.5 rounded border border-slate-100 text-[11px] text-slate-600">
                  <span>Mức độ đường:</span>
                  <span className="font-bold text-blue-600">{sweetness}</span>
                </div>
              )}
 
              {/* Carb Row */}
              <div className="flex items-center justify-between">
                <span className="text-slate-500 text-xs sm:text-sm">Món tinh bột sáng:</span>
                <span className="font-semibold text-slate-800 text-xs sm:text-sm text-right">
                  {selectedCarb ? `${selectedCarb.name}` : <span className="text-slate-400 font-normal italic">Chưa chọn món tinh bột</span>}
                </span>
              </div>
 
              {/* Toppings Row */}
              {selectedToppings.length > 0 && (
                <div className="space-y-1 bg-slate-50 px-3 py-2 rounded border border-slate-100">
                  <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">Toppings rắc rưới:</span>
                  <div className="flex flex-wrap gap-1">
                    {selectedToppings.map((top) => (
                      <span key={top.id} className="inline-flex text-[10px] font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded">
                        + {top.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
 
            {/* Nutrition Progress Bars */}
            <div className="space-y-4">
              <div className="inline-flex bg-blue-50 border border-blue-100 px-3 py-1 rounded text-blue-600 text-xs font-bold w-full justify-center">
                <Sparkles className="w-3.5 h-3.5 mr-1.5 shrink-0 mt-0.5" />
                <span className="text-center">{getDinhDuongGrade()}</span>
              </div>
 
              {/* Calories bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-600 flex items-center"><Flame className="w-3.5 h-3.5 text-orange-500 mr-1" /> Năng lượng:</span>
                  <span className="text-slate-800">{summary.calories} Kcal / 350 Kcal tiêu chuẩn</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-orange-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${percentCal}%` }}
                  ></div>
                </div>
              </div>
 
              {/* Protein bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-600">🥩 Đạm thực vật:</span>
                  <span className="text-slate-800">{summary.protein}g / 10g lý tưởng</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${percentProt}%` }}
                  ></div>
                </div>
              </div>
 
              {/* Fiber bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-600">🥦 Chất xơ hòa tan:</span>
                  <span className="text-slate-800">{summary.fiber}g / 8g cần thiết</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-blue-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${percentFib}%` }}
                  ></div>
                </div>
              </div>
            </div>
 
            {/* Price section & Discount warning */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              {summary.isCombo ? (
                <div className="flex items-center justify-between text-xs text-emerald-700 bg-emerald-50 border border-emerald-100 p-2.5 rounded">
                  <span className="font-bold flex items-center">🎉 Ưu đãi trọn bộ bữa sáng:</span>
                  <span className="font-extrabold text-emerald-600">- 5.000đ</span>
                </div>
              ) : (
                <div className="flex items-center justify-between text-xs text-slate-600 p-2 border border-dashed border-slate-200 rounded bg-slate-50">
                  <span>💡 Chọn cả sữa + món tinh bột để nhận ưu đãi giảm 5.000đ</span>
                </div>
              )}
 
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-slate-700">Tổng thanh toán:</span>
                <div className="text-right">
                  {summary.isCombo && (
                    <span className="block text-xs text-slate-400 line-through">
                      {formatPrice(summary.subtotal)}
                    </span>
                  )}
                  <span className="text-2xl font-extrabold text-blue-600 tracking-tight">
                    {formatPrice(summary.finalPrice)}
                  </span>
                </div>
              </div>
            </div>
 
            {/* Action buttons */}
            <div className="space-y-3">
              <button
                onClick={() => setIsModalOpen(true)}
                disabled={!selectedMilk && !selectedCarb}
                className="w-full inline-flex items-center justify-center space-x-2 btn-3d-blue disabled:bg-slate-100 disabled:border-slate-200 disabled:text-slate-400 disabled:shadow-none text-white py-3 rounded text-xs font-bold uppercase tracking-wider cursor-pointer disabled:cursor-not-allowed disabled:translate-y-0"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Đặt Lấy Tại Quầy Sáng Mai</span>
              </button>
              <span className="block text-[11px] text-slate-400 text-center leading-normal">
                * Đặt trước giúp quầy chuẩn bị chu đáo nhất, bạn chỉ việc đọc mã nhận hàng sau 10s thanh toán không phải đợi chờ.
              </span>
            </div>
          </div>
        </div>
      </div>
 
      {/* Pre-order Popup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in-up">
          <div className="bg-white rounded border border-slate-200 max-w-lg w-full overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="bg-slate-50 border-b border-slate-200 text-slate-800 p-6 relative">
              <button
                onClick={handleCloseModal}
                className="absolute top-5 right-5 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer text-xl font-bold bg-slate-200/50 w-8 h-8 rounded flex items-center justify-center"
              >
                &times;
              </button>
              <h4 className="text-lg font-display font-bold uppercase tracking-wider text-slate-800">Thông Tin Đặt Trước</h4>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Xác nhận quầy và thời gian nhận để chúng tôi giữ bữa sáng ấm nóng cho bạn nhé!
              </p>
            </div>
 
            <div className="overflow-y-auto p-6 space-y-6 flex-1 bg-white">
              {!orderConfirmed ? (
                <form onSubmit={handlePreOrderSubmit} className="space-y-5">
                  {/* Summary Box */}
                  <div className="bg-slate-50 p-4.5 rounded border border-slate-200 space-y-2.5">
                    <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Đơn hàng thiết kế:</span>
                    <ul className="space-y-1 text-sm text-slate-600">
                      {selectedMilk && (
                        <li className="flex justify-between items-center font-medium">
                          <span>🍼 {selectedMilk.name} ({sweetness})</span>
                          <span>{formatPrice(selectedMilk.price)}</span>
                        </li>
                      )}
                      {selectedCarb && (
                        <li className="flex justify-between items-center font-medium">
                          <span>🍠 {selectedCarb.name}</span>
                          <span>{formatPrice(selectedCarb.price)}</span>
                        </li>
                      )}
                      {selectedToppings.map((top) => (
                        <li key={top.id} className="flex justify-between items-center text-xs text-slate-500 pl-4">
                          <span>+ Topping: {top.name}</span>
                          <span>{formatPrice(top.price)}</span>
                        </li>
                      ))}
                      {summary.isCombo && (
                        <li className="flex justify-between items-center text-xs text-emerald-600 font-bold border-t border-dashed border-slate-200 pt-2.5">
                          <span>Ưu đãi Combo bữa sáng:</span>
                          <span>- {formatPrice(5000)}</span>
                        </li>
                      )}
                    </ul>
                    <div className="flex justify-between items-center border-t border-slate-200 pt-2.5">
                      <span className="text-sm font-bold text-slate-500">Tổng cộng:</span>
                      <span className="text-lg font-extrabold text-blue-600">{formatPrice(summary.finalPrice)}</span>
                    </div>
                  </div>
 
                  {/* Customer Details Inputs */}
                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">Họ và tên của bạn:</label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-3.5 w-4 h-4 text-blue-500" />
                        <input
                          type="text"
                          required
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          placeholder="Ví dụ: Nguyễn Văn A"
                          className="w-full pl-10 pr-4 py-3 border border-slate-200 bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded text-sm text-slate-800 transition-all focus:outline-none"
                        />
                      </div>
                    </div>
 
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">Số điện thoại nhận hàng:</label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-blue-500" />
                        <input
                          type="tel"
                          required
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                          placeholder="Ví dụ: 0901234567"
                          className="w-full pl-10 pr-4 py-3 border border-slate-200 bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded text-sm text-slate-800 transition-all focus:outline-none"
                        />
                      </div>
                    </div>
 
                    <div className="grid grid-cols-2 gap-4">
                      {/* Pick Stall */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">Chọn quầy gần nhất:</label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 w-4 h-4 text-blue-500" />
                          <select
                            value={pickupStall}
                            onChange={(e) => setPickupStall(e.target.value)}
                            className="w-full pl-9 pr-2 py-3 border border-slate-200 bg-white text-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded text-xs sm:text-sm transition-all focus:outline-none appearance-none"
                          >
                            {STALL_LOCATIONS.map((loc) => (
                              <option key={loc.id} value={loc.id}>
                                {loc.region} - {loc.name.split(' - ')[1]}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
 
                      {/* Pick Time */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">Giờ lấy (Từ 06:00 - 10:30):</label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-3 w-4 h-4 text-blue-500" />
                          <select
                            value={pickupTime}
                            onChange={(e) => setPickupTime(e.target.value)}
                            className="w-full pl-9 pr-2 py-3 border border-slate-200 bg-white text-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded text-xs sm:text-sm transition-all focus:outline-none appearance-none"
                          >
                            <option value="06:15">06:15 sáng</option>
                            <option value="06:30">06:30 sáng</option>
                            <option value="06:45">06:45 sáng</option>
                            <option value="07:00">07:00 sáng</option>
                            <option value="07:15">07:15 sáng</option>
                            <option value="07:30">07:30 sáng</option>
                            <option value="07:45">07:45 sáng</option>
                            <option value="08:00">08:00 sáng</option>
                            <option value="08:15">08:15 sáng</option>
                            <option value="08:30">08:30 sáng</option>
                            <option value="09:00">09:00 sáng</option>
                            <option value="09:30">09:30 sáng</option>
                            <option value="10:00">10:00 sáng</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
 
                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center space-x-1.5 btn-3d-blue text-white py-3 rounded font-bold text-xs uppercase tracking-wider cursor-pointer"
                  >
                    <span>Hoàn tất Đặt Trước &amp; Đọc Mã Ngày Mai</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                /* Success State Ticket */
                <div className="text-center space-y-6 py-4 animate-fade-in-up">
                  <div className="w-16 h-16 bg-emerald-50 rounded flex items-center justify-center mx-auto text-emerald-600 border border-emerald-100">
                    <BadgeCheck className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-xl font-display font-extrabold text-slate-800">Đặt Bữa Sáng Thành Công!</h5>
                    <p className="text-sm text-slate-600 px-4">
                      Chào <strong>{customerName}</strong>, Lành &amp; Sạch đã lưu công thức thiết kế riêng của bạn. Sữa và củ quả ấm nóng dẻo ngọt sẽ sẵn sàng tại quầy lúc <strong>{pickupTime}</strong> sáng mai.
                    </p>
                  </div>
 
                  {/* Pickup Code Ticket Box */}
                  <div className="bg-slate-50 border-2 border-dashed border-slate-200 p-6 rounded max-w-sm mx-auto space-y-4">
                    <div>
                      <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider">MÃ NHẬN HÀNG TẠI QUẦY</span>
                      <span className="block text-2xl font-mono font-black text-blue-600 tracking-widest mt-1">
                        {pickupCode}
                      </span>
                    </div>
                    <div className="border-t border-dashed border-slate-200 pt-3 text-xs text-left space-y-1.5 text-slate-600">
                      <div className="flex justify-between">
                        <span>Quầy:</span>
                        <span className="font-semibold text-slate-800">
                          {STALL_LOCATIONS.find((l) => l.id === pickupStall)?.name.split(' - ')[1]}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Giờ nhận:</span>
                        <span className="font-semibold text-slate-800">{pickupTime} sáng mai</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Hình thức thanh toán:</span>
                        <span className="font-semibold text-blue-600">Tiền mặt / Chuyển khoản tại quầy</span>
                      </div>
                      <div className="flex justify-between border-t border-slate-200 pt-1.5 font-bold text-slate-800">
                        <span>Cần thanh toán:</span>
                        <span className="text-blue-600">{formatPrice(summary.finalPrice)}</span>
                      </div>
                    </div>
                  </div>
 
                  <div className="bg-blue-50 p-4 rounded border border-blue-100 text-xs text-slate-600 text-left flex items-start space-x-2">
                    <ShieldAlert className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      Chỉ cần xuất trình mã <strong>{pickupCode}</strong> cho nhân viên tại quầy để thanh toán và nhận bữa sáng ấm nóng trong 5 giây mà không cần xếp hàng chờ đợi!
                    </p>
                  </div>
 
                  <button
                    onClick={handleCloseModal}
                    className="w-full inline-flex items-center justify-center btn-3d-slate text-slate-700 py-3 rounded font-bold text-xs uppercase tracking-wider cursor-pointer bg-slate-100 border border-slate-200 hover:bg-slate-200"
                  >
                    Đóng cửa sổ
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
