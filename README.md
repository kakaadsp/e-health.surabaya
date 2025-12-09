# 🏥 E-Health Surabaya: Pendaftaran Pasien Online

Aplikasi web yang dikembangkan untuk mempermudah masyarakat Kota Surabaya dalam mencari informasi fasilitas kesehatan (Rumah Sakit, Puskesmas, Klinik) dan melakukan pendaftaran antrean layanan secara digital.

## 🔗 Demo Langsung

Aplikasi ini di-*deploy* secara publik melalui Vercel:
**[https://e-healthsurabaya.vercel.app](https://e-healthsurabaya.vercel.app)**

---

## ✨ Fitur Utama Aplikasi

Berikut adalah garis besar fungsionalitas utama yang tersedia:

* **Pencarian dan Filter:** Memungkinkan pengguna untuk menyaring daftar fasilitas kesehatan berdasarkan jenis (Rumah Sakit, Puskesmas, Klinik) dan lokasi wilayah (Utara, Selatan, Timur, Barat, Tengah).
* **Tampilan Visual Fasilitas:** Menampilkan **foto asli** fasilitas pada halaman daftar dan halaman detail untuk membantu identifikasi.
* **Pendaftaran Antrean Online:** Menyediakan proses pendaftaran pasien untuk layanan kesehatan yang spesifik.
* **Bukti Digital (PDF):** Fitur untuk mengunduh bukti pendaftaran antrean dalam format **PDF** yang terstruktur (mirip struk) setelah pendaftaran berhasil.
* **Navigasi Detail:** Halaman detail fasilitas menampilkan alamat, layanan unggulan, dan tombol kembali yang mudah diakses.

---

## ⚙️ Teknologi yang Digunakan

Proyek ini dibangun menggunakan *stack* modern:

* **Framework:** React
* **Build Tool:** Vite
* **Styling:** Tailwind CSS
* **Pustaka PDF:** jspdf (digunakan untuk menghasilkan bukti pendaftaran)

---

## 🚀 Instalasi & Deployment

### Instalasi Lokal

Ikuti langkah-langkah ini untuk menjalankan aplikasi di komputer lokal Anda:

1.  Clone repositori ini:
    ```bash
    git clone [https://theengravedgifts.com/products/repo-dane-12inch-black](https://theengravedgifts.com/products/repo-dane-12inch-black)
    cd e-health-surabaya
    ```
2.  Instal semua dependensi proyek:
    ```bash
    npm install
    ```
3.  Jalankan aplikasi di mode pengembangan:
    ```bash
    npm run dev
    ```
    Aplikasi akan tersedia di `http://localhost:5173` (atau port lain).

### Deployment

Aplikasi ini dirancang khusus untuk di-*deploy* menggunakan **Vercel**.

1.  Pastikan semua kode dan aset (termasuk foto di folder `public/faskes_photos`) sudah di-*push* ke repositori GitHub.
2.  Hubungkan repositori Anda ke dasbor Vercel.
3.  Vercel akan otomatis mendeteksi konfigurasi **Vite** dan meng-*deploy* aplikasi web Anda tanpa memerlukan konfigurasi *build* tambahan.
