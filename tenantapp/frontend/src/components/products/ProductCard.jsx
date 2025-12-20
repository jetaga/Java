import React from 'react';

const ProductCard = ({ product, layout = 'standard' }) => {
  const isPortrait = layout === 'portrait';
  
  return (
    <div style={{
      backgroundColor: 'var(--card-bg)',
      borderRadius: '12px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid var(--border-color)',
      position: 'relative',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      height: '100%'
    }}>
      {/* FIXED: Using img tag instead of raw text */}
      <div style={{
        width: '100%',
        aspectRatio: isPortrait ? '3/4' : '1/1',
        backgroundColor: '#f0f0f0',
        overflow: 'hidden'
      }}>
        <img 
          src={product.imageUrl} 
          alt={product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: "cover",
            display: 'block'
          }}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400';
          }}
        />
      </div>

      <div style={{ padding: '10px' }}>
        <div style={{
          fontSize: '0.85rem',
          color: 'var(--text-color)',
          height: '38px',
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          lineHeight: '1.3',
          fontWeight: '500'
        }}>
          {product.name}
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', marginTop: '6px', gap: '5px' }}>
          <span style={{ color: '#ff5000', fontWeight: '900', fontSize: '1.2rem' }}>
            GH₵{Number(product.price).toFixed(2)}
          </span>
          <span style={{ fontSize: '0.75rem', color: '#999', textDecoration: 'line-through' }}>
            GH₵{(Number(product.price) * 1.4).toFixed(2)}
          </span>
        </div>

        <div style={{ fontSize: '0.7rem', color: '#ff5000', fontWeight: '600', marginTop: '4px' }}>
           🔥 {Math.floor(Math.random() * 500) + 100}+ sold
        </div>
        
        <div style={{ fontSize: '0.65rem', color: '#28a745', marginTop: '2px' }}>
          Free shipping
        </div>

        <button style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          background: 'white',
          border: '1px solid #eee',
          borderRadius: '50%',
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          🛒
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
