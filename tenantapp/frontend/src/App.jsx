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
  const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark');
  const [isCategoryView, setIsCategoryView] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeProduct, setActiveProduct] = useState(null);
  const [filterId, setFilterId] = useState(null); 

  const API_BASE = "http://157.250.198.22:9090/api/v1";

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    fetch(`${API_BASE}/categories/tree`).then(r => r.json()).then(setCategories);
  }, []);

  useEffect(() => {
    const url = filterId ? `${API_BASE}/products?categoryId=${filterId}` : `${API_BASE}/products`;
    fetch(url, { headers: { 'X-TenantID': 'tenant-a' } })
      .then(r => r.json())
      .then(data => setProducts(Array.isArray(data) ? data : []));
  }, [filterId]);

  // If filterId is null, show top-level categories in bubbles.
  // If filterId is set, show children of that category in bubbles.
  const bubbleData = filterId 
    ? (categories.find(c => c.id === filterId)?.children || [])
    : categories;

  const handleSelectProduct = (p) => setActiveProduct(p);

  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', color: 'var(--text-color)' }}>
      <Header 
        darkMode={darkMode} setDarkMode={setDarkMode} 
        onBack={activeProduct || isCategoryView || filterId ? () => { 
          setActiveProduct(null); setIsCategoryView(false); setFilterId(null); 
        } : null}
        onMenuClick={() => setIsCategoryView(!isCategoryView)}
        isProductPage={!!activeProduct}
      />
      
      {!activeProduct && <div style={{ height: '54px' }} />}

      {activeProduct ? (
        <ProductDetail product={activeProduct} />
      ) : isCategoryView ? (
        <CategoryPage onProductClick={handleSelectProduct} />
      ) : (
        <div style={{ paddingBottom: '80px', maxWidth: '600px', margin: '0 auto' }}>
          
          <CategorySlider 
            categories={categories} 
            activeFilterId={filterId} 
            onCategoryClick={setFilterId} 
          />
          
          {!filterId && <Hero tenant={tenant} />}
          {!filterId && <LightningDeals products={products} onProductClick={handleSelectProduct} />}

          {/* BUBBLES ARE NOW ALWAYS HERE */}
          <div style={{ padding: '15px 0', background: 'var(--card-bg)', marginBottom: '10px' }}>
             <CategoryBubbles 
                categories={bubbleData} 
                onCategoryClick={(id) => setFilterId(id)} 
             />
          </div>

          <HomeLabel title={filterId ? categories.find(c => c.id === filterId)?.name : "Recommended For You"} />
          
          <main className="product-grid">
            {products.map(p => (
              <div key={p.id} onClick={() => handleSelectProduct(p)}>
                <ProductCard product={p} />
              </div>
            ))}
          </main>
        </div>
      )}

      {!activeProduct && !isCategoryView && <BottomNav />}
    </div>
  );
}
export default App;
