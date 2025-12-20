import React from 'react';
import ProductImageGallery from './ProductImageGallery';
import ProductTrustLabels from './ProductTrustLabels';
import ProductPriceCard from './ProductPriceCard';
import ProductInfo from './ProductInfo';
import ProductVariationCard from './ProductVariationCard';
import ProductShippingCard from './ProductShippingCard';

const ProductDetail = ({ product }) => {
  // If product is null (still fetching), show a skeleton loader
  if (!product) {
    return (
      <div style={{ padding: '100px 20px', textAlign: 'center', color: '#999' }}>
        <div style={{ width: '100%', aspectRatio: '1/1', backgroundColor: '#eee', marginBottom: '20px' }}></div>
        Loading product...
      </div>
    );
  }

  const displayImage = product?.imageUrl || product?.image_url || product?.image;

  return (
    <div style={{ backgroundColor: 'var(--bg-color)', paddingBottom: '100px' }}>
      <ProductImageGallery image={displayImage} />
      <ProductTrustLabels />
      <ProductPriceCard product={product} />
      <ProductInfo product={product} hideTitle={true} />
      <ProductVariationCard />
      <ProductShippingCard />
      
      <div style={{ 
        position: 'fixed', 
        bottom: 0, 
        left: 0, 
        width: '100%', 
        maxWidth: '600px',
        backgroundColor: 'var(--bg-color)', 
        padding: '12px 15px', 
        borderTop: '1px solid var(--border-color)',
        zIndex: 1001,
        boxSizing: 'border-box'
      }}>
        <button style={{ 
          width: '100%', backgroundColor: '#ff6000', color: '#fff', 
          height: '48px', borderRadius: '24px', fontWeight: 'bold', border: 'none',
          fontSize: '1rem'
        }}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
