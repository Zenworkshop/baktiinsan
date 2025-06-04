import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Cta() {
  return (
    <section className="bg-green-600 text-white py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Butuh Bantuan atau Konsultasi?</h2>
        <p className="text-lg md:text-xl mb-6">
          Tim kami siap membantu kamu! Langsung hubungi kami lewat WhatsApp sekarang juga.
        </p>
        <a
          href="https://wa.me/6281244997748?text=Halo%20Dompet%20Dhuafa,%20saya%20ingin%20konsultasi."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-green-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-green-100 transition"
        >
          <FaWhatsapp size={24} />
          Hubungi via WhatsApp
        </a>
      </div>
    </section>
  );
}
