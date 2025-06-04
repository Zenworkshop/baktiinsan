import React from 'react';
import { FaHandHoldingHeart, FaDonate, FaHandsHelping, FaLeaf, FaHorse } from 'react-icons/fa';

export default function Layanan() {
  const layananList = [
    { icon: <FaHandHoldingHeart size={40} className="text-green-600" />, title: "Donasi", desc: "Ulurkan tangan Anda untuk meringankan beban mereka.", link: "Mulai Donasi" },
    { icon: <FaDonate size={40} className="text-green-600" />, title: "Zakat", desc: "Tunaikan zakat maal, fitrah, dan fidyah melalui kami.", link: "Mulai Zakat" },
    { icon: <FaHandsHelping size={40} className="text-green-600" />, title: "Sedekah", desc: "Sedekahkan sebagian harta benda Anda bagi mereka yang membutuhkan.", link: "Mulai Sedekah" },
    { icon: <FaLeaf size={40} className="text-green-600" />, title: "Wakaf", desc: "Sedekahkan sebagian harta benda Anda bagi kepentingan umat banyak.", link: "Mulai Wakaf" },
    { icon: <FaHorse size={40} className="text-green-600" />, title: "Kurban", desc: "Tunaikan kewajiban kurban sesuai syariat Islam bersama kami.", link: "Mulai Kurban" },
  ];

  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2">
          <span className="text-green-600">LAYANAN </span>
          <span className="text-transparent stroke-green-600" style={{ WebkitTextStroke: '1px #16a34a' }}>
            KAMI
          </span>
        </h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {layananList.map((item, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold text-green-700">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
              <a href="#" className="text-green-600 text-sm font-medium hover:underline">
                {item.link} &raquo;
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
