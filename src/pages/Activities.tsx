
import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin } from 'lucide-react';

const Activities = () => {
  const [activeTab, setActiveTab] = useState("culturelles");

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
    },
    {
      id: 5,
      title: "Conférence sur l'entrepreneuriat",
      date: "18 Juin 2025",
      time: "15:00 - 18:00",
      location: "Centre culturel d'Agnibilékrou",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      category: "academiques",
      description: "Une conférence animée par des entrepreneurs locaux qui partagent leur parcours et conseils pour se lancer dans l'entrepreneuriat."
    },
    {
      id: 6,
      title: "Collecte de dons pour les orphelinats",
      date: "25 Juillet 2025",
      time: "Toute la journée",
      location: "Divers points de collecte",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      category: "sociales",
      description: "Une collecte de dons (vêtements, fournitures scolaires, jouets) pour les orphelinats de la région d'Agnibilékrou."
    },
    {
      id: 7,
      title: "Concours de danse traditionnelle",
      date: "12 Août 2025",
      time: "14:00 - 18:00",
      location: "Centre culturel d'Agnibilékrou",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
      category: "culturelles",
      description: "Un concours mettant en compétition différents groupes de danse traditionnelle pour valoriser et préserver notre patrimoine culturel."
    },
    {
      id: 8,
      title: "Marathon de la solidarité",
      date: "3 Juillet 2025",
      time: "07:00 - 12:00",
      location: "Départ : Place de la mairie",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      category: "sportives",
      description: "Un marathon dont les fonds récoltés serviront à financer des projets éducatifs pour les enfants défavorisés de la région."
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
    },
    {
      year: "2022",
      events: [
        "Lancement de notre programme de bourses d'études",
        "Campagne de sensibilisation sur la santé",
        "Organisation d'un festival culturel",
        "Mise en place d'une bibliothèque communautaire"
      ]
    }
  ];

  const filteredEvents = activeTab === "toutes" 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category === activeTab);

  return (
    <div>
      <HeroSection 
        title="Nos activités"
        subtitle="Découvrez les événements et initiatives du CEERA"
        backgroundImage="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
      />

      <section className="section bg-white">
        <div className="container mx-auto">
          <h2 className="section-title">Prochains événements</h2>
          <p className="section-subtitle">
            Restez informés des prochaines activités organisées par le CEERA et participez nombreux !
          </p>
          
          <Tabs defaultValue="toutes" className="w-full">
            <div className="mb-6 flex justify-center">
              <TabsList className="grid grid-cols-5 md:w-auto">
                <TabsTrigger value="toutes" onClick={() => setActiveTab("toutes")}>Toutes</TabsTrigger>
                <TabsTrigger value="culturelles" onClick={() => setActiveTab("culturelles")}>Culturelles</TabsTrigger>
                <TabsTrigger value="academiques" onClick={() => setActiveTab("academiques")}>Académiques</TabsTrigger>
                <TabsTrigger value="sociales" onClick={() => setActiveTab("sociales")}>Sociales</TabsTrigger>
                <TabsTrigger value="sportives" onClick={() => setActiveTab("sportives")}>Sportives</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="toutes" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event) => (
                  <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
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
            </TabsContent>
            
            <TabsContent value="culturelles" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event) => (
                  <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
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
            </TabsContent>
            
            <TabsContent value="academiques" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event) => (
                  <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
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
            </TabsContent>
            
            <TabsContent value="sociales" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event) => (
                  <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
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
            </TabsContent>
            
            <TabsContent value="sportives" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event) => (
                  <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
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
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="section bg-ceera-dark text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Notre impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-12">
            <div className="p-6">
              <div className="text-4xl font-bold text-ceera-orange mb-2">500+</div>
              <p className="text-lg">Membres actifs</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-ceera-orange mb-2">50+</div>
              <p className="text-lg">Événements organisés</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-ceera-orange mb-2">10+</div>
              <p className="text-lg">Années d'existence</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027" 
                alt="Impact CEERA" 
                className="rounded-lg shadow-xl h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Nos réalisations</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-ceera-orange rounded-full p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>Mise en place d'un programme de bourses d'études qui a bénéficié à plus de 50 étudiants méritants</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-ceera-orange rounded-full p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>Rénovation de trois écoles primaires dans la région d'Agnibilékrou</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-ceera-orange rounded-full p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>Création d'une bibliothèque communautaire avec plus de 2000 livres accessibles à tous</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-ceera-orange rounded-full p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>Organisation de campagnes annuelles de santé offrant des consultations gratuites</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-ceera-orange rounded-full p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>Plantation de plus de 1000 arbres dans le cadre de notre programme de reboisement</p>
                </li>
              </ul>
            </div>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
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
