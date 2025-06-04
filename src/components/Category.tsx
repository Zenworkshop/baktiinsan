import React from 'react';
import { FaBook, FaHandsHelping, FaHeartbeat, FaLeaf, FaMoneyBillWave, FaMosque } from 'react-icons/fa';

const categories = [
  {
    icon: <FaBook size={28} className="text-white" />,
    title: 'Pendidikan',
    desc: 'Bantu pendidikan anak-anak bangsa lewat program beasiswa, sekolah gratis, dan pengadaan alat belajar.',
    href: '/kategori/pendidikan',
  },
  {
    icon: <FaHandsHelping size={28} className="text-white" />,
    title: 'Kemanusiaan',
    desc: 'Respon cepat untuk bencana alam, krisis pangan, dan bantuan kemanusiaan di dalam & luar negeri.',
    href: '/kategori/kemanusiaan',
  },
  {
    icon: <FaHeartbeat size={28} className="text-white" />,
    title: 'Kesehatan',
    desc: 'Donasi untuk pengobatan gratis, layanan kesehatan, dan pembangunan klinik bagi masyarakat dhuafa.',
    href: '/kategori/kesehatan',
  },
  {
    icon: <FaMoneyBillWave size={28} className="text-white" />,
    title: 'Ekonomi',
    desc: 'Program pemberdayaan UMKM, modal usaha mikro, dan pelatihan kerja bagi keluarga prasejahtera.',
    href: '/kategori/ekonomi',
  },
  {
    icon: <FaMosque size={28} className="text-white" />,
    title: 'Sosial & Dakwah',
    desc: 'Dukung dakwah kreatif, pembangunan rumah ibadah, dan bantuan untuk yatim & lansia.',
    href: '/kategori/sosial-dakwah',
  },
  {
    icon: <FaLeaf size={28} className="text-white" />,
    title: 'Lingkungan',
    desc: 'Gerakan peduli bumi: tanam pohon, kelola sampah, dan jaga air bersih untuk masa depan.',
    href: '/kategori/lingkungan',
  },
];

export default function Category() {
  return (
    <section className="bg-[#16a34a] py-16 px-4 md:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Jelajahi <span className="underline underline-offset-4 decoration-white">Kategori Program Donasi</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <a
              key={idx}
              href={cat.href}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl hover:bg-white/20 transition transform hover:-translate-y-1"
            >
              <div className="mb-4">{cat.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
              <p className="text-sm">{cat.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
