
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getActivityById } from '@/services/supabase';
import HeroSection from '@/components/HeroSection';
import { Calendar, Clock, MapPin, Users, FileText, ChevronLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Skeleton } from '@/components/ui/skeleton';
import { galleryPhotos } from '@/utils/imageUtils';

const ActivityDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const { toast } = useToast();
  
  const { 
    data: activity, 
    isLoading, 
    error 
  } = useQuery({
    queryKey: ['activity', id],
    queryFn: () => getActivityById(id || ''),
    enabled: !!id
  });
  
  useEffect(() => {
    if (error) {
      toast({
        title: "Erreur",
        description: "Impossible de charger les détails de cette activité. Veuillez réessayer plus tard.",
        variant: "destructive"
      });
      console.error("Error loading activity:", error);
    }
  }, [error, toast]);

  // Enrichissement des images de l'activité avec photos téléchargées
  useEffect(() => {
    if (activity && (!activity.images || activity.images.length === 0)) {
      const mockImages = galleryPhotos.map((img, index) => ({
        src: img,
        caption: `Photo de l'événement ${activity.title} - ${index + 1}`
      }));
      activity.images = mockImages;
    }
  }, [activity]);

  if (isLoading) {
    return <ActivityDetailSkeleton />;
  }
  
  if (!activity) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Activité non trouvée</h2>
        <p>L'activité que vous recherchez n'existe pas ou a été supprimée.</p>
        <Link
          to="/activities"
          className="inline-flex items-center mt-6 px-6 py-3 bg-ceera-orange text-white rounded-md hover:bg-ceera-brown transition-colors"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Retour aux activités
        </Link>
      </div>
    );
  }
  
  return (
    <div>
      <HeroSection
        title={activity.title}
        subtitle={`${activity.category === "evenements" ? "Événement" : 
                   activity.category === "comptes-rendus" ? "Compte-rendu" : "Actualité"} - ${activity.date}`}
        backgroundImage={galleryPhotos[0]} // Utilisation d'une photo téléchargée comme image de couverture
        showLogo={true}
        height="medium"
      />
      
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <Link
                to="/activities"
                className="inline-flex items-center text-ceera-orange hover:text-ceera-brown transition-colors"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Retour aux activités
              </Link>
            </div>
            
            <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between bg-secondary/10 p-5 rounded-lg">
              <div className="space-y-2">
                <div className="flex items-center">
                  <Calendar size={18} className="mr-2 text-ceera-orange" />
                  <span className="font-medium">{activity.date}</span>
                </div>
                
                {activity.time && (
                  <div className="flex items-center">
                    <Clock size={18} className="mr-2 text-ceera-orange" />
                    <span>{activity.time}</span>
                  </div>
                )}
                
                <div className="flex items-center">
                  <MapPin size={18} className="mr-2 text-ceera-orange" />
                  <span>{activity.location}</span>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0">
                <div className="flex items-center">
                  <Users size={18} className="mr-2 text-ceera-orange" />
                  <span>{activity.author}</span>
                </div>
                
                <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-ceera-orange/10 text-ceera-orange">
                  <FileText size={14} className="mr-1" />
                  {activity.category === "evenements" ? "Événement" : 
                   activity.category === "comptes-rendus" ? "Compte-rendu" : "Actualité"}
                </div>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none mb-12"
                 dangerouslySetInnerHTML={{ __html: activity.content }} 
            />
            
            {activity.images && activity.images.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">Galerie photos</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {activity.images.map((image, index) => (
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
              </div>
            )}
            
            {/* Image modal/lightbox - Amélioré pour une meilleure expérience */}
            {selectedImageIndex !== null && activity.images && (
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
                    src={activity.images[selectedImageIndex].src} 
                    alt={activity.images[selectedImageIndex].caption}
                    className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
                  />
                  
                  <div className="bg-black/60 backdrop-blur-sm text-white p-4 absolute bottom-0 left-0 right-0 rounded-b-lg">
                    <p className="text-center font-medium">{activity.images[selectedImageIndex].caption}</p>
                  </div>
                  
                  <div className="absolute top-[50%] transform -translate-y-1/2 left-4">
                    <button 
                      className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImageIndex(prev => (prev === 0 ? activity.images.length - 1 : prev! - 1));
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
                        setSelectedImageIndex(prev => (prev === activity.images.length - 1 ? 0 : prev! + 1));
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </button>
                  </div>
                  
                  {/* Indicateur de position */}
                  <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-1 p-2">
                    {activity.images.map((_, idx) => (
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
        </div>
      </section>
    </div>
  );
};

const ActivityDetailSkeleton = () => {
  return (
    <div>
      <div className="bg-gray-200 h-[400px] w-full flex items-center justify-center">
        <Skeleton className="h-20 w-1/2" />
      </div>
      
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Skeleton className="h-6 w-40 mb-8" />
            
            <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between bg-secondary/10 p-5 rounded-lg">
              <div className="space-y-2">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-5 w-40" />
              </div>
              <div className="mt-4 md:mt-0">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-6 w-24 mt-2" />
              </div>
            </div>
            
            <div className="space-y-4 mb-12">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-5/6" />
            </div>
            
            <div className="mb-12">
              <Skeleton className="h-8 w-48 mb-6" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <Skeleton key={i} className="aspect-square" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActivityDetail;
