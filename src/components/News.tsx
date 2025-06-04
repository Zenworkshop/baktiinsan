import React from 'react';
import palestinaImg from '../assets/palestina.jpeg';
import inkubatorImg from '../assets/inkubator.jpg';
import kurbanImg from '../assets/qurban.jpg';
import yatimImg from '../assets/yatim.jpg';

const campaigns = [
  {
    id: 1,
    image: palestinaImg,
    title: 'Dukung Perjuangan Palestina dengan Zakat Terbaikmu! (Zakat Palestina)',
    description: 'Salah satu mustahik zakat adalah fi sabilillah, untuk saat ini bisa diberikan kepada Negara-negara muslim yang masih...',
    date: '21 Maret 2025'
  },
  {
    id: 2,
    image: inkubatorImg,
    title: 'Wakaf Inkubator untuk Bayi Kritis di NICU',
    description: 'Wakafmu akan menjadi amal jariyah yang tak putus, mengalir setiap detik alat itu menyala—setiap nyawa yang berhasil...',
    date: '21 Maret 2025'
  },
  {
    id: 3,
    image: kurbanImg,
    title: 'SEDEKAH DAGING PELOSOK NEGERI',
    description: 'Belum bisa kurban tahun ini? Ambil kesempatan dapatkan pahala di hari raya kurban dengan SEDEKAH DAGING yuk!',
    date: '21 Maret 2025'
  },
  {
    id: 4,
    image: yatimImg,
    title: 'Paket Fidyah untuk Lansia dan Yatim',
    description: 'Bantu kami menyalurkan fidyah kepada para lansia dhuafa dan anak-anak yatim yang membutuhkan.',
    date: '21 Maret 2025'
  }
];

export default function Services() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold">
            <span className="text-green-600">HIGHLIGHT </span>
            <span className="text-transparent stroke-green-600" style={{ WebkitTextStroke: '1px #16a34a' }}>
              KISAH KASIH
            </span>
          </h2>
          <a href="#" className="text-sm text-gray-600 hover:underline">
            Lihat Semua &raquo;
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {campaigns.map(c => (
                <div key={c.id} className="bg-white border rounded-lg shadow overflow-hidden">
                <img src={c.image} alt={c.title} className="w-full h-48 object-cover" />
                <div className="p-4 space-y-2">
                    <h3 className="font-semibold text-gray-900 text-base">{c.title}</h3>
                    <p className="text-sm text-gray-600">{c.description}</p>
                    <p className="text-xs text-gray-400 mt-1">{c.date}</p> {/* ✅ Tanggal ditambahkan di sini */}
                </div>
                </div>
            ))}
            </div>
      </div>
    </section>
  );
}
