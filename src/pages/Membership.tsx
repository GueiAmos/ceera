
import HeroSection from '@/components/HeroSection';
import MembershipForm from '@/components/MembershipForm';
import { Card } from '@/components/CardSection';
import { CheckCircle, AlertCircle, Users, Award, Heart, BookOpen, Calendar, User, FileText } from 'lucide-react';

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

  const supportBenefits = [
    {
      icon: <Users className="h-6 w-6 text-ceera-orange" />,
      title: "Soutien en cas de maladie grave",
      description: "Une cotisation exceptionnelle d'au moins 1000 FCFA de chaque membre est allouée en cas de maladie grave d'un membre actif."
    },
    {
      icon: <Heart className="h-6 w-6 text-ceera-orange" />,
      title: "Soutien en cas de décès d'un parent",
      description: "En cas de décès d'un parent (père, mère) d'un membre actif, une cotisation exceptionnelle est fixée par l'Assemblée générale (min. 500 FCFA), plus un apport de caisse de 5000 FCFA."
    },
    {
      icon: <Award className="h-6 w-6 text-ceera-orange" />,
      title: "Soutien pour le mariage",
      description: "En cas de mariage donnant lieu à une manifestation organisée par le membre, une cotisation de 1000 FCFA de chaque membre est allouée."
    },
    {
      icon: <User className="h-6 w-6 text-ceera-orange" />,
      title: "Soutien pour une naissance",
      description: "En cas de naissance, un montant de 500 FCFA de chaque membre plus d'autres présents sont alloués au membre."
    }
  ];

  const secretariats = [
    {
      title: "Présidence",
      description: "Le Président est le chef du bureau exécutif. Il convoque les assemblées générales et les réunions, veille à l'application des délibérations et représente l'association dans tous les actes de la vie civile. Il est assisté de deux Vice-Présidents qui le remplacent en cas d'absence.",
      icon: <User className="h-6 w-6 text-ceera-orange" />
    },
    {
      title: "Secrétariat Général",
      description: "Le Secrétaire Général est le responsable administratif de l'association. Il rédige les procès-verbaux des délibérations, assure la correspondance et garde les archives. Il est assisté de deux adjoints.",
      icon: <FileText className="h-6 w-6 text-ceera-orange" />
    },
    {
      title: "Secrétariat à l'Organisation",
      description: "Le Secrétaire à l'Organisation assure l'organisation matérielle pratique de toutes les manifestations du CEERA (réunions, rencontres, conférences, débats, colloques, AG). Il est assisté de deux adjoints.",
      icon: <Calendar className="h-6 w-6 text-ceera-orange" />
    },
    {
      title: "Secrétariat aux Finances",
      description: "Le Secrétaire aux Finances est chargé des affaires financières du CEERA. Il gère les versements et retraits mais ne peut faire ces mouvements qu'avec l'accord et la signature du Président. Il établit un programme de recherche de financement.",
      icon: <FileText className="h-6 w-6 text-ceera-orange" />
    },
    {
      title: "Secrétariat à la Communication",
      description: "Le Secrétaire à la Communication est chargé de recueillir toutes les informations utiles intéressant directement ou indirectement le CEERA. Il est responsable des publications du collectif et assure la communication entre les différents organes.",
      icon: <FileText className="h-6 w-6 text-ceera-orange" />
    },
    {
      title: "Secrétariat à la Culture et au Sport",
      description: "Le Secrétaire à la Culture et au Sport est chargé des affaires culturelles et sportives. Il organise les événements culturels, sportifs et récréatifs et défend l'image du CEERA dans ces domaines.",
      icon: <FileText className="h-6 w-6 text-ceera-orange" />
    },
    {
      title: "Secrétariat aux Affaires Sociales",
      description: "Le Secrétaire aux Affaires Sociales est chargé des problèmes de santé des élèves et étudiants, ainsi que de leurs problèmes sociaux (logements, bourses, restauration, transport). Il met en place des programmes de soutien moral, matériel et financier.",
      icon: <Heart className="h-6 w-6 text-ceera-orange" />
    },
    {
      title: "Secrétariat aux Affaires Académiques",
      description: "Le Secrétaire aux Affaires Académiques est chargé des questions scolaires et académiques comme les inscriptions, la scolarité, les examens, les orientations et veille aux droits et devoirs des élèves et étudiants.",
      icon: <BookOpen className="h-6 w-6 text-ceera-orange" />
    },
    {
      title: "Secrétariat au Développement Durable",
      description: "Le Secrétaire au Développement Durable est chargé de la gestion saine et durable de l'environnement et du cadre de vie. Il veille à la salubrité et œuvre à préserver les ressources naturelles et l'équilibre écologique.",
      icon: <FileText className="h-6 w-6 text-ceera-orange" />
    },
    {
      title: "Secrétariat à l'Insertion Professionnelle",
      description: "Le Secrétaire à l'Insertion Professionnelle est chargé de trouver des stages et emplois pour les membres du Collectif. Il établit des partenariats avec des entreprises et d'autres structures pour faciliter l'insertion des élèves et étudiants.",
      icon: <FileText className="h-6 w-6 text-ceera-orange" />
    },
    {
      title: "Commissariat aux Comptes",
      description: "Les Commissaires aux Comptes contrôlent la gestion financière du bureau exécutif, examinent les comptes annuels et dressent un rapport spécial à l'Assemblée Générale. Ils peuvent vérifier l'état de la caisse à tout moment.",
      icon: <FileText className="h-6 w-6 text-ceera-orange" />
    }
  ];

  return (
    <div>
      <HeroSection 
        title="Rejoignez notre collectif"
        subtitle="Devenez membre du CEERA et participez à nos initiatives"
        backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
        showLogo={true}
      />

      <section className="section bg-white">
        <div className="container mx-auto">
          <h2 className="section-title">Qui peut devenir membre ?</h2>
          <p className="section-subtitle">
            Le CEERA accueille les ressortissants d'Agnibilékrou selon les critères définis dans nos statuts.
          </p>
          
          <div className="grid md:grid-cols-2 gap-10 items-center mt-8">
            <div className="bg-secondary/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center text-ceera-orange">
                <CheckCircle className="mr-2" size={24} />
                Critères d'éligibilité
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-ceera-orange/20 rounded-full p-1 mt-1 mr-3">
                    <CheckCircle size={16} className="text-ceera-orange" />
                  </div>
                  <p>Être ressortissant d'Agnibilékrou</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-ceera-orange/20 rounded-full p-1 mt-1 mr-3">
                    <CheckCircle size={16} className="text-ceera-orange" />
                  </div>
                  <p>Avoir le statut d'élève ou d'étudiant</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-ceera-orange/20 rounded-full p-1 mt-1 mr-3">
                    <CheckCircle size={16} className="text-ceera-orange" />
                  </div>
                  <p>S'engager volontairement à respecter les statuts et le règlement intérieur de l'association</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-secondary/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center text-ceera-orange">
                <AlertCircle className="mr-2" size={24} />
                Comment adhérer ?
              </h3>
              <p className="mb-4">
                L'adhésion au CEERA est simple et accessible :
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-ceera-orange/20 rounded-full p-1 mt-1 mr-3">
                    <CheckCircle size={16} className="text-ceera-orange" />
                  </div>
                  <p>Payer la somme unique de <strong>1000 FCFA</strong> comme droit d'adhésion</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-ceera-orange/20 rounded-full p-1 mt-1 mr-3">
                    <CheckCircle size={16} className="text-ceera-orange" />
                  </div>
                  <p>Ce paiement vous donne droit à une carte de membre officielle du CEERA</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-ceera-orange/20 rounded-full p-1 mt-1 mr-3">
                    <CheckCircle size={16} className="text-ceera-orange" />
                  </div>
                  <p>Remplir le formulaire d'adhésion ci-dessous ou contacter directement les responsables</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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

      <section className="section bg-white">
        <div className="container mx-auto">
          <h2 className="section-title">Structure organisationnelle</h2>
          <p className="section-subtitle">
            Le CEERA fonctionne grâce à différents secrétariats, chacun avec ses responsabilités spécifiques pour assurer le bon fonctionnement du collectif.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {secretariats.map((secretariat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-ceera-orange/10 p-2 rounded-full mr-3">
                    {secretariat.icon}
                  </div>
                  <h3 className="text-xl font-bold">{secretariat.title}</h3>
                </div>
                <p className="text-gray-600">
                  {secretariat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ceera-dark text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Soutien aux membres</h2>
          <p className="text-lg max-w-3xl mx-auto text-center mb-12">
            En plus des objectifs généraux, le CEERA apporte un soutien concret à ses membres dans plusieurs situations importantes de la vie.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supportBenefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-white/10 p-2 rounded-full mr-3">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                </div>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
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
            <h2 className="section-title">Questions fréquentes sur l'adhésion</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2">Quel est le montant de la cotisation annuelle ?</h3>
                <p className="text-muted-foreground">
                  L'adhésion au CEERA se fait par un paiement unique de 1000 FCFA comme droit d'adhésion. Les membres actifs paient ensuite des cotisations mensuelles de 500 FCFA (membres réguliers) ou 1000 FCFA (membres du bureau). Des cotisations exceptionnelles peuvent être demandées pour des événements spécifiques ou des actions de solidarité.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2">Quelles sont les obligations des membres ?</h3>
                <p className="text-muted-foreground">
                  Selon l'Article 7 du règlement intérieur, les membres actifs ont le devoir de s'acquitter de leurs différentes cotisations, participer à toutes les réunions, et respecter les décisions et délibérations du bureau exécutif et de l'Assemblée générale.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2">Puis-je rester membre après mes études ?</h3>
                <p className="text-muted-foreground">
                  Oui, vous pouvez rester membre du CEERA après vos études en tant qu'ancien. 
                  Nous encourageons les anciens à continuer à soutenir et à participer aux activités du collectif.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2">Comment puis-je m'impliquer davantage dans le collectif ?</h3>
                <p className="text-muted-foreground">
                  Vous pouvez vous impliquer davantage en rejoignant l'un de nos secrétariats, en proposant des projets ou initiatives, ou en vous présentant aux élections du bureau exécutif qui ont lieu tous les deux ans.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2">Je viens d'obtenir mon baccalauréat, puis-je rejoindre le CEERA ?</h3>
                <p className="text-muted-foreground">
                  Absolument ! Le CEERA permet justement aux nouveaux bacheliers de s'intégrer et de se sentir en famille
                  où qu'ils soient orientés pour leurs études supérieures. Nous vous encourageons vivement à nous rejoindre 
                  dès l'obtention de votre baccalauréat.
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
