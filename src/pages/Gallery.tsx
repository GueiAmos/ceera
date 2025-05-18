
import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, MapPin } from 'lucide-react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  type GalleryImage = {
    id: number;
    src: string;
    alt: string;
    category: string;
    event: string;
    date: string;
    location: string;
  };

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      alt: "Assemblée Générale CEERA 2024",
      category: "reunions",
      event: "Assemblée Générale",
      date: "15 Février 2024",
      location: "Abidjan"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
      alt: "Journée Culturelle CEERA",
      category: "culturel",
      event: "Journée Culturelle Annuelle",
      date: "20 Mars 2024",
      location: "Agnibilékrou"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      alt: "Action sociale CEERA",
      category: "social",
      event: "Distribution de fournitures scolaires",
      date: "10 Septembre 2023",
      location: "Agnibilékrou"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
      alt: "Conférence Académique CEERA",
      category: "academique",
      event: "Conférence sur l'orientation universitaire",
      date: "5 Juin 2023",
      location: "Abidjan"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      alt: "Tournoi sportif CEERA",
      category: "sportif",
      event: "Tournoi de football inter-écoles",
      date: "12 Avril 2024",
      location: "Agnibilékrou"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      alt: "Formation sur l'entrepreneuriat",
      category: "academique",
      event: "Atelier d'entrepreneuriat",
      date: "25 Novembre 2023",
      location: "Bouaké"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      alt: "Réunion du bureau exécutif",
      category: "reunions",
      event: "Réunion mensuelle du BEN",
      date: "3 Janvier 2024",
      location: "Abidjan"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      alt: "Séminaire de formation",
      category: "academique",
      event: "Séminaire sur le leadership",
      date: "18 Février 2024",
      location: "Abidjan"
    }
  ];

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

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
          <h2 className="section-title">Notre Collection d'Images</h2>
          <p className="section-subtitle">
            Découvrez en images les moments forts du CEERA : rencontres, événements et instants de convivialité qui témoignent de notre esprit de solidarité et d'engagement.
          </p>

          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">Toutes</TabsTrigger>
                <TabsTrigger value="reunions">Réunions</TabsTrigger>
                <TabsTrigger value="culturel">Culturel</TabsTrigger>
                <TabsTrigger value="academique">Académique</TabsTrigger>
                <TabsTrigger value="social">Social</TabsTrigger>
                <TabsTrigger value="sportif">Sportif</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredImages.map((image) => (
                  <GalleryItem 
                    key={image.id} 
                    image={image} 
                    onClick={() => setSelectedImage(image)} 
                  />
                ))}
              </div>
            </TabsContent>

            {["reunions", "culturel", "academique", "social", "sportif"].map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredImages.map((image) => (
                    <GalleryItem 
                      key={image.id} 
                      image={image} 
                      onClick={() => setSelectedImage(image)} 
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="sm:max-w-3xl">
          {selectedImage && (
            <div>
              <div className="relative w-full h-[60vh] mb-4">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt} 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{selectedImage.event}</h3>
                <div className="flex flex-col space-y-1 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2 text-ceera-orange" />
                    <span>{selectedImage.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2 text-ceera-orange" />
                    <span>{selectedImage.location}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

interface GalleryItemProps {
  image: {
    id: number;
    src: string;
    alt: string;
    event: string;
  };
  onClick: () => void;
}

const GalleryItem = ({ image, onClick }: GalleryItemProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div 
          className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-all"
          onClick={onClick}
        >
          <div className="h-48 overflow-hidden">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="h-full w-full object-cover hover:scale-105 transition-all duration-300"
            />
          </div>
          <div className="p-3">
            <p className="font-medium text-sm truncate">{image.event}</p>
          </div>
        </div>
      </DialogTrigger>
    </Dialog>
  );
};

export default Gallery;
