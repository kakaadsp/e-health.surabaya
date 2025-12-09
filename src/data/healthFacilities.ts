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
  },
  {
    id: "pk-2",
    name: "Puskesmas Bulak Banteng",
    type: "puskesmas",
    address: "Jl. Bulak Banteng No.45, Surabaya",
    region: "utara",
    services: ["UMUM", "GIGI", "KIA", "LANSIA", "HAMIL", "GIZI"],
  },
  {
    id: "pk-3",
    name: "Puskesmas Wonokromo",
    type: "puskesmas",
    address: "Jl. Wonokromo No.78, Surabaya",
    region: "selatan",
    services: ["UMUM", "GIGI", "KIA", "LANSIA", "HAMIL", "GIZI", "BATRA", "PKG"],
  },
  {
    id: "pk-4",
    name: "Puskesmas Gayungan",
    type: "puskesmas",
    address: "Jl. Gayungan No.12, Surabaya",
    region: "selatan",
    services: ["UMUM", "GIGI", "KIA", "LANSIA", "HAMIL"],
  },
  {
    id: "pk-5",
    name: "Puskesmas Tandes",
    type: "puskesmas",
    address: "Jl. Tandes No.56, Surabaya",
    region: "barat",
    services: ["UMUM", "GIGI", "KIA", "LANSIA", "HAMIL", "GIZI", "P2M"],
  },
  {
    id: "pk-6",
    name: "Puskesmas Benowo",
    type: "puskesmas",
    address: "Jl. Benowo No.89, Surabaya",
    region: "barat",
    services: ["UMUM", "GIGI", "KIA", "LANSIA", "HAMIL"],
  },
  {
    id: "pk-7",
    name: "Puskesmas Rungkut",
    type: "puskesmas",
    address: "Jl. Rungkut No.34, Surabaya",
    region: "timur",
    services: ["UMUM", "GIGI", "KIA", "LANSIA", "HAMIL", "GIZI", "BATRA"],
  },
  {
    id: "pk-8",
    name: "Puskesmas Sukolilo",
    type: "puskesmas",
    address: "Jl. Sukolilo No.67, Surabaya",
    region: "timur",
    services: ["UMUM", "GIGI", "KIA", "LANSIA", "HAMIL", "P2M"],
  },
  {
    id: "pk-9",
    name: "Puskesmas Tegal Sari",
    type: "puskesmas",
    address: "Jl. Tegal Sari No.23, Surabaya",
    region: "tengah",
    services: ["UMUM", "GIGI", "KIA", "LANSIA", "HAMIL", "GIZI", "BATRA", "PKG", "P2M", "LOKET"],
  },
  {
    id: "pk-10",
    name: "Puskesmas Genteng",
    type: "puskesmas",
    address: "Jl. Genteng No.45, Surabaya",
    region: "tengah",
    services: ["UMUM", "GIGI", "KIA", "LANSIA", "HAMIL", "GIZI"],
  },
  {
    id: "pk-11",
    name: "Puskesmas Simokerto",
    type: "puskesmas",
    address: "Jl. Simokerto No.78, Surabaya",
    region: "tengah",
    services: ["UMUM", "GIGI", "KIA", "LANSIA", "HAMIL"],
  },
  {
    id: "pk-12",
    name: "Puskesmas Tambaksari",
    type: "puskesmas",
    address: "Jl. Tambaksari No.90, Surabaya",
    region: "tengah",
    services: ["UMUM", "GIGI", "KIA", "LANSIA", "HAMIL", "GIZI", "BATRA"],
  },
];

export const clinics: HealthFacility[] = [
  {
    id: "kl-1",
    name: "Klinik Pratama Sehat",
    type: "klinik",
    address: "Jl. Raya Darmo No.50, Surabaya",
    region: "tengah",
    services: ["UMUM", "GIGI", "LABORATORIUM"],
  },
  {
    id: "kl-2",
    name: "Klinik Mulia Medika",
    type: "klinik",
    address: "Jl. Kapas Krampung No.30, Surabaya",
    region: "utara",
    services: ["UMUM", "GIGI", "KIA"],
  },
  {
    id: "kl-3",
    name: "Klinik Bahagia",
    type: "klinik",
    address: "Jl. Mayjend Sungkono No.100, Surabaya",
    region: "barat",
    services: ["UMUM", "GIGI", "FISIOTERAPI"],
  },
  {
    id: "kl-4",
    name: "Klinik Prima Husada",
    type: "klinik",
    address: "Jl. Raya Jemursari No.75, Surabaya",
    region: "selatan",
    services: ["UMUM", "GIGI", "LABORATORIUM", "USG"],
  },
  {
    id: "kl-5",
    name: "Klinik Sumber Sehat",
    type: "klinik",
    address: "Jl. Mulyorejo No.45, Surabaya",
    region: "timur",
    services: ["UMUM", "GIGI", "KIA", "LANSIA"],
  },
  {
    id: "kl-6",
    name: "Klinik Medika Utama",
    type: "klinik",
    address: "Jl. Ketintang No.60, Surabaya",
    region: "selatan",
    services: ["UMUM", "GIGI", "VAKSINASI"],
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
