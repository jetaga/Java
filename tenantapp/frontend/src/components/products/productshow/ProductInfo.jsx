import React from 'react';

const ProductInfo = ({ product, hideTitle }) => {
  return (
    <div style={{ padding: '0 15px' }}>
      {!hideTitle && <h1 style={{ fontSize: '1rem', padding: '15px 0' }}>{product?.name}</h1>}
      
      <div style={{ 
        padding: '10px', 
        border: '1px solid #ff9500', 
        borderRadius: '8px', 
        backgroundColor: 'rgba(255, 149, 0, 0.05)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: '900', color: '#ff9500', marginBottom: '6px' }}>
          <span>⚡ Lightning deal</span>
          <span>Ends in 07:49:52</span>
        </div>
        <div style={{ height: '8px', backgroundColor: '#eee', borderRadius: '4px', overflow: 'hidden' }}>
          <div style={{ width: '75%', height: '100%', backgroundColor: '#ff9500' }}></div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
