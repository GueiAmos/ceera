
import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Calendar, MapPin, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Gallery = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [activeAlbumCategory, setActiveAlbumCategory] = useState<string>("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  type GalleryImage = {
    id: number;
    src: string;
    alt: string;
    category: string;
  };

  type Album = {
    id: string;
    title: string;
    date: string;
    location: string;
    category: string;
    cover: string;
    description: string;
    images: GalleryImage[];
  };

  // Structured albums with related images
  const albums: Album[] = [
    {
      id: "ag-2024",
      title: "Assemblée Générale 2024",
      date: "15 Février 2024",
      location: "Abidjan",
      category: "reunions",
      cover: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      description: "Photos de l'Assemblée Générale annuelle du CEERA qui s'est tenue à Abidjan. Plus de 150 membres étaient présents pour cet événement important.",
      images: [
        {
          id: 1,
          src: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
          alt: "Vue d'ensemble de l'AG",
          category: "reunions"
        },
        {
          id: 2,
          src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205",
          alt: "Discours du Président",
          category: "reunions"
        },
        {
          id: 3,
          src: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
          alt: "Vote des résolutions",
          category: "reunions"
        },
        {
          id: 4,
          src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
          alt: "Discussion en groupe",
          category: "reunions"
        }
      ]
    },
    {
      id: "journee-culturelle-2024",
      title: "Journée Culturelle CEERA",
      date: "20 Mars 2024",
      location: "Agnibilékrou",
      category: "culturel",
      cover: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
      description: "Célébration annuelle de la culture d'Agnibilékrou avec des danses traditionnelles, des contes et une dégustation de plats locaux.",
      images: [
        {
          id: 5,
          src: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
          alt: "Danses traditionnelles",
          category: "culturel"
        },
        {
          id: 6,
          src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
          alt: "Démonstration de percussion",
          category: "culturel"
        },
        {
          id: 7,
          src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
          alt: "Présentation des costumes",
          category: "culturel"
        },
        {
          id: 8,
          src: "https://images.unsplash.com/photo-1527592711853-eff9f8c50ccc",
          alt: "Défilé culturel",
          category: "culturel"
        }
      ]
    },
    {
      id: "action-sociale-2023",
      title: "Distribution de fournitures scolaires",
      date: "10 Septembre 2023",
      location: "Agnibilékrou",
      category: "social",
      cover: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      description: "Action sociale organisée par le CEERA pour fournir des fournitures scolaires aux élèves défavorisés d'Agnibilékrou.",
      images: [
        {
          id: 9,
          src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
          alt: "Remise de fournitures",
          category: "social"
        },
        {
          id: 10,
          src: "https://images.unsplash.com/photo-1511949860663-92c5c57d48a7",
          alt: "Élèves recevant des cahiers",
          category: "social"
        },
        {
          id: 11,
          src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6",
          alt: "Session d'éducation",
          category: "social"
        }
      ]
    },
    {
      id: "conference-orientation-2023",
      title: "Conférence sur l'orientation universitaire",
      date: "5 Juin 2023",
      location: "Abidjan",
      category: "academique",
      cover: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
      description: "Conférence organisée pour aider les bacheliers à faire des choix éclairés concernant leur orientation universitaire.",
      images: [
        {
          id: 12,
          src: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
          alt: "Présentation générale",
          category: "academique"
        },
        {
          id: 13,
          src: "https://images.unsplash.com/photo-1550305080-4e029753abcf",
          alt: "Panel de discussion",
          category: "academique"
        },
        {
          id: 14,
          src: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b",
          alt: "Séance de questions-réponses",
          category: "academique"
        }
      ]
    },
    {
      id: "tournoi-football-2024",
      title: "Tournoi de football inter-écoles",
      date: "12 Avril 2024",
      location: "Agnibilékrou",
      category: "sportif",
      cover: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      description: "Tournoi sportif organisé par le CEERA pour promouvoir le sport et la cohésion entre les écoles d'Agnibilékrou.",
      images: [
        {
          id: 15,
          src: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
          alt: "Match d'ouverture",
          category: "sportif"
        },
        {
          id: 16,
          src: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55",
          alt: "Remise des trophées",
          category: "sportif"
        },
        {
          id: 17,
          src: "https://images.unsplash.com/photo-1459865264687-595d652de67e",
          alt: "Équipes participantes",
          category: "sportif"
        },
        {
          id: 18,
          src: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c",
          alt: "Supporters enthousiastes",
          category: "sportif"
        }
      ]
    },
    {
      id: "atelier-entrepreneuriat-2023",
      title: "Formation sur l'entrepreneuriat",
      date: "25 Novembre 2023",
      location: "Bouaké",
      category: "academique",
      cover: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      description: "Atelier pratique sur l'entrepreneuriat destiné aux étudiants souhaitant lancer leur propre entreprise après leurs études.",
      images: [
        {
          id: 19,
          src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
          alt: "Séance de groupe",
          category: "academique"
        },
        {
          id: 20,
          src: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee",
          alt: "Présentation des projets",
          category: "academique"
        },
        {
          id: 21,
          src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
          alt: "Mentor et participant",
          category: "academique"
        }
      ]
    }
  ];

  const filteredAlbums = activeAlbumCategory === "all" 
    ? albums 
    : albums.filter(album => album.category === activeAlbumCategory);

  return (
    <div>
      <HeroSection 
        title="Galerie Photos"
        subtitle="Plongez dans l'ambiance du CEERA à travers notre galerie photo"
        backgroundImage="https://images.unsplash.com/photo-1500673922987-e212871fec22"
        showLogo={true}
        height="small"
      />

      <section className="section bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="section-title">Nos albums photos</h2>
          <p className="section-subtitle">
            Découvrez en images les événements organisés par le CEERA, classés par thématiques et par dates pour une navigation simplifiée.
          </p>

          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveAlbumCategory}>
            <div className="flex justify-center mb-8 overflow-x-auto pb-2">
              <TabsList>
                <TabsTrigger value="all">Tous les albums</TabsTrigger>
                <TabsTrigger value="reunions">Réunions</TabsTrigger>
                <TabsTrigger value="culturel">Culturel</TabsTrigger>
                <TabsTrigger value="academique">Académique</TabsTrigger>
                <TabsTrigger value="social">Social</TabsTrigger>
                <TabsTrigger value="sportif">Sportif</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAlbums.map((album) => (
                  <AlbumCard 
                    key={album.id} 
                    album={album}
                    onClick={() => setSelectedAlbum(album)}
                  />
                ))}
              </div>
            </TabsContent>

            {["reunions", "culturel", "academique", "social", "sportif"].map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredAlbums.map((album) => (
                    <AlbumCard 
                      key={album.id} 
                      album={album}
                      onClick={() => setSelectedAlbum(album)}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Album Dialog */}
      <Dialog open={selectedAlbum !== null} onOpenChange={(open) => !open && setSelectedAlbum(null)}>
        <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedAlbum && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold">{selectedAlbum.title}</h2>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1 text-ceera-orange" />
                      <span>{selectedAlbum.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1 text-ceera-orange" />
                      <span>{selectedAlbum.location}</span>
                    </div>
                    <Badge variant="outline" className="bg-ceera-orange/10 text-ceera-orange border-ceera-orange/20">
                      {selectedAlbum.category.charAt(0).toUpperCase() + selectedAlbum.category.slice(1)}
                    </Badge>
                  </div>
                </div>
              </div>
              
              <p className="mb-6 text-muted-foreground">{selectedAlbum.description}</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {selectedAlbum.images.map((image, index) => (
                  <div 
                    key={image.id} 
                    className="cursor-pointer overflow-hidden rounded-md bg-secondary/20 aspect-square"
                    onClick={() => setSelectedImageIndex(index)}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="h-full w-full object-cover hover:scale-110 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Fullscreen Image Viewer */}
      {selectedAlbum && selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setSelectedImageIndex(null)}
        >
          <button 
            className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full"
            onClick={() => setSelectedImageIndex(null)}
          >
            <X className="h-6 w-6" />
          </button>
          
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex(prev => prev === 0 ? selectedAlbum.images.length - 1 : prev! - 1);
            }}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <div className="max-w-5xl max-h-[90vh] w-full flex items-center justify-center">
            <img 
              src={selectedAlbum.images[selectedImageIndex].src} 
              alt={selectedAlbum.images[selectedImageIndex].alt} 
              className="max-h-[80vh] max-w-full object-contain"
            />
          </div>
          
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex(prev => prev === selectedAlbum.images.length - 1 ? 0 : prev! + 1);
            }}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          <div className="absolute bottom-6 left-0 right-0 text-center text-white">
            <p className="font-medium">{selectedAlbum.images[selectedImageIndex].alt}</p>
            <p className="text-sm opacity-80 mt-2">{selectedImageIndex + 1} / {selectedAlbum.images.length}</p>
          </div>
        </div>
      )}
    </div>
  );
};

interface AlbumCardProps {
  album: {
    id: string;
    title: string;
    date: string;
    location: string;
    category: string;
    cover: string;
    images: {
      id: number;
      src: string;
      alt: string;
      category: string;
    }[];
  };
  onClick: () => void;
}

const AlbumCard = ({ album, onClick }: AlbumCardProps) => {
  return (
    <div 
      className="group cursor-pointer bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={album.cover} 
          alt={album.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <Badge variant="outline" className="bg-white/90 font-medium">
            {album.images.length} photos
          </Badge>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 group-hover:text-ceera-orange transition-colors">{album.title}</h3>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1 text-ceera-orange" />
            <span>{album.date}</span>
          </div>
          <div className="flex items-center">
            <MapPin size={14} className="mr-1 text-ceera-orange" />
            <span>{album.location}</span>
          </div>
        </div>
        <div className="mt-3">
          <Badge variant="outline" className="bg-ceera-orange/10 text-ceera-orange border-ceera-orange/20">
            {album.category.charAt(0).toUpperCase() + album.category.slice(1)}
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
