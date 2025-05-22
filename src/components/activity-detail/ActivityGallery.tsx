
import { useState } from 'react';
import { ActivityImage } from '@/models/Activity';

interface ActivityGalleryProps {
  images: ActivityImage[];
}

const ActivityGallery = ({ images }: ActivityGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold mb-6">Galerie photos</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div 
            key={index}
            className="cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            onClick={() => setSelectedImageIndex(index)}
          >
            <div className="aspect-square overflow-hidden">
              <img 
                src={image.src} 
                alt={image.caption} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Image modal/lightbox */}
      {selectedImageIndex !== null && images && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
             onClick={() => setSelectedImageIndex(null)}>
          <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              onClick={() => setSelectedImageIndex(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
            
            <img 
              src={images[selectedImageIndex].src} 
              alt={images[selectedImageIndex].caption}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            
            <div className="bg-black/60 backdrop-blur-sm text-white p-4 absolute bottom-0 left-0 right-0 rounded-b-lg">
              <p className="text-center font-medium">{images[selectedImageIndex].caption}</p>
            </div>
            
            <div className="absolute top-[50%] transform -translate-y-1/2 left-4">
              <button 
                className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImageIndex(prev => (prev === 0 ? images.length - 1 : prev! - 1));
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </button>
            </div>
            
            <div className="absolute top-[50%] transform -translate-y-1/2 right-4">
              <button 
                className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImageIndex(prev => (prev === images.length - 1 ? 0 : prev! + 1));
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>
            
            {/* Indicateur de position */}
            <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-1 p-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  className={`h-2 rounded-full transition-all ${
                    idx === selectedImageIndex ? "w-6 bg-white" : "w-2 bg-white/50"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageIndex(idx);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActivityGallery;
