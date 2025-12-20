import React from 'react';

const ProductImageGallery = ({ image }) => {
  return (
    <div style={{ 
      width: '100%', 
      backgroundColor: '#fff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Square Aspect Ratio Wrapper */}
      <div style={{
        width: '100%',
        paddingTop: '100%', // Creates a 1:1 Square
        position: 'relative'
      }}>
        <img 
          src={image} 
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', // Ensures the image fills the square
            display: 'block'
          }} 
          alt="Product Gallery Main" 
        />
        
        {/* Page Indicator Badge */}
        <div style={{ 
          position: 'absolute', 
          bottom: '15px', 
          right: '15px', 
          background: 'rgba(0,0,0,0.4)', 
          color: 'white', 
          padding: '2px 10px', 
          borderRadius: '12px', 
          fontSize: '11px',
          fontWeight: 'bold'
        }}>
          1/1
        </div>
      </div>
    </div>
  );
};

export default ProductImageGallery;
