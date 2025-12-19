import React, { useState, useEffect } from 'react';

const TopNav = ({ setTenant, tenant }) => (
  <div className="bg-white sticky top-0 z-50 shadow-sm border-b">
    <div className="px-4 py-3 flex items-center justify-between">
      <h1 className="text-2xl font-black text-blue-600 tracking-tighter">CODEI9</h1>
      <div className="flex gap-4 text-xl text-gray-400">
        <span>👤</span>
        <span className="relative">
          🛒
          <span className="absolute -top-1 -right-2 bg-blue-600 text-white text-[10px] rounded-full px-1">0</span>
        </span>
      </div>
    </div>
    <div className="px-4 pb-2 flex gap-2">
      <button 
        onClick={() => setTenant('tenant-a')} 
        className={`flex-1 py-1 rounded text-xs font-bold transition-colors ${tenant === 'tenant-a' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'}`}
      >
        STORE A
      </button>
      <button 
        onClick={() => setTenant('tenant-b')} 
        className={`flex-1 py-1 rounded text-xs font-bold transition-colors ${tenant === 'tenant-b' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-500'}`}
      >
        STORE B
      </button>
    </div>
  </div>
);

const ProductCard = ({ item }) => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
    <div className="aspect-square bg-gray-50 flex items-center justify-center text-4xl">
      {item.imageUrl ? <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" /> : "📦"}
    </div>
    <div className="p-3">
      <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">{item.serviceType || 'General'}</span>
      <h3 className="font-bold text-gray-800 truncate">{item.name}</h3>
      <p className="text-blue-600 font-black mt-1">${item.price?.toFixed(2)}</p>
      <button className="w-full mt-2 bg-gray-900 text-white py-2 rounded text-xs font-bold">ADD TO CART</button>
    </div>
  </div>
);

export default function App() {
  const [tenant, setTenant] = useState('tenant-a');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://codei9.shop/api/v1/commerce/products', {
          headers: { 'X-Tenant-ID': tenant }
        });
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to load products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [tenant]);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <TopNav tenant={tenant} setTenant={setTenant} />
      
      <div className="m-4 rounded-xl bg-gradient-to-br from-red-500 to-pink-600 p-6 flex justify-between items-center text-white overflow-hidden relative">
        <div className="z-10">
          <h2 className="text-5xl font-black italic leading-none">90%</h2>
          <p className="font-bold text-lg mt-1">Holiday Blowout</p>
          <button className="bg-white text-red-600 px-4 py-1 rounded-full text-[10px] font-black mt-2 uppercase tracking-tighter">
            Shop Now &gt;
          </button>
        </div>
        <div className="text-6xl opacity-50 absolute -right-4 bottom-0 rotate-12">🎁</div>
      </div>

      <div className="px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-black text-gray-800 uppercase tracking-tight">Featured for {tenant.replace('-', ' ')}</h2>
          <span className="text-xs text-blue-600 font-bold underline">See All</span>
        </div>

        {loading ? (
          <div className="text-center py-10 text-gray-400 font-bold animate-pulse">Scanning Global Market...</div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {products.map((p) => <ProductCard key={p.id} item={p} />)}
          </div>
        )}
      </div>
    </div>
  );
}
