import React from 'react';

const labels = [
  { icon: '🚚', title: 'Free shipping', subtitle: 'Limited-time offer' },
  { icon: '🛡️', title: 'TradeProtection', subtitle: 'Refund for any issue' },
  { icon: '⚡', title: 'SameDay Delivery', subtitle: 'Available in Accra' },
  { icon: '🏷️', title: 'Direct Wholesale', subtitle: 'Factory prices' },
  { icon: '✅', title: 'Delivery guarantee', subtitle: 'On-time or credit' }
];

const HomeLabel = () => {
  return (
    <div style={{
      padding: '12px 0',
      backgroundColor: 'var(--label-bg, #fffbf5)', // Soft cream color like your image
      margin: '8px 0',
      overflowX: 'auto',
      whiteSpace: 'nowrap',
      display: 'flex',
      gap: '20px',
      paddingLeft: '15px',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
      borderBottom: '1px solid var(--border-color, #eee)'
    }}>
      {labels.map((item, index) => (
        <div key={index} style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '8px',
          minWidth: '160px'
        }}>
          <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ 
              fontSize: '0.85rem', 
              fontWeight: 'bold', 
              color: 'var(--label-green, #2e7d32)' 
            }}>
              {item.title}
            </span>
            <span style={{ 
              fontSize: '0.7rem', 
              color: 'var(--text-muted, #666)' 
            }}>
              {item.subtitle}
            </span>
          </div>
          {index < labels.length - 1 && (
            <div style={{ 
              marginLeft: '15px', 
              width: '1px', 
              height: '24px', 
              backgroundColor: '#ddd', 
              alignSelf: 'center' 
            }} />
          )}
        </div>
      ))}
    </div>
  );
};

export default HomeLabel;
