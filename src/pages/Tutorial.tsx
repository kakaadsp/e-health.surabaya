import Layout from "@/components/Layout";
import { CheckCircle, User, Calendar, Ticket } from "lucide-react";

const Tutorial = () => {
  const steps = [
    {
      icon: User,
      title: "Login atau Daftar",
      description: "Buat akun baru atau login dengan akun yang sudah ada. Pastikan data diri Anda sudah lengkap.",
    },
    {
      icon: CheckCircle,
      title: "Pilih Layanan Kesehatan",
      description: "Pilih jenis fasilitas kesehatan (Rumah Sakit, Puskesmas, atau Klinik) dan wilayah yang Anda inginkan.",
    },
    {
      icon: Calendar,
      title: "Pilih Tanggal & Layanan",
      description: "Pilih poli atau layanan kesehatan yang dibutuhkan, lalu tentukan tanggal kunjungan yang tersedia.",
    },
    {
      icon: Ticket,
      title: "Dapatkan Kode Antrean",
      description: "Setelah pendaftaran berhasil, Anda akan menerima kode antrean. Simpan dan tunjukkan saat tiba di fasilitas kesehatan.",
    },
  ];

  return (
    <Layout>
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-primary text-center mb-4">
            Tutorial Pendaftaran
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ikuti langkah-langkah berikut untuk mendaftar antrean online di fasilitas kesehatan
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2"></div>

              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex items-start gap-6 mb-12 animate-fade-in ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <step.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ehealth-card p-6 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                    <div className="text-sm text-primary font-bold mb-1">Langkah {index + 1}</div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Tutorial;
