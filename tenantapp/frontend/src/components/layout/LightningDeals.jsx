import React from 'react';
import { Zap } from 'lucide-react';

const LightningDeals = ({ products, onProductClick }) => {
  const accentColor = '#FF9500';
  
  return (
    <div style={{ padding: '15px 0', backgroundColor: 'var(--bg-color)' }}>
      {/* Header Section */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '15px',
        padding: '0 15px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Zap size={20} fill={accentColor} stroke={accentColor} />
          <h2 style={{
            fontSize: '1.1rem',
            fontWeight: '900',
            textTransform: 'uppercase',
            color: accentColor,
            margin: 0
          }}>
            Lightning Deals
          </h2>
        </div>
        <div style={{
          backgroundColor: accentColor,
          color: '#fff',
          padding: '4px 10px',
          borderRadius: '6px',
          fontSize: '0.8rem',
          fontWeight: '800'
        }}>
          00:24:59
        </div>
      </div>

      {/* Product Horizontal Scroll */}
      <div className="no-scrollbar" style={{
        display: 'flex',
        overflowX: 'auto',
        gap: '12px',
        padding: '0 15px'
      }}>
        {products?.map((product) => {
          // Calculate discount safely
          const discount = product.oldPrice > product.price
            ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
            : 0;
            
          // Handle various image property names from backend
          const imgSource = product.imageUrl || product.image_url || product.image || 'https://via.placeholder.com/140';

          return (
            <div 
              key={product.id} 
              onClick={() => onProductClick && onProductClick(product)}
              style={{
                flex: '0 0 140px',
                backgroundColor: 'var(--card-bg)',
                borderRadius: '12px',
                border: '1px solid var(--border-color)',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
            >
              {/* Image Container */}
              <div style={{ position: 'relative', height: '140px', backgroundColor: '#f0f0f0' }}>
                <img
                  src={imgSource}
                  alt={product.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/140'; }}
                />
                {discount > 0 && (
                  <div style={{
                    position: 'absolute',
                    top: '8px',
                    left: '8px',
                    backgroundColor: 'var(--text-color)',
                    color: 'var(--bg-color)',
                    fontSize: '0.65rem',
                    fontWeight: '900',
                    padding: '2px 6px',
                    borderRadius: '4px'
                  }}>
                    -{discount}%
                  </div>
                )}
              </div>

              {/* Content Container */}
              <div style={{ padding: '10px' }}>
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: 'var(--text-color)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  marginBottom: '4px'
                }}>
                  {product.name}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontWeight: '900', fontSize: '1rem', color: 'var(--text-color)' }}>
                    ${product.price}
                  </span>
                  {product.oldPrice > product.price && (
                    <span style={{
                      fontSize: '0.7rem',
                      textDecoration: 'line-through',
                      color: 'var(--text-muted)'
                    }}>
                      ${product.oldPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LightningDeals;
