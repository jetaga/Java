import React from 'react';
import { Truck, ShieldCheck, ChevronRight } from 'lucide-react';

const ProductShippingCard = () => {
  return (
    <div style={{ borderTop: '8px solid #f5f5f5' }}>
      {/* Shipping Section */}
      <div style={{ padding: '15px', borderBottom: '1px solid #eee' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#22c55e', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Truck size={18} /> Free shipping on all orders
          </div>
          <ChevronRight size={16} color="#ccc" />
        </div>
        <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '10px' }}>Delivery: Jan 3-21</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '0.75rem', color: '#999' }}>Courier company:</span>
          <span style={{ fontWeight: 'bold', color: '#e11d48', fontSize: '0.7rem' }}>SKYNET</span>
          <span style={{ fontWeight: 'bold', color: '#f59e0b', fontSize: '0.7rem' }}>Speedaf</span>
        </div>
      </div>

      {/* Trust Section */}
      <div style={{ padding: '15px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#22c55e', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={18} /> Why choose CHUCKS?
          </div>
          <ChevronRight size={16} color="#ccc" />
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <div style={{ backgroundColor: '#f9fafb', padding: '10px', borderRadius: '4px' }}>
            <div style={{ color: '#22c55e', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '4px' }}>Security & Privacy</div>
            <div style={{ fontSize: '0.7rem', color: '#666' }}>✓ Safe payments</div>
            <div style={{ fontSize: '0.7rem', color: '#666' }}>✓ Secure privacy</div>
          </div>
          <div style={{ backgroundColor: '#f9fafb', padding: '10px', borderRadius: '4px' }}>
            <div style={{ color: '#22c55e', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '4px' }}>Delivery guarantee</div>
            <div style={{ fontSize: '0.7rem', color: '#666' }}>✓ GH₵11.49 Credit for delay</div>
            <div style={{ fontSize: '0.7rem', color: '#666' }}>✓ 30-day no update refund</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShippingCard;
