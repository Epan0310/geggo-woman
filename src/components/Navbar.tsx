"use client";

import Link from "next/link";
import { Search, Heart, User, ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-gray-100 shadow-xs">
      {/* Top Announcement Bar */}
      <div className="bg-[#8C7A6B] text-white text-[11px] font-medium tracking-[0.2em] text-center py-2 uppercase">
        ✨ NEW DROP: THE LINEN SERIES — FREE ONGKIR PTP
      </div>

      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        {/* Left Section: Brand Logo & Main Nav Links */}
        <div className="flex items-center gap-10">
          <Link
            href="/"
            className="font-serif text-xl md:text-2xl tracking-[0.2em] font-bold text-gray-900 uppercase"
          >
            GEGGO WOMAN
          </Link>

          <div className="hidden md:flex items-center gap-6 text-[12px] font-medium tracking-widest uppercase text-gray-700">
            <Link
              href="/"
              className="text-black font-semibold border-b-2 border-black pb-0.5"
            >
              New Arrivals
            </Link>
            <Link href="#" className="hover:text-black transition-colors">
              Clothing
            </Link>
            <Link href="#" className="hover:text-black transition-colors">
              Dresses
            </Link>
            <Link href="#" className="hover:text-black transition-colors">
              Tops
            </Link>
            <Link href="#" className="hover:text-black transition-colors">
              Bottoms
            </Link>
          </div>
        </div>

        {/* Right Section: Icons */}
        <div className="flex items-center gap-5 text-gray-800">
          <button
            aria-label="Search"
            className="p-1 hover:text-black transition"
          >
            <Search className="w-4 h-4 stroke-[1.5]" />
          </button>
          <button
            aria-label="Wishlist"
            className="p-1 hover:text-black transition"
          >
            <Heart className="w-4 h-4 stroke-[1.5]" />
          </button>
          <button
            aria-label="Account"
            className="p-1 hover:text-black transition"
          >
            <User className="w-4 h-4 stroke-[1.5]" />
          </button>
          <Link
            href="/admin"
            aria-label="Cart"
            className="relative p-1 hover:text-black transition"
          >
            <ShoppingBag className="w-4 h-4 stroke-[1.5]" />
            <span className="absolute top-0 -right-1 bg-black text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              0
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
