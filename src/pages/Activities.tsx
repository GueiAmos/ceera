
import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Users, FileText } from 'lucide-react';

const Activities = () => {
  const [activeTab, setActiveTab] = useState("toutes");

  const blogPosts = [
    {
      id: 1,
      title: "Compte-rendu de l'Assemblée Générale 2025",
      category: "comptes-rendus",
      date: "15 Février 2025",
      author: "Secrétariat Général",
      excerpt: "L'Assemblée Générale annuelle du CEERA s'est tenue le 15 février 2025 à Abidjan. Les membres du bureau exécutif ont présenté le bilan de l'année écoulée et les projets pour 2025.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
    },
    {
      id: 2,
      title: "Célébration de la journée culturelle à Agnibilékrou",
      category: "evenements",
      date: "20 Mars 2025",
      author: "Secrétariat à la Culture",
      excerpt: "La journée culturelle du CEERA a été un véritable succès avec plus de 200 participants. Danses traditionnelles, contes et dégustation de plats locaux étaient au programme.",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be"
    },
    {
      id: 3,
      title: "Lancement du programme de mentorat académique",
      category: "actualites",
      date: "10 Avril 2025",
      author: "Secrétariat aux Affaires Académiques",
      excerpt: "Le CEERA lance un nouveau programme de mentorat pour aider les étudiants dans leur parcours universitaire. Les mentors expérimentés partageront leurs connaissances et conseils.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    },
    {
      id: 4,
      title: "Procès-verbal de la réunion mensuelle du bureau",
      category: "comptes-rendus",
      date: "5 Mai 2025",
      author: "Secrétariat Général",
      excerpt: "Le bureau exécutif s'est réuni le 5 mai pour discuter des projets en cours et planifier les activités du trimestre. Plusieurs décisions importantes ont été prises.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
    },
    {
      id: 5,
      title: "Succès de l'opération de reboisement à Agnibilékrou",
      category: "actualites",
      date: "18 Juin 2025",
      author: "Secrétariat à l'Environnement",
      excerpt: "Plus de 500 arbres ont été plantés lors de l'opération de reboisement organisée par le CEERA à Agnibilékrou. Une action concrète pour l'environnement.",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843"
    },
    {
      id: 6,
      title: "Bilan du tournoi sportif inter-écoles",
      category: "evenements",
      date: "25 Juillet 2025",
      author: "Secrétariat à la Culture et au Sport",
      excerpt: "Le tournoi sportif inter-écoles organisé par le CEERA a réuni plus de 10 établissements scolaires d'Agnibilékrou. L'école primaire Saint-Jean a remporté le tournoi de football.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Journée culturelle annuelle",
      date: "15 Août 2025",
      time: "10:00 - 18:00",
      location: "Salle des fêtes d'Agnibilékrou",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
      category: "culturelles",
      description: "Notre événement phare qui célèbre la richesse culturelle d'Agnibilékrou à travers des danses, chants, contes et expositions traditionnelles."
    },
    {
      id: 2,
      title: "Tournoi sportif inter-écoles",
      date: "22 Juillet 2025",
      time: "09:00 - 17:00",
      location: "Stade municipal d'Agnibilékrou",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      category: "sportives",
      description: "Un tournoi sportif réunissant les élèves de différentes écoles pour des compétitions de football, basketball, athlétisme et autres sports."
    },
    {
      id: 3,
      title: "Session de mentorat académique",
      date: "10 Juin 2025",
      time: "14:00 - 17:00",
      location: "Bibliothèque municipale",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      category: "academiques",
      description: "Une session de mentorat où les étudiants universitaires partagent leur expérience et conseillent les élèves sur leurs choix d'études."
    },
    {
      id: 4,
      title: "Campagne de sensibilisation sanitaire",
      date: "5 Septembre 2025",
      time: "08:00 - 12:00",
      location: "Place du marché d'Agnibilékrou",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      category: "sociales",
      description: "Une campagne de sensibilisation sur les maladies courantes et les mesures préventives, avec distribution de kits sanitaires."
    }
  ];

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

  const filteredPosts = activeTab === "toutes" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeTab);

  return (
    <div>
      <HeroSection 
        title="Blog & Actualités"
        subtitle="Restez informés des dernières nouvelles et événements du CEERA"
        backgroundImage="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843"
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="inline-block px-3 py-1 text-xs font-medium bg-ceera-orange/10 text-ceera-orange rounded-full mb-3">
                        {post.category === "actualites" ? "Actualité" : 
                         post.category === "comptes-rendus" ? "Compte-rendu" : "Événement"}
                      </div>
                      <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1 text-ceera-orange" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Users size={14} className="mr-1 text-ceera-orange" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            {["actualites", "comptes-rendus", "evenements"].map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post) => (
                    <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <div className="inline-block px-3 py-1 text-xs font-medium bg-ceera-orange/10 text-ceera-orange rounded-full mb-3">
                          {post.category === "actualites" ? "Actualité" : 
                           post.category === "comptes-rendus" ? "Compte-rendu" : "Événement"}
                        </div>
                        <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                        <div className="flex justify-between items-center text-sm">
                          <div className="flex items-center">
                            <Calendar size={14} className="mr-1 text-ceera-orange" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Users size={14} className="mr-1 text-ceera-orange" />
                            <span>{post.author}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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

export default Activities;
