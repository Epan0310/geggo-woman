"use client";

import { Shirt, RotateCcw, Truck } from "lucide-react";

export default function Home() {
  const newArrivals = [
    {
      id: 1,
      name: "Geggo Oversized Linen Shirt Milk White",
      price: 189000,
      image: "/images/shirt-white.png",
      isNew: true,
    },
    {
      id: 2,
      name: "Aria Pleated Highwaist Cullote Oat",
      price: 219000,
      image: "/images/cullote-oat.png",
      isNew: false,
    },
    {
      id: 3,
      name: "Sienna Tiered Midi Dress Sage",
      price: 249000,
      image: "/images/dress-sage.png",
      isNew: false,
    },
    {
      id: 4,
      name: "Mera Knitted Vest Warm Taupe",
      price: 169000,
      image: "/images/vest-taupe.png",
      isNew: false,
    },
  ];

  return (
    <div className="w-full bg-[#FAF9F6]">
      {/* 1. HERO BANNER SECTION */}
      <section className="relative w-full h-[580px] bg-[#E8ECE9] overflow-hidden flex items-center justify-center">
        <img
          src="/images/hero-bg.png"
          alt="The Everyday Linen Series"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.95]"
        />
        <div className="relative z-10 text-center max-w-2xl px-8 py-10 bg-black/30 backdrop-blur-md rounded-xl text-white border border-white/20 shadow-2xl">
          <p className="text-xs uppercase tracking-[0.3em] font-medium text-amber-100 mb-2">
            Minimalist Editorial Collection
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-normal tracking-[0.15em] uppercase mb-3 drop-shadow-sm">
            THE EVERYDAY LINEN SERIES
          </h1>
          <p className="text-xs md:text-sm text-gray-200 tracking-wide font-light mb-6">
            Koleksi Nyaman & Elegan untuk Aktivitas Harian
          </p>
          <button className="bg-white text-gray-900 text-[11px] tracking-[0.25em] uppercase px-8 py-3.5 font-semibold hover:bg-gray-100 transition shadow-md">
            JELAJAHI KOLEKSI
          </button>
        </div>
      </section>

      {/* 2. CATEGORY MOSAIC GRID */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Large Left Card */}
          <div className="relative h-[500px] group overflow-hidden bg-stone-200 rounded-sm shadow-xs">
            <img
              src="/images/blouse-tops.png"
              alt="Blouse & Tops"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-xs px-6 py-3 shadow-md">
              <span className="font-serif text-sm tracking-wider text-gray-900 font-medium uppercase">
                Blouse & Tops
              </span>
            </div>
          </div>

          {/* Right Stack Cards */}
          <div className="flex flex-col gap-6 h-[500px]">
            {/* Top Right Card */}
            <div className="relative h-[238px] group overflow-hidden bg-stone-200 rounded-sm shadow-xs">
              <img
                src="/images/pleated-pants.png"
                alt="Pleated Pants"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-xs px-5 py-2 shadow-sm">
                <span className="font-serif text-xs tracking-wider text-gray-900 font-medium uppercase">
                  Pleated Pants
                </span>
              </div>
            </div>

            {/* Bottom Right Card */}
            <div className="relative h-[228px] group overflow-hidden bg-stone-200 rounded-sm shadow-xs">
              <img
                src="/images/casual-dresses.png"
                alt="Casual Dresses"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-xs px-5 py-2 shadow-sm">
                <span className="font-serif text-xs tracking-wider text-gray-900 font-medium uppercase">
                  Casual Dresses
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NEW ARRIVALS PRODUCT GRID */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex justify-between items-baseline mb-8 border-b border-stone-200 pb-4">
          <h2 className="font-serif text-2xl md:text-3xl font-normal text-gray-900 tracking-wide">
            New Arrivals
          </h2>
          <a
            href="#"
            className="text-[11px] font-semibold tracking-[0.2em] text-stone-600 hover:text-black uppercase underline underline-offset-4"
          >
            VIEW ALL
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] bg-stone-100 overflow-hidden mb-3.5 shadow-2xs">
                {product.isNew && (
                  <span className="absolute top-3 left-3 bg-[#A85B32] text-white text-[9px] font-bold px-2 py-0.5 uppercase tracking-widest z-10 shadow-xs">
                    NEW
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <h3 className="text-xs font-normal text-gray-800 line-clamp-1 mb-1 group-hover:text-black transition">
                {product.name}
              </h3>
              <p className="text-xs font-semibold text-gray-900">
                Rp {product.price.toLocaleString("id-ID")}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. VALUE PROPOSITION BAR */}
      <section className="border-t border-b border-stone-200 my-16 bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <Shirt className="w-6 h-6 stroke-[1.2] text-stone-700" />
            <h4 className="font-serif text-sm text-gray-800 tracking-wide">
              Bahan Premium Cotton Linen
            </h4>
          </div>
          <div className="flex flex-col items-center gap-3">
            <RotateCcw className="w-6 h-6 stroke-[1.2] text-stone-700" />
            <h4 className="font-serif text-sm text-gray-800 tracking-wide">
              Garansi Tukar Size 7 Hari
            </h4>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Truck className="w-6 h-6 stroke-[1.2] text-stone-700" />
            <h4 className="font-serif text-sm text-gray-800 tracking-wide">
              Pengiriman Sameday / Instant
            </h4>
          </div>
        </div>
      </section>
    </div>
  );
}
