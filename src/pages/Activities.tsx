
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Users, FileText, ArrowRight } from 'lucide-react';
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
  
  // Past activities (hardcoded for now)
  const pastActivities = [
    {
      year: "2024",
      events: [
        "Organisation d'une campagne de reboisement dans la région d'Agnibilékrou",
        "Mise en place d'un programme de tutorat pour les élèves en difficulté",
        "Collecte de fonds pour la rénovation d'une école primaire",
        "Tournoi sportif inter-écoles à Agnibilékrou"
      ]
    },
    {
      year: "2023",
      events: [
        "Célébration de la journée culturelle annuelle",
        "Don de fournitures scolaires aux élèves défavorisés",
        "Conférence sur l'orientation professionnelle",
        "Organisation d'un hackathon pour les jeunes développeurs"
      ]
    }
  ];

  // Upcoming events (hardcoded or could be filtered from activities)
  const upcomingEvents = [
    {
      id: "journee-culturelle-annuelle",
      title: "Journée culturelle annuelle",
      date: "15 Août 2025",
      time: "10:00 - 18:00",
      location: "Salle des fêtes d'Agnibilékrou",
      image: getRandomImage(uploadedImages, 0),
      category: "culturelles",
      description: "Notre événement phare qui célèbre la richesse culturelle d'Agnibilékrou à travers des danses, chants, contes et expositions traditionnelles."
    },
    {
      id: "tournoi-sportif",
      title: "Tournoi sportif inter-écoles",
      date: "22 Juillet 2025",
      time: "09:00 - 17:00",
      location: "Stade municipal d'Agnibilékrou",
      image: getRandomImage(uploadedImages, 1),
      category: "sportives",
      description: "Un tournoi sportif réunissant les élèves de différentes écoles pour des compétitions de football, basketball, athlétisme et autres sports."
    },
    {
      id: "mentorat-academique",
      title: "Session de mentorat académique",
      date: "10 Juin 2025",
      time: "14:00 - 17:00",
      location: "Bibliothèque municipale",
      image: getRandomImage(uploadedImages, 2),
      category: "academiques",
      description: "Une session de mentorat où les étudiants universitaires partagent leur expérience et conseillent les élèves sur leurs choix d'études."
    },
    {
      id: "campagne-sensibilisation",
      title: "Campagne de sensibilisation sanitaire",
      date: "5 Septembre 2025",
      time: "08:00 - 12:00",
      location: "Place du marché d'Agnibilékrou",
      image: getRandomImage(uploadedImages, 3),
      category: "sociales",
      description: "Une campagne de sensibilisation sur les maladies courantes et les mesures préventives, avec distribution de kits sanitaires."
    }
  ];

  return (
    <div>
      <HeroSection 
        title="Blog & Actualités"
        subtitle="Restez informés des dernières nouvelles et événements du CEERA"
        backgroundImage={getRandomImage(uploadedImages, 4)}
        showLogo={true}
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

      <section className="section bg-secondary/50">
        <div className="container mx-auto">
          <h2 className="section-title">Prochains événements</h2>
          <p className="section-subtitle">
            Restez informés des prochaines activités organisées par le CEERA et participez nombreux !
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="inline-block px-3 py-1 text-xs font-medium bg-ceera-orange/10 text-ceera-orange rounded-full mb-3">
                    {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2 text-ceera-orange" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2 text-ceera-orange" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2 text-ceera-orange" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto">
          <h2 className="section-title">Activités passées</h2>
          <p className="section-subtitle">
            Retour sur les principales activités que nous avons réalisées ces dernières années.
          </p>
          
          <div className="max-w-4xl mx-auto">
            {pastActivities.map((activity, index) => (
              <div key={index} className="mb-10">
                <h3 className="inline-block text-2xl font-bold mb-4 bg-ceera-orange text-white py-2 px-4 rounded-lg">{activity.year}</h3>
                <ul className="space-y-3 ml-6">
                  {activity.events.map((event, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="bg-ceera-orange/20 rounded-full p-1 mt-1 mr-3">
                        <FileText className="h-4 w-4 text-ceera-orange" />
                      </div>
                      <p>{event}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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
