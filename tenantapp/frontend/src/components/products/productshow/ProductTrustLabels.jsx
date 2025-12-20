import React from 'react';
import { Truck, CheckCircle } from 'lucide-react';

const ProductTrustLabels = () => {
  return (
    <div style={{ 
      display: 'flex', 
      background: '#064e3b', // Dark green banner
      color: '#fff', 
      fontSize: '0.7rem', 
      padding: '8px 12px',
      gap: '15px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <CheckCircle size={12} /> Free shipping
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', borderLeft: '1px solid rgba(255,255,255,0.3)', paddingLeft: '15px' }}>
        <Truck size={12} /> GH₵11.49 Credit for delay
      </div>
    </div>
  );
};

export default ProductTrustLabels;
