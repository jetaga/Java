import React from 'react';
import { Search, Menu, Moon, Sun, ShoppingBag, ChevronLeft } from 'lucide-react';

const Header = ({ darkMode, setDarkMode, onBack, isProductPage, onMenuClick, cartCount = 0 }) => {
  
  // 1. INSTANT THEME TOGGLE: Updates DOM immediately before React re-renders
  const handleToggleTheme = (e) => {
    e.preventDefault();
    const newTheme = !darkMode;
    document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    setDarkMode(newTheme);
  };

  // 2. INSTANT BACK: Prevents event bubbling and triggers callback immediately
  const handleInstantBack = (e) => {
    e.stopPropagation();
    if (onBack) onBack();
  };

  const softOrange = '#FF9500';

  return (
    <header style={{
      backgroundColor: 'var(--bg-color)',
      padding: '0 12px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      position: isProductPage ? 'relative' : 'fixed',
      top: 0,
      width: '100%',
      maxWidth: '600px',
      height: '54px',
      zIndex: 1000,
      borderBottom: '1px solid var(--border-color)',
      boxSizing: 'border-box'
    }}>
      {/* Left: Logo & Back Arrow */}
      <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0, gap: '4px' }}>
        {onBack && (
          <div 
            onClick={handleInstantBack} 
            style={{ 
              cursor: 'pointer', 
              display: 'flex', 
              alignItems: 'center', 
              color: 'var(--text-color)',
              padding: '10px 5px', // Larger hit box for faster interaction
              marginLeft: '-5px'
            }}
          >
            <ChevronLeft size={28} strokeWidth={3} />
          </div>
        )}
        <div 
          onClick={handleInstantBack}
          style={{ 
            color: softOrange, 
            fontSize: '1.2rem', 
            fontWeight: '900', 
            letterSpacing: '-0.5px',
            cursor: 'pointer',
            userSelect: 'none'
          }}
        >
          CHUCKS
        </div>
      </div>

      {/* Center: Search Bar */}
      <div style={{ flex: 1, height: '34px', display: 'flex', margin: '0 4px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', backgroundColor: 'var(--card-bg)',
          borderRadius: '17px', padding: '0 10px', border: '1px solid var(--border-color)', width: '100%'
        }}>
          <Search size={14} style={{ color: '#888', marginRight: '6px' }} />
          <input
            type="text"
            placeholder="Search products..."
            style={{
              border: 'none', background: 'transparent', outline: 'none',
              width: '100%', fontSize: '0.85rem', color: 'var(--text-color)'
            }}
          />
        </div>
      </div>

      {/* Right: Icons */}
      <div style={{ display: 'flex', gap: '14px', alignItems: 'center', flexShrink: 0 }}>
        <div 
          onClick={handleToggleTheme} 
          style={{ cursor: 'pointer', color: 'var(--text-color)', padding: '5px' }}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </div>
        
        <div onClick={onMenuClick} style={{ cursor: 'pointer', color: 'var(--text-color)', padding: '5px' }}>
          <Menu size={22} />
        </div>

        <div style={{ position: 'relative', cursor: 'pointer', padding: '5px' }}>
          <ShoppingBag size={21} color="var(--text-color)" />
          {cartCount > 0 && (
            <span style={{
              position: 'absolute', top: 0, right: 0, background: '#f68b1e',
              color: 'white', fontSize: '10px', borderRadius: '50%',
              padding: '1px 5px', fontWeight: 'bold'
            }}>
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
