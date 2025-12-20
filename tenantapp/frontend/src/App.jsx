import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import CategorySlider from './components/layout/CategorySlider';
import CategoryBubbles from './components/layout/CategoryBubbles';
import Hero from './components/layout/Hero';
import LightningDeals from './components/layout/LightningDeals';
import ProductCard from './components/products/ProductCard';
import ProductDetail from './components/products/productshow/ProductDetail';
import BottomNav from './components/layout/BottomNav';
import HomeLabel from './components/Label/HomeLabel';
import './index.css';

function App() {
  const [tenant] = useState('tenant-a');
  const [darkMode, setDarkMode] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCat, setSelectedCat] = useState(null);
  const [activeProduct, setActiveProduct] = useState(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const API_BASE = "http://157.250.198.22:9090/api/v1";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeProduct]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const prodId = params.get('productId');
    
    if (prodId) {
      fetch(`${API_BASE}/products/${prodId}`, { headers: { 'X-Tenant-ID': tenant } })
        .then(r => r.json())
        .then(data => {
          setActiveProduct(data);
          setIsInitialLoad(false);
        })
        .catch(() => setIsInitialLoad(false));
    } else {
      setIsInitialLoad(false);
    }
  }, []);

  const handleSelectProduct = (product) => {
    setActiveProduct(product);
    const url = product ? `?productId=${product.id}` : window.location.pathname;
    window.history.pushState({}, '', url);
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    fetch(`${API_BASE}/categories/tree`).then(r => r.json()).then(setCategories);
    fetch(`${API_BASE}/products`, { headers: { 'X-Tenant-ID': tenant } })
      .then(r => r.json())
      .then(data => setProducts(Array.isArray(data) ? data : []));
  }, [tenant]);

  if (isInitialLoad) return <div style={{ background: 'var(--bg-color)', height: '100vh' }} />;

  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', position: 'relative' }}>
      <Header 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        onBack={activeProduct ? () => handleSelectProduct(null) : null}
        isProductPage={!!activeProduct}
      />
      
      {/* Spacer only exists on Home page now */}
      {!activeProduct && <div style={{ height: '54px' }} />}

      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {activeProduct ? (
          <ProductDetail product={activeProduct} />
        ) : (
          <div style={{ paddingBottom: '80px' }}>
            <CategorySlider categories={categories} selectedCat={selectedCat} setSelectedCat={setSelectedCat} />
            <Hero tenant={tenant} />
            <HomeLabel />
            <CategoryBubbles categories={categories} />
            <LightningDeals products={products} onProductClick={handleSelectProduct} />
            <main style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', padding: '8px' }}>
              {products.map(p => (
                <div key={p.id} onClick={() => handleSelectProduct(p)}><ProductCard product={p} /></div>
              ))}
            </main>
          </div>
        )}
      </div>

      {/* Hide BottomNav on product page */}
      {!activeProduct && <BottomNav />}
    </div>
  );
}
export default App;
