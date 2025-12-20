import React from 'react';

const Hero = ({ tenant }) => {
  return (
    <div style={{
      margin: '12px',
      borderRadius: '12px',
      background: 'linear-gradient(90deg, #e60000 0%, #ff5000 100%)',
      padding: '20px',
      color: 'white',
      position: 'relative',
      minHeight: '120px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <div style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>90% OFF</div>
      <h2 style={{ margin: '5px 0', fontSize: '1.5rem', fontWeight: '900' }}>Holiday Blowout</h2>
      <button style={{ 
        width: 'fit-content', 
        padding: '6px 15px', 
        borderRadius: '20px', 
        border: 'none', 
        backgroundColor: 'white', 
        color: '#e60000',
        fontWeight: 'bold',
        fontSize: '0.8rem',
        marginTop: '10px'
      }}>Shop Now &gt;</button>
      
      {/* Decorative Image Placeholder */}
      <div style={{ position: 'absolute', right: '15px', bottom: '15px', fontSize: '4rem', opacity: 0.8 }}>
        🎄
      </div>
    </div>
  );
};

export default Hero;
