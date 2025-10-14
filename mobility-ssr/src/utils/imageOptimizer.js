// Image optimization utility
export const optimizeImage = (src, width = 800) => {
  // Agar aapke paas CDN hai toh uska URL use karo
  // Ya phir simple compression parameters add karo
  if (src.startsWith('http')) {
    return `${src}?w=${width}&q=80&auto=format&fit=crop`;
  }
  return src;
};

// WebP format support check
export const supportsWebP = () => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.src = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
    webP.onload = webP.onerror = function () {
      resolve(webP.height === 2);
    };
  });
};

// Responsive image URLs generate karega
export const getResponsiveSrcSet = (src, sizes = [400, 800, 1200]) => {
  return sizes.map(size => `${optimizeImage(src, size)} ${size}w`).join(', ');
};