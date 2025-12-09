import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Building2, Building, Stethoscope, MapPin, ChevronRight } from "lucide-react";
import pakEri from "@/assets/pak_eri.png";
import pakArmuji from "@/assets/pak_armuji.png";
import surabayaLogo from "@/assets/surabaya_logo.png";

const Index = () => {
  const steps = [
    {
      number: 1,
      text: 'Masukkan NIK dan Nomor Rekam Medis (No. RM) Anda. Pastikan data diri Anda (Nama, Tanggal Lahir) sesuai dengan data di sistem.',
    },
    {
      number: 2,
      text: 'Tentukan Poli atau Layanan Kesehatan yang Anda butuhkan, lalu pilih tanggal dan waktu kunjungan yang masih tersedia (kuota).',
    },
    {
      number: 3,
      text: 'Anda akan menerima Kode Antrean Online. Simpan kode tersebut dan tunjukkan kepada petugas loket saat tiba di Puskesmas.',
    },
  ];

  const healthServices = [
    {
      title: "RUMAH SAKIT",
      description: "Pendaftaran Pasien untuk Antri di Rumah Sakit",
      icon: Building2,
      path: "/layanan/rumah-sakit",
      color: "from-primary to-primary/80",
    },
    {
      title: "PUSKESMAS",
      description: "Pendaftaran Pasien untuk Antri di Puskesmas",
      icon: Building,
      path: "/layanan/puskesmas",
      color: "from-primary/90 to-primary/70",
    },
    {
      title: "KLINIK",
      description: "Pendaftaran Pasien untuk Antri di Klinik",
      icon: Stethoscope,
      path: "/layanan/klinik",
      color: "from-primary/80 to-primary/60",
    },
  ];

  const faqs = [
    { question: "Belum Punya Nomor Rekam Medis?", path: "/faq" },
    { question: "Bisakah Mendaftarkan Orang Lain?", path: "/faq" },
    { question: "Apa yang Harus Saya Bawa?", path: "/faq" },
  ];

  return (
    <Layout>
      {/* Hero Section - White background with officials */}
      <section className="bg-card text-foreground py-12 md:py-20 relative overflow-hidden min-h-[70vh] flex items-center">
        {/* Vertical lines background pattern */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 w-px bg-primary"
              style={{ left: `${(i + 1) * 5}%` }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between">
            {/* Left Official - Pak Eri */}
            <div className="hidden lg:block w-64 xl:w-80 flex-shrink-0">
              <img
                src={pakEri}
                alt="Walikota Surabaya - Eri Cahyadi"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Center Content */}
            <div className="flex-1 text-center px-4">
              <div className="mb-6">
                <img
                  src={surabayaLogo}
                  alt="Logo Kota Surabaya"
                  className="w-16 h-20 md:w-20 md:h-24 mx-auto object-contain"
                />
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary">
                PENDAFTARAN PASIEN ONLINE
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                PEMERINTAH KOTA SURABAYA
              </p>
              <Link
                to="/layanan"
                className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Let's Start
              </Link>
              
              <p className="mt-8 text-sm text-muted-foreground italic">
                Jika ada pungutan liar atau gratifikasi silahkan hubungi<br />
                nomor Layanan Pengaduan Integritas
              </p>
              <button className="mt-3 bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm hover:bg-primary/90 transition-colors">
                Get Contact
              </button>
            </div>

            {/* Right Official - Pak Armuji */}
            <div className="hidden lg:block w-64 xl:w-80 flex-shrink-0">
              <img
                src={pakArmuji}
                alt="Wakil Walikota Surabaya - Armuji"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Mobile view - Show officials below */}
          <div className="flex lg:hidden justify-center gap-4 mt-8">
            <img
              src={pakEri}
              alt="Walikota Surabaya"
              className="w-32 h-auto object-contain"
            />
            <img
              src={pakArmuji}
              alt="Wakil Walikota Surabaya"
              className="w-32 h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
            Ayo, Daftar Antrean Hanya Dalam 3 Langkah!
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="ehealth-card-teal p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-foreground leading-relaxed">
                  <span className="font-semibold text-primary">{step.number}. </span>
                  {step.text.split(/(\bNIK\b|\bNomor Rekam Medis \(No\. RM\)\b|\bPoli\b|\bLayanan Kesehatan\b|\bKode Antrean Online\b|\bpetugas loket\b)/g).map((part, i) => {
                    const highlights = ["NIK", "Nomor Rekam Medis (No. RM)", "Poli", "Layanan Kesehatan", "Kode Antrean Online", "petugas loket"];
                    if (highlights.includes(part)) {
                      return <span key={i} className="font-semibold text-primary">{part}</span>;
                    }
                    return part;
                  })}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Services Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
            PILIH LAYANAN KESEHATAN
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {healthServices.map((service, index) => (
              <Link
                key={service.title}
                to={service.path}
                className="ehealth-card group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-48 bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                  <service.icon className="w-20 h-20 text-primary-foreground opacity-80 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
            INFORMASI PENTING SEBELUM MENDAFTAR
          </h2>
          
          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq, index) => (
              <Link
                key={index}
                to={faq.path}
                className="ehealth-card-teal p-4 flex items-center justify-between group hover:bg-secondary transition-colors"
              >
                <span className="font-semibold text-primary">{faq.question}</span>
                <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Maps Guide Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 flex-shrink-0">
              <div className="w-full h-full bg-secondary rounded-2xl flex items-center justify-center relative">
                <MapPin className="w-24 h-24 text-primary animate-float" />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-transparent rounded-2xl"></div>
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">MAPS GUIDE</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Temukan Lokasi dan Rute Puskesmas Terdekat Anda. Bagian ini dirancang untuk memandu Anda
                menemukan lokasi, rute tercepat, dan informasi kontak Puskesmas yang Anda tuju, baik sebelum
                maupun sesudah melakukan pendaftaran online.
              </p>
              <Link
                to="/layanan"
                className="inline-block ehealth-btn-outline"
              >
                Let's Journey
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
