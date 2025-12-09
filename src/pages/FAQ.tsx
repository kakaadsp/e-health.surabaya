import { useState } from "react";
import Layout from "@/components/Layout";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Belum Punya Nomor Rekam Medis?",
      answer: "Jika Anda belum memiliki Nomor Rekam Medis, Anda dapat mendaftar sebagai pasien baru. Saat melakukan pendaftaran online, pilih opsi 'Pasien Baru' dan isi data diri Anda dengan lengkap. Nomor Rekam Medis akan diberikan saat Anda datang ke fasilitas kesehatan untuk pertama kalinya.",
    },
    {
      question: "Bisakah Mendaftarkan Orang Lain?",
      answer: "Ya, Anda dapat mendaftarkan orang lain seperti anggota keluarga atau kerabat. Pastikan Anda memiliki data lengkap pasien yang akan didaftarkan, termasuk NIK, tanggal lahir, dan nomor rekam medis (jika sudah memiliki). Saat pendaftaran, isi data sesuai dengan identitas pasien yang akan berobat.",
    },
    {
      question: "Apa yang Harus Saya Bawa?",
      answer: "Dokumen yang perlu dibawa saat datang ke fasilitas kesehatan:\n• KTP/Kartu Identitas asli\n• Kartu BPJS (jika menggunakan BPJS)\n• Kartu Berobat/Rekam Medis (jika sudah memiliki)\n• Kode Antrean Online (bisa berupa screenshot atau print)\n• Rujukan dari fasilitas kesehatan tingkat pertama (jika diperlukan)",
    },
    {
      question: "Bagaimana Cara Membatalkan Pendaftaran?",
      answer: "Untuk membatalkan pendaftaran, Anda dapat menghubungi call center fasilitas kesehatan terkait atau datang langsung ke loket pendaftaran. Pembatalan sebaiknya dilakukan minimal H-1 sebelum tanggal kunjungan agar kuota dapat digunakan oleh pasien lain.",
    },
    {
      question: "Apakah Bisa Mengubah Jadwal Kunjungan?",
      answer: "Ya, Anda dapat mengubah jadwal kunjungan dengan cara membatalkan pendaftaran yang sudah ada, kemudian melakukan pendaftaran ulang dengan tanggal baru. Pastikan kuota pada tanggal yang Anda inginkan masih tersedia.",
    },
    {
      question: "Berapa Lama Kode Antrean Berlaku?",
      answer: "Kode antrean online berlaku untuk tanggal kunjungan yang telah dipilih saat pendaftaran. Jika Anda tidak datang pada tanggal tersebut, kode antrean akan hangus dan Anda perlu melakukan pendaftaran ulang.",
    },
    {
      question: "Bagaimana Jika Lupa Kode Antrean?",
      answer: "Jika Anda lupa kode antrean, Anda dapat melihat riwayat pendaftaran melalui akun E-Health Anda di menu 'Riwayat Pendaftaran'. Atau hubungi call center untuk bantuan lebih lanjut.",
    },
  ];

  return (
    <Layout>
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-primary text-center mb-4">
            Pertanyaan yang Sering Diajukan
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan umum seputar pendaftaran online E-Health
          </p>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="ehealth-card overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="font-semibold text-primary pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-muted-foreground whitespace-pre-line">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
