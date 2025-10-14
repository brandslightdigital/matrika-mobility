import React, { useState, useEffect } from 'react';
import { optimizeImage, getResponsiveSrcSet } from '../utils/imageOptimizer';

const OptimizedImage = ({ 
  src, 
  alt, 
  width = 800, 
  height, 
  className = '', 
  placeholder = '/placeholder-image.jpg',
  ...props 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const optimizedSrc = optimizeImage(src, width);
  const srcSet = getResponsiveSrcSet(src);

  return (
    <div className={`image-container ${className}`} style={{ position: 'relative' }}>
      {/* Placeholder - jab tak image load nahi hoti */}
      {!imageLoaded && !imageError && (
        <div 
          style={{
            width: '100%',
            height: height || '200px',
            background: '#f3f4f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px'
          }}
        >
          <span style={{ color: '#6b7280', fontSize: '14px' }}>Loading...</span>
        </div>
      )}
      
      {/* Actual Image */}
      <img
        src={imageError ? placeholder : optimizedSrc}
        srcSet={srcSet}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
        style={{
          display: imageLoaded ? 'block' : 'none',
          width: '100%',
          height: height || 'auto',
          objectFit: 'cover',
          transition: 'opacity 0.3s ease-in-out'
        }}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;