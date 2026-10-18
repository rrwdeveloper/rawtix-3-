import React from 'react';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';

export const Cart = ({ cartItems, onUpdateQuantity, onRemoveItem, onContinueShopping, onCheckoutSuccess }) => {
  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const estimatedShipping = cartItems.length > 0 ? 25000 : 0;
  const grandTotal = subtotal + estimatedShipping;

  if (cartItems.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <div className="inline-flex p-5 rounded-full bg-[#1A1A1A] border border-[#2E2E2E] mb-4 text-[#9A9A9A]">
          <ShoppingBag className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold uppercase tracking-wider text-white">
          Keranjang Belanja Anda Kosong
        </h2>
        <p className="text-xs text-[#9A9A9A] mt-2 max-w-sm mx-auto">
          Belum ada produk yang ditambahkan ke tas Anda. Jelajahi koleksi kami untuk menemukan pakaian favorit Anda.
        </p>
        <button
          onClick={onContinueShopping}
          className="mt-6 px-8 py-3.5 bg-[#D9D9D9] text-[#0D0D0D] font-bold text-xs uppercase tracking-widest hover:bg-white transition"
        >
          Mulai Belanja
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-wider text-[#F2F2F2] mb-8 pb-4 border-b border-[#2E2E2E]">
        Shopping Bag ({cartItems.reduce((acc, curr) => acc + curr.quantity, 0)})
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Items list (FE-40, FE-41) */}
        <div className="lg:col-span-8 space-y-4">
          {cartItems.map((item, idx) => (
            <div
              key={`${item.product.id}-${item.size}-${item.color}`}
              className="flex gap-4 p-4 bg-[#1A1A1A] border border-[#2E2E2E]"
            >
              <div className="w-20 h-28 sm:w-24 sm:h-32 bg-[#121212] flex-shrink-0 overflow-hidden">
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-between flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#9A9A9A]">
                      {item.product.category}
                    </span>
                    <h3 className="text-sm font-semibold text-[#F2F2F2] mt-0.5">
                      {item.product.name}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-[#9A9A9A] font-mono mt-1">
                      <span>Size: <strong className="text-white">{item.size}</strong></span>
                      <span>•</span>
                      <span>Color: <strong className="text-white">{item.color}</strong></span>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.product.id, item.size, item.color)}
                    className="text-[#9A9A9A] hover:text-red-400 p-1 transition"
                    title="Hapus barang"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex justify-between items-end mt-4">
                  {/* Quantity selector */}
                  <div className="flex items-center border border-[#2E2E2E] bg-[#0D0D0D]">
                    <button
                      onClick={() =>
                        onUpdateQuantity(
                          item.product.id,
                          item.size,
                          item.color,
                          item.quantity - 1
                        )
                      }
                      className="px-2.5 py-1 text-xs text-[#9A9A9A] hover:text-white"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="px-3 text-xs font-mono font-bold text-white">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        onUpdateQuantity(
                          item.product.id,
                          item.size,
                          item.color,
                          item.quantity + 1
                        )
                      }
                      className="px-2.5 py-1 text-xs text-[#9A9A9A] hover:text-white"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Price */}
                  <span className="text-sm font-bold text-[#F2F2F2] font-mono">
                    {formatRupiah(item.product.price * item.quantity)}
                  </span>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={onContinueShopping}
            className="text-xs font-mono uppercase tracking-wider text-[#9A9A9A] hover:text-white transition inline-block pt-2 underline underline-offset-4"
          >
            ← Tambah barang lainnya
          </button>
        </div>

        {/* Order Summary (FE-42) */}
        <div className="lg:col-span-4">
          <div className="bg-[#1A1A1A] border border-[#2E2E2E] p-6 space-y-4 sticky top-24">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#F2F2F2] border-b border-[#2E2E2E] pb-3">
              Ringkasan Pesanan
            </h2>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-[#9A9A9A]">
                <span>Subtotal Barang</span>
                <span className="font-mono text-white">{formatRupiah(subtotal)}</span>
              </div>
              <div className="flex justify-between text-[#9A9A9A]">
                <span>Estimasi Biaya Pengiriman</span>
                <span className="font-mono text-white">{formatRupiah(estimatedShipping)}</span>
              </div>
              <div className="flex justify-between text-[#9A9A9A]">
                <span>Pajak (Termasuk)</span>
                <span className="font-mono text-white">Rp 0</span>
              </div>
            </div>

            <div className="border-t border-[#2E2E2E] pt-3 flex justify-between items-center">
              <span className="text-xs uppercase font-bold text-white tracking-wider">
                Total Estimasi
              </span>
              <span className="text-base font-bold font-mono text-white">
                {formatRupiah(grandTotal)}
              </span>
            </div>

            {/* Simulated Checkout Button for frontend testing */}
            <div className="pt-2">
              <button
                onClick={() => onCheckoutSuccess(cartItems, grandTotal)}
                className="w-full py-4 bg-[#D9D9D9] text-[#0D0D0D] font-bold text-xs uppercase tracking-widest hover:bg-white transition flex items-center justify-center gap-2"
              >
                Simulasi Buat Pesanan <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[10px] text-[#9A9A9A] text-center mt-2 leading-relaxed">
                *Sesuai PRD, payment gateway asli berada di luar lingkup. Tombol ini mengonfirmasi pesanan ke mock history.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
