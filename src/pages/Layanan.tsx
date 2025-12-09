import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Building2, Building, Stethoscope } from "lucide-react";

const Layanan = () => {
  const healthServices = [
    {
      title: "RUMAH SAKIT",
      description: "Pendaftaran Pasien untuk Antri di Rumah Sakit",
      icon: Building2,
      path: "/layanan/rumah-sakit",
    },
    {
      title: "PUSKESMAS",
      description: "Pendaftaran Pasien untuk Antri di Puskesmas",
      icon: Building,
      path: "/layanan/puskesmas",
    },
    {
      title: "KLINIK",
      description: "Pendaftaran Pasien untuk Antri di Klinik",
      icon: Stethoscope,
      path: "/layanan/klinik",
    },
  ];

  return (
    <Layout>
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-primary text-center mb-12">
            PILIH LAYANAN KESEHATAN
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {healthServices.map((service, index) => (
              <Link
                key={service.title}
                to={service.path}
                className="ehealth-card group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 bg-secondary flex items-center justify-center">
                  <service.icon className="w-20 h-20 text-primary opacity-70 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Layanan;
