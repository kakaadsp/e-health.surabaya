import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { getFacilityById } from "@/data/healthFacilities";
import { useToast } from "@/hooks/use-toast";

const Registration = () => {
  const { facilityId, service, date } = useParams<{
    facilityId: string;
    service: string;
    date: string;
  }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const facility = getFacilityById(facilityId || "");

  const [formData, setFormData] = useState({
    nik: "",
    nomorPonsel: "",
    alamat: "",
    domisili: "",
    penjamin: "umum" as "umum" | "bpjs",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const months = [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Generate queue number
    const queueNumber = Math.floor(Math.random() * 100) + 1;
    const queueCode = `${facility?.name.substring(0, 2).toUpperCase()}-${date?.replace(/-/g, "").substring(4)}-${String(queueNumber).padStart(3, "0")}`;

    setTimeout(() => {
      navigate("/antrian", {
        state: {
          queueCode,
          queueNumber,
          facility: facility?.name,
          service: decodeURIComponent(service || ""),
          date: formatDate(date || ""),
          penjamin: formData.penjamin,
        },
      });
      setIsLoading(false);
    }, 1500);
  };

  if (!facility) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <h1 className="text-2xl font-bold text-primary">Fasilitas tidak ditemukan</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-primary mb-8">
            Pendaftaran
          </h1>

          <div className="max-w-3xl mx-auto">
            {/* Registration Info Card */}
            <div className="ehealth-card-teal p-6 mb-8 animate-fade-in">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex items-center gap-4">
                  <div className="text-5xl md:text-7xl font-bold text-primary">
                    {new Date(date || "").getDate()}
                  </div>
                  <div>
                    <div className="text-sm text-primary font-medium">Layanan</div>
                    <div className="text-lg md:text-xl font-bold text-primary">
                      ({decodeURIComponent(service || "")})
                    </div>
                  </div>
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                    <span className="text-primary font-semibold min-w-[140px]">Tanggal Layanan</span>
                    <span className="text-foreground">{formatDate(date || "")}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                    <span className="text-primary font-semibold min-w-[140px]">Sarana Kesehatan</span>
                    <span className="text-foreground">{facility.name}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                    <span className="text-primary font-semibold min-w-[140px]">Penjamin</span>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, penjamin: "umum" })}
                        className={`px-6 py-2 rounded-lg font-medium transition-all ${
                          formData.penjamin === "umum"
                            ? "bg-primary text-primary-foreground"
                            : "bg-card text-primary border border-primary"
                        }`}
                      >
                        Umum
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, penjamin: "bpjs" })}
                        className={`px-6 py-2 rounded-lg font-medium transition-all ${
                          formData.penjamin === "bpjs"
                            ? "bg-primary text-primary-foreground"
                            : "bg-card text-primary border border-primary"
                        }`}
                      >
                        BPJS
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                    <span className="text-primary font-semibold min-w-[140px]">NIK</span>
                    <input
                      type="text"
                      name="nik"
                      value={formData.nik}
                      onChange={handleChange}
                      className="ehealth-input flex-1"
                      placeholder="Masukkan NIK"
                      maxLength={16}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Biodata Form */}
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">Biodata</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="ehealth-card-teal p-6 mb-6 space-y-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <label className="text-primary font-semibold min-w-[140px]">Nomor Ponsel</label>
                  <input
                    type="tel"
                    name="nomorPonsel"
                    value={formData.nomorPonsel}
                    onChange={handleChange}
                    className="ehealth-input flex-1"
                    placeholder="Masukkan nomor ponsel"
                    required
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <label className="text-primary font-semibold min-w-[140px]">Alamat</label>
                  <input
                    type="text"
                    name="alamat"
                    value={formData.alamat}
                    onChange={handleChange}
                    className="ehealth-input flex-1"
                    placeholder="Masukkan alamat"
                    required
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <label className="text-primary font-semibold min-w-[140px]">Domisili</label>
                  <input
                    type="text"
                    name="domisili"
                    value={formData.domisili}
                    onChange={handleChange}
                    className="ehealth-input flex-1"
                    placeholder="Masukkan domisili"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="ehealth-btn-outline min-w-[200px] disabled:opacity-50"
                >
                  {isLoading ? "Memproses..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Registration;
