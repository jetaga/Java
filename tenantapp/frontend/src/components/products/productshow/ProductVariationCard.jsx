import React, { useState } from 'react';

const ProductVariationCard = () => {
  const [selectedSize, setSelectedSize] = useState('M');
  const sizes = ['S', 'M', 'L', 'XL', '2XL'];

  return (
    <div style={{ padding: '15px', borderTop: '8px solid #f5f5f5' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
        <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Color: Black, Model: A6S</span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Qty</span>
        <div style={{ 
          display: 'flex', 
          border: '1px solid var(--border-color)', 
          borderRadius: '4px',
          alignItems: 'center'
        }}>
          <button style={{ padding: '4px 12px', border: 'none', background: 'none' }}>-</button>
          <span style={{ padding: '4px 12px', borderLeft: '1px solid var(--border-color)', borderRight: '1px solid var(--border-color)', fontWeight: 'bold' }}>1</span>
          <button style={{ padding: '4px 12px', border: 'none', background: 'none' }}>+</button>
        </div>
      </div>

      <div style={{ marginTop: '15px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {sizes.map(size => (
          <div 
            key={size}
            onClick={() => setSelectedSize(size)}
            style={{
              padding: '6px 16px',
              borderRadius: '4px',
              fontSize: '0.8rem',
              border: selectedSize === size ? '1px solid #ff6000' : '1px solid var(--border-color)',
              color: selectedSize === size ? '#ff6000' : 'var(--text-color)',
              backgroundColor: selectedSize === size ? 'rgba(255,96,0,0.05)' : 'transparent',
              cursor: 'pointer'
            }}
          >
            {size}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductVariationCard;
