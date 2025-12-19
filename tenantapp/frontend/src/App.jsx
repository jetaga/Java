import React, { useState } from 'react';

// --- SUB-COMPONENTS ---

const TopNav = () => (
  <div className="bg-white px-4 py-2 flex items-center gap-3 sticky top-0 z-50">
    <h1 className="text-2xl font-black text-orange-500 tracking-tighter">TEMU</h1>
    <div className="flex-1 bg-gray-100 rounded-full flex items-center px-4 py-2 gap-2 border border-transparent focus-within:border-orange-500 transition-all">
      <span className="text-gray-400 font-bold">🔍</span>
      <input 
        type="text" 
        placeholder="Search Temu" 
        className="bg-transparent outline-none text-sm w-full" 
      />
    </div>
    <div className="flex gap-4 text-xl">
      <button className="hover:opacity-70">👤</button>
      <button className="hover:opacity-70 relative">
        🛒
        <span className="absolute -top-1 -right-2 bg-orange-600 text-white text-[10px] rounded-full px-1">2</span>
      </button>
    </div>
  </div>
);

const CategorySlider = ({ categories }) => (
  <div className="bg-white border-b px-4 flex gap-6 overflow-x-auto no-scrollbar py-3 text-sm font-medium text-gray-600 whitespace-nowrap">
    {categories.map((cat, index) => (
      <span key={index} className={index === 0 ? "text-black border-b-2 border-black pb-1" : "hover:text-black cursor-pointer"}>
        {cat}
      </span>
    ))}
  </div>
);

const HeroBanner = () => (
  <div className="p-4">
    <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-xl p-6 text-white flex justify-between items-center shadow-lg">
      <div className="max-w-[60%]">
        <div className="bg-yellow-400 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded inline-block mb-2">LIMITED TIME</div>
        <h2 className="text-3xl font-black italic leading-tight">90% OFF</h2>
        <p className="text-sm font-bold opacity-90 uppercase tracking-wide">Holiday Blowout</p>
        <button className="bg-white text-red-600 px-5 py-1.5 rounded-full font-extrabold mt-3 text-xs shadow-md active:scale-95 transition-transform">
          SHOP NOW
        </button>
      </div>
      <div className="text-6xl drop-shadow-lg">🎁</div>
    </div>
  </div>
);

const TrustBar = () => (
  <div className="flex justify-around bg-white border-y border-gray-100 py-2.5 text-[9px] font-bold text-gray-500 uppercase tracking-tighter">
    <div className="flex items-center gap-1"><span className="text-green-500 text-xs">✓</span> Free shipping</div>
    <div className="flex items-center gap-1"><span className="text-green-500 text-xs">↺</span> Price adjustment</div>
    <div className="flex items-center gap-1"><span className="text-green-500 text-xs">🛡️</span> Safe payments</div>
  </div>
);

const ProductCard = ({ item }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
    <div className="relative aspect-square">
      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 bg-orange-100 text-orange-700 text-[10px] font-black px-2 py-1 rounded-tr-xl">
        -{item.discount}%
      </div>
    </div>
    <div className="p-3">
      <div className="flex items-center gap-1.5 mb-1">
        <span className="text-orange-600 font-bold text-lg leading-none">GH₵{item.price}</span>
        <span className="text-gray-400 line-through text-[10px] font-medium tracking-tight">{item.oldPrice}</span>
      </div>
      <div className="bg-orange-600 text-white text-[9px] font-bold inline-block px-1.5 py-0.5 rounded italic">
        Lightning Deal
      </div>
      <p className="text-xs text-gray-500 mt-2 line-clamp-1">{item.title}</p>
    </div>
  </div>
);

// --- MAIN PAGE LAYOUT ---

export default function App() {
  const categories = ["All", "Crafts", "Bags", "Beauty", "Office", "Automotive", "Home"];
  const products = [
    { title: "Portable Blender", price: "178.34", oldPrice: "220.46", discount: "19", image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400" },
    { title: "Turbo Jet Fan", price: "210.84", oldPrice: "595.92", discount: "64", image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400" },
    { title: "Smart Watch", price: "145.00", oldPrice: "300.00", discount: "50", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400" },
    { title: "Wireless Buds", price: "85.20", oldPrice: "150.00", discount: "43", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-md mx-auto shadow-2xl border-x border-gray-200">
      <TopNav />
      <CategorySlider categories={categories} />
      
      <main className="flex-1 overflow-y-auto">
        <HeroBanner />
        <TrustBar />
        
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-black text-gray-800 flex items-center gap-2 italic">
              ⚡ Lightning Deals
            </h3>
            <span className="text-xs text-gray-400 font-bold">Ends in 04:12:15</span>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {products.map((p, idx) => (
              <ProductCard key={idx} item={p} />
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Tab Bar (Temu Style) */}
      <div className="bg-white border-t px-6 py-3 flex justify-between items-center text-gray-400 sticky bottom-0 z-50">
        <div className="text-orange-600 flex flex-col items-center gap-0.5"><span className="text-lg">🏠</span><span className="text-[10px] font-bold">Home</span></div>
        <div className="flex flex-col items-center gap-0.5 hover:text-gray-600 cursor-pointer"><span className="text-lg">📂</span><span className="text-[10px] font-bold">Category</span></div>
        <div className="flex flex-col items-center gap-0.5 hover:text-gray-600 cursor-pointer"><span className="text-lg">🎁</span><span className="text-[10px] font-bold">Offers</span></div>
        <div className="flex flex-col items-center gap-0.5 hover:text-gray-600 cursor-pointer"><span className="text-lg">👤</span><span className="text-[10px] font-bold">You</span></div>
      </div>
    </div>
  );
}
