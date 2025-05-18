
import HeroSection from '@/components/HeroSection';
import CardSection from '@/components/CardSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Activity, Users, BookOpen, Calendar, Award, Handshake, BookOpen as BookOpenIcon, FileText, Target } from 'lucide-react';

const Index = () => {
  const featureCards = [
    {
      title: 'Notre mission',
      description: 'Promouvoir la solidarité et le développement académique, culturel et social des ressortissants d\'Agnibilékrou.',
      icon: <BookOpen size={24} />,
    },
    {
      title: 'Événements',
      description: 'Participez à nos nombreux événements culturels, académiques et sociaux tout au long de l\'année.',
      icon: <Calendar size={24} />,
    },
    {
      title: 'Communauté',
      description: 'Rejoignez une communauté dynamique qui partage les mêmes valeurs et origines pour créer des liens durables.',
      icon: <Users size={24} />,
    },
  ];

  const activityCards = [
    {
      title: 'Journée culturelle',
      description: 'Célébration de notre riche patrimoine culturel avec des danses, chants et plats traditionnels.',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be',
    },
    {
      title: 'Soutien scolaire',
      description: 'Programmes de mentorat et cours de soutien pour aider les élèves à réussir académiquement.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    },
    {
      title: 'Actions sociales',
      description: 'Initiatives communautaires et solidaires pour aider ceux dans le besoin et promouvoir le développement local.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    },
  ];

  return (
    <div>
      <HeroSection 
        title="Collectif des Élèves et Étudiants Ressortissants d'Agnibilékrou"
        subtitle="Créé le 3 février 2023 - Association apolitique, laïque et à but non lucratif"
        buttonText="Rejoignez-nous"
        buttonLink="/membership"
        showLogo={true}
      />

      <section className="section bg-white">
        <div className="container mx-auto">
          <h2 className="section-title">Bienvenue au CEERA</h2>
          <p className="section-subtitle">
            Nous sommes une association engagée qui rassemble les élèves et étudiants originaires d'Agnibilékrou 
            pour promouvoir la solidarité, la culture et l'excellence académique.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {featureCards.map((card, index) => (
              <div key={index} className="bg-secondary/60 p-6 rounded-lg text-center">
                <div className="bg-ceera-orange h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-muted-foreground">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ceera-dark text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">À propos du CEERA</h2>
              <p className="mb-6">
                Le Collectif des Élèves et Étudiants Ressortissants d'Agnibilékrou (CEERA) est une association qui œuvre 
                pour le bien-être et l'épanouissement des élèves et étudiants originaires d'Agnibilékrou, peu importe où ils poursuivent leurs études.
              </p>
              <p className="mb-6">
                Créée par récépissé de déclaration d'association N⁰195/P-AGNI/CAB le 03 février 2023, 
                tel que régie par la loi N⁰60-315 du 21 septembre 1960 relative aux associations, 
                notre collectif rassemble et soutient les ressortissants d'Agnibilékrou à travers toute la Côte d'Ivoire.
              </p>
              <div className="flex space-x-4">
                <Link to="/about">
                  <Button variant="outline" className="border-ceera-orange text-ceera-orange hover:bg-ceera-orange hover:text-white">
                    En savoir plus
                  </Button>
                </Link>
                <Link to="/membership">
                  <Button className="bg-ceera-orange hover:bg-ceera-brown text-white">
                    Devenir membre
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-full flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027" 
                alt="Étudiants CEERA" 
                className="rounded-lg shadow-xl max-h-[400px] object-cover w-full"
              />
              <div className="absolute -bottom-5 -left-5 bg-ceera-orange text-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <Award size={24} className="mr-2" />
                  <div>
                    <p className="text-sm">Fondé en</p>
                    <p className="font-bold text-xl">2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto">
          <h2 className="section-title">Nos objectifs</h2>
          <p className="section-subtitle">
            Le CEERA s'engage à créer un environnement favorable à l'épanouissement de ses membres
            à travers plusieurs actions concrètes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-secondary/30 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Handshake className="h-8 w-8 text-ceera-orange mr-3" />
                <h3 className="text-xl font-bold">Solidarité</h3>
              </div>
              <p className="text-muted-foreground">
                Établir des liens de solidarité entre les élèves et étudiants ressortissants d'Agnibilékrou, 
                pour qu'ils se sentent toujours en famille où qu'ils soient.
              </p>
            </div>
            
            <div className="bg-secondary/30 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-ceera-orange mr-3" />
                <h3 className="text-xl font-bold">Réseau d'entraide</h3>
              </div>
              <p className="text-muted-foreground">
                Créer un réseau d'entraide intellectuel, social et professionnel entre les élèves et 
                étudiants ressortissants d'Agnibilékrou.
              </p>
            </div>
            
            <div className="bg-secondary/30 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Activity className="h-8 w-8 text-ceera-orange mr-3" />
                <h3 className="text-xl font-bold">Actions sociales</h3>
              </div>
              <p className="text-muted-foreground">
                Appuyer les actions sociales, économiques et culturelles des membres de l'association 
                dans la limite de ses moyens.
              </p>
            </div>
            
            <div className="bg-secondary/30 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <BookOpenIcon className="h-8 w-8 text-ceera-orange mr-3" />
                <h3 className="text-xl font-bold">Accompagnement</h3>
              </div>
              <p className="text-muted-foreground">
                Apporter un appui et des conseils aux membres dans la réalisation de leurs projets personnels 
                et professionnels.
              </p>
            </div>
            
            <div className="bg-secondary/30 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <FileText className="h-8 w-8 text-ceera-orange mr-3" />
                <h3 className="text-xl font-bold">Sensibilisation</h3>
              </div>
              <p className="text-muted-foreground">
                Organiser des évènements de sensibilisation afin de réduire le taux de dangers auxquels 
                est liée la jeunesse.
              </p>
            </div>
            
            <div className="bg-secondary/30 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-ceera-orange mr-3" />
                <h3 className="text-xl font-bold">Bénévolat</h3>
              </div>
              <p className="text-muted-foreground">
                Faire du bénévolat par moment afin de soutenir des personnes qui en ont besoin et 
                contribuer au développement d'Agnibilékrou.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CardSection 
        title="Nos activités récentes" 
        subtitle="Découvrez les événements et initiatives organisés par notre collectif"
        cards={activityCards}
        buttonText="Voir toutes nos activités"
        buttonLink="/activities"
      />

      <section className="section bg-ceera-orange/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Rejoignez notre collectif</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Vous êtes originaire d'Agnibilékrou et souhaitez faire partie d'une communauté dynamique et engagée ? 
            Rejoignez le CEERA pour seulement 1000 FCFA de frais d'adhésion et bénéficiez de nombreux avantages !
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
