import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  MessageCircle,
  ArrowRight,
  Star,
  Send,
} from 'lucide-react';

const WA_NUMBER = '6281276759596';
const ADDRESS = 'Mulyoharjo II, Mulyoharjo, Kec. Jepara, Kabupaten Jepara, Jawa Tengah 59431';

interface FormState {
  nama: string;
  telepon: string;
  email: string;
  subjek: string;
  pesan: string;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [form, setForm] = useState<FormState>({
    nama: '',
    telepon: '',
    email: '',
    subjek: 'Pilih subjek',
    pesan: '',
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subjek = form.subjek === 'Pilih subjek' ? '-' : form.subjek;
    const text = [
      `Halo Srirezki Ranting, saya ingin bertanya:`,
      ``,
      `Nama: ${form.nama}`,
      `No. Telepon: ${form.telepon}`,
      `Email: ${form.email || '-'}`,
      `Subjek: ${subjek}`,
      ``,
      `Pesan:`,
      form.pesan,
    ].join('\n');

    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const products = [
    {
      name: 'Kursi Throne Ranting',
      category: 'Kursi Artistik',
      image: '/images/WhatsApp_Image_2026-07-04_at_17.28.07.jpeg',
      description: 'Kursi singgasana eksklusif berbentuk kubah yang dianyam dari ranting-ranting alami pilihan. Desain organik yang memadukan estetika bohemian dengan kenyamanan tinggi. Dilengkapi bantalan duduk premium warna sage green. Cocok sebagai statement piece di ruang tamu, taman, atau area foto.',
      badge: 'Best Seller',
    },
    {
      name: 'Sofa Sarang Ranting',
      category: 'Sofa & Daybed',
      image: '/images/WhatsApp_Image_2026-07-04_at_17.28.08.jpeg',
      description: 'Sofa daybed berbentuk kubah besar yang terbuat dari anyaman ranting alami. Memberikan nuansa hangat dan artistik dengan dudukan lebar yang nyaman. Dilengkapi kasur duduk tebal dan bantal dekoratif bohemian multi-warna. Ideal untuk ruang santai, teras, atau taman bergaya resort.',
      badge: 'Terlaris',
    },
    {
      name: 'Set Meja Mozaik Kayu',
      category: 'Set Meja & Kursi',
      image: '/images/WhatsApp_Image_2026-07-04_at_17.28.09.jpeg',
      description: 'Set meja bundar dan 4 stool unik yang dibuat dari susunan potongan kayu bulat (log slice) bermotif mozaik alami. Setiap potongan kayu tersusun rapi membentuk pola lingkaran yang memukau. Sangat cocok untuk taman, ruang makan outdoor, atau kafe bernuansa rustic-natural.',
      badge: 'Custom Order',
    },
    {
      name: 'Gantungan Baju Pohon',
      category: 'Aksesoris & Dekorasi',
      image: '/images/WhatsApp_Image_2026-07-04_at_17.28.10.jpeg',
      description: 'Gantungan baju/topi artistik berbentuk ranting pohon yang diukir dari kayu solid. Setiap cabang berfungsi sebagai cantelan alami yang kokoh dan estetik. Menjadikannya dekorasi sekaligus furnitur fungsional yang unik untuk kamar, ruang tamu, atau butik.',
      badge: 'Handcrafted',
    },
    {
      name: 'Partisi Kayu Ukir Organik',
      category: 'Partisi & Dekorasi',
      image: '/images/WhatsApp_Image_2026-07-04_at_17.27.32.jpeg',
      description: 'Partisi ruangan bergaya organik yang dibuat dari akar dan ranting kayu asli berbentuk alami. Setiap unit merupakan karya seni ukir tangan yang unik — tidak ada dua produk yang sama persis. Cocok sebagai pembatas ruangan, backdrop foto, atau dekorasi dinding yang dramatis.',
      badge: 'One of a Kind',
    },
  ];

  const navLabels: Record<string, string> = {
    home: 'Beranda',
    about: 'Tentang Kami',
    products: 'Produk',
    contact: 'Kontak',
  };

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="w-12 h-12 bg-wood-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">SR</span>
              </div>
              <div>
                <h1 className="font-display font-semibold text-xl text-wood-900">Srirezki Ranting</h1>
                <p className="text-xs text-wood-600 -mt-1">Furnitur Ranting Alami</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {Object.keys(navLabels).map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`font-medium transition-colors ${
                    activeSection === item ? 'text-wood-700' : 'text-wood-600 hover:text-wood-800'
                  }`}
                >
                  {navLabels[item]}
                </button>
              ))}
              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-wood-700 text-white px-6 py-2.5 rounded-full font-medium hover:bg-wood-800 transition-colors flex items-center gap-2"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-wood-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-wood-100 animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              {Object.keys(navLabels).map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-3 px-4 text-wood-700 font-medium hover:bg-wood-50 rounded-lg transition-colors"
                >
                  {navLabels[item]}
                </button>
              ))}
              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-wood-700 text-white px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                Hubungi via WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/WhatsApp_Image_2026-07-04_at_17.28.08.jpeg"
            alt="Sofa Sarang Ranting premium handcrafted"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-wood-900/90 via-wood-900/70 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-wood-300 mb-6">
              <div className="h-px w-12 bg-wood-400" />
              <span className="text-sm font-medium tracking-wider uppercase">Jepara, Jawa Tengah</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Keindahan Ranting
              <br />
              <span className="text-wood-300">Karya Seni Alam</span>
            </h1>
            <p className="text-lg text-wood-100/90 mb-10 max-w-xl leading-relaxed">
              Kami menghadirkan furnitur unik dari ranting dan akar alami, dibuat dengan tangan
              oleh pengrajin berpengalaman langsung dari Jepara.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('products')}
                className="bg-wood-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-wood-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl"
              >
                Lihat Koleksi
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                Tentang Kami
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-14 border-2 border-white/30 rounded-full flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative pb-8">
              <div className="relative z-10">
                <img
                  src="/images/WhatsApp_Image_2026-07-04_at_17.28.09.jpeg"
                  alt="Workshop pembuatan furnitur set meja kayu"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-wood-100 rounded-2xl -z-0" />
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-forest-100 rounded-2xl -z-0" />
            </div>

            <div>
              <div className="flex items-center gap-2 text-wood-600 mb-4">
                <Star size={20} className="fill-wood-400 text-wood-400" />
                <span className="text-sm font-medium tracking-wider uppercase">Tentang Kami</span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-wood-900 mb-6 leading-tight">
                Pengrajin Ranting
                <br />
                <span className="text-wood-600">Asli dari Jepara</span>
              </h2>
              <p className="text-lg text-wood-600 mb-6 leading-relaxed">
                Srirezki Ranting adalah pengrajin furnitur unik yang menggunakan bahan ranting dan
                akar alami pilihan. Kami menghadirkan produk artistik yang memadukan keindahan
                alam dengan fungsi sehari-hari.
              </p>
              <p className="text-lg text-wood-600 mb-8 leading-relaxed">
                Setiap produk kami dibuat langsung oleh tangan pengrajin berpengalaman di workshop
                kami, Jepara — kota furnitur terbaik Indonesia. Tidak ada dua produk yang
                benar-benar sama, menjadikan setiap karya benar-benar eksklusif.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-forest-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-wood-900 mb-1">Workshop & Showroom</h4>
                    <p className="text-wood-600 text-sm">{ADDRESS}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-forest-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-wood-900 mb-1">Jam Operasional</h4>
                    <p className="text-wood-600 text-sm">Senin - Sabtu: 08:00 - 17:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-wood-600 mb-4">
              <span className="text-sm font-medium tracking-wider uppercase">Koleksi Kami</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-wood-900 mb-6">
              Produk Unggulan
            </h2>
            <p className="text-lg text-wood-600 max-w-2xl mx-auto">
              Setiap produk kami dibuat dengan tangan menggunakan bahan alami pilihan —
              ranting, akar, dan kayu yang dirajut menjadi karya seni fungsional yang unik.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-wood-700 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      {product.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <a
                      href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Halo Srirezki Ranting, saya tertarik dengan produk *${product.name}*. Boleh minta info harga dan ketersediaan?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-white text-wood-800 py-3 rounded-full font-semibold hover:bg-wood-100 transition-colors flex items-center justify-center gap-2"
                    >
                      Tanya Harga
                      <MessageCircle size={18} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-forest-600 font-medium mb-1">{product.category}</p>
                  <h3 className="font-display text-xl font-semibold text-wood-900 mb-3">{product.name}</h3>
                  <p className="text-wood-500 text-sm leading-relaxed mb-4 line-clamp-3">{product.description}</p>
                  <div className="flex items-center justify-between border-t border-wood-100 pt-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-wood-400 text-wood-400" />
                      ))}
                    </div>
                    <span className="text-xs text-wood-400 font-medium">Hubungi untuk harga</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Halo Srirezki Ranting, saya ingin melihat katalog produk lengkap.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-wood-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-wood-800 transition-all transform hover:scale-105 inline-flex items-center gap-2"
            >
              Lihat Semua Produk
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-2 text-wood-600 mb-4">
                <span className="text-sm font-medium tracking-wider uppercase">Hubungi Kami</span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-wood-900 mb-6">
                Mari Wujudkan
                <br />
                <span className="text-wood-600">Rumah Impian Anda</span>
              </h2>
              <p className="text-lg text-wood-600 mb-10 leading-relaxed">
                Punya pertanyaan atau ingin memesan? Isi formulir di samping dan kami akan langsung
                terhubung dengan Anda melalui WhatsApp.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center">
                    <Phone className="text-forest-600" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-wood-500 mb-1">Telepon / WhatsApp</p>
                    <a
                      href={`https://wa.me/${WA_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-wood-900 hover:text-wood-700 transition-colors"
                    >
                      +62 812-7675-9596
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center">
                    <Mail className="text-forest-600" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-wood-500 mb-1">Email</p>
                    <a
                      href="mailto:-@gmail.com"
                      className="text-lg font-semibold text-wood-900 hover:text-wood-700 transition-colors"
                    >
                      -@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-forest-600" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-wood-500 mb-1">Alamat</p>
                    <p className="text-lg font-semibold text-wood-900 leading-snug">
                      {ADDRESS}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <p className="text-sm text-wood-500 mb-4">Ikuti Kami di Media Sosial</p>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.instagram.com/srirezki_ranting?igsh=MWxqZmtoM2FjazBwNQ%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-rose-500 via-pink-500 to-orange-400 rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-all transform hover:scale-110"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://facebook.com/srirezkiranting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-all transform hover:scale-110"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href={`https://wa.me/${WA_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-all transform hover:scale-110"
                  >
                    <MessageCircle size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-cream-100 rounded-2xl p-8 lg:p-10">
              <h3 className="font-display text-2xl font-bold text-wood-900 mb-2">Kirim Pesan via WhatsApp</h3>
              <p className="text-wood-500 text-sm mb-6">
                Isi form di bawah, lalu klik kirim — Anda akan otomatis diarahkan ke WhatsApp kami.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-wood-700 mb-2">
                      Nama Lengkap <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.nama}
                      onChange={(e) => setForm({ ...form, nama: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-wood-200 focus:border-wood-500 focus:ring-2 focus:ring-wood-200 outline-none transition-all bg-white"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-wood-700 mb-2">
                      No. Telepon <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.telepon}
                      onChange={(e) => setForm({ ...form, telepon: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-wood-200 focus:border-wood-500 focus:ring-2 focus:ring-wood-200 outline-none transition-all bg-white"
                      placeholder="08xxxxxxxxxx"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-wood-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-wood-200 focus:border-wood-500 focus:ring-2 focus:ring-wood-200 outline-none transition-all bg-white"
                    placeholder="email@contoh.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-wood-700 mb-2">Subjek</label>
                  <select
                    value={form.subjek}
                    onChange={(e) => setForm({ ...form, subjek: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-wood-200 focus:border-wood-500 focus:ring-2 focus:ring-wood-200 outline-none transition-all bg-white"
                  >
                    <option>Pilih subjek</option>
                    <option>Konsultasi Produk</option>
                    <option>Pemesanan</option>
                    <option>Pertanyaan Harga</option>
                    <option>Lainnya</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-wood-700 mb-2">
                    Pesan <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={form.pesan}
                    onChange={(e) => setForm({ ...form, pesan: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-wood-200 focus:border-wood-500 focus:ring-2 focus:ring-wood-200 outline-none transition-all bg-white resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  Kirim via WhatsApp
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-wood-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-wood-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-display font-bold text-xl">SR</span>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl">Srirezki Ranting</h3>
                  <p className="text-xs text-wood-400">Furnitur Ranting Alami</p>
                </div>
              </div>
              <p className="text-wood-300 mb-6 max-w-md leading-relaxed">
                Pengrajin furnitur dari ranting dan akar alami, langsung dari Jepara.
                Setiap produk dibuat dengan tangan dan penuh keahlian untuk menghadirkan
                keindahan alam ke dalam rumah Anda.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://www.instagram.com/srirezki_ranting?igsh=MWxqZmtoM2FjazBwNQ%3D%3D" target="_blank" rel="noopener noreferrer" className="text-wood-400 hover:text-white transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="https://facebook.com/srirezkiranting" target="_blank" rel="noopener noreferrer" className="text-wood-400 hover:text-white transition-colors">
                  <Facebook size={24} />
                </a>
                <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer" className="text-wood-400 hover:text-white transition-colors">
                  <MessageCircle size={24} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Menu</h4>
              <ul className="space-y-3">
                {Object.keys(navLabels).map((item) => (
                  <li key={item}>
                    <button onClick={() => scrollToSection(item)} className="text-wood-300 hover:text-white transition-colors">
                      {navLabels[item]}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Kontak</h4>
              <ul className="space-y-3 text-wood-300">
                <li className="flex items-center gap-2">
                  <Phone size={16} />
                  +62 812-7675-9596
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  -@gmail.com
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <span>Mulyoharjo II, Mulyoharjo,<br />Kec. Jepara, Kab. Jepara,<br />Jawa Tengah 59431</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-wood-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-wood-400 text-sm">
              &copy; 2025 Srirezki Ranting. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-wood-400">
              <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
              <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
