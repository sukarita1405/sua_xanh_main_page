import { MenuItem, ComboItem, StallLocation, Review, FAQ } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    name: 'Sữa Đậu Nành',
    type: 'milk',
    description: 'Sữa đậu nành xay nguyên hạt, nấu mới mỗi ngày, không chất bảo quản - vị truyền thống thanh nhẹ, dễ uống mỗi sáng.',
    image: '/images/sx-vi-dau-nanh.png',
    price: 16000,
    calories: 234,
    protein: 9.9,
    fiber: 1,
    fat: 5.4,
    benefits: ['Ít cholesterol, tốt tim mạch', 'Giàu protein tốt cơ bắp', 'Chống loãng xương', 'Hỗ trợ giảm cân, tăng vòng 1'],
    tags: ['Best Seller', 'Truyền Thống'],
    usage: 'Người lớn <500ml/ngày, trẻ em >6 tháng <300ml/ngày',
    caution: 'Uống sáng sớm hoặc trước ngủ 1-2h; không uống khi đói; hạn chế cho phụ nữ có thai, người bị gout/sỏi thận'
  },
  {
    id: 'm2',
    name: 'Sữa Đậu Đỏ',
    type: 'milk',
    description: 'Đậu đỏ nấu chậm giữ trọn vị bùi tự nhiên, thơm béo vừa phải, được nhiều khách quen chọn mỗi sáng.',
    image: '/images/sx-vi-dau-do.png',
    price: 20000,
    calories: 153,
    protein: 5,
    fiber: 1,
    fat: 2,
    benefits: ['Hỗ trợ tiêu hóa', 'Ngăn ngừa tiểu đường', 'Hỗ trợ chống viêm, no lâu, hợp cho tập luyện', 'Thải độc, tốt cho đường ruột'],
    tags: ['Được Yêu Thích'],
    usage: 'Người lớn <500ml/ngày, trẻ em >6 tháng <300ml/ngày',
    caution: 'Dùng quá liều dễ gây dị ứng; người tiêu hóa kém, tay chân hay lạnh nên hạn chế. Đạm/Béo/Xơ là số liệu ước tính, đang chờ cập nhật chính xác'
  },
  {
    id: 'm3',
    name: 'Sữa Bắp',
    type: 'milk',
    description: 'Sữa bắp ngọt thanh tự nhiên từ bắp tươi xay mịn, thơm béo mà không gắt đường.',
    image: '/images/sx-vi-bap.png',
    price: 20000,
    calories: 275,
    protein: 5.1,
    fiber: 1,
    fat: 1.2,
    benefits: ['Điều hòa cholesterol', 'Giảm táo bón, tiêu chảy', 'Cải thiện trí nhớ, giảm nguy cơ Alzheimer', 'Tốt cho phụ nữ mang thai'],
    tags: ['Thơm Béo'],
    usage: 'Người lớn <300ml/ngày, trẻ em >6 tháng <100ml/ngày',
    caution: 'Nên uống trước 20h; người đường huyết cao hạn chế dùng; dùng nhiều có thể giảm hấp thu sắt'
  },
  {
    id: 'm4',
    name: 'Sữa Mè Đen',
    type: 'milk',
    description: 'Mè đen rang thơm xay nguyên hạt, hương vị đậm đà, béo bùi đặc trưng, tốt cho tóc và da.',
    image: '/images/sx-vi-me-den.png',
    price: 23000,
    calories: 191,
    protein: 9,
    fiber: 6,
    fat: 27,
    benefits: ['Ngăn ngừa lão hóa, giúp da khỏe mạnh', 'Hỗ trợ ruột, ngừa loãng xương', 'Bổ huyết, ổn định huyết áp, tăng miễn dịch', 'Thải độc, giảm cholesterol'],
    tags: ['Đậm Đà'],
    usage: 'Người lớn & trẻ em đều nên dùng <300ml/ngày',
    caution: 'Uống buổi sáng hoặc buổi chiều, hạn chế uống trước khi ngủ. Lượng chất béo khá cao, dùng quá nhiều có thể tăng cân'
  },
  {
    id: 'm5',
    name: 'Sữa Hạt Sen',
    type: 'milk',
    description: 'Hạt sen thơm dịu, vị thanh mát, giúp thư giãn tinh thần - lựa chọn nhẹ nhàng cho buổi sáng.',
    image: '/images/sx-vi-hat-sen.png',
    price: 23000,
    calories: 420,
    protein: 9.9,
    fiber: 1,
    fat: 2.1,
    benefits: ['Tốt cho bà bầu và phụ nữ sau sinh', 'Tốt da, chống lão hóa', 'Cải thiện giấc ngủ, thư giãn tinh thần', 'Tốt cho trẻ kém ăn, người yếu bệnh'],
    tags: ['Thanh Mát'],
    usage: 'Nên dùng vừa phải, khoảng <250ml/ngày do calo khá cao',
    caution: 'Uống trong ngày; tránh dùng cho người bệnh dạ dày/đường ruột, gout, rối loạn tiêu hóa, mất ngủ'
  },
  {
    id: 'm6',
    name: 'Sữa Ca Cao',
    type: 'milk',
    description: 'Vị mới ra mắt tại Sữa Xanh - sữa hạt hòa quyện cùng ca cao nguyên chất, thơm béo đậm đà, không đường tinh luyện.',
    image: '/images/sx-vi-ca-cao.png',
    price: 25000,
    calories: 230,
    protein: 6,
    fiber: 1,
    fat: 4,
    benefits: ['Vị cacao đậm đà, thơm béo', 'Sản phẩm mới ra mắt tại Sữa Xanh'],
    tags: ['Mới'],
    caution: 'Sản phẩm mới, chỉ số dinh dưỡng chi tiết đang được cập nhật'
  },
  {
    id: 'c1',
    name: 'Khoai Chuối',
    type: 'carb',
    description: 'Bữa sáng healthy kết hợp khoai lang và chuối hấp nóng - no bụng, nhẹ nhàng mà vẫn đủ năng lượng.',
    image: '/images/steamed_banana_1784087740481.jpg',
    price: 18000,
    calories: 160,
    protein: 2.0,
    fiber: 3.2,
    fat: 0.5,
    benefits: ['Giàu chất xơ', 'No lâu', 'Dễ tiêu hóa'],
    tags: ['Bữa Sáng Healthy']
  },
  {
    id: 'c2',
    name: 'Khoai Trứng',
    type: 'carb',
    description: 'Khoai lang hấp nóng ăn kèm trứng - bữa sáng healthy đủ tinh bột và đạm cho một buổi sáng tràn năng lượng.',
    image: '/images/sweet_potato_1784087756307.jpg',
    price: 18000,
    calories: 180,
    protein: 7.0,
    fiber: 3.0,
    fat: 5.0,
    benefits: ['Đủ tinh bột & đạm', 'No lâu', 'Ấm nóng tiện lợi'],
    tags: ['Bữa Sáng Healthy']
  },
  {
    id: 'c3',
    name: 'Chuối Trứng',
    type: 'carb',
    description: 'Chuối hấp nóng ăn kèm trứng - kết hợp tinh bột tốt và đạm từ trứng, vị ngọt dịu tự nhiên.',
    image: '/images/steamed_banana_1784087740481.jpg',
    price: 18000,
    calories: 175,
    protein: 6.5,
    fiber: 2.8,
    fat: 4.8,
    benefits: ['Giàu Kali tự nhiên', 'Đủ đạm từ trứng', 'Dễ tiêu hóa'],
    tags: ['Bữa Sáng Healthy']
  }
];

export const COMBO_ITEMS: ComboItem[] = [
  {
    id: 'cb1',
    name: 'Sữa Đậu Nành + Khoai Chuối',
    description: 'Sữa đậu nành thanh nhẹ kết hợp Khoai Chuối hấp nóng - bữa sáng healthy quen thuộc, đủ no đến trưa.',
    milkId: 'm1',
    carbId: 'c1',
    price: 34000,
    originalPrice: 34000,
    calories: 280,
    protein: 7.5,
    fiber: 4.7,
    tags: ['Quen Thuộc'],
    image: '/images/sua-xanh-cover-team.jpg'
  },
  {
    id: 'cb2',
    name: 'Sữa Hạt Sen + Khoai Trứng',
    description: 'Sữa hạt sen thanh mát cùng Khoai Trứng ấm nóng - nguồn năng lượng đủ đầy cho buổi sáng bận rộn.',
    milkId: 'm5',
    carbId: 'c2',
    price: 41000,
    originalPrice: 41000,
    calories: 310,
    protein: 11.0,
    fiber: 5.8,
    tags: ['Best Seller'],
    image: '/images/sua-xanh-cover-team.jpg'
  },
  {
    id: 'cb3',
    name: 'Sữa Mè Đen + Chuối Trứng',
    description: 'Sữa mè đen đậm đà cùng Chuối Trứng hấp nóng - kết hợp giàu khoáng chất và đạm cho một buổi sáng no lâu.',
    milkId: 'm4',
    carbId: 'c3',
    price: 41000,
    originalPrice: 41000,
    calories: 325,
    protein: 11.0,
    fiber: 6.3,
    tags: ['Đậm Đà'],
    image: '/images/sua-xanh-cover-team.jpg'
  }
];

export const STALL_LOCATIONS: StallLocation[] = [
  {
    id: 'l1',
    name: 'Quầy Sữa Hạt - Nam Kỳ Khởi Nghĩa',
    address: '195 Nam Kỳ Khởi Nghĩa, Phường Xuân Hòa, TP. Hồ Chí Minh',
    phone: '082.559.6160',
    openingHours: '06:10 - 09:00 (T2-T6)',
    region: 'Quận 3',
    status: 'open'
  },
  {
    id: 'l2',
    name: 'Quầy Sữa Hạt - Bà Huyện Thanh Quan',
    address: 'Bệnh viện Mắt cơ sở 3 (Cổng Bà Huyện Thanh Quan), TP. Hồ Chí Minh',
    phone: '082.559.6160',
    openingHours: '06:10 - 09:00 (T2-T6)',
    region: 'Quận 3',
    status: 'open'
  },
  {
    id: 'l3',
    name: 'Quầy Sữa Hạt - Cầu Nguyễn Văn Cừ',
    address: 'Cầu Nguyễn Văn Cừ - đối diện 354 Võ Văn Kiệt, TP. Hồ Chí Minh',
    phone: '082.559.6160',
    openingHours: '06:10 - 09:00 (T2-T6)',
    region: 'Quận 5',
    status: 'open'
  },
  {
    id: 'l4',
    name: 'Quầy Sữa Hạt - Võ Văn Kiệt',
    address: 'Đối diện 324 Võ Văn Kiệt, TP. Hồ Chí Minh',
    phone: '082.559.6160',
    openingHours: '06:10 - 09:00 (T2-T6)',
    region: 'Quận 1',
    status: 'open'
  },
  {
    id: 'l5',
    name: 'Quầy Sữa Hạt - Nguyễn Thị Minh Khai',
    address: '217bis Nguyễn Thị Minh Khai, TP. Hồ Chí Minh',
    phone: '082.559.6160',
    openingHours: '06:10 - 09:00 (T2-T6)',
    region: 'Quận 3',
    status: 'open'
  },
  {
    id: 'l6',
    name: 'Quầy Sữa Hạt - Mạc Đĩnh Chi',
    address: '55 Mạc Đĩnh Chi, Phường Tân Định, TP. Hồ Chí Minh',
    phone: '082.559.6160',
    openingHours: '06:10 - 09:00 (T2-T6)',
    region: 'Quận 1',
    status: 'open'
  },
  {
    id: 'l7',
    name: 'Quầy Sữa Hạt - Hoàng Sa',
    address: '107A Hoàng Sa, Phường Tân Định, TP. Hồ Chí Minh',
    phone: '082.559.6160',
    openingHours: '06:10 - 09:00 (T2-T6)',
    region: 'Quận 1',
    status: 'open'
  },
  {
    id: 'l8',
    name: 'Quầy Sữa Hạt - Tôn Đức Thắng',
    address: '07 Tôn Đức Thắng, Phường Sài Gòn, TP. Hồ Chí Minh',
    phone: '082.559.6160',
    openingHours: '06:10 - 09:00 (T2-T6)',
    region: 'Quận 1',
    status: 'open'
  },
  {
    id: 'l9',
    name: 'Quầy Sữa Hạt - Lương Định Của',
    address: '226 Lương Định Của, Phường An Khánh, TP. Hồ Chí Minh',
    phone: '082.559.6160',
    openingHours: '06:10 - 09:00 (T2-T6)',
    region: 'TP. Thủ Đức',
    status: 'open'
  },
  {
    id: 'l10',
    name: 'Quầy Sữa Hạt - Nguyễn Tất Thành',
    address: '83 Nguyễn Tất Thành, Phường Xóm Chiếu, TP. Hồ Chí Minh',
    phone: '082.559.6160',
    openingHours: '06:10 - 09:00 (T2-T6)',
    region: 'Quận 4',
    status: 'open'
  },
  {
    id: 'l11',
    name: 'Quầy Sữa Hạt - 3 Tháng 2 (Vườn Lài)',
    address: '83 Đường 3 Tháng 2, Phường Vườn Lài, TP. Hồ Chí Minh',
    phone: '082.559.6160',
    openingHours: '06:10 - 09:00 (T2-T6)',
    region: 'Quận 10',
    status: 'open'
  },
  {
    id: 'l12',
    name: 'Quầy Sữa Hạt - 3 Tháng 2 (Hòa Hưng)',
    address: '202 Đường 3 Tháng 2, Phường Hòa Hưng, TP. Hồ Chí Minh',
    phone: '082.559.6160',
    openingHours: '06:10 - 09:00 (T2-T6)',
    region: 'Quận 10',
    status: 'open'
  },
  {
    id: 'l13',
    name: 'Quầy Sữa Hạt - Điện Biên Phủ (Bàn Cờ)',
    address: '635A Điện Biên Phủ, Phường Bàn Cờ, TP. Hồ Chí Minh',
    phone: '082.559.6160',
    openingHours: '06:10 - 09:00 (T2-T6)',
    region: 'Quận 3',
    status: 'open'
  },
  {
    id: 'l14',
    name: 'Quầy Sữa Hạt - Bắc Hải',
    address: 'Hoa Lan Tâm Trí, Bắc Hải, Phường Điện Hồng, TP. Hồ Chí Minh',
    phone: '082.559.6160',
    openingHours: '06:10 - 09:00 (T2-T6)',
    region: 'Quận 10',
    status: 'open'
  },
  {
    id: 'l15',
    name: 'Quầy Sữa Hạt - Hồng Lạc',
    address: '560 Hồng Lạc, Phường Bảy Hiền, TP. Hồ Chí Minh',
    phone: '082.559.6160',
    openingHours: '06:10 - 09:00 (T2-T6)',
    region: 'Quận Tân Bình',
    status: 'open'
  },
  {
    id: 'l16',
    name: 'Quầy Sữa Hạt - Nguyễn Tri Phương',
    address: '130 Nguyễn Tri Phương, Phường An Đông, TP. Hồ Chí Minh',
    phone: '082.559.6160',
    openingHours: '06:10 - 09:00 (T2-T6)',
    region: 'Quận 5',
    status: 'open'
  },
  {
    id: 'l17',
    name: 'Quầy Sữa Hạt - Lý Thái Tổ',
    address: '106B Lý Thái Tổ, Phường Vườn Lài, TP. Hồ Chí Minh',
    phone: '082.559.6160',
    openingHours: '06:10 - 09:00 (T2-T6)',
    region: 'Quận 10',
    status: 'open'
  },
  {
    id: 'l18',
    name: 'Quầy Sữa Hạt - Tô Hiến Thành',
    address: '531 Tô Hiến Thành, Phường Diên Hồng, TP. Hồ Chí Minh',
    phone: '082.559.6160',
    openingHours: '06:10 - 09:00 (T2-T6)',
    region: 'Quận 10',
    status: 'open'
  },
  {
    id: 'l19',
    name: 'Quầy Sữa Hạt - Cách Mạng Tháng Tám',
    address: '205 Cách Mạng Tháng Tám, Phường Xuân Hòa, TP. Hồ Chí Minh',
    phone: '082.559.6160',
    openingHours: '06:10 - 09:00 (T2-T6)',
    region: 'Quận 3',
    status: 'open'
  },
  {
    id: 'l20',
    name: 'Quầy Sữa Hạt - Trần Huy Liệu',
    address: '139 Trần Huy Liệu, Phường Phú Nhuận, TP. Hồ Chí Minh',
    phone: '082.559.6160',
    openingHours: '06:10 - 09:00 (T2-T6)',
    region: 'Quận Phú Nhuận',
    status: 'open'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Khách hàng thân thiết',
    role: 'Đặt hàng online qua Fanpage',
    text: 'Oki e nha. Cảm ơn Sữa xanh rất nhiều nhe, sữa ngon, giao đúng h, đúng hẹn. Shipper dễ thương nhiệt tình. Chị uống gần xong chai đậu đỏ rồi, sữa ngon quá nè. Tóm lại là 10 điểm nh.',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Khach+Hang&background=0ea5e9&color=fff&bold=true'
  },
  {
    id: 'r2',
    name: 'Khách mua lẻ',
    role: 'Feedback qua Fanpage Sữa Xanh',
    text: 'Sữa rất thơm, béo và ngọt rất vừa phải nha. Dạ, sữa ngon ạ. Mình uống thấy ưng lắm ạ.',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Khach+Le&background=38bdf8&color=fff&bold=true'
  },
  {
    id: 'r3',
    name: 'Chị Phạm T.',
    role: 'Đặt sỉ sự kiện Sữa Xanh x concung.com',
    text: 'Sữa oki bạn nha, không quá ngọt nè. Bạn giao hàng nhiệt tình nè, bạn giao nhiều, di chuyển cũng nặng, cũng cực bạn.',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Pham+T&background=1d4ed8&color=fff&bold=true'
  }
];

export const FAQS: FAQ[] = [
  {
    id: 'f1',
    question: 'Sữa hạt của chuỗi có ngọt nhiều không? Có dùng đường tinh luyện không?',
    answer: 'Tất cả các dòng sữa hạt của chúng tôi cam kết KHÔNG dùng đường tinh luyện. Vị ngọt nhẹ thanh mát hoàn toàn tự nhiên chiết xuất từ quả chà là hữu cơ hoặc hoàn toàn không đường (khách hàng có thể tự chọn độ ngọt lúc mua tại quầy).'
  },
  {
    id: 'f2',
    question: 'Chuối hấp và khoai lang có được làm mới mỗi ngày không?',
    answer: 'Đúng vậy! Toàn bộ khoai lang mật, khoai lang tím và chuối đều được sơ chế tỉ mỉ, hấp nóng trực tiếp bằng hơi nước ngay từ 4:30 sáng và giữ nóng trong tủ hấp giữ nhiệt tại quầy suốt buổi sáng để đảm bảo chất lượng dẻo, thơm, ấm nóng tuyệt đối khi trao tay khách.'
  },
  {
    id: 'f3',
    question: 'Sữa hạt bảo quản được trong bao lâu?',
    answer: 'Vì sữa hạt 100% nguyên chất, không chứa chất bảo quản nên ngon nhất khi thưởng thức ngay hoặc để mát tủ lạnh (từ 2 - 4 độ C) trong vòng 24 giờ kể từ lúc mua.'
  },
  {
    id: 'f4',
    question: 'Tôi muốn đặt số lượng lớn cho văn phòng hoặc trường học có được không?',
    answer: 'Dạ được ạ! Chúng tôi nhận cung cấp bữa sáng dinh dưỡng số lượng lớn cho các văn phòng, hội nghị, sự kiện. Bạn có thể đặt trước qua hotline hoặc điền thông tin vào form liên hệ trên website để nhận ưu đãi chiết khấu hấp dẫn và miễn phí vận chuyển.'
  }
];
