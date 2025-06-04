import React from 'react';
import palestinaImg from '../assets/palestina.jpeg';
import inkubatorImg from '../assets/inkubator.jpg';
import kurbanImg from '../assets/qurban.jpg';

type Campaign = {
  id: number;
  image: string;
  title: string;
  description: string;
  organizer: string;
  collected: number;
  daysLeft: number;
};

const campaigns = [
  {
    id: 1,
    image: palestinaImg,
    title: 'Dukung Perjuangan Palestina dengan Zakat Terbaikmu! (Zakat Palestina)',
    description: 'Salah satu mustahik zakat adalah fi sabilillah, untuk saat ini bisa diberikan kepada Negara-negara muslim yang masih...',
    organizer: 'Dompet Dhuafa',
    collected: 3820963001,
    daysLeft: null,
  },
  {
    id: 2,
    image: inkubatorImg,
    title: 'Wakaf Inkubator untuk Bayi Kritis di NICU',
    description: 'Wakafmu akan menjadi amal jariyah yang tak putus, mengalir setiap detik alat itu menyala—setiap nyawa yang berhasil...',
    organizer: 'Dompet Dhuafa',
    collected: 20937310,
    daysLeft: 241,
  },
  {
    id: 3,
    image: kurbanImg,
    title: 'SEDEKAH DAGING PELOSOK NEGERI',
    description: 'Belum bisa kurban tahun ini? Ambil kesempatan dapatkan pahala di hari raya kurban dengan SEDEKAH DAGING yuk!',
    organizer: 'Dompet Dhuafa',
    collected: 23037012,
    daysLeft: 6,
  },
];

export default function Services() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold">
            <span className="text-green-600">MARI BANTU </span>
            <span className="text-transparent stroke-green-600" style={{ WebkitTextStroke: '1px #16a34a' }}>
              MEREKA
            </span>
          </h2>
          <a href="#" className="text-sm text-gray-600 hover:underline">
            Lihat Semua &raquo;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map(c => (
            <div key={c.id} className="bg-white border rounded-lg shadow overflow-hidden">
              <img src={c.image} alt={c.title} className="w-full h-48 object-cover" />
              <div className="p-4 space-y-2">
                <h3 className="font-semibold text-gray-900 text-base">{c.title}</h3>
                <p className="text-sm text-gray-600">{c.description}</p>
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-700 font-medium">
                  <img src="/images/logo-dd.png" alt="Organizer" className="w-5 h-5" />
                  {c.organizer}
                  <span className="text-blue-500">✔</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full mt-2">
                  <div className="h-2 bg-green-500 rounded-full w-[60%]"></div>
                </div>
                <div className="flex justify-between text-sm text-gray-700 mt-2">
                  <div>
                    <span className="text-gray-500">Terkumpul</span>
                    <p className="text-green-600 font-bold">Rp {c.collected.toLocaleString('id-ID')}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-500">Sisa Hari</span>
                    <p className="font-semibold">{c.daysLeft ?? '-'}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
