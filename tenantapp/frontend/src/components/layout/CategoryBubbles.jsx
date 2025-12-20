import React from 'react';

const CategoryBubbles = ({ categories, onCategoryClick }) => {
  return (
    <div className="no-scrollbar" style={{ 
      display: 'flex', 
      overflowX: 'auto', 
      gap: '15px', 
      padding: '5px 15px',
      WebkitOverflowScrolling: 'touch' 
    }}>
      {categories.map(cat => (
        <div key={cat.id} onClick={() => onCategoryClick(cat.id)} style={{ textAlign: 'center', flexShrink: 0, cursor: 'pointer' }}>
          <div style={{ 
            width: '62px', height: '62px', borderRadius: '50%', background: 'var(--card-bg)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-color)',
            overflow: 'hidden', marginBottom: '4px'
          }}>
            {cat.imageUrl && cat.imageUrl.length < 5 ? (
              <span style={{ fontSize: '1.4rem' }}>{cat.imageUrl}</span>
            ) : (
              <img src={cat.imageUrl || '📦'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            )}
          </div>
          <div style={{ fontSize: '10px', color: 'var(--text-color)', fontWeight: '500', maxWidth: '65px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {cat.name}
          </div>
        </div>
      ))}
    </div>
  );
};
export default CategoryBubbles;
