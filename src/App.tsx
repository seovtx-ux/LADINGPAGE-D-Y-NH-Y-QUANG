import { useState, useRef } from "react";
import {
  Cable,
  Zap,
  ShieldCheck,
  TrendingDown,
  Wrench,
  CheckCircle2,
  Award,
  Headset,
  FileText,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Star,
  ArrowRight,
  ShieldAlert,
  Network,
  Activity,
  Shield,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Youtube,
  Clock,
} from "lucide-react";

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  const partnersRef = useRef<HTMLDivElement>(null);
  const pressRef = useRef<HTMLDivElement>(null);

  const scrollContainer = (ref: React.RefObject<HTMLDivElement>, direction: "left" | "right") => {
    if (ref.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToForm = () => {
    document
      .getElementById("contact-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-blue-200 selection:text-[#065e9b]">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#d31820] to-[#ff2a34] text-white py-2 px-4 text-sm font-medium hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone className="w-4 h-4" /> Tổng đài: 0973.497.685
            </span>
            <span className="flex items-center gap-1">
              <Mail className="w-4 h-4" /> Email: maxtel.vn@gmail.com
            </span>
          </div>
          <div>Cung cấp thiết bị viễn thông chính hãng - Đầy đủ CO, CQ</div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => scrollToSection("hero")}
            >
              <img
                src="/logo.png"
                alt="MAXTEL"
                className="h-12 w-auto object-contain"
              />
            </div>
            <div className="hidden lg:flex gap-8">
              <button
                onClick={() => scrollToSection("products")}
                className="text-[15px] font-bold text-slate-700 hover:text-[#d31820] transition-colors uppercase tracking-wide"
              >
                Sản Phẩm
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-[15px] font-bold text-slate-700 hover:text-[#d31820] transition-colors uppercase tracking-wide"
              >
                Tính Năng
              </button>
              <button
                onClick={() => scrollToSection("specs")}
                className="text-[15px] font-bold text-slate-700 hover:text-[#d31820] transition-colors uppercase tracking-wide"
              >
                Thông Số
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-[15px] font-bold text-slate-700 hover:text-[#d31820] transition-colors uppercase tracking-wide"
              >
                Hỏi Đáp
              </button>
            </div>
            <button
              onClick={scrollToForm}
              className="px-6 py-2.5 bg-gradient-to-r from-[#d31820] to-[#ff2a34] hover:shadow-lg hover:-translate-y-0.5 text-white text-[15px] font-bold uppercase tracking-wide rounded-full transition-all"
            >
              Nhận Báo Giá
            </button>
          </div>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section
        id="hero"
        className="relative pt-12 pb-24 md:pt-16 md:pb-32 bg-[#065e9b] overflow-hidden"
      >
        {/* Background Patterns */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        ></div>
        <div className="absolute -right-64 -top-64 w-[800px] h-[800px] bg-blue-500 rounded-full mix-blend-screen opacity-20 blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Text Content */}
            <div className="text-left text-white max-w-2xl mx-auto lg:mx-0">
              <div className="inline-block px-4 py-1.5 border border-white/20 rounded-full text-sm font-semibold mb-6 bg-white/5 backdrop-blur-sm shadow-sm hover:bg-white/10 transition-colors">
                Đạt Tiêu Chuẩn Quốc Tế ISO 9001
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
                DÂY NHẢY QUANG MAXTEL
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 inline-block mt-3">
                  Triệt Tiêu Suy Hao
                </span>
                <span className="block mt-2 text-3xl sm:text-4xl font-bold opacity-90">
                  Bảo Vệ Hạ Tầng Mạng
                </span>
              </h1>

              <p className="text-lg text-blue-100 mb-10 leading-relaxed font-medium">
                Được tin dùng bởi các Data Center và nhà thầu viễn thông hàng
                đầu tại Việt Nam. Khác biệt với phôi quang chính hãng, vỏ cáp
                siêu bền, cam kết suy hao {"<"} 0.2dB.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToForm}
                  className="px-8 py-4 bg-gradient-to-r from-[#d31820] to-[#ff2a34] hover:shadow-[0_0_20px_rgba(211,24,32,0.4)] text-white text-lg font-bold rounded-full transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1"
                >
                  Nhận Báo Giá Dự Án <ArrowRight className="h-5 w-5" />
                </button>
                <a
                  href="#specs"
                  className="px-8 py-4 bg-white hover:bg-slate-50 text-[#065e9b] text-lg font-bold rounded-full transition-all flex items-center justify-center shadow-lg transform hover:-translate-y-1"
                >
                  Xem Thông Số Kỹ Thuật
                </a>
              </div>
            </div>

            {/* Image Content */}
            <div className="relative mx-auto w-full max-w-lg lg:max-w-full">
              {/* Main Image Base */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-[4/3] bg-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200"
                  alt="Dây nhảy quang hệ thống Server"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                  <div className="font-bold text-white text-xl">
                    Lõi Quang Suy Hao Thấp
                  </div>
                  <div className="text-white/80 text-sm">
                    Pass 100% bài đo kiểm Data Center
                  </div>
                </div>
              </div>

              {/* Floating badges */}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Floating Stats Grid */}
      <section className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-12 sm:-mt-16 mb-16">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 sm:p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="h-full px-4 py-6 text-center flex flex-col items-center justify-center hover:bg-slate-50 transition-colors rounded-xl md:rounded-none">
              <Zap className="h-8 w-8 text-[#d31820] mb-3" />
              <div className="font-extrabold text-slate-900 text-[15px] uppercase">
                Lõi Quang Cao Cấp
              </div>
              <div className="text-slate-500 text-sm mt-1 font-medium">
                Truyền dẫn ổn định
              </div>
            </div>
            <div className="h-full px-4 py-6 text-center flex flex-col items-center justify-center hover:bg-slate-50 transition-colors rounded-xl md:rounded-none">
              <ShieldCheck className="h-8 w-8 text-[#065e9b] mb-3" />
              <div className="font-extrabold text-slate-900 text-[15px] uppercase">
                Vỏ Cáp Siêu Bền
              </div>
              <div className="text-slate-500 text-sm mt-1 font-medium">
                LSZH chống cháy an toàn
              </div>
            </div>
            <div className="h-full px-4 py-6 text-center flex flex-col items-center justify-center hover:bg-slate-50 transition-colors rounded-xl md:rounded-none">
              <TrendingDown className="h-8 w-8 text-[#d31820] mb-3" />
              <div className="font-extrabold text-slate-900 text-[15px] uppercase">
                Suy Hao Cực Thấp
              </div>
              <div className="text-slate-500 text-sm mt-1 font-medium">
                Tối đa ≤ 0.2dB
              </div>
            </div>
            <div className="h-full px-4 py-6 text-center flex flex-col items-center justify-center hover:bg-slate-50 transition-colors rounded-xl md:rounded-none">
              <Award className="h-8 w-8 text-[#065e9b] mb-3" />
              <div className="font-extrabold text-slate-900 text-[15px] uppercase">
                Bảo Hành 1 Đổi 1
              </div>
              <div className="text-slate-500 text-sm mt-1 font-medium">
                Trong vòng 12 tháng
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Products Grid */}
      <section id="products" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-[#d31820] tracking-widest uppercase mb-3 drop-shadow-sm">
              Chất Lượng Vượt Trội
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#065e9b] uppercase tracking-tight">
              Các Dòng Sản Phẩm Tiêu Biểu
            </h3>
            <div className="mt-4 w-24 h-1.5 bg-gradient-to-r from-[#065e9b] to-[#d31820] mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-slate-600 font-medium">
              Cung cấp đa dạng các tuỳ chọn Single-mode, Multimode, và các loại
              chuẩn nối (SC, LC, FC, ST, MTP/MPO) đáp ứng mọi yêu cầu của hạ
              tầng viễn thông hiện đại.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              {
                img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=600",
                title: "Single-mode (OS2)",
                desc: "Dây cáp màu vàng đặc trưng, thiết kế cho truyền tải khoảng cách hàng chục km. Phù hợp hạ tầng trung tâm.",
                price: "Chỉ từ: 35.000 đ",
                label: "BEST SELLER",
              },
              {
                img: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&q=80&w=600",
                title: "Multimode (OM3/OM4/OM5)",
                desc: "Dây cáp xanh ngọc (OM3), tím (OM4) hoặc xanh lá mạ (OM5), chuyên dùng cho mạng nội bộ, thiết bị mạng tốc độ từ 10G đến 100G.",
                price: "Chỉ từ: 75.000 đ",
                label: "HOT",
              },
              {
                img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
                title: "Dây Nhảy MTP/MPO",
                desc: "Chuẩn giao tiếp mật độ cao từ 12-24 sợi/đầu. Giải pháp toàn diện tiết kiệm không gian Data Center.",
                price: "Liên hệ ngay",
                label: "DATA CENTER",
              },
              {
                img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
                title: "Dây Bọc Kim Loại (Armored)",
                desc: "Thêm lớp vật liệu xoắn ốc kẽm bảo vệ bên ngoài, chống chuột cắn, chịu lực nén siêu cao, dùng trong môi trường khắc nghiệt.",
                price: "Liên hệ ngay",
              },
            ].map((prod, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col group"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={prod.img}
                    alt={prod.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {prod.label && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-[#d31820] to-[#ff2a34] text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md z-10">
                      {prod.label}
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1 border-t-4 border-[#065e9b]">
                  <h4 className="font-extrabold text-xl text-slate-800 mb-2 group-hover:text-[#d31820] transition-colors">
                    {prod.title}
                  </h4>
                  <p className="text-slate-500 text-sm mb-4 flex-1">
                    {prod.desc}
                  </p>
                  <div className="text-[#065e9b] font-extrabold text-xl mb-6 bg-blue-50 px-3 py-2 rounded-lg inline-block text-center mx-auto">
                    {prod.price}
                  </div>
                  <button
                    onClick={scrollToForm}
                    className="w-full py-3.5 bg-slate-100 text-[#065e9b] hover:bg-[#065e9b] hover:text-white text-sm font-bold uppercase tracking-wider rounded-xl transition-all mt-auto border border-slate-200 hover:border-transparent flex items-center justify-center gap-2"
                  >
                    Nhận Báo Giá <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Features Section (Tính năng vượt trội) */}
      <section id="features" className="py-16 md:py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#d31820]/5 rounded-bl-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#065e9b]/5 rounded-tr-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-[#d31820] tracking-widest uppercase mb-3">
              Ưu Điểm Cốt Lõi
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#065e9b] uppercase tracking-tight">
              Tính Năng Vượt Trội
            </h3>
            <div className="mt-4 w-24 h-1.5 bg-gradient-to-r from-[#065e9b] to-[#d31820] mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-slate-600 font-medium">
              Không chạy theo lợi thế giá siêu thấp, MAXTEL tập trung thiết kế
              các dòng cáp quang đáp ứng các tiêu chuẩn khắt khe nhất trong
              triển khai diện rộng.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-10 w-10 text-[#065e9b]" />,
                title: "Phôi Quang Nhập Khẩu",
                desc: "Sử dụng vật liệu dẫn truyền ánh sáng quang học đo kiểm chuẩn xác, đảm bảo chiết suất cao và triệt tiêu gián đoạn mạng tuyệt đối.",
              },
              {
                icon: <Wrench className="h-10 w-10 text-[#d31820]" />,
                title: "Gia Công Đánh Bóng",
                desc: "Bề mặt đầu cắt chuẩn xác được mài bóng UPC (mặt vát phẳng) hoặc APC (mặt vát góc 8 độ), giảm phản xạ ánh sáng ngược.",
              },
              {
                icon: <Shield className="h-10 w-10 text-[#065e9b]" />,
                title: "Vỏ Cáp An Toàn LSZH",
                desc: "Cam kết sử dụng vật liệu LSZH khó cháy, ít tạo khói độc, hoặc chất liệu PVC chống chịu nhiệt cực mạnh đạt chuẩn viễn thông.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border-2 border-slate-100 hover:border-[#065e9b]/30 hover:shadow-[0_10px_40px_rgba(6,94,155,0.1)] transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:scale-150 transition-transform duration-700">
                  {feature.icon}
                </div>
                <div className="w-16 h-16 rounded-2xl flex justify-center items-center mb-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] bg-slate-50 group-hover:bg-white border border-slate-100 group-hover:scale-110 transition-all">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-extrabold text-slate-800 mb-4 group-hover:text-[#065e9b] transition-colors">
                  {feature.title}
                </h4>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Specs Table */}
      <section
        id="specs"
        className="py-16 md:py-24 bg-slate-50 border-y border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="text-xs font-bold text-[#d31820] tracking-widest uppercase mb-3 inline-block bg-red-100 px-3 py-1 rounded-md">
                Báo cáo kiểm định
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#065e9b] uppercase mb-6 leading-tight">
                Thông Số Kỹ Thuật <br />
                <span className="text-[#d31820]">Chuẩn Doanh Nghiệp</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                Các chỉ tiêu kỹ thuật này đã đồng hành cùng MAXTEL trong hàng
                nghìn dự án chính phủ và khối doanh nghiệp vừa/lớn, pass 100%
                khi chạy máy Fluke Network và thiết bị OTDR chuyên dụng.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-slate-700 font-medium">
                  <CheckCircle2 className="h-6 w-6 text-[#d31820] flex-shrink-0" />
                  <span>
                    Test report dán trực tiếp ngay trên từng vỏ bọc nylon của
                    sản phẩm cáp.
                  </span>
                </li>
                <li className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-slate-700 font-medium">
                  <CheckCircle2 className="h-6 w-6 text-[#d31820] flex-shrink-0" />
                  <span>
                    Cam kết và bảo hành dài hạn cho các dự án và nhà thầu tích
                    hợp mạng.
                  </span>
                </li>
              </ul>
              <button
                onClick={scrollToForm}
                className="px-8 py-4 bg-[#065e9b] hover:bg-[#044a7a] text-white text-[15px] font-bold uppercase tracking-wider rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 inline-block w-full text-center sm:w-auto"
              >
                Yêu Cầu Catalogue File
              </button>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white border-x border-y border-slate-200 rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 relative group">
                <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-[#065e9b]/10 to-[#d31820]/10 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500"></div>
                <div className="overflow-x-auto relative z-10 w-full">
                  <table className="w-full text-left border-collapse table-fixed min-w-[500px]">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#065e9b] to-[#044a7a] text-white">
                        <th className="w-5/12 py-5 px-6 font-bold uppercase tracking-wider text-[13px] border-b-[3px] border-[#d31820]">
                          Chỉ Tiêu Hạng Mục
                        </th>
                        <th className="w-7/12 py-5 px-6 font-bold uppercase tracking-wider text-[13px] border-l border-white/20 border-b-[3px] border-[#d31820]">
                          Thông Số Thực Tế
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr className="hover:bg-slate-50 transition-colors group/row">
                        <td className="py-4.5 px-6 font-semibold text-slate-800">
                          Độ Suy Hao Chèn (IL)
                        </td>
                        <td className="py-4.5 px-6 text-slate-700 border-l border-slate-100 font-bold text-[#d31820] group-hover/row:text-[#065e9b] transition-colors">
                          ≤ 0.20 dB (Typ. ≤ 0.15 dB)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors bg-slate-50/40 group/row">
                        <td className="py-4.5 px-6 font-semibold text-slate-800">
                          Độ Suy Hao Phản Xạ (RL)
                        </td>
                        <td className="py-4.5 px-6 text-slate-600 border-l border-slate-100 font-medium">
                          UPC ≥ 50 dB | APC ≥ 60 dB
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors group/row">
                        <td className="py-4.5 px-6 font-semibold text-slate-800">
                          Chuẩn Đầu Nối / Mặt Cắt
                        </td>
                        <td className="py-4.5 px-6 text-slate-600 border-l border-slate-100 font-medium">
                          SC, LC, FC, ST... (UPC, APC, PC)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors bg-slate-50/40 group/row">
                        <td className="py-4.5 px-6 font-semibold text-slate-800">
                          Đường Kính Lõi Khung (Core)
                        </td>
                        <td className="py-4.5 px-6 text-slate-600 border-l border-slate-100 font-medium">
                          9/125µm (OS2), 50/125µm (OM3/OM4)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors group/row">
                        <td className="py-4.5 px-6 font-semibold text-slate-800">
                          Khả Năng Chịu Lực Kéo
                        </td>
                        <td className="py-4.5 px-6 text-slate-600 border-l border-slate-100 font-medium">
                          Ngắn hạn: ≥ 100N, Dài hạn: ≥ 50N
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors bg-slate-50/40 group/row">
                        <td className="py-4.5 px-6 font-semibold text-slate-800">
                          Chất Liệu Vỏ Cáp
                        </td>
                        <td className="py-4.5 px-6 text-slate-600 border-l border-slate-100 font-medium">
                          LSZH, PVC, PE - Phi 2.0mm / 3.0mm
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section id="faq" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold text-[#d31820] tracking-widest uppercase mb-3">
              Giải Đáp Nhanh
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#065e9b] uppercase tracking-tight">
              Câu Hỏi Thường Gặp
            </h3>
            <div className="mt-4 w-24 h-1.5 bg-gradient-to-r from-[#065e9b] to-[#d31820] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "1. Sự khác biệt giữa dây cáp quang Single-mode và Multimode?",
                a: "Single-mode (màu vàng) có lõi nhỏ, dùng cho khoảng cách xa (lên tới hàng chục km) với tốc độ cao. Multimode (màu cam/xanh ngọc/tím) dùng cho truyền tải nội mạng LAN, Data Center khoảng cách ngắn (thường < 500m) với băng thông rất lớn như 10G/40G.",
              },
              {
                q: "2. Thời gian cung cấp cho đơn đặt hàng thi công dự án?",
                a: "Với các độ dài tiêu chuẩn chuẩn (3m, 5m, 10m - SC, LC...), MAXTEL luôn có sẵn kho lên tới hàng chục nghìn sợi, hỗ trợ giao ngay toàn quốc trong 24h. Những chiều dài yêu cầu đặc biệt sẽ gia công từ 3-7 ngày.",
              },
              {
                q: "3. Công ty có hỗ trợ cung cấp mẫu (Sample) test cáp không?",
                a: "CHẮC CHẮN Có. MAXTEL cấp mẫu hoàn toàn miễn phí cho nhà thầu để test cắm rút hoặc đo máy Fluke suy hao trực tiếp trước khi quyết định ký đơn hàng.",
              },
              {
                q: "4. Dây nhảy của hãng có tương thích Switch như Cisco, HPE không?",
                a: "Tương thích 100%. Các SFP module trên Switch của Cisco, HPE, Juniper, Huawei đều nhận và sáng tín hiệu tốt, không đứt đoạn, suy hao đúng vạch chuẩn khi sử dụng dây nhảy quang MAXTEL.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="border-2 border-slate-100 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#065e9b]/30 shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full text-left px-6 py-5 md:py-6 bg-white hover:bg-slate-50 flex justify-between items-center focus:outline-none"
                >
                  <span
                    className={`font-extrabold md:text-lg pr-4 ${openFaq === i ? "text-[#065e9b]" : "text-slate-800"}`}
                  >
                    {faq.q}
                  </span>
                  <div
                    className={`p-2 rounded-full flex-shrink-0 transition-colors ${openFaq === i ? "bg-[#065e9b] text-white" : "bg-slate-100 text-slate-500"}`}
                  >
                    {openFaq === i ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </div>
                </button>
                {openFaq === i && (
                  <div className="px-6 py-5 bg-slate-50 text-slate-700 border-t border-slate-100 leading-relaxed font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.1. Hàng Sẵn Kho & Đối Tác */}
      <section id="ve-chung-toi" className="py-16 lg:py-24 bg-white border-y border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[#065e9b] font-black tracking-widest uppercase text-sm mb-3">NĂNG LỰC CUNG ỨNG</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">HÀNG SẴN KHO - GIAO NGAY</h3>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#d31820] to-[#b3141a] rounded-full mx-auto mb-16"></div>
          
          <div className="relative group/images mb-20">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 px-4 -mx-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 hide-scrollbar scroll-smooth" style={{ scrollbarWidth: "none" }}>
              <div className="shrink-0 w-[80vw] sm:w-auto snap-start aspect-square bg-slate-50 p-2 md:p-3 border border-slate-200 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <img alt="Dự án 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=600" />
                </div>
              </div>
              <div className="shrink-0 w-[80vw] sm:w-auto snap-start aspect-square bg-slate-50 p-2 md:p-3 border border-slate-200 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <img alt="Dự án 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&q=80&w=600" />
                </div>
              </div>
              <div className="shrink-0 w-[80vw] sm:w-auto snap-start aspect-square bg-slate-50 p-2 md:p-3 border border-slate-200 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <img alt="Dự án 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600" />
                </div>
              </div>
              <div className="shrink-0 w-[80vw] sm:w-auto snap-start aspect-square bg-slate-50 p-2 md:p-3 border border-slate-200 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <img alt="Dự án 4" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600" />
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-10 tracking-tight uppercase">ĐỐI TÁC THƯỜNG XUYÊN CỦA CHÚNG TÔI</h3>
          <div className="relative group/partners mx-auto max-w-full lg:px-12">
            <button onClick={() => scrollContainer(partnersRef, "left")} className="absolute left-0 top-1/2 -translate-y-1/2 -mt-2 z-10 bg-white shadow-md rounded-full p-2 border border-slate-200 text-[#065e9b] hover:bg-slate-50 transition-all hidden lg:flex opacity-0 group-hover/partners:opacity-100 hover:scale-110">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scrollContainer(partnersRef, "right")} className="absolute right-0 top-1/2 -translate-y-1/2 -mt-2 z-10 bg-white shadow-md rounded-full p-2 border border-slate-200 text-[#065e9b] hover:bg-slate-50 transition-all hidden lg:flex opacity-0 group-hover/partners:opacity-100 hover:scale-110">
              <ChevronRight className="w-5 h-5" />
            </button>
            <div ref={partnersRef} className="flex gap-4 md:gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pt-4 px-4 items-center justify-start scroll-smooth" style={{ scrollbarWidth: "none" }}>
              {[
                { name: "VIETTEL", color: "hover:border-[#ee0033]/30", textColor: "group-hover/partner:text-[#ee0033]" },
                { name: "VNPT", color: "hover:border-[#0060af]/30", textColor: "group-hover/partner:text-[#0060af]" },
                { name: "FPT TELECOM", color: "hover:border-[#f06e28]/30", textColor: "group-hover/partner:text-[#f06e28]" },
                { name: "CMC CORP", color: "hover:border-[#005a9e]/30", textColor: "group-hover/partner:text-[#005a9e]" },
                { name: "MOBIFONE", color: "hover:border-slate-400", textColor: "group-hover/partner:text-slate-800" },
                { name: "SCTV", color: "hover:border-[#00529c]/30", textColor: "group-hover/partner:text-[#00529c]" },
                { name: "NETNAM", color: "hover:border-[#0067b1]/30", textColor: "group-hover/partner:text-[#0067b1]" },
                { name: "HTC ITC", color: "hover:border-[#f89c1e]/30", textColor: "group-hover/partner:text-[#f89c1e]" }
              ].map((partner, idx) => (
                <div key={idx} className={`group/partner px-6 md:px-8 py-3 md:py-4 bg-orange-50/50 hover:bg-orange-50 border border-orange-100/50 shadow-sm rounded-xl filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:shadow-md hover:-translate-y-1 ${partner.color} transition-all duration-300 scroll-ml-4 snap-start shrink-0`}>
                  <h3 className={`font-black text-xl md:text-2xl tracking-widest text-[#0f172a] ${partner.textColor} transition-colors duration-300 m-0 whitespace-nowrap`}>{partner.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6.2. Truyền Thông */}
      <section className="py-16 lg:py-24 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full overflow-hidden">
          <h2 className="text-[#065e9b] font-black tracking-widest uppercase text-sm mb-3">TIN TỨC & BÁO CHÍ</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">TRUYỀN THÔNG NÓI GÌ VỀ CHÚNG TÔI</h3>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#d31820] to-[#b3141a] rounded-full mx-auto mb-16"></div>
          <div className="relative group lg:px-12">
            <button onClick={() => scrollContainer(pressRef, "left")} className="absolute left-0 top-1/2 -translate-y-1/2 -mt-4 z-10 bg-white shadow-md rounded-full p-2 border border-slate-200 text-[#065e9b] hover:bg-slate-50 transition-all hidden lg:flex opacity-0 group-hover:opacity-100 hover:scale-110">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scrollContainer(pressRef, "right")} className="absolute right-0 top-1/2 -translate-y-1/2 -mt-4 z-10 bg-white shadow-md rounded-full p-2 border border-slate-200 text-[#065e9b] hover:bg-slate-50 transition-all hidden lg:flex opacity-0 group-hover:opacity-100 hover:scale-110">
              <ChevronRight className="w-5 h-5" />
            </button>
            <div ref={pressRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pt-4 px-4 -mx-4 items-stretch scroll-smooth" style={{ scrollbarWidth: "none" }}>
              {[
                { news: "BÁO DÂN TRÍ", title: "Maxtel - Giải pháp cáp quang nội địa đạt chuẩn quốc tế", quote: '"Với thiết kế chắc chắn, tính đồng bộ cao và giá thành hợp lý, sản phẩm cáp quang Maxtel đang trở thành sự lựa chọn ưu tiên của nhiều dự án viễn thông lớn tại Việt Nam."', color: "text-[#065e9b]", bg: "bg-blue-50 border-blue-100" },
                { news: "VNEXPRESS", title: "Thương hiệu Việt khẳng định vị thế trong ngành hạ tầng mạng", quote: '"Sự xuất hiện của Maxtel giúp các kỹ sư IT và nhà thầu tiết kiệm hàng tỷ đồng thay vì phải nhập khẩu vật tư, trong khi chất lượng không hề thua kém."', color: "text-[#d31820]", bg: "bg-red-50 border-red-100" },
                { news: "CAFEF", title: "Đầu tư mạnh vào công nghệ tự động hóa, Maxtel nâng tầm năng lực sản xuất", quote: '"Hàng loạt dây chuyền CNC và Robot tự động hóa đã được Maxtel đưa vào sản xuất nhằm tạo ra những sản phẩm với độ hoàn thiện tinh xảo nhất."', color: "text-[#065e9b]", bg: "bg-blue-50 border-blue-100" },
                { news: "THANH NIÊN", title: "Doanh nghiệp công nghệ Việt vượt khó, tự chủ thiết bị viễn thông", quote: '"Thay vì phụ thuộc, Maxtel đã tự chủ được quy trình thiết kế và từ đó cung cấp ra thị trường dòng sản phẩm có khả năng tùy biến cao, đáp ứng mọi nhu cầu dự án khắt khe."', color: "text-[#d31820]", bg: "bg-red-50 border-red-100" },
                { news: "VIETNAMNET", title: "Những yếu tố giúp Maxtel trở thành đối tác tin cậy của các nhà mạng lớn", quote: '"Không chỉ là sản phẩm, dịch vụ hỗ trợ sau bán hàng và cam kết bảo hành lâu dài chính là điểm mấu chốt để giữ chân những khách hàng khó tính như VNPT Telecom."', color: "text-[#065e9b]", bg: "bg-blue-50 border-blue-100" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white scroll-ml-4 snap-start shrink-0 w-[85vw] sm:w-[350px] lg:w-[380px] rounded-3xl p-8 shadow-[0_4px_15px_-5px_rgba(0,0,0,0.05)] border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-auto group/card relative z-10 hover:border-[#065e9b] hover:ring-2 hover:ring-[#065e9b]/20 text-left">
                  <div className={`inline-flex items-center justify-center px-4 py-2 rounded-xl sm:w-auto self-start mb-6 border ${item.bg}`}>
                    <span className={`font-black tracking-wider ${item.color} text-sm drop-shadow-sm`}>{item.news}</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover/card:text-[#065e9b] transition-colors leading-snug">{item.title}</h4>
                  <p className="text-slate-600 font-medium italic mb-8 flex-grow leading-relaxed">"{item.quote}"</p>
                  <a href="#" className="inline-flex items-center gap-2 font-bold text-[#065e9b] hover:text-[#d31820] transition-colors mt-auto">
                    Đọc toàn bài <ArrowRight className="w-5 h-5 group-hover/card:translate-x-1 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6.3. Đánh Giá Khách Hàng */}
      <section className="py-16 lg:py-24 bg-white border-t border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full overflow-hidden">
          <h2 className="text-[#065e9b] font-black tracking-widest uppercase text-sm mb-3">ĐÁNH GIÁ TỪ KHÁCH HÀNG</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">ĐỐI TÁC NÓI GÌ VỀ CHÚNG TÔI</h3>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#d31820] to-[#b3141a] rounded-full mx-auto mb-16"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: '"Tôi rất ấn tượng với chất lượng cáp quang của Maxtel. Độ hoàn thiện tuyệt hảo, đo kiểm đạt chuẩn. Đặc biệt dịch vụ hỗ trợ giao hàng rất nhanh chóng và chuyên nghiệp."',
                name: "Anh Trần Ngọc Bình", role: "Giám đốc IT - Giải Pháp Việt", img: "https://i.pravatar.cc/150?img=11"
              },
              {
                text: '"Chúng tôi đã triển khai hàng loạt dự án sử dụng sản phẩm Maxtel. Hệ thống không chỉ đáp ứng các tiêu chuẩn kỹ thuật số khắt khe mà còn tối ưu hóa chi phí đầu tư đáng kể."',
                name: "Chị Nguyễn Mai Lan", role: "Trưởng phòng Mua Sắm - Viễn Thông", img: "https://i.pravatar.cc/150?img=5"
              },
              {
                text: '"Dây nhảy quang của Maxtel suy hao cực thấp, thiết kế thông minh, đa dạng đầu nối rất tiện lợi cho các phòng Data Center đòi hỏi kết nối mật độ cao."',
                name: "Anh Phan Minh Đức", role: "Trưởng dự án Hạ tầng mạng", img: "https://i.pravatar.cc/150?img=8"
              }
            ].map((review, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.08)] border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-left relative flex flex-col h-full group/review">
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-slate-600 font-medium italic mb-8 flex-grow leading-relaxed relative z-10 text-[15px]">
                  {review.text}
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <img alt={review.name} className="w-12 h-12 rounded-full border-2 border-[#065e9b]/20 shadow-sm object-cover" src={review.img} />
                  <div>
                    <h4 className="font-bold text-slate-900 text-[15px]">{review.name}</h4>
                    <p className="text-[#065e9b] text-[13px] font-semibold">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Last Call To Action & Footer Contact Form */}
      <section id="contact-form" className="py-16 lg:py-24 bg-[#065e9b] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#065e9b]/10 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#d31820]/10 blur-[120px] rounded-full"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-slate-200">
            <div className="md:w-5/12 bg-gradient-to-br from-[#065e9b] to-[#011e36] p-6 sm:p-10 md:p-14 text-white relative flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <h3 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6 leading-tight">
                Gửi mã sản phẩm,<br />Nhận báo giá <span className="text-yellow-400">chỉ trong 15 phút</span>.
              </h3>
              <p className="text-[#aebecd] font-medium mb-8 sm:mb-10 text-sm leading-relaxed">
                Đội ngũ kỹ sư Maxtel luôn sẵn sàng bóc tách vật tư và làm bảng giá chiết khấu sâu nhất cho dự án của bạn, hoàn toàn miễn phí.
              </p>
              <ul className="space-y-6">
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <div className="font-bold">Phản hồi siêu tốc</div>
                    <div className="text-xs text-[#aebecd] mt-1">Báo giá qua Zalo/Email trong 15p</div>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="font-bold">Luôn chính xác</div>
                    <div className="text-xs text-[#aebecd] mt-1">Chuẩn kỹ thuật & Số lượng sẵn kho</div>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="md:w-7/12 p-6 sm:p-10 md:p-14 bg-white">
              <form className="flex flex-col h-full" onSubmit={(e) => e.preventDefault()}>
                <h4 className="text-xl sm:text-2xl font-black text-slate-800 mb-6 sm:mb-8">Điền Thông Tin Yêu Cầu Báo Giá</h4>
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Họ và tên <span className="text-[#d31820]">*</span></label>
                      <input required className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-[#065e9b]/10 focus:border-[#065e9b] outline-none transition-all font-semibold text-slate-800 placeholder-slate-400" placeholder="VD: Nguyễn Văn A..." type="text" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Đơn vị công tác <span className="text-[#d31820]">*</span></label>
                      <input required className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-[#065e9b]/10 focus:border-[#065e9b] outline-none transition-all font-semibold text-slate-800 placeholder-slate-400" placeholder="VD: Công ty ABC..." type="text" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Số điện thoại <span className="text-[#d31820]">*</span></label>
                      <input required className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-[#065e9b]/10 focus:border-[#065e9b] outline-none transition-all font-semibold text-slate-800 placeholder-slate-400" placeholder="09xx..." type="tel" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Email <span className="text-[#d31820]">*</span></label>
                      <input required className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-[#065e9b]/10 focus:border-[#065e9b] outline-none transition-all font-semibold text-slate-800 placeholder-slate-400" placeholder="email@congty.com" type="email" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Dòng Sản Phẩm Quan Tâm <span className="text-[#d31820]">*</span></label>
                    <select required className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-[#065e9b]/10 focus:border-[#065e9b] outline-none transition-all font-semibold text-slate-800 cursor-pointer">
                      <option value="" disabled selected>-- Chọn dòng sản phẩm --</option>
                      <option value="singlemode">Dây nhảy Single-mode (OS2)</option>
                      <option value="multimode">Dây nhảy Multimode (OM3/OM4/OM5)</option>
                      <option value="mpo-mtp">Dây nhảy MPO/MTP</option>
                      <option value="khac">Khác / Cần tư vấn thêm</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Ghi chú (Số lượng dự kiến, yêu cầu...) <span className="text-[#d31820]">*</span></label>
                    <textarea required rows={4} className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-[#065e9b]/10 focus:border-[#065e9b] outline-none transition-all resize-none font-semibold text-slate-800 placeholder-slate-400" placeholder="Ví dụ: Xin chào, tôi cần báo giá 500 sợi dây quang chuẩn OS2 LC-LC dài 5 mét..."></textarea>
                  </div>
                </div>
                <div className="mt-8">
                  <button type="submit" className="group w-full relative overflow-hidden bg-gradient-to-r from-[#d31820] to-[#b3141a] text-white font-black text-lg py-4 rounded-xl shadow-[0_10px_30px_-10px_rgba(211,24,32,0.6)] transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3">
                    NHẬN BÁO GIÁ NGAY LẬP TỨC
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-center mt-4 text-xs font-semibold text-slate-500 flex items-center justify-center gap-1.5">
                    <Shield className="w-4 h-4 text-green-500" /> Cam kết bảo mật 100% thông tin quy mô dự án.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer Detail */}
      <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="mb-6">
                <img
                  src="/logo.png"
                  alt="MAXTEL"
                  className="h-14 w-auto object-contain bg-white rounded-lg p-2"
                />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                Thương hiệu cung cấp giải pháp cáp quang, thiết bị truyền dẫn và
                phụ kiện viễn thông chuẩn quốc tế hàng đầu Việt Nam.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-800 hover:bg-[#065e9b] rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-800 hover:bg-[#d31820] rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-xl">Sản Phẩm</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors font-medium"
                  >
                    Dây Nhảy Single-mode (OS2)
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors font-medium"
                  >
                    Dây Nhảy Multimode (OM3/OM4)
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors font-medium"
                  >
                    Dây Nhảy Quang MPO/MTP
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors font-medium"
                  >
                    Dây Nhảy Chống Chuột (Armored)
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-xl">
                Dịch Vụ & Hỗ Trợ
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors font-medium"
                  >
                    Tải Catalogue & Thông số
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors font-medium"
                  >
                    Trung tâm bảo hành toàn quốc
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors font-medium"
                  >
                    Chính sách dành cho Đại lý
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors font-medium"
                  >
                    Tra cứu Serial/Part Number
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-xl">
                CÔNG TY CỔ PHẦN MAXTEL VIỆT NAM
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#d31820] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400 text-sm font-medium">
                    Số 2, ngõ 53 Đường Phạm Tuấn Tài, Phường Nghĩa Đô, Thành phố Hà Nội, Việt Nam.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#d31820] flex-shrink-0" />
                  <span className="text-slate-400 text-sm font-medium">
                    0973.497.685
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#d31820] flex-shrink-0" />
                  <span className="text-slate-400 text-sm font-medium">
                    maxtel.vn@gmail.com
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-center flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm font-medium">
              © {new Date().getFullYear()} MAXTEL TELECOM. Bảo lưu mọi quyền.
            </p>
            <div className="flex gap-4">
              <span className="text-slate-500 text-sm font-medium hover:text-white cursor-pointer transition-colors">
                Điều khoản
              </span>
              <span className="text-slate-500 text-sm font-medium hover:text-white cursor-pointer transition-colors">
                Bảo mật
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
