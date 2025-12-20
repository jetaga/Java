import React, { useEffect } from 'react';
import { Search, Menu, Moon, Sun, ShoppingBag, ChevronLeft } from 'lucide-react';

const Header = ({ darkMode, setDarkMode, onBack, isProductPage, onMenuClick }) => {
  
  // Sync Dark Mode with Global CSS Variables
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

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
          <div onClick={onBack} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'var(--text-color)' }}>
            <ChevronLeft size={26} strokeWidth={2.5} />
          </div>
        )}
        <div style={{ color: 'var(--text-color)', fontSize: '1.1rem', fontWeight: '900', letterSpacing: '-0.5px' }}>
          CHUCKS
        </div>
      </div>

      {/* Center: Wide Search Bar */}
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
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexShrink: 0 }}>
        <div onClick={() => setDarkMode(!darkMode)} style={{ cursor: 'pointer', color: 'var(--text-color)', display: 'flex' }}>
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </div>
        <div onClick={onMenuClick} style={{ cursor: 'pointer', color: 'var(--text-color)', display: 'flex' }}>
          <Menu size={22} />
        </div>
        <div style={{ position: 'relative', display: 'flex' }}>
          <ShoppingBag size={21} color="var(--text-color)" />
          <span style={{ 
            position: 'absolute', top: -4, right: -6, background: '#f68b1e', 
            color: 'white', fontSize: '10px', borderRadius: '50%', 
            padding: '1px 5px', fontWeight: 'bold' 
          }}>0</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
