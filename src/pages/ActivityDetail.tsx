
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getActivityById } from '@/services/supabase';
import HeroSection from '@/components/HeroSection';
import { useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { createMockActivityImages, getRandomImage, uploadedImages } from '@/utils/imageUtils';
import ActivityDetailSkeleton from '@/components/activity-detail/ActivityDetailSkeleton';
import ActivityNotFound from '@/components/activity-detail/ActivityNotFound';
import ActivityContent from '@/components/activity-detail/ActivityContent';

const ActivityDetail = () => {
  const { id } = useParams<{ id: string }>();
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
      // Utilisez la fonction helper pour créer des images factices
      activity.images = createMockActivityImages(activity.id);
    }
  }, [activity]);

  if (isLoading) {
    return <ActivityDetailSkeleton />;
  }
  
  if (!activity) {
    return <ActivityNotFound />;
  }
  
  // Si l'image de couverture vient d'une source externe, la remplacer par une image téléchargée
  const coverImage = activity.coverImage && activity.coverImage.startsWith("https://") ? 
    getRandomImage(uploadedImages, parseInt(activity.id, 36) % uploadedImages.length) : activity.coverImage;
  
  return (
    <div>
      <HeroSection
        title={activity.title}
        subtitle={`${activity.category === "evenements" ? "Événement" : 
                 activity.category === "comptes-rendus" ? "Compte-rendu" : "Actualité"} - ${activity.date}`}
        backgroundImage={getRandomImage(uploadedImages, parseInt(activity.id, 36) % uploadedImages.length)}
        showLogo={true}
        height="medium"
      />
      
      <section className="section bg-white">
        <div className="container mx-auto">
          <ActivityContent activity={activity} />
        </div>
      </section>
    </div>
  );
};

export default ActivityDetail;
