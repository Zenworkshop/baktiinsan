import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        {/* Column 1 */}
        <div>
          <h4 className="font-bold text-green-600 mb-4">DOMPET DHUAFA</h4>
          <ul className="space-y-2 text-gray-700">
            <li><a href="#">Donasi</a></li>
            <li><a href="#">Zakat</a></li>
            <li><a href="#">Sedekah</a></li>
            <li><a href="#">Wakaf</a></li>
            <li><a href="#">Kurban</a></li>
            <li><a href="#">Mitra Kami</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-bold text-green-600 mb-4">TENTANG</h4>
          <ul className="space-y-2 text-gray-700">
            <li><a href="#">Tentang Kami</a></li>
            <li><a href="#">Hubungi Kami</a></li>
            <li><a href="#">Kisah Kasih</a></li>
            <li><a href="#">Kebijakan Privacy</a></li>
            <li><a href="#">Syarat & Ketentuan</a></li>
            <li><a href="#">Laporan Publik</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-bold text-green-600 mb-4">FAQ</h4>
          <ul className="space-y-2 text-gray-700">
            <li><a href="#">Donasi</a></li>
            <li><a href="#">Zakat</a></li>
            <li><a href="#">Wakaf</a></li>
            <li><a href="#">Kurban</a></li>
            <li><a href="#">Mitra Kami</a></li>
            <li><a href="#">Aplikasi</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="font-bold text-green-600 mb-4">IKUTI KAMI</h4>
          <div className="flex space-x-4 text-gray-500 text-xl mb-4">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
          <p className="text-xs text-gray-400">&copy; Dompet Dhuafa {currentYear}</p>
        </div>
      </div>
    </footer>
  );
}
