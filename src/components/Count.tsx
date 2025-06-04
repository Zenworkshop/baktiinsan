import React from 'react';
import CountUp from 'react-countup';
import { FaHandsHelping, FaMoneyBillWave, FaDonate } from 'react-icons/fa';

export default function Count() {
  const stats = [
    {
      icon: <FaHandsHelping size={36} className="text-white mb-2" />,
      label: 'CAMPAIGN',
      value: 1303,
    },
    {
      icon: <FaMoneyBillWave size={36} className="text-white mb-2" />,
      label: 'DONASI TERKUMPUL',
      value: 269772846009,
    },
    {
      icon: <FaDonate size={36} className="text-white mb-2" />,
      label: 'TRANSAKSI CAMPAIGN',
      value: 630407,
    },
  ];

  return (
    <section className="bg-green-600 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {stats.map((item, index) => (
          <div key={index} className="space-y-2 border-white/30 md:border-r last:border-none">
            <div className="flex justify-center">{item.icon}</div>
            <h3 className="text-3xl font-bold">
              <CountUp end={item.value} duration={2.5} separator="." />
            </h3>
            <p className="text-sm uppercase tracking-wide">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
