import { MenuItem, ComboItem, StallLocation, Review, FAQ } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    name: 'Sữa Hạnh Nhân Óc Chó',
    type: 'milk',
    description: 'Sự kết hợp hoàn hảo giữa hạnh nhân bùi béo và quả óc chó giàu dưỡng chất, được xay mịn nguyên chất không thêm đường tinh luyện.',
    image: '/src/assets/images/nut_milk_bottle_1784087725157.jpg',
    price: 32000,
    calories: 145,
    protein: 5.2,
    fiber: 2.8,
    fat: 9.5,
    benefits: ['Bổ sung Omega-3', 'Đẹp da, mượt tóc', 'Tốt cho trí não'],
    tags: ['Best Seller', 'Không Đường', 'Giàu Omega-3']
  },
  {
    id: 'm2',
    name: 'Sữa Hạt Sen Macca Lá Dứa',
    type: 'milk',
    description: 'Hạt sen thơm dịu, macca ngậy bùi, kết hợp với hương lá dứa thơm mát, giúp thư giãn tinh thần và khởi đầu ngày mới tỉnh táo.',
    image: '/src/assets/images/nut_milk_bottle_1784087725157.jpg',
    price: 35000,
    calories: 160,
    protein: 4.5,
    fiber: 3.1,
    fat: 10.2,
    benefits: ['Giảm căng thẳng', 'Hỗ trợ giấc ngủ ngon', 'Thanh nhiệt cơ thể'],
    tags: ['Thơm Mát', 'Thanh Đạm', 'Đặc Biệt']
  },
  {
    id: 'm3',
    name: 'Sữa Đậu Đỏ Gạo Lứt Đậu Điều',
    type: 'milk',
    description: 'Nguồn đạm thực vật dồi dào từ đậu đỏ và hạt điều, kết hợp tinh chất gạo lứt huyết rồng giàu chất xơ cho năng lượng bền bỉ.',
    image: '/src/assets/images/nut_milk_bottle_1784087725157.jpg',
    price: 29000,
    calories: 130,
    protein: 6.0,
    fiber: 4.2,
    fat: 5.5,
    benefits: ['Giàu sắt & chất xơ', 'Năng lượng bền bỉ', 'Hỗ trợ tiêu hóa'],
    tags: ['Nhiều Đạm', 'Giàu Chất Xơ', 'Thuần Chay']
  },
  {
    id: 'c1',
    name: 'Chuối Hấp Nước Cốt Dừa',
    type: 'carb',
    description: 'Chuối chín tự nhiên hấp dẻo thơm phức, rưới một lớp nước cốt dừa nguyên chất béo ngậy và chút vừng rang vàng ươm.',
    image: '/src/assets/images/steamed_banana_1784087740481.jpg',
    price: 22000,
    calories: 180,
    protein: 1.8,
    fiber: 3.5,
    fat: 4.8,
    benefits: ['Giàu Kali tự nhiên', 'Nguồn tinh bột tốt', 'Dễ tiêu hóa'],
    tags: ['Món Truyền Thống', 'Ngọt Dịu', 'Không Gluten']
  },
  {
    id: 'c2',
    name: 'Khoai Lang Mật Hấp Sáng',
    type: 'carb',
    description: 'Khoai lang mật Đà Lạt được chọn lọc kỹ lưỡng, hấp chín tới giữ nguyên độ mật dẻo ngọt, thơm lừng và ấm nóng trong sương sớm.',
    image: '/src/assets/images/sweet_potato_1784087756307.jpg',
    price: 18000,
    calories: 112,
    protein: 1.6,
    fiber: 3.0,
    fat: 0.2,
    benefits: ['Chỉ số đường huyết thấp', 'Giàu Vitamin A & C', 'Chống oxy hóa tốt'],
    tags: ['Ấm Nóng', 'Tinh Bột Phức', 'Ít Calories']
  },
  {
    id: 'c3',
    name: 'Khoai Lang Tím Hấp Dừa Sợi',
    type: 'carb',
    description: 'Khoai lang tím bùi bở hấp cùng lá dứa thơm phức, rắc kèm dừa sợi bào tươi sần sật mang lại cảm giác thích thú khi thưởng thức.',
    image: '/src/assets/images/sweet_potato_1784087756307.jpg',
    price: 19000,
    calories: 120,
    protein: 1.5,
    fiber: 3.3,
    fat: 1.5,
    benefits: ['Chứa nhiều Anthocyanin', 'Ổn định huyết áp', 'Cung cấp khoáng chất'],
    tags: ['Giàu Thể Khí', 'Thơm Lá Dứa', 'Đẹp Mắt']
  }
];

export const COMBO_ITEMS: ComboItem[] = [
  {
    id: 'cb1',
    name: 'Combo Sáng Thảnh Thơi',
    description: 'Sữa Hạnh Nhân Óc Chó kết hợp Chuối Hấp Nước Cốt Dừa dẻo ngậy. Sự cân bằng hoàn hảo giữa đạm hạt chất lượng cao và năng lượng dồi dào từ chuối chín.',
    milkId: 'm1',
    carbId: 'c1',
    price: 49000,
    originalPrice: 54000,
    calories: 325,
    protein: 7.0,
    fiber: 6.3,
    tags: ['Khuyên Dùng', 'Tiết Kiệm 5k'],
    image: '/src/assets/images/hero_breakfast_1784087707586.jpg'
  },
  {
    id: 'cb2',
    name: 'Combo Sáng Năng Lượng',
    description: 'Sữa Hạt Sen Macca thanh dịu cùng Khoai Lang Mật Hấp Sáng ấm áp. Nguồn tinh bột hấp thu chậm giúp bạn no lâu và tràn đầy sinh khí suốt buổi sáng.',
    milkId: 'm2',
    carbId: 'c2',
    price: 48000,
    originalPrice: 53000,
    calories: 272,
    protein: 6.1,
    fiber: 6.1,
    tags: ['Best Seller', 'Thanh Lọc', 'Tiết Kiệm 5k'],
    image: '/src/assets/images/hero_breakfast_1784087707586.jpg'
  },
  {
    id: 'cb3',
    name: 'Combo Sáng Đột Phá',
    description: 'Sữa Đậu Đỏ Gạo Lứt dồi dào đạm thực vật cùng Khoai Lang Tím Hấp Dừa Sợi. Giải pháp tối ưu cho những ai theo đuổi lối sống thuần chay, giữ dáng và yêu thích hương vị mộc mạc.',
    milkId: 'm3',
    carbId: 'c3',
    price: 43000,
    originalPrice: 48000,
    calories: 250,
    protein: 7.5,
    fiber: 7.5,
    tags: ['Eat Clean', 'Thuần Chay', 'Tiết Kiệm 5k'],
    image: '/src/assets/images/hero_breakfast_1784087707586.jpg'
  }
];

export const STALL_LOCATIONS: StallLocation[] = [
  {
    id: 'l1',
    name: 'Quầy Sữa Hạt - Nguyễn Thị Minh Khai',
    address: '150 Nguyễn Thị Minh Khai, Phường Võ Thị Sáu, Quận 3, TP. Hồ Chí Minh',
    phone: '0901.234.561',
    openingHours: '06:00 - 10:30',
    region: 'Quận 3',
    status: 'open'
  },
  {
    id: 'l2',
    name: 'Quầy Sữa Hạt - Điện Biên Phủ',
    address: '280 Điện Biên Phủ, Phường 17, Quận Bình Thạnh, TP. Hồ Chí Minh',
    phone: '0901.234.562',
    openingHours: '06:00 - 10:30',
    region: 'Quận Bình Thạnh',
    status: 'open'
  },
  {
    id: 'l3',
    name: 'Quầy Sữa Hạt - Lê Lợi',
    address: '45 Lê Lợi, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh',
    phone: '0901.234.563',
    openingHours: '06:00 - 10:00',
    region: 'Quận 1',
    status: 'busy'
  },
  {
    id: 'l4',
    name: 'Quầy Sữa Hạt - Trần Hưng Đạo',
    address: '382 Trần Hưng Đạo, Phường 2, Quận 5, TP. Hồ Chí Minh',
    phone: '0901.234.564',
    openingHours: '06:00 - 10:30',
    region: 'Quận 5',
    status: 'open'
  },
  {
    id: 'l5',
    name: 'Quầy Sữa Hạt - Phan Xích Long',
    address: '120 Phan Xích Long, Phường 7, Quận Phú Nhuận, TP. Hồ Chí Minh',
    phone: '0901.234.565',
    openingHours: '06:00 - 10:30',
    region: 'Quận Phú Nhuận',
    status: 'open'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Trần Minh Thư',
    role: 'Nhân viên văn phòng, Quận 1',
    text: 'Sáng nào đi làm mình cũng tạt qua quầy ở Điện Biên Phủ mua Combo Sáng Năng Lượng. Khoai lang mật ấm nóng, sữa hạt sen thơm bùi không bị ngọt gắt. Ăn xong nhẹ bụng mà tràn đầy năng lượng, làm việc tới trưa không mệt!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'r2',
    name: 'Nguyễn Tiến Đạt',
    role: 'Huấn luyện viên Gym, Quận 3',
    text: 'Làm trong ngành thể thao nên mình cực kỳ khó tính về dinh dưỡng buổi sáng. Sữa hạnh nhân óc chó ở đây đúng chuẩn nguyên chất, lượng protein dồi dào từ hạt tự nhiên, không độn đường hoá học. Chuối hấp dai ngon rưới cốt dừa rất hợp khẩu vị sành ăn clean.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'r3',
    name: 'Phạm Quỳnh Chi',
    role: 'Freelancer & Content Creator',
    text: 'Yêu cái phong cách thiết kế tối giản, tinh tế của quầy sữa hạt. Nhìn rất sạch sẽ, tươi mới và thiện cảm. Nhân viên siêu dễ thương, chuẩn bị combo cực nhanh chỉ 30 giây là mình có bữa sáng bổ dưỡng mang đi rồi.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
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
