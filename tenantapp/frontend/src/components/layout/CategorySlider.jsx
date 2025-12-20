import React from 'react';

const CategorySlider = ({ categories, selectedCat, setSelectedCat }) => {
  return (
    <div style={{
      display: 'flex',
      overflowX: 'auto',
      whiteSpace: 'nowrap',
      padding: '12px 15px 8px 15px', // Increased top padding to move items down
      backgroundColor: 'var(--bg-color)',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
      gap: '20px',
      borderBottom: '1px solid var(--border-color)' // Keeping only the main bottom divider
    }}>
      <style>{`div::-webkit-scrollbar { display: none; }`}</style>
      
      <div
        onClick={() => setSelectedCat(null)}
        style={{
          fontWeight: 'bold',
          fontSize: '0.95rem',
          color: !selectedCat ? 'var(--text-color)' : '#888',
          borderBottom: 'none', // REMOVED the white/moving line
          cursor: 'pointer',
          transition: '0.2s'
        }}
      >
        All
      </div>

      {categories.map(cat => (
        <div
          key={cat.id}
          onClick={() => setSelectedCat(cat.id)}
          style={{
            fontWeight: selectedCat === cat.id ? 'bold' : 'normal',
            fontSize: '0.95rem',
            color: selectedCat === cat.id ? 'var(--accent-color, var(--text-color))' : '#888',
            borderBottom: 'none', // REMOVED the white/moving line
            cursor: 'pointer',
            transition: '0.2s'
          }}
        >
          {cat.name}
        </div>
      ))}
    </div>
  );
};

export default CategorySlider;
