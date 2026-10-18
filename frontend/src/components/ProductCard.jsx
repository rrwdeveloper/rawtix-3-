import React from 'react';

export const ProductCard = ({ product, onSelectProduct }) => {
  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
  };

  return (
    <div 
      onClick={() => onSelectProduct(product)}
      className="group cursor-pointer flex flex-col bg-[#0d0d0d] border border-[#222222] overflow-hidden transition-all duration-300 hover:border-zinc-500"
    >
      {/* Product Image Frame with Luxury Script Label Backdrop */}
      <div className="relative aspect-square w-full bg-[#141414] overflow-hidden flex items-center justify-center">
        {/* Subtle decorative watermark like in saintpjkt reference */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.07]">
          <span className="font-script-luxury text-6xl text-white whitespace-nowrap">
            Signature Pieces
          </span>
        </div>

        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        {/* Badges */}
        {product.outOfStock ? (
          <div className="absolute inset-0 bg-black/75 flex items-center justify-center p-2">
            <span className="text-[11px] uppercase font-mono tracking-[0.2em] text-white border border-zinc-600 px-3 py-1 bg-black/60">
              Sold Out
            </span>
          </div>
        ) : (
          product.isSignature && (
            <span className="absolute top-2.5 left-2.5 bg-black/80 backdrop-blur-sm text-[9px] uppercase font-mono tracking-[0.2em] text-zinc-300 px-2 py-0.5 border border-zinc-800">
              BEST SELLER
            </span>
          )
        )}
      </div>

      {/* Info in clean minimalist typography */}
      <div className="p-3.5 flex flex-col flex-grow justify-between bg-[#0a0a0a]">
        <div>
          <h3 className="text-xs sm:text-[13px] font-medium text-white tracking-wide line-clamp-1 group-hover:text-zinc-300 transition">
            {product.name}
          </h3>
        </div>
        
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs font-mono font-medium text-zinc-300">
            {formatRupiah(product.price)}
          </span>
          <span className="text-[10px] font-mono tracking-wider text-zinc-500 group-hover:text-white uppercase transition">
            + Quick View
          </span>
        </div>
      </div>
    </div>
  );
};
