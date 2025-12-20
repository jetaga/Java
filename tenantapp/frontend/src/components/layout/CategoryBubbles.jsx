import React from 'react';

const CategoryBubbles = ({ categories }) => {
  return (
    <div style={{
      display: 'flex',
      overflowX: 'auto',
      padding: '10px 5px',
      gap: '12px',
      backgroundColor: 'var(--bg-color)',
      scrollbarWidth: 'none'
    }}>
      <style>{`div::-webkit-scrollbar { display: none; }`}</style>
      {categories.map(cat => (
        <div key={cat.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '60px' }}>
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            backgroundColor: 'var(--card-bg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.8rem',
            border: '1px solid var(--border-color)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
          }}>
            {cat.name.includes('Elec') ? '💻' : '👟'}
          </div>
          <span style={{ fontSize: '0.65rem', marginTop: '6px', fontWeight: '500', color: 'var(--text-color)' }}>
            {cat.name}
          </span>
        </div>
      ))}
    </div>
  );
};
export default CategoryBubbles;
