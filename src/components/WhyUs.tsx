import React from 'react';
import { FaHandshake, FaHeart, FaStar } from 'react-icons/fa';

export default function WhyUs() {
  const items = [
    {
      icon: <FaHandshake size={40} className="text-white mb-3" />,
      title: 'Responsif',
      desc: 'Merespon kebutuhan masyarakat dengan cepat dan tepat',
    },
    {
      icon: <FaHeart size={40} className="text-white mb-3" />,
      title: 'Sustainable Program',
      desc: 'Program jangka panjang untuk kemandirian umat',
    },
    {
      icon: <FaStar size={40} className="text-white mb-3" />,
      title: 'Credibility',
      desc: 'Bertanggung jawab penuh menjalankan amanah program',
    },
  ];

  return (
    <section className="bg-green-600 py-16 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          MENGAPA BERBAGI BERSAMA DOMPET DHUAFA?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              {item.icon}
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
