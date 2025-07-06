'use client';

import Link from 'next/link';
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#0c0f25] text-white py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        <div>
          <Logo />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/#services" className="hover:text-teal-300 transition">Services</Link></li>
            <li><Link href="/#why-us" className="hover:text-teal-300 transition">Why Us</Link></li>
            <li><Link href="/#portfolio" className="hover:text-teal-300 transition">Portfolio</Link></li>
            <li><Link href="/pricing" className="hover:text-teal-300 transition">Pricing</Link></li>
            <li><Link href="/#about" className="hover:text-teal-300 transition">About</Link></li>
            <li><Link href="/#faq" className="hover:text-teal-300 transition">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/privacy-policy" className="hover:text-teal-300 transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-teal-300 transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/accessibility" className="hover:text-teal-300 transition">
                Accessibility
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm text-gray-300">
            <Link href="/contact" className="hover:underline">
              Contact Page
            </Link>
          </p>
          <p className="text-sm text-gray-300">
            <a href="mailto:support@therapysitestudio.com" className="hover:underline">
              support@therapysitestudio.com
            </a>
          </p>
          <p className="text-sm text-gray-300">Based in Los Angeles, CA</p>
        </div>

      </div>

      <div className="mt-10 text-center text-sm text-gray-400 border-t border-gray-600 pt-6">
        &copy; {new Date().getFullYear()} Therapy Site Studio. All rights reserved.
      </div>
    </footer>
  );
}
