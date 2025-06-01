
import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { uploadedImages } from '@/utils/imageUtils';

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  return (
    <div>
      <HeroSection 
        title="Galerie Photos"
        subtitle="Découvrez les visages du CEERA - Nos membres en action"
        backgroundImage={uploadedImages[0]}
        showLogo={false}
        height="small"
      />

      <section className="section bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="section-title">Nos membres</h2>
          <p className="section-subtitle">
            Découvrez les visages de notre association et les moments partagés entre membres du CEERA.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {uploadedImages.map((image, index) => (
              <div 
                key={index}
                className="group cursor-pointer bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden aspect-square"
                onClick={() => setSelectedImageIndex(index)}
              >
                <img 
                  src={image} 
                  alt={`Membre CEERA ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Image Viewer */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setSelectedImageIndex(null)}
        >
          <button 
            className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex(null);
            }}
          >
            <X className="h-6 w-6" />
          </button>
          
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex(prev => prev === 0 ? uploadedImages.length - 1 : prev! - 1);
            }}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <div className="max-w-5xl max-h-[90vh] w-full flex items-center justify-center">
            <img 
              src={uploadedImages[selectedImageIndex]} 
              alt={`Membre CEERA ${selectedImageIndex + 1}`}
              className="max-h-[80vh] max-w-full object-contain"
            />
          </div>
          
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex(prev => prev === uploadedImages.length - 1 ? 0 : prev! + 1);
            }}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          <div className="absolute bottom-6 left-0 right-0 text-center text-white">
            <p className="font-medium">{`Membre CEERA ${selectedImageIndex + 1}`}</p>
            <p className="text-sm opacity-80 mt-2">{selectedImageIndex + 1} / {uploadedImages.length}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
