import React, { useState } from 'react';
import { ShieldCheck, Truck, Plus, Minus, ShoppingBag } from 'lucide-react';

const ProductDetail = ({ product }) => {
  const [qty, setQty] = useState(1);
  const orange = '#ff6000';
  const imgPath = product?.imageUrl || product?.image_url || product?.image;

  return (
    <div style={{ backgroundColor: 'var(--bg-color)' }}>
      {/* Full-Bleed Image Container */}
      <div style={{ width: '100%', backgroundColor: '#fff' }}>
        <img 
          src={imgPath} 
          style={{ 
            width: '100%', 
            height: 'auto', 
            display: 'block', 
            maxHeight: '500px', 
            objectFit: 'cover' // Changed to cover for that edge-to-edge feel
          }} 
          alt="Product" 
        />
      </div>

      <div style={{ padding: '15px' }}>
        <h1 style={{ fontSize: '1.2rem', fontWeight: '900', color: 'var(--text-color)', marginBottom: '5px' }}>
          {product?.name}
        </h1>
        <div style={{ fontSize: '1.8rem', fontWeight: '900', color: orange }}>GH₵{product?.price}</div>
        
        {/* Lightning Deal Progress */}
        <div style={{ margin: '20px 0', padding: '12px', border: '1px solid orange', borderRadius: '12px', backgroundColor: 'rgba(255,149,0,0.05)' }}>
           <div style={{ display: 'flex', justifyContent: 'space-between', color: 'orange', fontWeight: '900', fontSize: '0.7rem' }}>
             <span>⚡ LIGHTNING DEAL</span>
             <span>ENDS IN 07:49:52</span>
           </div>
           <div style={{ height: '6px', background: '#eee', borderRadius: '3px', marginTop: '8px', overflow: 'hidden' }}>
             <div style={{ width: '60%', height: '100%', background: 'orange' }}></div>
           </div>
        </div>

        {/* Qty and Trust Badges stay the same */}
        <div style={{ display: 'flex', border: '1px solid var(--border-color)', borderRadius: '8px', width: 'fit-content', marginBottom: '25px' }}>
          <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ padding: '10px 15px', border: 'none', background: 'none' }}><Minus size={18} /></button>
          <span style={{ padding: '10px 15px', borderLeft: '1px solid var(--border-color)', borderRight: '1px solid var(--border-color)', fontWeight: '900' }}>{qty}</span>
          <button onClick={() => setQty(qty + 1)} style={{ padding: '10px 15px', border: 'none', background: 'none' }}><Plus size={18} /></button>
        </div>

        <button style={{ 
          width: '100%', backgroundColor: 'var(--text-color)', color: 'var(--bg-color)', 
          height: '56px', borderRadius: '12px', fontWeight: '900', border: 'none',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'
        }}>
          <ShoppingBag size={20} /> ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
