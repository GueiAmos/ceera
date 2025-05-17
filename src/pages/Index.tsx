
import HeroSection from '@/components/HeroSection';
import CardSection from '@/components/CardSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Activity, Users, BookOpen, Calendar, Award } from 'lucide-react';

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
        subtitle="Unis par nos origines, engagés pour notre avenir"
        buttonText="Rejoignez-nous"
        buttonLink="/membership"
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
                Le Collectif des Élèves et Étudiants Ressortissants d'Agnibilékrou (CEERA) est une association qui oeuvre depuis plusieurs années 
                pour l'épanouissement, la solidarité et le développement des compétences de ses membres.
              </p>
              <p className="mb-6">
                Notre collectif organise régulièrement des activités culturelles, académiques et sociales pour maintenir un lien fort 
                entre tous les ressortissants et contribuer au développement de notre région d'origine.
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
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027" 
                alt="Étudiants CEERA" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-5 -left-5 bg-ceera-orange text-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <Award size={24} className="mr-2" />
                  <div>
                    <p className="text-sm">Fondé en</p>
                    <p className="font-bold text-xl">2015</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CardSection 
        title="Nos activités récentes" 
        subtitle="Découvrez les événements et initiatives organisés par notre collectif"
        cards={activityCards}
      />

      <section className="section bg-ceera-orange/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Rejoignez notre collectif</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Vous êtes originaire d'Agnibilékrou et souhaitez faire partie d'une communauté dynamique et engagée ? 
            N'hésitez pas à nous rejoindre !
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
