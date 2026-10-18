import React, { useState } from 'react';
import { ArrowLeft, Check, Ruler, ShoppingBag, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

export const ProductDetail = ({ product, onBack, onAddToCart }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(product.colors[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
  };

  const handleAdd = () => {
    if (!selectedSize && !product.outOfStock) {
      alert('Silakan pilih ukuran terlebih dahulu.');
      return;
    }

    onAddToCart({
      product,
      size: selectedSize || 'One Size',
      color: selectedColor,
      quantity
    });

    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Back button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#9A9A9A] hover:text-[#F2F2F2] transition mb-8"
      >
        <ArrowLeft className="w-4 h-4" /> Kembali
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Images Gallery (Left side - FE-30) */}
        <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-16 h-20 md:w-20 md:h-24 flex-shrink-0 bg-[#1A1A1A] border transition overflow-hidden ${
                    selectedImage === idx ? 'border-[#D9D9D9]' : 'border-[#2E2E2E] opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Main Selected Image */}
          <div className="flex-1 bg-[#0f0f0f] border border-[#2E2E2E] overflow-hidden aspect-[4/5] relative flex items-center justify-center p-4">
            <img
              src={product.images[selectedImage] || product.images[0]}
              alt={product.name}
              className="w-full h-full object-contain"
            />
            {product.outOfStock && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <span className="text-sm font-mono uppercase tracking-widest text-white border border-[#9A9A9A] px-4 py-2 bg-black/40">
                  Stok Habis (Sold Out)
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Product Details & Actions (Right side - FE-31, FE-32, FE-33) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#9A9A9A]">
                {product.category}
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide text-[#F2F2F2] mt-1">
                {product.name}
              </h1>
              <p className="text-xl font-bold text-[#F2F2F2] mt-3">
                {formatRupiah(product.price)}
              </p>
            </div>

            <div className="h-px bg-[#2E2E2E]" />

            {/* Color selection */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-[#9A9A9A] block mb-2">
                  Warna: <span className="text-[#F2F2F2] font-sans font-medium">{selectedColor}</span>
                </label>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider border transition ${
                        selectedColor === color
                          ? 'border-[#D9D9D9] bg-[#2E2E2E] text-white font-semibold'
                          : 'border-[#2E2E2E] bg-[#1A1A1A] text-[#9A9A9A] hover:border-[#9A9A9A]'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection (FE-32, FE-34) */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#9A9A9A]">
                    Pilih Ukuran
                  </label>
                  <button
                    onClick={() => setIsSizeGuideOpen(true)}
                    className="inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider text-[#9A9A9A] hover:text-[#F2F2F2] underline underline-offset-4"
                  >
                    <Ruler className="w-3.5 h-3.5" /> Panduan Ukuran
                  </button>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      disabled={product.outOfStock}
                      className={`py-3 text-xs font-mono font-bold uppercase tracking-wider border transition ${
                        selectedSize === size
                          ? 'bg-[#D9D9D9] text-[#0D0D0D] border-[#D9D9D9]'
                          : 'bg-[#1A1A1A] text-[#F2F2F2] border-[#2E2E2E] hover:border-[#9A9A9A]'
                      } ${product.outOfStock ? 'opacity-40 cursor-not-allowed' : ''}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-[#9A9A9A] block mb-2">
                Jumlah
              </label>
              <div className="flex items-center border border-[#2E2E2E] bg-[#1A1A1A] w-32">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-xs text-[#9A9A9A] hover:text-white transition"
                  disabled={quantity <= 1 || product.outOfStock}
                >
                  -
                </button>
                <span className="flex-1 text-center text-xs font-mono font-bold text-white">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-xs text-[#9A9A9A] hover:text-white transition"
                  disabled={product.outOfStock}
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Bag Button (FE-33: disabled until size selected) */}
            <div className="pt-2">
              <button
                onClick={handleAdd}
                disabled={product.outOfStock || (!selectedSize && product.sizes && product.sizes.length > 0)}
                className={`w-full py-4 text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition ${
                  product.outOfStock
                    ? 'bg-[#2E2E2E] text-[#9A9A9A] cursor-not-allowed'
                    : !selectedSize && product.sizes && product.sizes.length > 0
                    ? 'bg-[#1A1A1A] border border-[#2E2E2E] text-[#9A9A9A] cursor-not-allowed'
                    : 'bg-[#D9D9D9] text-[#0D0D0D] hover:bg-white active:scale-[0.99]'
                }`}
              >
                {addedAnimation ? (
                  <>
                    <Check className="w-4 h-4" /> Berhasil Ditambahkan ke Bag!
                  </>
                ) : product.outOfStock ? (
                  'Stok Sedang Habis'
                ) : !selectedSize && product.sizes && product.sizes.length > 0 ? (
                  'Pilih Ukuran Terlebih Dahulu'
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" /> Tambah ke Bag
                  </>
                )}
              </button>
            </div>

            {/* Description & Details */}
            <div className="pt-4 border-t border-[#2E2E2E] space-y-4">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#9A9A9A] mb-1">
                  Deskripsi Produk
                </h4>
                <p className="text-xs sm:text-sm text-[#9A9A9A] leading-relaxed">
                  {product.description}
                </p>
              </div>

              {product.details && (
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#9A9A9A] mb-2">
                    Spesifikasi & Material
                  </h4>
                  <ul className="text-xs text-[#9A9A9A] space-y-1 list-disc list-inside">
                    {product.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#2E2E2E] text-[11px] text-[#9A9A9A]">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#D9D9D9]" />
                <span>Pengiriman 1-3 hari kerja</span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-[#D9D9D9]" />
                <span>Penukaran ukuran 7 hari</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Size Guide Modal (FE-34) */}
      {isSizeGuideOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-[#1A1A1A] border border-[#2E2E2E] max-w-lg w-full p-6 space-y-4">
            <div className="flex justify-between items-center border-b border-[#2E2E2E] pb-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Panduan Ukuran (Size Chart - cm)
              </h3>
              <button
                onClick={() => setIsSizeGuideOpen(false)}
                className="text-[#9A9A9A] hover:text-white text-xs font-mono"
              >
                Tutup [X]
              </button>
            </div>
            
            <p className="text-xs text-[#9A9A9A]">
              Toleransi ukuran 1-2 cm karena proses penjahitan manual.
            </p>

            <table className="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr className="border-b border-[#2E2E2E] text-[#9A9A9A]">
                  <th className="py-2">Ukuran</th>
                  <th className="py-2">Panjang</th>
                  <th className="py-2">Lebar Dada</th>
                  <th className="py-2">Lengan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2E2E2E] text-[#F2F2F2]">
                <tr>
                  <td className="py-2 font-bold">S</td>
                  <td className="py-2">68</td>
                  <td className="py-2">54</td>
                  <td className="py-2">22</td>
                </tr>
                <tr>
                  <td className="py-2 font-bold">M</td>
                  <td className="py-2">71</td>
                  <td className="py-2">57</td>
                  <td className="py-2">23</td>
                </tr>
                <tr>
                  <td className="py-2 font-bold">L</td>
                  <td className="py-2">74</td>
                  <td className="py-2">60</td>
                  <td className="py-2">24</td>
                </tr>
                <tr>
                  <td className="py-2 font-bold">XL</td>
                  <td className="py-2">77</td>
                  <td className="py-2">63</td>
                  <td className="py-2">25</td>
                </tr>
              </tbody>
            </table>

            <button
              onClick={() => setIsSizeGuideOpen(false)}
              className="w-full py-2.5 bg-[#D9D9D9] text-[#0D0D0D] font-bold text-xs uppercase tracking-wider hover:bg-white transition"
            >
              Mengerti
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
