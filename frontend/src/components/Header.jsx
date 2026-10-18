import React, { useState } from 'react';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';

export const Header = ({ currentView, setCurrentView, cartCount, onOpenAuth, currentUser }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);

  const navigateTo = (view) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-[#1f1f1f] text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Left: Mobile hamburger & Logo */}
          <div className="flex items-center gap-4 sm:gap-8">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1 text-white hover:text-zinc-400"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Logo */}
            <button 
              onClick={() => navigateTo('home')} 
              className="text-left group focus:outline-none"
            >
              <span className="text-xl sm:text-2xl font-black tracking-[0.25em] text-white uppercase">
                RAWTIX
              </span>
              <span className="block text-[8px] sm:text-[9px] tracking-[0.35em] text-zinc-400 uppercase -mt-0.5">
                JAKARTA'S FINEST
              </span>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8 text-xs tracking-[0.18em] uppercase font-semibold text-zinc-400 pl-4">
              <button 
                onClick={() => navigateTo('home')}
                className={`hover:text-white transition ${currentView === 'home' ? 'text-white border-b border-white pb-0.5' : ''}`}
              >
                Home
              </button>
              <button 
                onClick={() => navigateTo('catalog')}
                className={`hover:text-white transition ${currentView === 'catalog' ? 'text-white border-b border-white pb-0.5' : ''}`}
              >
                Collection
              </button>
              <button 
                onClick={() => navigateTo('orders')}
                className={`hover:text-white transition ${currentView === 'orders' ? 'text-white border-b border-white pb-0.5' : ''}`}
              >
                Orders
              </button>
            </nav>
          </div>

          {/* Right: Currency flag, Search, User Auth, Cart */}
          <div className="flex items-center space-x-4 sm:space-x-6 text-xs tracking-wider">
            {/* Country / Currency */}
            <div className="hidden sm:flex items-center gap-1.5 text-zinc-400 text-[11px] font-mono pr-2 border-r border-zinc-800">
              <span className="text-sm">🇮🇩</span>
              <span className="text-white font-semibold">IDR</span>
            </div>

            {/* Search */}
            <button
              onClick={() => navigateTo('catalog')}
              className="p-1 text-zinc-300 hover:text-white transition"
              title="Cari Produk"
            >
              <Search className="w-5 h-5 stroke-[1.5]" />
            </button>

            {/* User Account / Login */}
            <button
              onClick={onOpenAuth}
              className="p-1 text-zinc-300 hover:text-white transition flex items-center gap-1.5"
              title={currentUser ? `Akun: ${currentUser.email}` : "Masuk / Daftar"}
            >
              <User className="w-5 h-5 stroke-[1.5]" />
              {currentUser && (
                <span className="hidden lg:inline text-[11px] font-mono text-zinc-300 max-w-[100px] truncate">
                  {currentUser.name || currentUser.email.split('@')[0]}
                </span>
              )}
            </button>

            {/* Shopping Bag */}
            <button
              onClick={() => navigateTo('cart')}
              className="relative p-1 text-zinc-300 hover:text-white transition flex items-center"
              title="Shopping Bag"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-white text-black font-bold text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black border-b border-zinc-800 px-6 py-6 space-y-4">
            <div className="flex flex-col space-y-4 text-xs uppercase tracking-[0.2em] font-semibold text-zinc-300">
              <button
                onClick={() => navigateTo('home')}
                className={`text-left py-1 ${currentView === 'home' ? 'text-white font-bold' : ''}`}
              >
                Home
              </button>
              <button
                onClick={() => navigateTo('catalog')}
                className={`text-left py-1 ${currentView === 'catalog' ? 'text-white font-bold' : ''}`}
              >
                All Collection
              </button>
              <button
                onClick={() => navigateTo('orders')}
                className={`text-left py-1 ${currentView === 'orders' ? 'text-white font-bold' : ''}`}
              >
                My Orders
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth();
                }}
                className="text-left py-1 text-white border-t border-zinc-800 pt-3"
              >
                {currentUser ? `Profile (${currentUser.name || currentUser.email})` : 'Sign In / Register'}
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
