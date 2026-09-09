"use client";

import { Shirt, RotateCcw, Truck } from "lucide-react";

export default function Home() {
  // Data dummy yang presisi sesuai tampilan gambar desain
  const newArrivals = [
    {
      id: 1,
      name: "Geggo Oversized Linen Shirt Milk White",
      price: 189000,
      image:
        "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=800",
      isNew: true,
    },
    {
      id: 2,
      name: "Aria Pleated Highwaist Cullote Oat",
      price: 219000,
      image:
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800",
      isNew: false,
    },
    {
      id: 3,
      name: "Sienna Tiered Midi Dress Sage",
      price: 249000,
      image:
        "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800",
      isNew: false,
    },
    {
      id: 4,
      name: "Mera Knitted Vest Warm Taupe",
      price: 169000,
      image:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=800",
      isNew: false,
    },
  ];

  return (
    <div className="w-full bg-[#FCFBF9]">
      {/* 1. HERO BANNER SECTION */}
      <section className="relative w-full h-[600px] bg-[#E8ECE9] overflow-hidden flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600"
          alt="The Everyday Linen Series"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
        />
        <div className="relative z-10 text-center max-w-xl px-6 py-8 backdrop-blur-xs bg-white/10 rounded-lg">
          <p className="font-serif text-sm italic text-gray-700 mb-1">
            Geggo Woman
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-light tracking-[0.15em] text-white uppercase mb-3 drop-shadow-md">
            THE EVERYDAY LINEN SERIES
          </h1>
          <p className="text-xs text-gray-100 tracking-wide mb-6">
            Koleksi Nyaman & Elegan untuk Aktivitas Harian
          </p>
          <button className="bg-[#2B2B2B] text-white text-[11px] tracking-[0.2em] uppercase px-8 py-3.5 font-medium hover:bg-black transition">
            JELAJAHI KOLEKSI
          </button>
        </div>
      </section>

      {/* 2. CATEGORY MOSAIC GRID */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Large Left Card */}
          <div className="relative h-[480px] group overflow-hidden bg-gray-100 rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800"
              alt="Blouse & Tops"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute bottom-6 left-6 bg-white/95 px-6 py-2.5 shadow-sm">
              <span className="font-serif text-sm tracking-wide text-gray-900 font-medium">
                Blouse & Tops
              </span>
            </div>
          </div>

          {/* Right Stack Cards */}
          <div className="flex flex-col gap-6 h-[480px]">
            {/* Top Right Card */}
            <div className="relative h-[228px] group overflow-hidden bg-gray-100 rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800"
                alt="Pleated Pants"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute bottom-4 left-4 bg-white/95 px-5 py-2 shadow-sm">
                <span className="font-serif text-xs tracking-wide text-gray-900 font-medium">
                  Pleated Pants
                </span>
              </div>
            </div>

            {/* Bottom Right Card */}
            <div className="relative h-[228px] group overflow-hidden bg-gray-100 rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800"
                alt="Casual Dresses"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute bottom-4 left-4 bg-white/95 px-5 py-2 shadow-sm">
                <span className="font-serif text-xs tracking-wide text-gray-900 font-medium">
                  Casual Dresses
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NEW ARRIVALS PRODUCT GRID */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex justify-between items-baseline mb-8 border-b border-gray-200 pb-4">
          <h2 className="font-serif text-2xl font-normal text-gray-900 tracking-wide">
            New Arrivals
          </h2>
          <a
            href="#"
            className="text-[11px] font-medium tracking-[0.15em] text-gray-500 hover:text-black uppercase underline underline-offset-4"
          >
            VIEW ALL
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] bg-[#F2EFF0] overflow-hidden mb-3">
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-[#A85B32] text-white text-[9px] font-bold px-2 py-0.5 uppercase tracking-wider z-10">
                    NEW
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <h3 className="text-xs font-normal text-gray-800 line-clamp-1 mb-1 group-hover:underline">
                {product.name}
              </h3>
              <p className="text-xs font-semibold text-gray-900">
                Rp. {product.price.toLocaleString("id-ID")}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. VALUE PROPOSITION BAR */}
      <section className="border-t border-b border-gray-200 my-16 bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <Shirt className="w-6 h-6 stroke-[1.2] text-gray-700" />
            <h4 className="font-serif text-sm text-gray-800 tracking-wide">
              Bahan Premium Cotton Linen
            </h4>
          </div>
          <div className="flex flex-col items-center gap-3">
            <RotateCcw className="w-6 h-6 stroke-[1.2] text-gray-700" />
            <h4 className="font-serif text-sm text-gray-800 tracking-wide">
              Garansi Tukar Size 7 Hari
            </h4>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Truck className="w-6 h-6 stroke-[1.2] text-gray-700" />
            <h4 className="font-serif text-sm text-gray-800 tracking-wide">
              Pengiriman Sameday / Instant
            </h4>
          </div>
        </div>
      </section>
    </div>
  );
}
