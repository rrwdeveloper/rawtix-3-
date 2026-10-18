import React from 'react';

export const Footer = ({ onNavigateToCategory }) => {
  return (
    <footer className="bg-black border-t border-[#1a1a1a] text-zinc-400 font-sans text-xs">
      {/* Payment and Courier Bar (As seen in the screenshot) */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-8 border-b border-[#1a1a1a] space-y-6">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 block mb-3">
            ACCEPTED PAYMENT METHODS
          </span>
          <div className="flex flex-wrap gap-2 text-[10px] font-mono text-zinc-300">
            {['QRIS', 'BCA', 'MANDIRI', 'BNI', 'BRI', 'PERMATA', 'GOPAY', 'SHOPEEPAY', 'OVO', 'DANA', 'VISA', 'MASTERCARD'].map(pay => (
              <span key={pay} className="px-2.5 py-1 bg-[#111111] border border-zinc-800 text-zinc-300">
                {pay}
              </span>
            ))}
          </div>
        </div>

        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 block mb-3">
            DOMESTIC & WORLDWIDE LOGISTICS
          </span>
          <div className="flex flex-wrap gap-2 text-[10px] font-mono text-zinc-300">
            {['J&T EXPRESS', 'SICEPAT', 'JNE REG/YES', 'GO-SEND', 'DHL EXPRESS', 'FEDEX'].map(c => (
              <span key={c} className="px-2.5 py-1 bg-[#111111] border border-zinc-800 text-zinc-300">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4">
            <span className="text-xl font-black tracking-[0.25em] text-white uppercase block">
              RAWTIX
            </span>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-xs">
              Born in Jakarta, worn across borders. Precision-tailored dark monochromatic essentials constructed for resilience.
            </p>
            <div className="text-[10px] font-mono text-zinc-400 pt-2">
              EST. 2026 — JAKARTA, INDONESIA
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="text-[11px] font-mono uppercase tracking-[0.2em] text-white mb-4 font-semibold">
              COLLECTIONS
            </h5>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li><button onClick={() => onNavigateToCategory('all')} className="hover:text-white transition">All Products</button></li>
              <li><button onClick={() => onNavigateToCategory('T-Shirts')} className="hover:text-white transition">Signature T-Shirts</button></li>
              <li><button onClick={() => onNavigateToCategory('Outerwear')} className="hover:text-white transition">Minimalist Outerwear</button></li>
              <li><button onClick={() => onNavigateToCategory('Bottoms')} className="hover:text-white transition">Tailored Bottoms</button></li>
              <li><button onClick={() => onNavigateToCategory('Accessories')} className="hover:text-white transition">Bags & Hardware</button></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 className="text-[11px] font-mono uppercase tracking-[0.2em] text-white mb-4 font-semibold">
              CUSTOMER CARE
            </h5>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li className="hover:text-white cursor-pointer transition">Track Order</li>
              <li className="hover:text-white cursor-pointer transition">Size Guide (Metric & Imperial)</li>
              <li className="hover:text-white cursor-pointer transition">Shipping & Delivery Policies</li>
              <li className="hover:text-white cursor-pointer transition">Return & Exchange Policy</li>
              <li className="hover:text-white cursor-pointer transition">WhatsApp Concierge</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h5 className="text-[11px] font-mono uppercase tracking-[0.2em] text-white font-semibold">
              JOIN THE ARCHIVE
            </h5>
            <p className="text-xs text-zinc-400">
              Dapatkan akses awal 24 jam sebelum peluncuran koleksi terbatas (*limited drops*).
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#111111] border border-zinc-800 px-3 py-2 text-xs text-white placeholder-zinc-600 flex-1 focus:outline-none focus:border-white transition"
              />
              <button className="bg-white text-black px-4 text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition">
                JOIN
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-[#1a1a1a] flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-zinc-400 gap-4">
          <p>© 2026 RAWTIX ARCHIVE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6 uppercase tracking-wider">
            <span className="hover:text-white cursor-pointer">PRIVACY</span>
            <span className="hover:text-white cursor-pointer">TERMS</span>
            <span className="hover:text-white cursor-pointer">LEGAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
