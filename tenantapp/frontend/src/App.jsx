import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import CategorySlider from './components/layout/CategorySlider';
import CategoryBubbles from './components/layout/CategoryBubbles';
import Hero from './components/layout/Hero';
import LightningDeals from './components/layout/LightningDeals';
import ProductCard from './components/products/ProductCard';
import ProductDetail from './components/products/productshow/ProductDetail';
import CategoryPage from './components/layout/CategoryPage';
import BottomNav from './components/layout/BottomNav';
import HomeLabel from './components/Label/HomeLabel';
import './index.css';

function App() {
  const [tenant] = useState('tenant-a');
  // Initialize theme from localStorage
  const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark');
  const [isCategoryView, setIsCategoryView] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeProduct, setActiveProduct] = useState(null);

  const API_BASE = "http://157.250.198.22:9090/api/v1";

  // Global Theme Effect
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    fetch(`${API_BASE}/categories/tree`).then(r => r.json()).then(setCategories);
    fetch(`${API_BASE}/products`, { headers: { 'X-Tenant-ID': tenant } })
      .then(r => r.json())
      .then(data => setProducts(Array.isArray(data) ? data : []));
  }, [tenant]);

  const handleSelectProduct = (product) => {
    setActiveProduct(product);
    setIsCategoryView(false);
  };

  // Hide BottomNav if Product is open OR Category Menu is open
  const hideBottomNav = !!activeProduct || isCategoryView;

  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', color: 'var(--text-color)' }}>
      <Header 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        onBack={activeProduct || isCategoryView ? () => { setActiveProduct(null); setIsCategoryView(false); } : null}
        onMenuClick={() => setIsCategoryView(!isCategoryView)}
        isProductPage={!!activeProduct}
      />
      
      {/* Spacer for Fixed Header */}
      {!activeProduct && <div style={{ height: '54px' }} />}

      {activeProduct ? (
        <ProductDetail product={activeProduct} />
      ) : isCategoryView ? (
        <CategoryPage 
           darkMode={darkMode} 
           setDarkMode={setDarkMode} 
           onProductClick={handleSelectProduct} 
        />
      ) : (
        <div style={{ paddingBottom: '80px', maxWidth: '600px', margin: '0 auto' }}>
          <CategorySlider categories={categories} />
          <Hero tenant={tenant} />
          <HomeLabel />
          <CategoryBubbles categories={categories} />
          <LightningDeals products={products} onProductClick={handleSelectProduct} />
          <main className="product-grid">
            {products.map(p => (
              <div key={p.id} onClick={() => handleSelectProduct(p)}>
                <ProductCard product={p} />
              </div>
            ))}
          </main>
        </div>
      )}

      {!hideBottomNav && <BottomNav />}
    </div>
  );
}
export default App;
