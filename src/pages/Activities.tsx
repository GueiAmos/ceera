
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Users, ArrowRight, Newspaper, FileText, PartyPopper } from 'lucide-react';
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

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case "actualites": return <Newspaper size={14} className="mr-1 text-ceera-orange" />;
      case "comptes-rendus": return <FileText size={14} className="mr-1 text-ceera-orange" />;
      case "evenements": return <PartyPopper size={14} className="mr-1 text-ceera-orange" />;
      default: return <Calendar size={14} className="mr-1 text-ceera-orange" />;
    }
  };

  return (
    <div>
      <HeroSection 
        title="Blog & Actualités"
        subtitle="Restez informés des dernières nouvelles du CEERA"
        backgroundImage={getRandomImage(uploadedImages, 22)}
        showLogo={false}
      />

      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Dernières actualités</h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-8 text-sm md:text-base">
            Découvrez les dernières nouvelles et événements du CEERA
          </p>
          
          <Tabs defaultValue="toutes" className="w-full" onValueChange={setActiveTab}>
            <div className="mb-6 flex justify-center">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-md md:max-w-none md:w-auto">
                <TabsTrigger value="toutes" className="text-xs md:text-sm">Toutes</TabsTrigger>
                <TabsTrigger value="actualites" className="text-xs md:text-sm">Actualités</TabsTrigger>
                <TabsTrigger value="comptes-rendus" className="text-xs md:text-sm">Comptes-rendus</TabsTrigger>
                <TabsTrigger value="evenements" className="text-xs md:text-sm">Événements</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="toutes" className="mt-0">
              {isLoading ? (
                <ActivitySkeletonList />
              ) : activities && activities.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {filteredActivities?.map((activity) => (
                    <ActivityCard key={activity.id} activity={activity} />
                  ))}
                </div>
              ) : (
                <p className="text-center py-10">Aucune activité trouvée.</p>
              )}
            </TabsContent>
            
            {["actualites", "comptes-rendus", "evenements"].map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                {isLoading ? (
                  <ActivitySkeletonList />
                ) : filteredActivities && filteredActivities.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {filteredActivities.map((activity) => (
                      <ActivityCard key={activity.id} activity={activity} />
                    ))}
                  </div>
                ) : (
                  <p className="text-center py-10">Aucune activité dans cette catégorie.</p>
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
  const coverImage = activity.coverImage && activity.coverImage.startsWith("https://") ? 
    getRandomImage(uploadedImages, parseInt(activity.id, 36) % uploadedImages.length) : activity.coverImage;
  
  const getCategoryLabel = (category: string) => {
    switch(category) {
      case "actualites": return "Actualité";
      case "comptes-rendus": return "Compte-rendu";
      case "evenements": return "Événement";
      default: return "Actualité";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case "actualites": return <Newspaper size={14} className="mr-1" />;
      case "comptes-rendus": return <FileText size={14} className="mr-1" />;
      case "evenements": return <PartyPopper size={14} className="mr-1" />;
      default: return <Calendar size={14} className="mr-1" />;
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all">
      <div className="h-40 md:h-48 overflow-hidden">
        <img 
          src={coverImage} 
          alt={activity.title} 
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-4 md:p-6">
        <div className="inline-flex items-center px-2 py-1 text-xs font-medium bg-ceera-orange/10 text-ceera-orange rounded-full mb-3">
          {getCategoryIcon(activity.category)}
          {getCategoryLabel(activity.category)}
        </div>
        <h3 className="text-lg md:text-xl font-bold mb-2 line-clamp-2">{activity.title}</h3>
        <p className="text-muted-foreground mb-4 text-sm line-clamp-2">{activity.excerpt}</p>
        <div className="flex justify-between items-center text-xs md:text-sm mb-3">
          <div className="flex items-center">
            <Calendar size={12} className="mr-1 text-ceera-orange" />
            <span>{activity.date}</span>
          </div>
          <div className="flex items-center">
            <Users size={12} className="mr-1 text-ceera-orange" />
            <span className="truncate">{activity.author}</span>
          </div>
        </div>
        <Link 
          to={`/activities/${activity.id}`}
          className="inline-flex items-center text-ceera-orange hover:text-ceera-brown font-medium text-sm"
        >
          Lire la suite
          <ArrowRight size={14} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

const ActivitySkeletonList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {[1, 2, 3, 4, 5, 6].map(i => (
        <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
          <Skeleton className="h-40 md:h-48 w-full" />
          <div className="p-4 md:p-6">
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
