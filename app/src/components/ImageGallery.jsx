import React from 'react';

export default function ImageGallery({ images, altText = "Gallery image" }) {
  if (!images || images.length === 0) return null;

  const resolveUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    // Remove leading slash if present
    const cleanPath = url.startsWith('/') ? url.slice(1) : url;
    const baseUrl = import.meta.env.BASE_URL;
    // Ensure base ends with a slash
    const formattedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
    return `${formattedBase}${cleanPath}`;
  };

  return (
    <div className="gallery-container">
      <div className="gallery-scroll">
        {images.map((imgUrl, index) => (
          <div key={index} className="gallery-slide">
            <img 
              src={resolveUrl(imgUrl)} 
              alt={`${altText} ${index + 1}`}
              loading="lazy" 
            />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <div className="gallery-badge">
          <span>{images.length} รูป (ปัดรูปเพื่อดูต่อ ➔)</span>
        </div>
      )}
    </div>
  );
}
