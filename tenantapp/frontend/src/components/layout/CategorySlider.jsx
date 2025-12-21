import React from 'react';
const CategorySlider = ({ categories, onCategoryClick, activeFilterId }) => {
  return (
    <div className="no-scrollbar" style={{
      display: 'flex', overflowX: 'auto', padding: '12px 10px', gap: '20px',
      backgroundColor: 'var(--bg-color)', borderBottom: '1px solid var(--border-color)'
    }}>
      <div onClick={() => onCategoryClick(null)} style={{
        cursor: 'pointer', fontSize: '14px', whiteSpace: 'nowrap',
        fontWeight: !activeFilterId ? 'bold' : '500',
        color: !activeFilterId ? 'var(--text-color)' : 'var(--text-muted)',
        borderBottom: !activeFilterId ? '2px solid var(--text-color)' : '2px solid transparent'
      }}>All</div>
      {categories.map(cat => (
        <div key={cat.id} onClick={() => onCategoryClick(cat.id)} style={{
          cursor: 'pointer', fontSize: '14px', whiteSpace: 'nowrap',
          fontWeight: activeFilterId === cat.id ? 'bold' : '500',
          color: activeFilterId === cat.id ? 'var(--text-color)' : 'var(--text-muted)',
          borderBottom: activeFilterId === cat.id ? '2px solid var(--text-color)' : '2px solid transparent'
        }}>{cat.name}</div>
      ))}
    </div>
  );
};
export default CategorySlider;
