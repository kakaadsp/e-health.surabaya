export interface HealthFacility {
  id: string;
  name: string;
  type: "rumah_sakit" | "puskesmas" | "klinik";
  address: string;
  region: "utara" | "selatan" | "barat" | "timur" | "tengah";
  services: string[];
  image?: string;
}

export const hospitals: HealthFacility[] = [
  {
    id: "rs-1",
    name: "RSUD Dr. Soetomo",
    type: "rumah_sakit",
    address: "Jl. Prof. DR. Moestopo No.6-8, Airlangga, Kec. Gubeng, Surabaya, Jawa Timur 60286",
    region: "tengah",
    services: [
      "MEDICAL CHECK UP", "BEDAH ANAK", "RISTI DAN PREEKLAMSIA", "KB", "ANAK",
      "PENYAKIT DALAM", "JANTUNG", "MATA", "USG DV", "GIZI",
      "REHAB MEDIK", "BEDAH ONKOLOGI", "ORTHOPEDI", "KANDUNGAN", "VCT",
      "PERIODONTI", "ENDODONSI", "PARU", "NIFAS", "PSIKOLOGI",
      "ORTHODONTI", "GIGI", "ONKOLOGI TORAKS", "TUMBUH KEMBANG", "RADIOTERAPI"
    ],
    image: "/faskes_photos/rsud_dr_soetomo.jpg",
  },
  {
    id: "rs-2",
    name: "RSUD Dr. Mohamad Soewandhie Surabaya",
    type: "rumah_sakit",
    address: "Jl. Tambak Rejo No.45-47, Tambakrejo, Kec. Simokerto, Surabaya, Jawa Timur 60142",
    region: "utara",
    services: [
      "MEDICAL CHECK UP", "PENYAKIT DALAM", "ANAK", "BEDAH", "KANDUNGAN",
      "MATA", "THT", "GIGI", "JANTUNG", "PARU"
    ],
    image: "/faskes_photos/rsud_dr_soewandhie.jpg",
  },
  {
    id: "rs-3",
    name: "RSUD Eka Candrarini",
    type: "rumah_sakit",
    address: "Jl. Medokan Asri Tengah, Kali Rungkut, Kec. Rungkut, Surabaya, Jawa Timur 60297",
    region: "timur",
    services: [
      "MEDICAL CHECK UP", "PENYAKIT DALAM", "ANAK", "BEDAH", "KANDUNGAN",
      "GIGI", "MATA", "REHAB MEDIK"
    ],
    image: "/faskes_photos/rsud_eka_candrarini.jpeg",
  },
  {
    id: "rs-4",
    name: "RSUD Bhakti Dharma Husada",
    type: "rumah_sakit",
    address: "Jl. Kendung No.115-117, Sememi, Kec. Benowo, Surabaya, Jawa Timur 60198",
    region: "barat",
    services: [
      "MEDICAL CHECK UP", "PENYAKIT DALAM", "ANAK", "BEDAH", "KANDUNGAN",
      "GIZI", "PSIKOLOGI", "FISIOTERAPI"
    ],
    image: "/faskes_photos/rsud_bhakti_dharma.png",
  },
  {
    id: "rs-5",
    name: "RSAL Dr. Ramelan",
    type: "rumah_sakit",
    address: "Jl. Gadung No.1, Jagir, Kec. Wonokromo, Surabaya, Jawa Timur 60244",
    region: "selatan",
    services: [
      "MEDICAL CHECK UP", "PENYAKIT DALAM", "ANAK", "BEDAH", "JANTUNG",
      "MATA", "THT", "GIGI", "KANDUNGAN", "ORTHOPEDI"
    ],
    image: "/faskes_photos/rsal_ramelan.jpg",
  },
];

export const puskesmas: HealthFacility[] = [
  {
    id: "pk-1",
    name: "Puskesmas Kenjeran",
    type: "puskesmas",
    address: "Jl. Kenjeran No.123, Surabaya",
    region: "utara",
    services: ["UMUM", "GIGI", "KIA", "LANSIA", "HAMIL", "GIZI", "BATRA", "PKG", "P2M", "LOKET"],
    image: "/faskes_photos/puskesmas_kenjeran.jpg",
  },
  {
    id: "pk-2",
    name: "Puskesmas Bulak Banteng",
    type: "puskesmas",
    address: "Jl. Bulak Banteng No.45, Surabaya",
    region: "utara",
    services: ["UMUM", "GIGI", "KIA", "LANSIA", "HAMIL", "GIZI"],
    image: "/faskes_photos/pk_bulak_banteng.jpg",
  },
  {
    id: "pk-3",
    name: "Puskesmas Wonokromo",
    type: "puskesmas",
    address: "Jl. Wonokromo No.78, Surabaya",
    region: "selatan",
    services: ["UMUM", "GIGI", "KIA", "LANSIA", "HAMIL", "GIZI", "BATRA", "PKG"],
    image: "/faskes_photos/pk_wonokromo.jpg",
  },
  {
    id: "pk-4",
    name: "Puskesmas Gayungan",
    type: "puskesmas",
    address: "Jl. Gayungan No.12, Surabaya",
    region: "selatan",
    services: ["UMUM", "GIGI", "KIA", "LANSIA", "HAMIL"],
    image: "/faskes_photos/pk_gayungan.jpg",
  },
  {
    id: "pk-5",
    name: "Puskesmas Tandes",
    type: "puskesmas",
    address: "Jl. Tandes No.56, Surabaya",
    region: "barat",
    services: ["UMUM", "GIGI", "KIA", "LANSIA", "HAMIL", "GIZI", "P2M"],
    image: "/faskes_photos/pk_tandes.jpg",
  },
  {
    id: "pk-6",
    name: "Puskesmas Benowo",
    type: "puskesmas",
    address: "Jl. Benowo No.89, Surabaya",
    region: "barat",
    services: ["UMUM", "GIGI", "KIA", "LANSIA", "HAMIL"],
    image: "/faskes_photos/pk_benowo.jpg",
  },
  {
    id: "pk-7",
    name: "Puskesmas Rungkut",
    type: "puskesmas",
    address: "Jl. Rungkut No.34, Surabaya",
    region: "timur",
    services: ["UMUM", "GIGI", "KIA", "LANSIA", "HAMIL", "GIZI", "BATRA"],
    image: "/faskes_photos/pk_rungkut.jpg",
  },
  {
    id: "pk-8",
    name: "Puskesmas Sukolilo",
    type: "puskesmas",
    address: "Jl. Sukolilo No.67, Surabaya",
    region: "timur",
    services: ["UMUM", "GIGI", "KIA", "LANSIA", "HAMIL", "P2M"],
    image: "/faskes_photos/pk_sukolilo.jpg",
  },
  {
    id: "pk-9",
    name: "Puskesmas Tegal Sari",
    type: "puskesmas",
    address: "Jl. Tegal Sari No.23, Surabaya",
    region: "tengah",
    services: ["UMUM", "GIGI", "KIA", "LANSIA", "HAMIL", "GIZI", "BATRA", "PKG", "P2M", "LOKET"],
    image: "/faskes_photos/pk_tegalsari.jpg",
  },
  {
    id: "pk-10",
    name: "Puskesmas Genteng",
    type: "puskesmas",
    address: "Jl. Genteng No.45, Surabaya",
    region: "tengah",
    services: ["UMUM", "GIGI", "KIA", "LANSIA", "HAMIL", "GIZI"],
    image: "/faskes_photos/pk_genteng.jpg",
  },
  {
    id: "pk-11",
    name: "Puskesmas Simokerto",
    type: "puskesmas",
    address: "Jl. Simokerto No.78, Surabaya",
    region: "tengah",
    services: ["UMUM", "GIGI", "KIA", "LANSIA", "HAMIL"],
    image: "/faskes_photos/pk_simokerto.jpeg",
  },
  {
    id: "pk-12",
    name: "Puskesmas Tambaksari",
    type: "puskesmas",
    address: "Jl. Tambaksari No.90, Surabaya",
    region: "tengah",
    services: ["UMUM", "GIGI", "KIA", "LANSIA", "HAMIL", "GIZI", "BATRA"],
    image: "/faskes_photos/pk_tambaksari.jpeg",
  },
];

export const clinics: HealthFacility[] = [
  {
    id: "kl-1",
    name: "Klinik Utama Budi Sehat Surabaya",
    type: "klinik",
    address: "Jl. Gubeng Pojok No.29, Ketabang, Kec. Genteng, Surabaya",
    region: "tengah",
    services: ["UMUM", "GIGI", "LABORATORIUM"],
    image: "/faskes_photos/kl_pusat.png",
  },
  {
    id: "kl-2",
    name: "Klinik  Indosehat 2003",
    type: "klinik",
    address: "Jl. Sidorame No.75, Sidotopo, Kec. Semampir, Surabaya",
    region: "utara",
    services: ["UMUM", "GIGI", "KIA"],
    image: "/faskes_photos/kl_indosehat.png",
  },
  {
    id: "kl-3",
    name: "Klinik Pratama Lidah Unesa",
    type: "klinik",
    address: "Jl. Raya Kampus Unesa, Lidah Wetan, Kec. Lakarsantri, Surabaya",
    region: "barat",
    services: ["UMUM", "GIGI", "FISIOTERAPI"],
    image: "/faskes_photos/kl_unesa.png",
  },
  {
    id: "kl-4",
    name: "Klinik  Utama ABDI MULIA",
    type: "klinik",
    address: "Jl. Raya Darmo Permai Tim. E No.19D, Sonokwijenan, Kec. Sukomanunggal, Surabaya",
    region: "selatan",
    services: ["UMUM", "GIGI", "LABORATORIUM", "USG"],
    image: "/faskes_photos/kl_abdi.png",
  },
  {
    id: "kl-5",
    name: "Klinik  Utama DHARMAHUSADA PREMIER",
    type: "klinik",
    address: "Jl. Raya Dharma Husada Indah No.26, Mojo, Kec. Gubeng, Surabaya",
    region: "timur",
    services: ["UMUM", "GIGI", "KIA", "LANSIA"],
    image: "/faskes_photos/kl_premier.png",
  },
  {
    id: "kl-6",
    name: "Klinik Pratama Vincentius Karah",
    type: "klinik",
    address: "Jl. Karah No.200, Karah, Kec. Jambangan, Surabaya",
    region: "selatan",
    services: ["UMUM", "GIGI", "VAKSINASI"],
    image: "/faskes_photos/kl_selatan.png",
  },
];

export const getFacilitiesByType = (type: "rumah_sakit" | "puskesmas" | "klinik") => {
  switch (type) {
    case "rumah_sakit":
      return hospitals;
    case "puskesmas":
      return puskesmas;
    case "klinik":
      return clinics;
    default:
      return [];
  }
};

export const getFacilitiesByRegion = (
  type: "rumah_sakit" | "puskesmas" | "klinik",
  region: "utara" | "selatan" | "barat" | "timur" | "tengah"
) => {
  const facilities = getFacilitiesByType(type);
  return facilities.filter((f) => f.region === region);
};

export const getFacilityById = (id: string) => {
  const allFacilities = [...hospitals, ...puskesmas, ...clinics];
  return allFacilities.find((f) => f.id === id);
};
