import React from 'react';

const Header = ({ darkMode, setDarkMode }) => {
  // We lock everything to exactly 36px to match Temu's compact look
  const rowHeight = '36px'; 

  return (
    <header style={{
      backgroundColor: 'var(--bg-color)',
      padding: '8px 12px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      borderBottom: '1px solid var(--border-color)',
      boxSizing: 'border-box'
    }}>
      {/* 1. Logo - Locked Height */}
      <div style={{ 
        color: '#ff5000', 
        fontSize: '1.1rem', 
        fontWeight: '900', 
        height: rowHeight,
        display: 'flex',
        alignItems: 'center',
        flexShrink: 0,
        lineHeight: 1
      }}>
        CHUCKS
      </div>

      {/* 2. Search Bar - Locked Height */}
      <div style={{ 
        flex: 1, 
        height: rowHeight,
        display: 'flex' 
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'var(--card-bg)',
          borderRadius: '18px', // Half of 36px for perfect pill shape
          padding: '0 12px',
          border: '1px solid var(--border-color)',
          width: '100%',
          height: '100%',
          boxSizing: 'border-box'
        }}>
          <span style={{ fontSize: '0.9rem', opacity: 0.5, marginRight: '6px' }}>🔍</span>
          <input 
            type="text" 
            placeholder="Search Chucks" 
            style={{
              border: 'none',
              background: 'transparent',
              outline: 'none',
              width: '100%',
              fontSize: '0.85rem',
              color: 'var(--text-color)',
              height: '20px', // Smaller than container to avoid stretching
              lineHeight: '20px'
            }}
          />
        </div>
      </div>

      {/* 3. Icons - Locked Height & Width for symmetry */}
      <div style={{ 
        display: 'flex', 
        gap: '4px', 
        alignItems: 'center',
        height: rowHeight,
        flexShrink: 0 
      }}>
        {/* Menu Icon */}
        <div style={{ width: '32px', height: rowHeight, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', cursor: 'pointer' }}>
          ≡
        </div>
        
        {/* Dark Mode Toggle */}
        <div 
          onClick={() => setDarkMode(!darkMode)}
          style={{ width: '32px', height: rowHeight, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', cursor: 'pointer' }}
        >
          {darkMode ? '☀️' : '🌙'}
        </div>

        {/* Cart Icon */}
        <div style={{ width: '32px', height: rowHeight, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', cursor: 'pointer', position: 'relative' }}>
          🛒
          <span style={{
            position: 'absolute',
            top: '2px',
            right: '0px',
            backgroundColor: '#ff5000',
            color: 'white',
            fontSize: '0.6rem',
            borderRadius: '50%',
            padding: '1px 4px',
            fontWeight: 'bold',
            lineHeight: 1
          }}>0</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
