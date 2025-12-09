import { useLocation, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { CheckCircle, Download, Home } from "lucide-react";
import { jsPDF } from 'jspdf';

interface QueueState {
  queueCode: string;
  queueNumber: number;
  facility: string;
  service: string;
  date: string;
  penjamin: string;
}

const Queue = () => {
  const location = useLocation();
  const state = location.state as QueueState;

  // Tambahkan blok kode ini di dalam komponen Queue, sebelum `if (!state) { ... }`
const handleDownload = () => {
    // 1. Ambil data dari state
    const { queueCode, queueNumber, facility, service, date, penjamin } = state;

    // 2. Inisialisasi jsPDF dengan format custom (lebar 80mm, panjang 150mm - mirip struk)
    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: [80, 150] 
    });

    let y = 10;
    const line_height = 5;
    const center_x = 40; // Tengah kertas 80mm

    // --- Header ---
    doc.setFontSize(10);
    doc.text("PEMERINTAH KOTA SURABAYA", center_x, y, { align: "center" });
    y += line_height;
    doc.text("E-HEALTH PENDAFTARAN ONLINE", center_x, y, { align: "center" });
    y += line_height * 2;

    // --- Detail Layanan ---
    doc.setFontSize(9);
    doc.text(`TANGGAL LAYANAN: ${date}`, 5, y);
    y += line_height;
    doc.text(`FASILITAS: ${facility}`, 5, y);
    y += line_height;
    doc.text(`LAYANAN: ${service}`, 5, y);
    y += line_height;
    doc.text(`PENJAMIN: ${penjamin.toUpperCase()}`, 5, y);
    y += line_height * 1.5;

    // --- Separator ---
    doc.line(5, y, 75, y);
    y += line_height;

    // --- KODE UTAMA ANTREAM ---
    doc.setFontSize(10);
    doc.text("KODE ANTRIAN:", center_x, y, { align: "center" });
    y += line_height;
    doc.setFontSize(18);
    doc.text(queueCode, center_x, y, { align: "center" });
    y += line_height * 1.5;

    // --- NOMOR ANTREAM ---
    doc.setFontSize(10);
    doc.text("NOMOR ANTRIAN ANDA:", center_x, y, { align: "center" });
    y += line_height + 2;
    doc.setFontSize(30);
    doc.text(String(queueNumber).padStart(2, "0"), center_x, y, { align: "center" });
    y += line_height * 4;

    // --- Footer/Instruksi ---
    doc.setFontSize(8);
    doc.text("Tunjukkan kode ini kepada petugas loket.", center_x, y, { align: "center" });
    y += line_height;
    doc.text("Terima kasih.", center_x, y, { align: "center" });

    // 3. Simpan File
    doc.save(`Struk_Antrian_${queueCode}.pdf`);
};

  if (!state) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Data tidak ditemukan</h1>
          <Link to="/" className="ehealth-btn-primary">
            Kembali ke Beranda
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
              <CheckCircle className="w-12 h-12 text-primary" />
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2 animate-fade-in">
              Pendaftaran Berhasil!
            </h1>
            <p className="text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Simpan kode antrean Anda dan tunjukkan kepada petugas loket
            </p>

            {/* Queue Card */}
            <div className="ehealth-card overflow-hidden mb-8 animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="bg-gradient-teal text-primary-foreground p-8">
                <div className="text-sm opacity-80 mb-2">Kode Antrean</div>
                <div className="text-3xl md:text-4xl font-bold tracking-wider mb-4">
                  {state.queueCode}
                </div>
                <div className="text-6xl md:text-8xl font-bold">
                  {String(state.queueNumber).padStart(2, "0")}
                </div>
              </div>

              <div className="p-6 space-y-3 text-left">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Fasilitas Kesehatan</span>
                  <span className="font-semibold text-foreground">{state.facility}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Layanan</span>
                  <span className="font-semibold text-foreground">{state.service}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Tanggal</span>
                  <span className="font-semibold text-foreground">{state.date}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">Penjamin</span>
                  <span className="font-semibold text-foreground uppercase">{state.penjamin}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <button onClick={handleDownload} className="ehealth-btn-primary flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Unduh Bukti
              </button>
              <Link to="/" className="ehealth-btn-outline flex items-center justify-center gap-2">
                <Home className="w-5 h-5" />
                Kembali ke Beranda
              </Link>
            </div>

            {/* Instructions */}
            <div className="mt-12 p-6 bg-secondary/50 rounded-xl text-left animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <h3 className="font-bold text-primary mb-4">Petunjuk Selanjutnya:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">1.</span>
                  Simpan atau screenshot kode antrean di atas
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">2.</span>
                  Datang ke fasilitas kesehatan sesuai tanggal yang dipilih
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">3.</span>
                  Tunjukkan kode antrean kepada petugas loket
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">4.</span>
                  Bawa KTP dan kartu BPJS (jika menggunakan BPJS)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Queue;
