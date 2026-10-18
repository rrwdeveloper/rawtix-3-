import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Catalog } from './components/Catalog';
import { ProductDetail } from './components/ProductDetail';
import { Cart } from './components/Cart';
import { Orders } from './components/Orders';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { mockProducts, mockInitialOrders } from './data/mockData';

export function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [catalogCategory, setCatalogCategory] = useState('all');
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  // Current User Session (Mock / Ready for Supabase Auth)
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('rawtix_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Persistent Cart in localStorage
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('rawtix_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Orders State (loaded with mock history)
  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('rawtix_orders');
      return saved ? JSON.parse(saved) : mockInitialOrders;
    } catch {
      return mockInitialOrders;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('rawtix_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed saving cart', e);
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem('rawtix_orders', JSON.stringify(orders));
    } catch (e) {
      console.error('Failed saving orders', e);
    }
  }, [orders]);

  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem('rawtix_user', JSON.stringify(currentUser));
      } else {
        localStorage.removeItem('rawtix_user');
      }
    } catch (e) {
      console.error('Failed saving user', e);
    }
  }, [currentUser]);

  // Auth Handlers (Ready to hook to Supabase)
  const handleLogin = ({ email, password }) => {
    const user = { email, name: email.split('@')[0] };
    setCurrentUser(user);
    setIsAuthOpen(false);
  };

  const handleRegister = ({ email, password, name }) => {
    const user = { email, name: name || email.split('@')[0] };
    setCurrentUser(user);
    setIsAuthOpen(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsAuthOpen(false);
  };

  // Cart Handlers
  const handleAddToCart = ({ product, size, color, quantity }) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(
        item => item.product.id === product.id && item.size === size && item.color === color
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prev, { product, size, color, quantity }];
      }
    });
  };

  const handleUpdateQuantity = (productId, size, color, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId, size, color);
      return;
    }
    setCartItems(prev =>
      prev.map(item => {
        if (item.product.id === productId && item.size === size && item.color === color) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const handleRemoveItem = (productId, size, color) => {
    setCartItems(prev =>
      prev.filter(
        item => !(item.product.id === productId && item.size === size && item.color === color)
      )
    );
  };

  // Simulated Checkout to generate an order
  const handleCheckoutSuccess = (items, total) => {
    const newOrder = {
      id: `ORD-${Math.floor(10000 + Math.random() * 90000)}`,
      date: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }),
      status: 'Menunggu Pengiriman',
      trackingNumber: `IDN${Date.now().toString().slice(-8)}`,
      courier: 'J&T Regular',
      total,
      items: items.map(item => ({
        id: item.product.id,
        name: item.product.name,
        size: item.size,
        color: item.color,
        quantity: item.quantity,
        price: item.product.price,
        image: item.product.images[0]
      })),
      shippingAddress: {
        name: currentUser?.name || 'RAWTIX Customer',
        phone: '+62 812-9876-5432',
        address: 'Jl. Senopati No. 45, Kebayoran Baru, Jakarta Selatan, 12190'
      }
    };

    setOrders(prev => [newOrder, ...prev]);
    setCartItems([]);
    setCurrentView('orders');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setCurrentView('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToCategory = (category) => {
    setCatalogCategory(category);
    setCurrentView('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cartTotalCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col selection:bg-white selection:text-black">
      {/* Header Sticky Navigation */}
      <Header
        currentView={currentView}
        setCurrentView={setCurrentView}
        cartCount={cartTotalCount}
        onOpenAuth={() => setIsAuthOpen(true)}
        currentUser={currentUser}
      />

      {/* Main Content Areas */}
      <main className="flex-grow">
        {currentView === 'home' && (
          <Home
            products={mockProducts}
            onSelectProduct={handleSelectProduct}
            onNavigateToCategory={handleNavigateToCategory}
          />
        )}

        {currentView === 'catalog' && (
          <Catalog
            products={mockProducts}
            onSelectProduct={handleSelectProduct}
            initialCategory={catalogCategory}
          />
        )}

        {currentView === 'product' && selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            onBack={() => setCurrentView('catalog')}
            onAddToCart={handleAddToCart}
          />
        )}

        {currentView === 'cart' && (
          <Cart
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onContinueShopping={() => setCurrentView('catalog')}
            onCheckoutSuccess={handleCheckoutSuccess}
          />
        )}

        {currentView === 'orders' && (
          <Orders orders={orders} />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigateToCategory={handleNavigateToCategory} />

      {/* Auth Modal (Login / Register) */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLogin={handleLogin}
        onRegister={handleRegister}
        currentUser={currentUser}
        onLogout={handleLogout}
      />
    </div>
  );
}

export default App;
