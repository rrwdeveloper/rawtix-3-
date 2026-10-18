import React, { useState } from 'react';
import { X, Lock, Mail, User, ArrowRight } from 'lucide-react';

export const AuthModal = ({ isOpen, onClose, onLogin, onRegister, currentUser, onLogout }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Harap isi email dan kata sandi.');
      return;
    }

    if (isRegister) {
      onRegister({ email, password, name });
    } else {
      onLogin({ email, password });
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#0e0e0e] border border-[#262626] max-w-md w-full p-8 relative shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-zinc-400 hover:text-white transition"
        >
          <X className="w-5 h-5" />
        </button>

        {currentUser ? (
          /* Profile & Logout view if already logged in */
          <div className="text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-700 mx-auto flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">Akun Anda</span>
              <h3 className="text-lg font-bold text-white mt-1">{currentUser.name || 'Pelanggan Setia'}</h3>
              <p className="text-xs font-mono text-zinc-400">{currentUser.email}</p>
            </div>
            <div className="border-t border-zinc-800 pt-6">
              <button
                onClick={onLogout}
                className="w-full py-3 bg-zinc-900 border border-zinc-700 text-white font-mono text-xs uppercase tracking-widest hover:bg-zinc-800 transition"
              >
                Keluar (Sign Out)
              </button>
            </div>
          </div>
        ) : (
          /* Sign In / Sign Up Form */
          <div>
            <div className="text-center mb-8">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400">RAWTIX CLIENT</span>
              <h2 className="text-2xl font-bold uppercase tracking-wider text-white mt-1">
                {isRegister ? 'Create Account' : 'Sign In'}
              </h2>
              <p className="text-xs text-zinc-400 mt-2">
                {isRegister 
                  ? 'Daftar untuk memantau pesanan dan mendapatkan rilisan eksklusif.'
                  : 'Masuk dengan email Anda untuk mengelola pesanan.'}
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-950/40 border border-red-800 text-red-300 text-xs font-mono">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {isRegister && (
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                    Nama Lengkap
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Nama Anda"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#161616] border border-zinc-800 pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white transition"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                  Alamat Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    placeholder="email@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#161616] border border-zinc-800 pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                  Kata Sandi
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-[#161616] border border-zinc-800 pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white transition"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-zinc-200 transition flex items-center justify-center gap-2"
                >
                  {isRegister ? 'Register' : 'Sign In'} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>

            <div className="mt-6 text-center text-xs text-zinc-400 border-t border-zinc-800 pt-5">
              {isRegister ? (
                <p>
                  Sudah punya akun?{' '}
                  <button
                    onClick={() => { setIsRegister(false); setError(''); }}
                    className="text-white underline underline-offset-4 font-semibold hover:text-zinc-300 ml-1"
                  >
                    Sign In
                  </button>
                </p>
              ) : (
                <p>
                  Belum punya akun?{' '}
                  <button
                    onClick={() => { setIsRegister(true); setError(''); }}
                    className="text-white underline underline-offset-4 font-semibold hover:text-zinc-300 ml-1"
                  >
                    Daftar di sini
                  </button>
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
