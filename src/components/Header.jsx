import React from 'react'

export default function Header() {
  return (
    <header className="bg-white shadow p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-[#ba1322]">Dompet Dhuafa</h1>
        <nav className="space-x-4">
          <a href="#" className="text-gray-700 hover:text-[#ba1322]">Beranda</a>
          <a href="#" className="text-gray-700 hover:text-[#ba1322]">Program</a>
          <a href="#" className="text-gray-700 hover:text-[#ba1322]">Donasi</a>
          <a href="#" className="text-gray-700 hover:text-[#ba1322]">Tentang Kami</a>
        </nav>
      </div>
    </header>
  )
}
