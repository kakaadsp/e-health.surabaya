import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { getFacilitiesByRegion } from "@/data/healthFacilities";
import { MapPin } from "lucide-react";

const FacilityList = () => {
  const { type, region } = useParams<{ type: string; region: string }>();

  const getTypeKey = () => {
    switch (type) {
      case "rumah-sakit":
        return "rumah_sakit";
      case "puskesmas":
        return "puskesmas";
      case "klinik":
        return "klinik";
      default:
        return "rumah_sakit";
    }
  };

  const getTitle = () => {
    const regionNames: Record<string, string> = {
      utara: "Utara",
      selatan: "Selatan",
      barat: "Barat",
      timur: "Timur",
      tengah: "Tengah",
    };

    const typeNames: Record<string, string> = {
      "rumah-sakit": "RUMAH SAKIT",
      puskesmas: "PUSKESMAS",
      klinik: "KLINIK",
    };

    return `PILIH ${typeNames[type || ""] || ""} - ${regionNames[region || ""] || ""}`;
  };

  const facilities = getFacilitiesByRegion(
    getTypeKey() as "rumah_sakit" | "puskesmas" | "klinik",
    region as "utara" | "selatan" | "barat" | "timur" | "tengah"
  );

  return (
    <Layout>
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-primary text-center mb-12">
            {getTitle()}
          </h1>

          {facilities.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Tidak ada fasilitas kesehatan di wilayah ini.
              </p>
              <Link
                to={`/layanan/${type}`}
                className="inline-block mt-4 ehealth-btn-outline"
              >
                Kembali
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {facilities.map((facility, index) => (
                <Link
                  key={facility.id}
                  to={`/fasilitas/${facility.id}`}
                  className="ehealth-card animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-40 bg-secondary flex items-center justify-center">
                    <MapPin className="w-12 h-12 text-primary/50" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-primary mb-2">
                      {facility.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {facility.address}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default FacilityList;
