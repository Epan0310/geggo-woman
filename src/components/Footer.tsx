import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F9F8F6] border-t border-gray-200 text-gray-800 text-xs font-sans">
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Brand Description */}
        <div className="space-y-3">
          <h3 className="font-serif text-lg tracking-[0.2em] font-bold uppercase text-gray-900">
            GEGGO WOMAN
          </h3>
          <p className="text-gray-500 max-w-sm leading-relaxed">
            Effortless sophistication and minimalist editorial style for the
            modern women.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-8 md:justify-end text-[11px] font-medium tracking-wider uppercase text-gray-600">
          <Link href="#" className="hover:text-black">
            Newsletter
          </Link>
          <Link href="#" className="hover:text-black">
            Customer Service
          </Link>
          <Link href="#" className="hover:text-black">
            Shipping & Returns
          </Link>
          <Link href="#" className="hover:text-black">
            Payment Methods
          </Link>
          <Link href="#" className="hover:text-black">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="border-t border-gray-200 py-6 px-8 text-center text-[11px] text-gray-400">
        © 2026 GEGGO WOMAN. All Rights Reserved.
      </div>
    </footer>
  );
}
