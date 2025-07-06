'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full py-6 px-6 lg:px-8 flex justify-between items-center bg-[#0c0f25] text-white fixed top-0 left-0 z-50 shadow-md">
      <Logo />

      {/* Desktop Links - visible on lg and up */}
      <div className="hidden lg:flex items-center space-x-6 text-base font-medium tracking-wide">
        <Link href="/#services" className="py-2 hover:text-teal-300 transition">Services</Link>
        <Link href="/#why-us" className="py-2 hover:text-teal-300 transition">Why Us</Link>
        <Link href="/#portfolio" className="py-2 hover:text-teal-300 transition">Portfolio</Link>
        <Link href="/pricing" className="py-2 hover:text-teal-300 transition">Pricing</Link>
        <Link href="/#about" className="py-2 hover:text-teal-300 transition">About</Link>
        <Link href="/#faq" className="py-2 hover:text-teal-300 transition">FAQ</Link>
        <Link
          href="/contact"
          className="bg-teal-400 text-[#0A2540] px-4 py-2 rounded-lg font-semibold hover:bg-teal-300 transition transform hover:scale-105 hover:shadow-lg"
        >
          Free Quote
        </Link>
      </div>

      {/* Mobile Hamburger - visible below lg */}
      <button
        className="lg:hidden focus:outline-none z-50"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu - visible only when open and screen is below lg */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 w-full bg-[#102B4C]/90 text-white flex flex-col items-center space-y-6 py-6 
                     border-t border-teal-500/30 shadow-xl backdrop-blur-sm 
                     transition-all duration-300 ease-in-out animate-fade-down lg:hidden"
        >
          <Link href="/#services" className="hover:underline" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/#why-us" className="hover:underline" onClick={() => setMenuOpen(false)}>Why Us</Link>
          <Link href="/#portfolio" className="hover:underline" onClick={() => setMenuOpen(false)}>Portfolio</Link>
          <Link href="/pricing" className="py-2 hover:text-teal-300 transition" onClick={() => setMenuOpen(false)}>Pricing</Link>
          <Link href="/#about" className="hover:underline" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/#faq" className="hover:underline" onClick={() => setMenuOpen(false)}>FAQ</Link>
          <Link
            href="/contact"
            className="bg-teal-400 text-[#0A2540] px-4 py-2 rounded-lg font-semibold hover:bg-teal-300 transition"
            onClick={() => setMenuOpen(false)}
          >
            Free Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
