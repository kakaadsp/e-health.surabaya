import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { getFacilityById } from "@/data/healthFacilities";
import { MapPin } from "lucide-react";

const FacilityDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const facility = getFacilityById(id || "");

  if (!facility) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <h1 className="text-2xl font-bold text-primary">Fasilitas tidak ditemukan</h1>
        </div>
      </Layout>
    );
  }

  const handleServiceClick = (service: string) => {
    navigate(`/jadwal/${facility.id}/${encodeURIComponent(service)}`);
  };

  const getTypeName = () => {
    switch (facility.type) {
      case "rumah_sakit":
        return "Rumah Sakit";
      case "puskesmas":
        return "Puskesmas";
      case "klinik":
        return "Klinik";
      default:
        return "";
    }
  };

  return (
    <Layout>
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* Facility Header */}
          <h1 className="text-2xl md:text-4xl font-bold text-primary mb-8">
            {facility.name}
          </h1>

          {/* Facility Info Card */}
          <div className="ehealth-card overflow-hidden mb-12 max-w-5xl">
            <div className="flex flex-col md:flex-row">
              {/* Address Section */}
              <div className="bg-primary text-primary-foreground p-6 md:w-1/3">
                <div className="w-16 h-16 bg-primary-foreground/20 rounded-lg mb-4 flex items-center justify-center">
                  <MapPin className="w-8 h-8" />
                </div>
                <p className="text-sm leading-relaxed opacity-90">
                  {facility.address}
                </p>
              </div>

              {/* Image Placeholder */}
              <div className="bg-secondary flex-1 h-48 md:h-auto flex items-center justify-center">
                <span className="text-muted-foreground">Foto {getTypeName()}</span>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8">
            PILIH LAYANAN
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
            {facility.services.map((service, index) => (
              <button
                key={service}
                onClick={() => handleServiceClick(service)}
                className="service-btn text-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                {service}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FacilityDetail;
