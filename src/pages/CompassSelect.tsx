import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Circle } from "lucide-react";

const CompassSelect = () => {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();

  const getTitle = () => {
    switch (type) {
      case "rumah-sakit":
        return "PILIH RUMAH SAKIT";
      case "puskesmas":
        return "PILIH PUSKESMAS";
      case "klinik":
        return "PILIH KLINIK";
      default:
        return "PILIH LOKASI";
    }
  };

  const regions = [
    { id: "utara", label: "BAGIAN UTARA", icon: ArrowUp, position: "top" },
    { id: "barat", label: "BAGIAN BARAT", icon: ArrowLeft, position: "left" },
    { id: "tengah", label: "BAGIAN TENGAH", icon: Circle, position: "center" },
    { id: "timur", label: "BAGIAN TIMUR", icon: ArrowRight, position: "right" },
    { id: "selatan", label: "BAGIAN SELATAN", icon: ArrowDown, position: "bottom" },
  ];

  const handleRegionClick = (regionId: string) => {
    navigate(`/layanan/${type}/${regionId}`);
  };

  return (
    <Layout>
      <div className="py-12 md:py-20 min-h-[calc(100vh-200px)]">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-primary text-center mb-12">
            {getTitle()}
          </h1>

          {/* Compass Layout */}
          <div className="max-w-4xl mx-auto">
            {/* Mobile: Stack layout */}
            <div className="md:hidden space-y-4">
              {regions.map((region, index) => (
                <button
                  key={region.id}
                  onClick={() => handleRegionClick(region.id)}
                  className="compass-card w-full animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <region.icon className="w-12 h-12 text-accent" />
                  <span className="text-lg font-bold text-primary">{region.label}</span>
                </button>
              ))}
            </div>

            {/* Desktop: Compass layout */}
            <div className="hidden md:block">
              {/* Top - Utara */}
              <div className="flex justify-center mb-4">
                <button
                  onClick={() => handleRegionClick("utara")}
                  className="compass-card w-64 animate-fade-in"
                >
                  <ArrowUp className="w-16 h-16 text-accent" />
                  <span className="text-lg font-bold text-primary">BAGIAN UTARA</span>
                </button>
              </div>

              {/* Middle row - Barat, Tengah, Timur */}
              <div className="flex justify-center gap-4 mb-4">
                <button
                  onClick={() => handleRegionClick("barat")}
                  className="compass-card w-64 animate-fade-in"
                  style={{ animationDelay: "0.1s" }}
                >
                  <ArrowLeft className="w-16 h-16 text-accent" />
                  <span className="text-lg font-bold text-primary">BAGIAN BARAT</span>
                </button>
                
                <button
                  onClick={() => handleRegionClick("tengah")}
                  className="compass-card w-64 bg-secondary animate-fade-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="w-16 h-16 flex items-center justify-center">
                    <div className="w-12 h-12 bg-accent rotate-45 rounded-sm"></div>
                  </div>
                  <span className="text-lg font-bold text-primary">BAGIAN TENGAH</span>
                </button>
                
                <button
                  onClick={() => handleRegionClick("timur")}
                  className="compass-card w-64 animate-fade-in"
                  style={{ animationDelay: "0.3s" }}
                >
                  <ArrowRight className="w-16 h-16 text-accent" />
                  <span className="text-lg font-bold text-primary">BAGIAN TIMUR</span>
                </button>
              </div>

              {/* Bottom - Selatan */}
              <div className="flex justify-center">
                <button
                  onClick={() => handleRegionClick("selatan")}
                  className="compass-card w-64 animate-fade-in"
                  style={{ animationDelay: "0.4s" }}
                >
                  <ArrowDown className="w-16 h-16 text-accent" />
                  <span className="text-lg font-bold text-primary">BAGIAN SELATAN</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CompassSelect;
