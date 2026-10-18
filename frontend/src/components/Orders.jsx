import React, { useState } from 'react';
import { Package, Truck, CheckCircle2, ChevronRight, MapPin } from 'lucide-react';

export const Orders = ({ orders }) => {
  const [selectedOrderId, setSelectedOrderId] = useState(orders[0]?.id || null);

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
  };

  const selectedOrder = orders.find(o => o.id === selectedOrderId);

  if (orders.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <div className="inline-flex p-5 rounded-full bg-[#1A1A1A] border border-[#2E2E2E] mb-4 text-[#9A9A9A]">
          <Package className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold uppercase tracking-wider text-white">
          Belum Ada Pesanan
        </h2>
        <p className="text-xs text-[#9A9A9A] mt-2 max-w-sm mx-auto">
          Anda belum pernah melakukan pesanan. Semua pesanan Anda yang telah diproses akan muncul di halaman ini.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-wider text-[#F2F2F2] mb-8 pb-4 border-b border-[#2E2E2E]">
        Riwayat & Status Pesanan
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Order List (FE-50) */}
        <div className="lg:col-span-5 space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-[#9A9A9A] block mb-2">
            Pilih Pesanan ({orders.length})
          </span>

          {orders.map((order) => {
            const isSelected = order.id === selectedOrderId;
            return (
              <div
                key={order.id}
                onClick={() => setSelectedOrderId(order.id)}
                className={`p-4 border cursor-pointer transition flex items-center justify-between ${
                  isSelected
                    ? 'bg-[#1A1A1A] border-[#D9D9D9]'
                    : 'bg-[#121212] border-[#2E2E2E] hover:border-[#9A9A9A]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-white">
                      {order.id}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-none border ${
                        order.status === 'Selesai'
                          ? 'bg-emerald-950/40 text-emerald-400 border-emerald-800'
                          : 'bg-zinc-800 text-zinc-300 border-zinc-600'
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#9A9A9A] mt-1 font-mono">
                    {order.date} • {order.items.length} Barang
                  </p>
                  <p className="text-xs font-bold font-mono text-white mt-1">
                    {formatRupiah(order.total)}
                  </p>
                </div>

                <ChevronRight className={`w-4 h-4 transition ${isSelected ? 'text-white translate-x-1' : 'text-[#9A9A9A]'}`} />
              </div>
            );
          })}
        </div>

        {/* Selected Order Details (FE-51) */}
        <div className="lg:col-span-7">
          {selectedOrder ? (
            <div className="bg-[#1A1A1A] border border-[#2E2E2E] p-6 space-y-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#2E2E2E] gap-2">
                <div>
                  <span className="text-xs font-mono uppercase text-[#9A9A9A]">Detail Pesanan</span>
                  <h2 className="text-lg font-bold font-mono text-white mt-0.5">
                    {selectedOrder.id}
                  </h2>
                </div>
                <div className="text-right sm:text-left">
                  <span className="text-xs font-mono text-[#9A9A9A] block">Tanggal Pembelian</span>
                  <span className="text-xs font-medium text-white">{selectedOrder.date}</span>
                </div>
              </div>

              {/* Status Tracker */}
              <div className="p-4 bg-[#121212] border border-[#2E2E2E] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {selectedOrder.status === 'Selesai' ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <Truck className="w-5 h-5 text-white" />
                    )}
                    <span className="text-xs font-bold uppercase tracking-wider text-white">
                      Status: {selectedOrder.status}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#9A9A9A]">
                    Kurir: {selectedOrder.courier}
                  </span>
                </div>

                {selectedOrder.trackingNumber && (
                  <div className="text-xs font-mono bg-[#0D0D0D] p-2 border border-[#2E2E2E] flex justify-between">
                    <span className="text-[#9A9A9A]">Nomor Resi:</span>
                    <span className="text-white font-bold">{selectedOrder.trackingNumber}</span>
                  </div>
                )}
              </div>

              {/* Items Purchased */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#9A9A9A]">
                  Daftar Barang
                </h3>
                <div className="divide-y divide-[#2E2E2E]">
                  {selectedOrder.items.map((item, i) => (
                    <div key={i} className="py-3 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-16 object-cover bg-[#0D0D0D] border border-[#2E2E2E]"
                        />
                        <div>
                          <h4 className="text-xs font-medium text-white">{item.name}</h4>
                          <span className="text-[11px] text-[#9A9A9A] font-mono">
                            Ukuran: {item.size} • Warna: {item.color} • Qty: {item.quantity}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-semibold text-white">
                        {formatRupiah(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping Address */}
              {selectedOrder.shippingAddress && (
                <div className="pt-4 border-t border-[#2E2E2E]">
                  <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#9A9A9A] mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Alamat Pengiriman</span>
                  </div>
                  <div className="text-xs text-[#9A9A9A] bg-[#121212] p-3 border border-[#2E2E2E]">
                    <p className="font-semibold text-white">{selectedOrder.shippingAddress.name}</p>
                    <p>{selectedOrder.shippingAddress.phone}</p>
                    <p className="mt-1">{selectedOrder.shippingAddress.address}</p>
                  </div>
                </div>
              )}

              {/* Total breakdown */}
              <div className="pt-4 border-t border-[#2E2E2E] flex justify-between items-center">
                <span className="text-xs font-mono uppercase text-[#9A9A9A]">Total Pembayaran</span>
                <span className="text-base font-bold font-mono text-white">
                  {formatRupiah(selectedOrder.total)}
                </span>
              </div>
            </div>
          ) : (
            <div className="bg-[#1A1A1A] border border-[#2E2E2E] p-12 text-center text-xs text-[#9A9A9A] font-mono">
              Pilih salah satu pesanan untuk melihat detail lengkap.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
