import React from 'react';
import { Star } from 'lucide-react';

const ProductPriceCard = ({ product }) => {
  const orange = '#ff6000';
  
  return (
    <div style={{ padding: '12px 15px', backgroundColor: 'var(--bg-color)' }}>
      {/* Title */}
      <h1 style={{ 
        fontSize: '0.95rem', 
        fontWeight: '400', 
        color: 'var(--text-color)', 
        lineHeight: '1.4',
        marginBottom: '8px'
      }}>
        {product?.name}
      </h1>

      {/* Sales Info & Ratings */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>100K+ sold</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2px', marginLeft: 'auto' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>4.6</span>
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} fill={i < 4 ? "black" : "none"} stroke="black" />
          ))}
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: '4px' }}>(154)</span>
        </div>
      </div>

      {/* Price Section */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
        <span style={{ fontSize: '0.8rem', color: orange, fontWeight: 'bold' }}>Last day</span>
        <span style={{ fontSize: '1.6rem', fontWeight: '900', color: orange }}>GH₵{product?.price}</span>
        <span style={{ textDecoration: 'line-through', color: '#999', fontSize: '0.85rem' }}>GH₵{(product?.price * 2.5).toFixed(2)}</span>
        <span style={{ color: orange, border: '1px solid '+orange, fontSize: '0.7rem', padding: '0 4px', borderRadius: '2px' }}>-63%</span>
      </div>
    </div>
  );
};

export default ProductPriceCard;
