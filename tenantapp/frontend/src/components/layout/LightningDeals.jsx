import React from 'react';

const LightningDeals = ({ products = [] }) => {
  if (!products || products.length === 0) return null;

  return (
    <div style={{
      padding: '16px',
      backgroundColor: 'var(--card-bg, #fff)',
      margin: '12px 0',
      borderRadius: '16px',
      border: '1px solid var(--border-color, transparent)',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
    }}>
      {/* Header Section */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '14px' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '1.4rem' }}>⚡</span>
          <h2 style={{ 
            color: '#e11d48', 
            fontSize: '1.1rem', 
            fontWeight: '900', 
            margin: 0,
            letterSpacing: '-0.5px'
          }}>
            LIGHTNING DEALS
          </h2>
        </div>
        
        {/* Timer Box - Darker red in dark mode for better contrast */}
        <div style={{ 
          backgroundColor: 'rgba(225, 29, 72, 0.1)', 
          color: '#e11d48', 
          padding: '4px 10px', 
          borderRadius: '6px', 
          fontSize: '0.8rem', 
          fontWeight: 'bold',
          fontFamily: 'monospace'
        }}>
          02:45:12
        </div>
      </div>
      
      {/* Horizontal Scroll Area */}
      <div style={{ 
        display: 'flex', 
        overflowX: 'auto', 
        gap: '14px', 
        paddingBottom: '8px',
        scrollbarWidth: 'none', // Hide scrollbar for Firefox
        msOverflowStyle: 'none' // Hide scrollbar for IE/Edge
      }}>
        {products.map(product => (
          <div key={product.id} style={{ minWidth: '115px', width: '115px' }}>
            <div style={{ 
              width: '115px', 
              height: '115px', 
              borderRadius: '10px', 
              backgroundColor: 'var(--img-placeholder, #f5f5f5)', 
              overflow: 'hidden',
              border: '1px solid var(--border-color, #f0f0f0)'
            }}>
              <img 
                src={product.imageUrl} 
                alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=Hot+Deal'; }}
              />
            </div>
            
            <div style={{ marginTop: '8px' }}>
              <div style={{ 
                color: '#ff5000', 
                fontWeight: '900', 
                fontSize: '1.1rem',
                display: 'flex',
                alignItems: 'center'
              }}>
                <span style={{fontSize: '0.7rem', marginRight: '2px'}}>GH₵</span>
                {Number(product.price).toFixed(0)}
              </div>
              
              {/* Progress Bar Container */}
              <div style={{ 
                height: '6px', 
                width: '100%', 
                backgroundColor: 'var(--progress-bg, #ffe0d3)', 
                borderRadius: '10px', 
                marginTop: '6px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ 
                  width: '75%', 
                  height: '100%', 
                  background: 'linear-gradient(90deg, #ff8a00, #e11d48)', 
                  borderRadius: '10px' 
                }} />
              </div>
              
              <div style={{ 
                fontSize: '0.65rem', 
                color: 'var(--text-muted, #999)', 
                marginTop: '4px',
                fontWeight: '600'
              }}>
                85% claimed
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LightningDeals;
