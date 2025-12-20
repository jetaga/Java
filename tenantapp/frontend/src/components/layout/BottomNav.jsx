import React, { useState } from 'react';

const BottomNav = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const navItems = [
    { label: 'Home', icon: '🏠', activeIcon: '🏘️' },
    { label: 'Tubeshop', icon: '▶️', activeIcon: '🎬' },
    { label: 'Categories', icon: '▤', activeIcon: '▦' }, // Side menu/Grid style icon
    { label: 'Search', icon: '🔍', activeIcon: '🔎' },
    { label: 'Me', icon: '👤', activeIcon: '🆔' }
  ];

  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      height: 'var(--bottom-nav-height, 60px)',
      backgroundColor: 'var(--card-bg, #ffffff)',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderTop: '1px solid var(--border-color, #eee)',
      paddingBottom: 'env(safe-area-inset-bottom)',
      zIndex: 1000,
      transition: 'background-color 0.3s ease'
    }}>
      {navItems.map((item) => {
        const isActive = activeTab === item.label;
        return (
          <div 
            key={item.label} 
            onClick={() => setActiveTab(item.label)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2px',
              cursor: 'pointer',
              flex: 1,
              transition: '0.2s'
            }}
          >
            <span style={{ 
              fontSize: '1.4rem',
              fontWeight: '900',
              color: isActive ? 'var(--accent-color, #ff5000)' : 'var(--text-color)',
              transform: isActive ? 'scale(1.1)' : 'scale(1)',
              transition: 'all 0.2s ease'
            }}>
              {isActive ? item.activeIcon : item.icon}
            </span>
            <span style={{ 
              fontSize: '0.65rem', 
              fontWeight: isActive ? '800' : '500', 
              color: isActive ? 'var(--accent-color, #ff5000)' : 'var(--text-muted, #666)',
              transition: 'color 0.2s ease'
            }}>
              {item.label}
            </span>
          </div>
        );
      })}
    </nav>
  );
};

export default BottomNav;
