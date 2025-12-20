import React from 'react';
import { ShoppingCart, Plus } from 'lucide-react';

const ProductCard = ({ product }) => {
  // Support all Java field name variants
  const imgPath = product.imageUrl || product.image_url || product.image;

  return (
    <div style={{
      backgroundColor: 'var(--bg-color)',
      borderRadius: '12px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid var(--border-color)',
      position: 'relative',
      width: '100%',
      marginBottom: '10px'
    }}>
      {/* Fixed Ratio Image Container */}
      <div style={{
        width: '100%',
        aspectRatio: '1 / 1.1', 
        backgroundColor: '#f8f8f8',
        overflow: 'hidden'
      }}>
        <img 
          src={imgPath} 
          alt={product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x500?text=No+Image';
          }}
        />
      </div>

      <div style={{ padding: '10px' }}>
        <div style={{
          fontSize: '0.8rem',
          color: 'var(--text-color)',
          height: '34px',
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          lineHeight: '1.2',
          fontWeight: '500'
        }}>
          {product.name}
        </div>

        <div style={{ marginTop: '6px' }}>
          <span style={{ color: 'var(--text-color)', fontWeight: '900', fontSize: '1.1rem' }}>
            GH₵{Number(product.price).toFixed(2)}
          </span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px' }}>
          <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
             {product.id + 10} sold
          </span>

          <div style={{ display: 'flex', alignItems: 'center', color: 'var(--text-color)' }}>
            <div style={{ position: 'relative' }}>
                <ShoppingCart size={16} />
                <Plus size={8} style={{ position: 'absolute', top: '-4px', right: '-4px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
