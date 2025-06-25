
import HeroSection from '@/components/HeroSection';
import CardSection from '@/components/CardSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Activity, Users, BookOpen, Calendar, Award, Handshake, BookOpen as BookOpenIcon, FileText, Target, Heart, Lightbulb, HandHeart } from 'lucide-react';
import { getRandomImage, uploadedImages } from '@/utils/imageUtils';

const Index = () => {
  const featureCards = [
    {
      title: 'Notre mission',
      description: 'Promouvoir la solidarité et le développement de nos ressortissants.',
      icon: <Heart size={24} />,
    },
    {
      title: 'Événements',
      description: 'Participez à nos événements culturels et académiques.',
      icon: <Calendar size={24} />,
    },
    {
      title: 'Communauté',
      description: 'Rejoignez une communauté dynamique et solidaire.',
      icon: <Users size={24} />,
    },
  ];

  const activityCards = [
    {
      title: 'Journée culturelle',
      description: 'Célébration de notre patrimoine avec danses et plats traditionnels.',
      image: getRandomImage(uploadedImages, 60),
    },
    {
      title: 'Soutien scolaire',
      description: 'Programmes de mentorat pour la réussite académique.',
      image: getRandomImage(uploadedImages, 61),
    },
    {
      title: 'Actions sociales',
      description: 'Initiatives communautaires et solidaires.',
      image: getRandomImage(uploadedImages, 62),
    },
  ];

  return (
    <div>
      <HeroSection 
        title="Collectif des Élèves et Étudiants Ressortissants d'Agnibilékrou"
        subtitle="Créé le 3 février 2023 - Association apolitique, laïque et à but non lucratif"
        buttonText="Rejoignez-nous"
        buttonLink="/membership"
        backgroundImage={getRandomImage(uploadedImages, 0)}
        showLogo={true}
      />

      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Bienvenue au CEERA</h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-8 text-sm md:text-base">
            Association engagée rassemblant les élèves et étudiants d'Agnibilékrou 
            pour la solidarité, la culture et l'excellence académique.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {featureCards.map((card, index) => (
              <div key={index} className="bg-secondary/60 p-4 md:p-6 rounded-lg text-center">
                <div className="bg-ceera-orange h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {card.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-muted-foreground text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ceera-dark text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-6">À propos du CEERA</h2>
              <p className="mb-4 text-sm md:text-base">
                Le CEERA œuvre pour le bien-être des élèves et étudiants d'Agnibilékrou, 
                où qu'ils poursuivent leurs études.
              </p>
              <p className="mb-6 text-sm md:text-base">
                Créée par récépissé N⁰195/P-AGNI/CAB le 03 février 2023, 
                notre association rassemble et soutient les ressortissants d'Agnibilékrou.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/about">
                  <Button variant="outline" className="border-ceera-orange text-ceera-orange hover:bg-ceera-orange hover:text-white w-full sm:w-auto">
                    En savoir plus
                  </Button>
                </Link>
                <Link to="/membership">
                  <Button className="bg-ceera-orange hover:bg-ceera-brown text-white w-full sm:w-auto">
                    Devenir membre
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-full flex items-center justify-center">
              <img 
                src={getRandomImage(uploadedImages, 64)} 
                alt="Étudiants CEERA" 
                className="rounded-lg shadow-xl max-h-[300px] md:max-h-[400px] object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Nos objectifs</h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-8 text-sm md:text-base">
            Le CEERA s'engage à créer un environnement favorable à l'épanouissement de ses membres.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8">
            <div className="bg-secondary/30 p-4 md:p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <Handshake className="h-6 w-6 md:h-8 md:w-8 text-ceera-orange mr-3" />
                <h3 className="text-lg md:text-xl font-bold">Solidarité</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Liens de solidarité entre ressortissants d'Agnibilékrou.
              </p>
            </div>
            
            <div className="bg-secondary/30 p-4 md:p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <Users className="h-6 w-6 md:h-8 md:w-8 text-ceera-orange mr-3" />
                <h3 className="text-lg md:text-xl font-bold">Réseau</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Réseau d'entraide intellectuel, social et professionnel.
              </p>
            </div>
            
            <div className="bg-secondary/30 p-4 md:p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <HandHeart className="h-6 w-6 md:h-8 md:w-8 text-ceera-orange mr-3" />
                <h3 className="text-lg md:text-xl font-bold">Actions sociales</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Appui aux actions sociales, économiques et culturelles.
              </p>
            </div>
            
            <div className="bg-secondary/30 p-4 md:p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <Lightbulb className="h-6 w-6 md:h-8 md:w-8 text-ceera-orange mr-3" />
                <h3 className="text-lg md:text-xl font-bold">Accompagnement</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Appui et conseils pour projets personnels et professionnels.
              </p>
            </div>
            
            <div className="bg-secondary/30 p-4 md:p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <FileText className="h-6 w-6 md:h-8 md:w-8 text-ceera-orange mr-3" />
                <h3 className="text-lg md:text-xl font-bold">Sensibilisation</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Événements de sensibilisation pour la jeunesse.
              </p>
            </div>
            
            <div className="bg-secondary/30 p-4 md:p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <Award className="h-6 w-6 md:h-8 md:w-8 text-ceera-orange mr-3" />
                <h3 className="text-lg md:text-xl font-bold">Bénévolat</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Contribution au développement d'Agnibilékrou.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CardSection 
        title="Nos activités récentes" 
        subtitle="Découvrez les événements et initiatives du collectif"
        cards={activityCards}
        buttonText="Voir toutes nos activités"
        buttonLink="/activities"
      />

      <section className="section bg-ceera-orange/10">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Rejoignez notre collectif</h2>
          <p className="text-sm md:text-lg max-w-2xl mx-auto mb-6">
            Originaire d'Agnibilékrou ? Rejoignez le CEERA pour 1000 FCFA et bénéficiez de nombreux avantages !
          </p>
          <Link to="/membership">
            <Button size="lg" className="bg-ceera-orange hover:bg-ceera-brown text-white">
              <Users size={18} className="mr-2" />
              Devenir membre
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
