import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import CategorySlider from './components/layout/CategorySlider';
import CategoryBubbles from './components/layout/CategoryBubbles';
import Hero from './components/layout/Hero';
import LightningDeals from './components/layout/LightningDeals';
import ProductCard from './components/products/ProductCard';
import BottomNav from './components/layout/BottomNav';
import './index.css';

import HomeLabel from './components/Label/HomeLabel';


function App() {
  const [tenant, setTenant] = useState('tenant-a');
  const [darkMode, setDarkMode] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCat, setSelectedCat] = useState(null);

  const API_BASE = "http://157.250.198.22:9090/api/v1";

  useEffect(() => {
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    fetch(`${API_BASE}/categories/tree`).then(r => r.json()).then(setCategories).catch(e => console.error(e));
  }, []);

  useEffect(() => {
    let url = `${API_BASE}/products`;
    if (selectedCat) url += `?categoryId=${selectedCat}`;
    fetch(url, { headers: { 'X-Tenant-ID': tenant } })
      .then(r => r.json())
      .then(data => setProducts(Array.isArray(data) ? data : []))
      .catch(e => console.error(e));
  }, [tenant, selectedCat]);

  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '100px' }}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <CategorySlider categories={categories} selectedCat={selectedCat} setSelectedCat={setSelectedCat} />
      
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Hero tenant={tenant} />
        
<HomeLabel />
        {/* NEW: Circular Category Bubbles */}
        <CategoryBubbles categories={categories} />
        
        <LightningDeals products={products} />
        
        <div style={{ padding: '10px 10px 0 10px' }}>
          <h3 style={{ margin: 0, fontSize: '1rem', color: 'var(--text-color)' }}>Recommended for you</h3>
        </div>

        <main style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '8px',
          padding: '8px'
        }}>
          {products.map(p => (
            <ProductCard
              key={p.id}
              product={p}
              layout={tenant === 'tenant-b' ? 'portrait' : 'standard'}
            />
          ))}
        </main>
      </div>
      <BottomNav />
    </div>
  );
}
export default App;
