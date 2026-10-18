import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { ProductCard } from './ProductCard';

export const Home = ({ products, onSelectProduct, onNavigateToCategory }) => {
  const signatureProducts = products.filter(p => p.isSignature);

  return (
    <div className="space-y-20 sm:space-y-32 pb-24 text-white">
      {/* 1. HERO SECTION (Designed in Jakarta, Worn Beyond Borders) */}
      <section className="relative w-full h-[85vh] min-h-[580px] flex items-center justify-center bg-black overflow-hidden border-b border-[#1f1f1f]">
        {/* Background Editorial Model Image */}
        <img
          src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=1600&auto=format&fit=crop&q=80"
          alt="Editorial Fashion Campaign"
          className="absolute inset-0 w-full h-full object-cover object-top opacity-55 scale-100"
        />
        {/* Deep Black Gradient Vignette for dramatic mood */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

        {/* Hero Typography Matching Reference */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center flex flex-col items-center">
          <h1 className="font-serif-luxury text-3xl sm:text-5xl md:text-7xl font-normal text-white max-w-4xl leading-[1.15] tracking-tight">
            Designed in Jakarta, Worn Beyond Borders.
          </h1>

          <div className="mt-8">
            <button
              onClick={() => onNavigateToCategory('all')}
              className="border border-white/80 bg-black/40 backdrop-blur-sm text-white px-8 py-3 text-xs tracking-[0.25em] uppercase hover:bg-white hover:text-black transition duration-300 font-mono"
            >
              EXPLORE THE COLLECTION
            </button>
          </div>
        </div>
      </section>

      {/* 2. SIGNATURE PIECES (Cursive Title + 6 Product Grid) */}
      <section id="signature-section" className="max-w-[1400px] mx-auto px-4 sm:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-script-luxury text-5xl sm:text-7xl md:text-8xl text-white font-normal leading-none">
            Signature Pieces
          </h2>
          <p className="text-[11px] font-mono tracking-[0.3em] uppercase text-zinc-400 mt-2">
            DESIGNED & CRAFTED WITH SOUL IN JAKARTA
          </p>
        </div>

        {/* 6 Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
          {signatureProducts.slice(0, 6).map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onSelectProduct={onSelectProduct} 
            />
          ))}
        </div>
      </section>

      {/* 3. DAILY STAPLES (Cursive Title + 3 Category Highlights) */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="font-script-luxury text-5xl sm:text-7xl text-white font-normal leading-none">
            Daily Staples
          </h2>
          <p className="text-[11px] font-mono tracking-[0.3em] uppercase text-zinc-400 mt-2">
            ELEVATED ESSENTIALS FOR EVERYDAY WEAR
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Box 1: Batik Clasp */}
          <div 
            onClick={() => onNavigateToCategory('Batik Clasp')}
            className="group cursor-pointer bg-[#0e0e0e] border border-zinc-800 p-4 transition hover:border-zinc-500"
          >
            <div className="aspect-[4/3] bg-zinc-950 overflow-hidden relative mb-4 flex items-center justify-center p-3">
              <img
                src="/products/phoenix-firemanclasp.png"
                alt="Batik Firemanclasp"
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute top-2 left-2 bg-black/80 px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest text-zinc-300">
                01 / BATIK CLASP
              </span>
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Signature Firemanclasp</h3>
            <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
              Kemeja batik berpola kontemporer dengan penutup kancing clasp metal industrial yang tangguh.
            </p>
          </div>

          {/* Box 2: Sutra ATBM */}
          <div 
            onClick={() => onNavigateToCategory('Sutra ATBM')}
            className="group cursor-pointer bg-[#0e0e0e] border border-zinc-800 p-4 transition hover:border-zinc-500"
          >
            <div className="aspect-[4/3] bg-zinc-950 overflow-hidden relative mb-4 flex items-center justify-center p-3">
              <img
                src="/products/sutra-atbm-brown-firemanclasp.png"
                alt="Sutra ATBM Collection"
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute top-2 left-2 bg-black/80 px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest text-zinc-300">
                02 / SUTRA ATBM
              </span>
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Handwoven Silk ATBM</h3>
            <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
              Mahakarya tenun sutra tradisional Nusantara dengan tekstur mewah dan kenyamanan tiada tara.
            </p>
          </div>

          {/* Box 3: Bottoms */}
          <div 
            onClick={() => onNavigateToCategory('Bottoms')}
            className="group cursor-pointer bg-[#0e0e0e] border border-zinc-800 p-4 transition hover:border-zinc-500"
          >
            <div className="aspect-[4/3] bg-zinc-900 overflow-hidden relative mb-4">
              <img
                src="https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&auto=format&fit=crop&q=80"
                alt="Daily Bottoms"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute top-2 left-2 bg-black/80 px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest text-zinc-300">
                03 / BOTTOMS
              </span>
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Relaxed & Pleated</h3>
            <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
              Celana bahan berpotongan rapi yang melengkapi keanggunan kemeja RAWTIX Anda.
            </p>
          </div>
        </div>
      </section>

      {/* 4. COMMUNITY (Cursive Title + Lookbook Campaign Carousel) */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="font-script-luxury text-5xl sm:text-7xl text-white font-normal leading-none">
            Community
          </h2>
          <p className="text-[11px] font-mono tracking-[0.3em] uppercase text-zinc-400 mt-2">
            TAG @RAWTIXSTUDIO TO GET FEATURED — ARCHIVE 2026
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="group relative aspect-[3/4] bg-zinc-900 border border-zinc-800 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=800&auto=format&fit=crop&q=80"
              alt="Community Style 1"
              className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-5">
              <span className="text-xs font-mono tracking-wider text-zinc-300">@adrian.dimas in Carbon Coach</span>
            </div>
          </div>

          <div className="group relative aspect-[3/4] bg-zinc-900 border border-zinc-800 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&auto=format&fit=crop&q=80"
              alt="Community Style 2"
              className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-5">
              <span className="text-xs font-mono tracking-wider text-zinc-300">@kevin_w in Ash Grey Hoodie</span>
            </div>
          </div>

          <div className="group relative aspect-[3/4] bg-zinc-900 border border-zinc-800 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1544441893-675973e31985?w=800&auto=format&fit=crop&q=80"
              alt="Community Style 3"
              className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-5">
              <span className="text-xs font-mono tracking-wider text-zinc-300">@tararegina in Boxy Heavy Tee</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DISPATCHES FROM OUR COLLECTORS (Testimonial Cards) */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8">
        <div className="text-center mb-10">
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-zinc-400 block">AUTHENTIC REVIEWS</span>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl text-white mt-1">
            Dispatches From Our Collectors
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Review 1 */}
          <div className="bg-[#0b0b0b] border border-zinc-800 p-6 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">Adrian Pratama</h4>
                <span className="text-[10px] font-mono text-zinc-400">Jakarta Selatan</span>
              </div>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              "Kualitas bahan tee 230 GSM nya luar biasa tebal dan siluet jatuhnya rapi banget. Sama sekali nggak melar setelah dicuci berkali-kali."
            </p>
            <div className="pt-3 border-t border-zinc-900 text-[10px] font-mono text-zinc-500 uppercase">
              Product: Heavyweight Boxy Tee
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-[#0b0b0b] border border-zinc-800 p-6 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">Reza Maulana</h4>
                <span className="text-[10px] font-mono text-zinc-400">Bandung</span>
              </div>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              "Outer coach jacket-nya clean dan mewah. Water repellent-nya beneran berfungsi saat gerimis. Packaging & brandingnya sangat berkelas."
            </p>
            <div className="pt-3 border-t border-zinc-900 text-[10px] font-mono text-zinc-500 uppercase">
              Product: Structure Coach Jacket
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-[#0b0b0b] border border-zinc-800 p-6 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">Dimas Bagus</h4>
                <span className="text-[10px] font-mono text-zinc-400">Surabaya</span>
              </div>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              "Wide pleat trousers-nya pas banget di pinggang dan drape kainnya jatuh dengan elegan. Brand lokal dengan standar kualitas global."
            </p>
            <div className="pt-3 border-t border-zinc-900 text-[10px] font-mono text-zinc-500 uppercase">
              Product: Pleated Wide Trouser
            </div>
          </div>
        </div>
      </section>

      {/* 6. VIEW ALL CTA (Script Title) */}
      <section className="text-center py-12 border-t border-zinc-900">
        <h2 className="font-script-luxury text-6xl sm:text-8xl text-white font-normal leading-none mb-6">
          View all
        </h2>
        <button
          onClick={() => onNavigateToCategory('all')}
          className="px-10 py-3.5 border border-white text-xs uppercase tracking-[0.25em] font-mono text-white hover:bg-white hover:text-black transition duration-300"
        >
          VIEW ALL PRODUCTS
        </button>
      </section>
    </div>
  );
};
