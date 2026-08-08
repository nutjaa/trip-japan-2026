import React from 'react';

export default function ImageGallery({ images, altText = "Gallery image" }) {
  if (!images || images.length === 0) return null;

  return (
    <div className="gallery-container">
      <div className="gallery-scroll">
        {images.map((imgUrl, index) => (
          <div key={index} className="gallery-slide">
            <img 
              src={imgUrl} 
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
