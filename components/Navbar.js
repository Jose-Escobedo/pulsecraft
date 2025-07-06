'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full py-6 px-6 lg:px-8 flex justify-between items-center bg-[#F8F9FA] text-[#1D3557] fixed top-0 left-0 z-50 shadow-md">
      <Logo />

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center font-oswald space-x-6 text-base font-bold tracking-wide">
        <Link href="/#services" className="py-2 hover:text-[#FCA311] transition">Services</Link>
        <Link href="/#why-us" className="py-2 hover:text-[#FCA311] transition">Why Us</Link>
        <Link href="/#portfolio" className="py-2 hover:text-[#FCA311] transition">Portfolio</Link>
        <Link href="/pricing" className="py-2 hover:text-[#FCA311] transition">Pricing</Link>
        <Link href="/#about" className="py-2 hover:text-[#FCA311] transition">About</Link>
        <Link href="/#faq" className="py-2 hover:text-[#FCA311] transition">FAQ</Link>
        <Link
          href="/contact"
          className="bg-[#FCA311] text-[#1D3557] px-4 py-2 rounded-lg font-semibold hover:bg-[#43BCCD] hover:text-white transition transform hover:scale-105 hover:shadow-lg"
        >
          Free Quote
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-[#1D3557] focus:outline-none z-50"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          className="absolute font-oswald top-full left-0 w-full bg-[#1D3557]/95 text-white flex flex-col items-center space-y-6 py-6 
                     border-t border-teal-500/20 shadow-xl backdrop-blur-sm 
                     transition-all duration-300 ease-in-out animate-fade-down lg:hidden"
        >
          <Link href="/#services" className="hover:underline" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/#why-us" className="hover:underline" onClick={() => setMenuOpen(false)}>Why Us</Link>
          <Link href="/#portfolio" className="hover:underline" onClick={() => setMenuOpen(false)}>Portfolio</Link>
          <Link href="/pricing" className="hover:text-[#FCA311]" onClick={() => setMenuOpen(false)}>Pricing</Link>
          <Link href="/#about" className="hover:underline" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/#faq" className="hover:underline" onClick={() => setMenuOpen(false)}>FAQ</Link>
          <Link
            href="/contact"
            className="bg-[#FCA311] text-[#1D3557] px-4 py-2 rounded-lg font-semibold hover:bg-[#43BCCD] hover:text-white transition"
            onClick={() => setMenuOpen(false)}
          >
            Free Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
