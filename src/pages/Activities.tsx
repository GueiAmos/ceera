import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Users, ArrowRight } from 'lucide-react';
import { Activity } from '@/models/Activity';
import { getActivities } from '@/services/supabase';
import { useQuery } from '@tanstack/react-query';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/components/ui/use-toast';
import { getRandomImage, uploadedImages } from '@/utils/imageUtils';

const Activities = () => {
  const [activeTab, setActiveTab] = useState("toutes");
  const { toast } = useToast();
  
  const { data: activities, isLoading, error } = useQuery({
    queryKey: ['activities'],
    queryFn: getActivities
  });

  useEffect(() => {
    if (error) {
      toast({
        title: "Erreur",
        description: "Impossible de charger les activités. Veuillez réessayer plus tard.",
        variant: "destructive"
      });
      console.error("Error loading activities:", error);
    }
  }, [error, toast]);

  const filteredActivities = activeTab === "toutes" 
    ? activities 
    : activities?.filter(activity => activity.category === activeTab);

  return (
    <div>
      <HeroSection 
        title="Blog & Actualités"
        subtitle="Restez informés des dernières nouvelles et événements du CEERA"
        backgroundImage={getRandomImage(uploadedImages, 22)}
        showLogo={false}
      />

      <section className="section bg-white">
        <div className="container mx-auto">
          <h2 className="section-title">Dernières actualités</h2>
          <p className="section-subtitle">
            Découvrez les dernières nouvelles, comptes-rendus de réunions et événements du CEERA
          </p>
          
          <Tabs defaultValue="toutes" className="w-full" onValueChange={setActiveTab}>
            <div className="mb-6 flex justify-center">
              <TabsList className="grid grid-cols-4 md:w-auto">
                <TabsTrigger value="toutes">Toutes</TabsTrigger>
                <TabsTrigger value="actualites">Actualités</TabsTrigger>
                <TabsTrigger value="comptes-rendus">Comptes-rendus</TabsTrigger>
                <TabsTrigger value="evenements">Événements</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="toutes" className="mt-0">
              {isLoading ? (
                <ActivitySkeletonList />
              ) : activities && activities.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredActivities?.map((activity) => (
                    <ActivityCard key={activity.id} activity={activity} />
                  ))}
                </div>
              ) : (
                <p className="text-center py-10">Aucune activité n'a été trouvée.</p>
              )}
            </TabsContent>
            
            {["actualites", "comptes-rendus", "evenements"].map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                {isLoading ? (
                  <ActivitySkeletonList />
                ) : filteredActivities && filteredActivities.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredActivities.map((activity) => (
                      <ActivityCard key={activity.id} activity={activity} />
                    ))}
                  </div>
                ) : (
                  <p className="text-center py-10">Aucune activité n'a été trouvée dans cette catégorie.</p>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
};

interface ActivityCardProps {
  activity: Activity;
}

const ActivityCard = ({ activity }: ActivityCardProps) => {
  // Utilisez une image de vos photos personnelles en remplacement de l'image de couverture
  const coverImage = activity.coverImage && activity.coverImage.startsWith("https://") ? 
    getRandomImage(uploadedImages, parseInt(activity.id, 36) % uploadedImages.length) : activity.coverImage;
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all">
      <div className="h-48 overflow-hidden">
        <img 
          src={coverImage} 
          alt={activity.title} 
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="inline-block px-3 py-1 text-xs font-medium bg-ceera-orange/10 text-ceera-orange rounded-full mb-3">
          {activity.category === "actualites" ? "Actualité" : 
           activity.category === "comptes-rendus" ? "Compte-rendu" : "Événement"}
        </div>
        <h3 className="text-xl font-bold mb-3">{activity.title}</h3>
        <p className="text-muted-foreground mb-4">{activity.excerpt}</p>
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1 text-ceera-orange" />
            <span>{activity.date}</span>
          </div>
          <div className="flex items-center">
            <Users size={14} className="mr-1 text-ceera-orange" />
            <span>{activity.author}</span>
          </div>
        </div>
        <Link 
          to={`/activities/${activity.id}`}
          className="inline-flex items-center text-ceera-orange hover:text-ceera-brown font-medium mt-4"
        >
          Lire la suite
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

const ActivitySkeletonList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map(i => (
        <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
          <Skeleton className="h-48 w-full" />
          <div className="p-6">
            <Skeleton className="h-4 w-20 mb-3" />
            <Skeleton className="h-6 w-full mb-3" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-[80%] mb-4" />
            <div className="flex justify-between items-center">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-20" />
            </div>
            <Skeleton className="h-4 w-24 mt-4" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Activities;
