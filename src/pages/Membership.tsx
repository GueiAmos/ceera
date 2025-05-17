
import HeroSection from '@/components/HeroSection';
import MembershipForm from '@/components/MembershipForm';
import { Card } from '@/components/CardSection';
import { CheckCircle } from 'lucide-react';

const Membership = () => {
  const benefits = [
    {
      title: "Réseau et solidarité",
      description: "Intégrez un réseau solide d'élèves et d'étudiants partageant vos origines et vos valeurs.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    },
    {
      title: "Soutien académique",
      description: "Bénéficiez de programmes de mentorat, de séances de soutien scolaire et d'orientation académique.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
    },
    {
      title: "Opportunités culturelles",
      description: "Participez à de nombreux événements culturels pour célébrer et préserver notre patrimoine.",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be"
    },
    {
      title: "Développement personnel",
      description: "Développez vos compétences de leadership et d'organisation à travers diverses responsabilités.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027"
    }
  ];

  return (
    <div>
      <HeroSection 
        title="Rejoignez notre collectif"
        subtitle="Devenez membre du CEERA et participez à nos initiatives"
        backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
      />

      <section className="section bg-white">
        <div className="container mx-auto">
          <h2 className="section-title">Pourquoi nous rejoindre ?</h2>
          <p className="section-subtitle">
            L'adhésion au CEERA vous offre de nombreux avantages et opportunités pour votre développement personnel et académique.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                title={benefit.title} 
                description={benefit.description} 
                image={benefit.image}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ceera-dark text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Comment devenir membre ?</h2>
            <p className="text-lg mb-8 text-center">
              Le processus d'adhésion au CEERA est simple et ouvert à tous les élèves et étudiants ressortissants d'Agnibilékrou.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 p-6 rounded-lg text-center">
                <div className="bg-ceera-orange h-12 w-12 flex items-center justify-center rounded-full mx-auto mb-4">
                  <span className="text-white text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Remplir le formulaire</h3>
                <p className="text-gray-300">
                  Complétez le formulaire d'adhésion en ligne avec vos informations personnelles.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg text-center">
                <div className="bg-ceera-orange h-12 w-12 flex items-center justify-center rounded-full mx-auto mb-4">
                  <span className="text-white text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Entretien d'accueil</h3>
                <p className="text-gray-300">
                  Participez à un bref entretien pour discuter de vos motivations et de votre engagement.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg text-center">
                <div className="bg-ceera-orange h-12 w-12 flex items-center justify-center rounded-full mx-auto mb-4">
                  <span className="text-white text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Inscription officielle</h3>
                <p className="text-gray-300">
                  Après validation de votre candidature, payez la cotisation annuelle pour finaliser votre adhésion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-secondary/50">
        <div className="container mx-auto">
          <h2 className="section-title">Formulaire d'adhésion</h2>
          <p className="section-subtitle">
            Remplissez ce formulaire pour soumettre votre demande d'adhésion au CEERA. Nous vous contacterons dans les plus brefs délais.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <MembershipForm />
          </div>
        </div>
      </section>

      <section className="section bg-ceera-orange/10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Questions fréquentes</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2">Quel est le montant de la cotisation annuelle ?</h3>
                <p className="text-muted-foreground">
                  La cotisation annuelle s'élève à 5000 FCFA pour les élèves et 10000 FCFA pour les étudiants et professionnels. 
                  Cette cotisation sert à financer les activités et projets du collectif.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2">Quelles sont les obligations des membres ?</h3>
                <p className="text-muted-foreground">
                  Les membres du CEERA sont tenus de participer activement aux réunions et activités du collectif, 
                  de respecter les valeurs et règlements de l'association, et de s'acquitter de leur cotisation annuelle.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2">Puis-je rester membre après mes études ?</h3>
                <p className="text-muted-foreground">
                  Absolument ! Vous pouvez rester membre du CEERA après vos études en tant qu'ancien. 
                  Nous encourageons les anciens à continuer à soutenir et à participer aux activités du collectif.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2">Comment puis-je m'impliquer davantage dans le collectif ?</h3>
                <p className="text-muted-foreground">
                  Vous pouvez vous impliquer davantage en rejoignant l'une de nos commissions (culture, académique, sociale, etc.), 
                  en proposant des projets ou initiatives, ou en vous présentant aux élections du bureau exécutif.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2">Le CEERA offre-t-il des bourses d'études ?</h3>
                <p className="text-muted-foreground">
                  Oui, le CEERA offre chaque année un nombre limité de bourses d'études aux membres méritants et ayant des difficultés financières. 
                  Les critères et la procédure de candidature sont communiqués en début d'année académique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;
