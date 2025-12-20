import React, { useState, useEffect } from 'react';

const CategoryPage = ({ onProductClick }) => {
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://157.250.198.22:9090/api/v1/categories/tree')
      .then(res => res.json())
      .then(data => {
        setCategories(data);
        if (data && data.length > 0) setActiveTab(data[0].id);
      });
  }, []);

  useEffect(() => {
    if (activeTab) {
      fetch(`http://157.250.198.22:9090/api/v1/products?categoryId=${activeTab}`, {
        headers: { 'X-TenantID': 'tenant-a' }
      })
      .then(res => res.json())
      .then(data => setProducts(data));
    }
  }, [activeTab]);

  const selectedCategory = categories.find(c => c.id === activeTab);

  return (
    <div style={{ display: 'flex', height: 'calc(100vh - 54px)', background: 'var(--bg-color)' }}>
      {/* SIDEBAR */}
      <div className="no-scrollbar" style={{ width: '85px', background: 'var(--card-bg)', borderRight: '1px solid var(--border-color)', overflowY: 'auto' }}>
        {categories.map(cat => (
          <div key={cat.id} onClick={() => setActiveTab(cat.id)}
            style={{ padding: '15px 5px', textAlign: 'center', cursor: 'pointer', borderLeft: activeTab === cat.id ? '3px solid #f68b1e' : 'none' }}>
            <div style={{ fontSize: '1.5rem' }}>{cat.imageUrl && cat.imageUrl.length < 5 ? cat.imageUrl : '📦'}</div>
            <div style={{ fontSize: '10px' }}>{cat.name}</div>
          </div>
        ))}
      </div>

      {/* CONTENT */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '10px' }}>
        {selectedCategory?.children?.map(sub => (
          <div key={sub.id} style={{ marginBottom: '20px' }}>
            <h5 style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>{sub.name}</h5>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px' }}>
              {sub.children?.map(child => (
                <div key={child.id} onClick={() => setActiveTab(child.id)} style={{ textAlign: 'center' }}>
                  <div style={{ width: '45px', height: '45px', background: 'var(--card-bg)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', border: '1px solid var(--border-color)' }}>
                    <span>{child.imageUrl && child.imageUrl.length < 5 ? child.imageUrl : '🛍️'}</span>
                  </div>
                  <div style={{ fontSize: '8px', marginTop: '4px' }}>{child.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="product-grid">
          {products.map(p => (
            <div key={p.id} className="product-card" onClick={() => onProductClick(p)}>
              <img src={p.imageUrl} style={{ width: '100%', display: 'block' }} />
              <div style={{ padding: '8px' }}>
                <div style={{ fontSize: '11px' }}>{p.name}</div>
                <div style={{ color: '#f68b1e', fontWeight: 'bold' }}>₦{p.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
