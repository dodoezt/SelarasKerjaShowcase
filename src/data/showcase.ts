export interface ScreenshotItem {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  redact?: boolean;
}

export const features = [
  "Skor kecocokan kebutuhan dan fasilitas",
  "Detail fasilitas di setiap lowongan",
  "Profil pelamar dan unggah CV",
  "Dashboard perusahaan dan status lamaran",
];

export const screenshots: ScreenshotItem[] = [
  {
    number: "01",
    title: "Lihat skor kecocokan",
    description:
      "Skor dan fasilitas lowongan terlihat sebelum pelamar memutuskan untuk melamar.",
    image: "/img/foto_kecocokan.png",
    alt: "Daftar lowongan SelarasKerja dengan skor kecocokan kebutuhan",
  },
  {
    number: "02",
    title: "Atur kebutuhan akomodasi",
    description: "Pelamar memilih fasilitas yang dibutuhkan pada profilnya.",
    image: "/img/profil.png",
    alt: "Profil pelamar SelarasKerja dengan pilihan fasilitas akomodasi",
  },
  {
    number: "03",
    title: "Kelola lowongan",
    description:
      "Dashboard perusahaan menampilkan lowongan, status, dan jumlah pelamar.",
    image: "/img/dashboard_perusahaan.png",
    alt: "Dashboard perusahaan SelarasKerja untuk mengelola lowongan",
  },
  {
    number: "04",
    title: "Tinjau kandidat",
    description:
      "Perusahaan melihat kecocokan kebutuhan dan memperbarui status lamaran.",
    image: "/img/mengatur_pelamar.png",
    alt: "Panel pelamar dengan skor kecocokan dan status lamaran",
  },
];
