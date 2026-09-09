"use client";

import Link from "next/link";
import { Search, Heart, User, ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white">
      {/* Top Announcement Bar */}
      <div className="bg-[#8C7A6B] text-white text-[11px] font-medium tracking-widest text-center py-2 uppercase">
        ✨ NEW DROP: THE LINEN SERIES — FREE ONGKIR PTP
      </div>

      {/* Main Navbar */}
      <nav className="border-b border-gray-100 px-8 py-4 flex items-center justify-between">
        {/* Left Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 text-[12px] font-medium tracking-wider uppercase text-gray-700">
          <Link
            href="/"
            className="hover:text-black border-b border-black pb-0.5"
          >
            New Arrivals
          </Link>
          <Link href="#" className="hover:text-black transition">
            Clothing
          </Link>
          <Link href="#" className="hover:text-black transition">
            Dresses
          </Link>
          <Link href="#" className="hover:text-black transition">
            Tops
          </Link>
          <Link href="#" className="hover:text-black transition">
            Bottoms
          </Link>
        </div>

        {/* Center Brand Logo */}
        <Link
          href="/"
          className="font-serif text-2xl tracking-[0.2em] font-bold text-gray-900 uppercase"
        >
          GEGGO WOMAN
        </Link>

        {/* Right Action Icons */}
        <div className="flex items-center gap-5 text-gray-800">
          <button aria-label="Search" className="hover:text-black transition">
            <Search className="w-4 h-4 stroke-[1.5]" />
          </button>
          <button aria-label="Wishlist" className="hover:text-black transition">
            <Heart className="w-4 h-4 stroke-[1.5]" />
          </button>
          <button aria-label="Account" className="hover:text-black transition">
            <User className="w-4 h-4 stroke-[1.5]" />
          </button>
          <Link
            href="/admin"
            aria-label="Cart"
            className="relative hover:text-black transition"
          >
            <ShoppingBag className="w-4 h-4 stroke-[1.5]" />
            <span className="absolute -top-1.5 -right-2 bg-black text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
              0
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
