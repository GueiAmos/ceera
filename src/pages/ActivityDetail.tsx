
import { useParams } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import { Calendar, Clock, MapPin, Users, FileText } from 'lucide-react';
import { useState } from 'react';

// Sample activity data - in a real app, this would come from an API or database
const activitiesData = [
  {
    id: "assemblee-generale-2025",
    title: "Compte-rendu de l'Assemblée Générale 2025",
    date: "15 Février 2025",
    time: "09:00 - 17:00",
    location: "Amphithéâtre, Université d'Abidjan",
    author: "Secrétariat Général",
    category: "comptes-rendus",
    coverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    content: `
      <h3>Résumé de l'événement</h3>
      <p>L'Assemblée Générale annuelle du CEERA s'est tenue le 15 février 2025 à Abidjan. Plus de 200 membres étaient présents pour cette rencontre importante dans la vie de notre association.</p>
      
      <h3>Points à l'ordre du jour</h3>
      <ul>
        <li>Bilan des activités de l'année écoulée</li>
        <li>Rapport financier</li>
        <li>Projets pour l'année 2025</li>
        <li>Questions diverses</li>
      </ul>
      
      <h3>Bilan des activités</h3>
      <p>Le Secrétaire Général a présenté le bilan des activités pour l'année 2024. Parmi les réalisations importantes :</p>
      <ul>
        <li>Organisation de 4 journées culturelles</li>
        <li>Mise en place d'un programme de tutorat académique</li>
        <li>Collaboration avec 3 entreprises pour des stages professionnels</li>
        <li>Opération de reboisement à Agnibilékrou</li>
      </ul>
      
      <h3>Rapport financier</h3>
      <p>Le Secrétaire aux Finances a présenté un rapport détaillé des finances de l'association :</p>
      <ul>
        <li>Recettes totales : 2.500.000 FCFA</li>
        <li>Dépenses : 1.800.000 FCFA</li>
        <li>Solde positif : 700.000 FCFA</li>
      </ul>
      
      <h3>Projets pour 2025</h3>
      <p>Plusieurs projets ont été adoptés pour l'année 2025 :</p>
      <ul>
        <li>Construction d'une bibliothèque communautaire à Agnibilékrou</li>
        <li>Élargissement du programme de mentorat</li>
        <li>Organisation d'un forum de l'emploi</li>
        <li>Mise en place d'un fonds de solidarité plus important</li>
      </ul>
      
      <h3>Décisions importantes</h3>
      <p>L'Assemblée Générale a voté à l'unanimité :</p>
      <ul>
        <li>L'augmentation de la cotisation annuelle à 5.000 FCFA</li>
        <li>La création d'une commission pour la construction de la bibliothèque</li>
        <li>L'extension des activités du CEERA à San-Pédro</li>
      </ul>
    `,
    images: [
      {
        src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
        caption: "Vue d'ensemble de l'amphithéâtre pendant l'AG"
      },
      {
        src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
        caption: "Présentation du rapport financier"
      },
      {
        src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
        caption: "Vote des résolutions par l'assemblée"
      },
      {
        src: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2",
        caption: "Séance de questions-réponses"
      }
    ]
  },
  {
    id: "journee-culturelle-agnibilekrou",
    title: "Célébration de la journée culturelle à Agnibilékrou",
    date: "20 Mars 2025",
    time: "10:00 - 22:00",
    location: "Place du marché, Agnibilékrou",
    author: "Secrétariat à la Culture",
    category: "evenements",
    coverImage: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    content: `
      <h3>Une journée mémorable</h3>
      <p>La journée culturelle du CEERA à Agnibilékrou a été un véritable succès avec plus de 200 participants. Étudiants, élèves, autorités locales et population se sont réunis pour célébrer le riche patrimoine culturel de notre région.</p>
      
      <h3>Programme de la journée</h3>
      <ul>
        <li>10h00 : Cérémonie d'ouverture officielle</li>
        <li>11h00 : Défilé des tenues traditionnelles</li>
        <li>13h00 : Dégustation de plats locaux</li>
        <li>15h00 : Danses traditionnelles</li>
        <li>17h00 : Contes et récits du terroir</li>
        <li>19h00 : Concert avec des artistes locaux</li>
      </ul>
      
      <h3>Les moments forts</h3>
      <p>Plusieurs moments ont marqué cette journée exceptionnelle :</p>
      <ul>
        <li>Le concours de danse traditionnelle remporté par le groupe "Les Héritiers"</li>
        <li>La prestation remarquable des conteurs qui ont fait revivre les légendes locales</li>
        <li>Le défilé coloré des tenues traditionnelles présentant la diversité vestimentaire de notre culture</li>
        <li>Le buffet de spécialités culinaires qui a ravi les papilles de tous les participants</li>
      </ul>
      
      <h3>Impact sur la communauté</h3>
      <p>Cette journée culturelle a eu un impact significatif :</p>
      <ul>
        <li>Renforcement du lien intergénérationnel</li>
        <li>Valorisation des traditions auprès des jeunes</li>
        <li>Promotion du tourisme culturel local</li>
        <li>Soutien aux artisans et producteurs locaux</li>
      </ul>
      
      <h3>Témoignages</h3>
      <p>"Cette journée nous a permis de renouer avec nos racines et de transmettre notre héritage culturel à la jeune génération." - Chef du village d'Agnibilékrou</p>
      <p>"J'ai découvert aujourd'hui des aspects de notre culture que je ne connaissais pas. C'était à la fois éducatif et divertissant." - Étudiant membre du CEERA</p>
    `,
    images: [
      {
        src: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
        caption: "Scène principale de la journée culturelle"
      },
      {
        src: "https://images.unsplash.com/photo-1528219089976-37a6d68894e9",
        caption: "Défilé des tenues traditionnelles"
      },
      {
        src: "https://images.unsplash.com/photo-1504992963429-91ab36c6a2e6",
        caption: "Danse traditionnelle"
      },
      {
        src: "https://images.unsplash.com/photo-1529333166437-7feb30db90e0",
        caption: "Dégustation de plats locaux"
      }
    ]
  }
];

const ActivityDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  
  // Find the activity that matches the ID
  const activity = activitiesData.find(act => act.id === id);
  
  if (!activity) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Activité non trouvée</h2>
        <p>L'activité que vous recherchez n'existe pas ou a été supprimée.</p>
      </div>
    );
  }
  
  return (
    <div>
      <HeroSection
        title={activity.title}
        subtitle={`${activity.category === "evenements" ? "Événement" : 
                   activity.category === "comptes-rendus" ? "Compte-rendu" : "Actualité"} - ${activity.date}`}
        backgroundImage={activity.coverImage}
        showLogo={true}
        height="medium"
      />
      
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
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
            
            {/* Image modal/lightbox */}
            {selectedImageIndex !== null && (
              <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
                   onClick={() => setSelectedImageIndex(null)}>
                <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
                  <button 
                    className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full"
                    onClick={() => setSelectedImageIndex(null)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </button>
                  
                  <img 
                    src={activity.images[selectedImageIndex].src} 
                    alt={activity.images[selectedImageIndex].caption}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                  
                  <div className="bg-black/50 text-white p-4 absolute bottom-0 left-0 right-0">
                    <p className="text-center">{activity.images[selectedImageIndex].caption}</p>
                  </div>
                  
                  <div className="absolute top-[50%] transform -translate-y-1/2 left-4">
                    <button 
                      className="bg-black/50 text-white p-2 rounded-full"
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
                      className="bg-black/50 text-white p-2 rounded-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImageIndex(prev => (prev === activity.images.length - 1 ? 0 : prev! + 1));
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </button>
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

export default ActivityDetail;
