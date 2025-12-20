import React from 'react';
import { Search, Menu, Moon, Sun, ShoppingBag, ChevronLeft } from 'lucide-react';

const Header = ({ darkMode, setDarkMode, onBack }) => {
  const rowHeight = '36px';

  return (
    <header style={{
      backgroundColor: 'var(--bg-color)',
      padding: '8px 12px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      position: 'fixed',
      top: 0,
      width: '100%',
      maxWidth: '600px',
      zIndex: 1000,
      borderBottom: '1px solid var(--border-color)',
      boxSizing: 'border-box',
      transition: 'background-color 0.3s ease'
    }}>
      {/* Back Arrow + Logo Container */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
        {onBack && (
          <div 
            onClick={onBack}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'var(--text-color)' }}
          >
            <ChevronLeft size={24} strokeWidth={2.5} />
          </div>
        )}
        <div style={{
          color: 'var(--text-color)', 
          fontSize: '1.1rem',
          fontWeight: '900',
          height: rowHeight,
          display: 'flex',
          alignItems: 'center',
          letterSpacing: '-0.5px'
        }}>
          CHUCKS
        </div>
      </div>

      {/* Search Bar */}
      <div style={{ flex: 1, height: rowHeight, display: 'flex' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'var(--card-bg)',
          borderRadius: '18px',
          padding: '0 12px',
          border: '1px solid var(--border-color)',
          width: '100%',
          height: '100%',
          boxSizing: 'border-box'
        }}>
          <Search size={16} style={{ color: 'var(--text-muted)', marginRight: '6px' }} />
          <input
            type="text"
            placeholder="Search Chucks"
            style={{
              border: 'none',
              background: 'transparent',
              outline: 'none',
              width: '100%',
              fontSize: '0.85rem',
              color: 'var(--text-color)'
            }}
          />
        </div>
      </div>

      {/* Icons */}
      <div style={{ display: 'flex', gap: '4px', alignItems: 'center', height: rowHeight, flexShrink: 0 }}>
        <div 
          onClick={() => setDarkMode(!darkMode)}
          style={{ width: '32px', height: rowHeight, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-color)' }}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </div>

        <div style={{ width: '32px', height: rowHeight, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', cursor: 'pointer', color: 'var(--text-color)' }}>
          <ShoppingBag size={20} />
          <span style={{
            position: 'absolute',
            top: '4px',
            right: '0px',
            backgroundColor: 'var(--text-color)',
            color: 'var(--bg-color)',
            fontSize: '0.6rem',
            borderRadius: '50%',
            width: '14px',
            height: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            border: '1px solid var(--border-color)'
          }}>0</span>
        </div>
        <div style={{ width: '32px', height: rowHeight, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-color)' }}>
          <Menu size={22} />
        </div>
      </div>
    </header>
  );
};

export default Header;
