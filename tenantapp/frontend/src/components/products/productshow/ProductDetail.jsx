import React, { useEffect } from 'react';
import ProductImageGallery from './ProductImageGallery';
import ProductTrustLabels from './ProductTrustLabels';
import ProductPriceCard from './ProductPriceCard';
import ProductInfo from './ProductInfo';
import ProductVariationCard from './ProductVariationCard';
import ProductShippingCard from './ProductShippingCard';

const ProductDetail = ({ product }) => {
  useEffect(() => {
    // SMART TRACKING: Tell Python we are viewing this category
    if (product && product.category) {
      fetch('http://157.250.198.22:8000/discovery/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          user_id: 'guest_user', // Change to actual user ID when login is ready
          category: product.category 
        })
      }).catch(err => console.log("Tracking offline"));
    }
  }, [product]);

  if (!product) {
    return (
      <div style={{ padding: '100px 20px', textAlign: 'center', color: 'var(--text-muted)' }}>
        <div style={{ width: '100%', aspectRatio: '1/1', backgroundColor: 'var(--img-placeholder)', marginBottom: '20px', borderRadius: '12px' }}></div>
        Loading product...
      </div>
    );
  }

  const displayImage = product?.imageUrl || product?.image_url || product?.image;

  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '100px' }}>
      <ProductImageGallery image={displayImage} />
      
      <div style={styles.contentOverlay}>
        <ProductTrustLabels />
        <ProductPriceCard product={product} />
        <ProductInfo product={product} hideTitle={true} />
        <ProductVariationCard />
        <ProductShippingCard />
      </div>

      {/* Floating Bottom Action */}
      <div style={styles.bottomNav}>
        <button style={styles.actionButton}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

const styles = {
  contentOverlay: {
    marginTop: '-20px',
    backgroundColor: 'var(--bg-color)',
    borderTopLeftRadius: '24px',
    borderTopRightRadius: '24px',
    position: 'relative',
    padding: '10px 0'
  },
  bottomNav: {
    position: 'fixed',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    maxWidth: '600px',
    backgroundColor: 'var(--bg-color)',
    padding: '12px 15px',
    borderTop: '1px solid var(--border-color)',
    zIndex: 1001,
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center'
  },
  actionButton: {
    width: '100%',
    backgroundColor: '#ff8c00', // Your soft orange
    color: '#fff',
    height: '52px',
    borderRadius: '26px',
    fontWeight: 'bold',
    border: 'none',
    fontSize: '1rem',
    boxShadow: '0 4px 12px rgba(255, 140, 0, 0.3)'
  }
};

export default ProductDetail;
