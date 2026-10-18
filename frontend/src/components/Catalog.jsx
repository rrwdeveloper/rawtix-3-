import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { mockCategories } from '../data/mockData';

export const Catalog = ({ products, onSelectProduct, initialCategory = 'all' }) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('newest');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAndSortedProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesCategory =
          selectedCategory === 'all' || product.category === selectedCategory;
        const matchesSearch =
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        return 0; // Default/newest
      });
  }, [products, selectedCategory, sortBy, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Title & Filter Header */}
      <div className="border-b border-[#2E2E2E] pb-6 mb-8">
        <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-wider text-[#F2F2F2]">
          All Collection
        </h1>
        <p className="text-xs text-[#9A9A9A] mt-1 font-mono">
          Menampilkan {filteredAndSortedProducts.length} item pakaian esensial
        </p>

        {/* Search & Sort Controls */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
          {/* Search Bar (FE-24) */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9A9A9A]" />
            <input
              type="text"
              placeholder="Cari produk (contoh: hoodie, tee)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1A1A1A] border border-[#2E2E2E] pl-9 pr-4 py-2.5 text-xs text-[#F2F2F2] placeholder-[#9A9A9A] focus:outline-none focus:border-[#D9D9D9] transition font-sans"
            />
          </div>

          {/* Sort selector (FE-23) */}
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-[#9A9A9A]" />
            <span className="text-xs text-[#9A9A9A] font-mono">Urutkan:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#1A1A1A] border border-[#2E2E2E] text-xs text-[#F2F2F2] py-2 px-3 focus:outline-none focus:border-[#D9D9D9]"
            >
              <option value="newest">Terbaru</option>
              <option value="price-low">Harga: Rendah ke Tinggi</option>
              <option value="price-high">Harga: Tinggi ke Rendah</option>
            </select>
          </div>
        </div>

        {/* Category Pills (FE-22) */}
        <div className="flex items-center gap-2 overflow-x-auto pt-4 pb-1 no-scrollbar">
          {mockCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-1.5 text-xs font-mono uppercase tracking-wider whitespace-nowrap transition border ${
                selectedCategory === cat.id
                  ? 'bg-[#D9D9D9] text-[#0D0D0D] border-[#D9D9D9] font-bold'
                  : 'bg-[#1A1A1A] text-[#9A9A9A] border-[#2E2E2E] hover:text-[#F2F2F2] hover:border-[#9A9A9A]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      {filteredAndSortedProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-[#1A1A1A] border border-[#2E2E2E] p-8">
          <p className="text-sm text-[#9A9A9A] uppercase tracking-wider font-mono">
            Tidak ada produk yang cocok dengan pencarian atau filter Anda.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="mt-4 px-6 py-2 bg-[#D9D9D9] text-[#0D0D0D] text-xs font-bold uppercase tracking-wider hover:bg-white transition"
          >
            Reset Filter
          </button>
        </div>
      )}
    </div>
  );
};
