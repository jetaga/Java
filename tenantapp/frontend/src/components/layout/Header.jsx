import React from 'react';
import { Search, Menu, Moon, Sun, ShoppingBag, ChevronLeft } from 'lucide-react';

const Header = ({ darkMode, setDarkMode, onBack, isProductPage }) => {
  return (
    <header style={{
      backgroundColor: 'var(--bg-color)',
      padding: '0 12px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      /* Absolute for product page so it scrolls away; fixed for home */
      position: isProductPage ? 'absolute' : 'fixed',
      top: 0,
      width: '100%',
      maxWidth: '600px',
      height: '54px',
      zIndex: 1000,
      borderBottom: isProductPage ? 'none' : '1px solid var(--border-color)',
      boxSizing: 'border-box'
    }}>
      {/* Left Section: Back Arrow or Menu + Logo */}
      <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0, gap: '4px' }}>
        {onBack ? (
          <div onClick={onBack} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'var(--text-color)' }}>
            <ChevronLeft size={26} strokeWidth={2.5} />
          </div>
        ) : (
          <Menu size={20} style={{ color: 'var(--text-color)', marginRight: '4px' }} />
        )}
        <div style={{ 
          color: 'var(--text-color)', 
          fontSize: '1.1rem', 
          fontWeight: '900',
          letterSpacing: '-0.5px' 
        }}>
          CHUCKS
        </div>
      </div>

      {/* Middle Section: Stretched Search Bar */}
      <div style={{ flex: 1, height: '34px', display: 'flex', margin: '0 4px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'var(--card-bg)',
          borderRadius: '17px',
          padding: '0 10px',
          border: '1px solid var(--border-color)',
          width: '100%'
        }}>
          <Search size={14} style={{ color: 'var(--text-muted)', marginRight: '6px' }} />
          <input 
            type="text" 
            placeholder="Search" 
            style={{ 
              border: 'none', 
              background: 'transparent', 
              outline: 'none', 
              width: '100%', 
              fontSize: '0.8rem', 
              color: 'var(--text-color)' 
            }} 
          />
        </div>
      </div>

      {/* Right Section: Theme Toggle & Cart */}
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexShrink: 0 }}>
        <div onClick={() => setDarkMode(!darkMode)} style={{ cursor: 'pointer', color: 'var(--text-color)' }}>
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </div>
        <div style={{ position: 'relative', color: 'var(--text-color)' }}>
          <ShoppingBag size={20} />
        </div>
      </div>
    </header>
  );
};

export default Header;
