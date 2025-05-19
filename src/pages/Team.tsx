
import { Card, CardContent } from '@/components/ui/card';
import HeroSection from '@/components/HeroSection';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Building, Users, FileText, Calendar, BookOpen, Heart, Handshake } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  position: string;
  image?: string;
}

interface SecretariatProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  members: TeamMemberProps[];
}

const TeamMember = ({
  name,
  position,
  image
}: TeamMemberProps) => {
  return <Card className="h-full hover:shadow-lg transition-shadow">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center mb-4">
          <Avatar className="h-20 w-20 mb-4">
            {image ? (
              <AvatarImage src={image} alt={name} />
            ) : (
              <AvatarFallback className="bg-ceera-orange/20 text-ceera-orange text-xl font-bold">
                {name.split(' ').map(part => part[0]).join('')}
              </AvatarFallback>
            )}
          </Avatar>
          <h3 className="text-xl font-bold text-center">{name}</h3>
          <p className="text-ceera-orange font-medium text-center">{position}</p>
        </div>
      </CardContent>
    </Card>;
};

const SecretariatSection = ({
  title,
  description,
  icon,
  members
}: SecretariatProps) => {
  return <div className="mb-16">
      <div className="flex items-center gap-2 mb-6">
        <div className="bg-ceera-orange/10 p-3 rounded-full">
          {icon}
        </div>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <p className="text-muted-foreground mb-8">{description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, index) => <TeamMember key={index} {...member} />)}
      </div>
    </div>;
};

const Team = () => {
  const secretariats: SecretariatProps[] = [{
    title: "Présidence",
    description: "La Présidence définit les orientations stratégiques du CEERA, représente l'association auprès des partenaires institutionnels, et coordonne l'ensemble des activités. Elle est responsable de la vision à long terme, veille au respect des statuts et règlements, supervise l'ensemble des secrétariats et prend les décisions finales concernant les grandes initiatives du collectif.",
    icon: <Users className="h-6 w-6 text-ceera-orange" />,
    members: [{
      name: "OUATTARA DRISSA",
      position: "Président",
      image: "/assets/team/president.jpg"
    }, {
      name: "Ouattara Abran Rose",
      position: "1er Vice-président",
      image: "/assets/team/vice-president-1.jpg"
    }, {
      name: "Ouattara Lamine",
      position: "2ème Vice-président",
      image: "/assets/team/vice-president-2.jpg"
    }]
  }, {
    title: "Secrétariat Général",
    description: "Le Secrétariat Général est la mémoire institutionnelle du CEERA, garantissant la continuité administrative et le bon fonctionnement des processus internes. Il rédige et conserve tous les documents officiels de l'association, assure la communication interne entre les différents organes, veille à l'application des décisions prises lors des assemblées générales et sert d'interface administrative avec les partenaires extérieurs.",
    icon: <FileText className="h-6 w-6 text-ceera-orange" />,
    members: [{
      name: "Kouamé Kouadio Célestin",
      position: "Secrétaire Général",
      image: "/assets/team/secretaire-general.jpg"
    }, {
      name: "Akoua Awa",
      position: "Secrétaire Général Adjoint 1",
      image: "/assets/team/secretaire-general-adj1.jpg"
    }, {
      name: "ATTA yao vital",
      position: "Secrétaire Général Adjoint 2",
      image: "/assets/team/secretaire-general-adj2.jpg"
    }]
  }, {
    title: "Secrétariat à l'Organisation",
    description: "Le Secrétariat à l'Organisation est le pilier logistique du CEERA, orchestrant avec précision toutes les manifestations du collectif. Il conçoit des plans d'action détaillés pour chaque événement, mobilise les ressources matérielles et humaines nécessaires, coordonne les différentes équipes impliquées et évalue l'efficacité des activités réalisées pour un perfectionnement continu des pratiques organisationnelles.",
    icon: <Calendar className="h-6 w-6 text-ceera-orange" />,
    members: [{
      name: "Kamagaté Lamine",
      position: "Secrétaire à l'Organisation",
      image: "/assets/team/secretaire-organisation.jpg"
    }, {
      name: "DIALLO ABOUBACAR",
      position: "Secrétaire à l'Organisation Adjoint 1",
      image: "/assets/team/secretaire-organisation-adj1.jpg"
    }, {
      name: "AIGNON Philipe",
      position: "Secrétaire à l'Organisation Adjoint 2",
      image: "/assets/team/secretaire-organisation-adj2.jpg"
    }]
  }, {
    title: "Secrétariat à la Communication",
    description: "Le Secrétariat à la Communication est l'architecte de l'image et de la notoriété du CEERA. Il élabore une stratégie de communication multicanale, crée des contenus attractifs et informatifs, anime les réseaux sociaux et le site web, développe des relations presse constructives, et mesure l'impact des campagnes de communication pour optimiser la visibilité et l'influence du collectif auprès de tous ses publics.",
    icon: <FileText className="h-6 w-6 text-ceera-orange" />,
    members: [{
      name: "Kumassi Koffi Kié Jean-Marc",
      position: "Secrétaire à la Communication",
      image: "/assets/team/secretaire-communication.jpg"
    }, {
      name: "Trinité Samson",
      position: "Secrétaire à la Communication Adjoint 1",
      image: "/assets/team/secretaire-communication-adj1.jpg"
    }, {
      name: "Kouadio Donatien",
      position: "Secrétaire à la Communication Adjoint 2",
      image: "/assets/team/secretaire-communication-adj2.jpg"
    }]
  }, {
    title: "Secrétariat aux Finances",
    description: "Le Secrétariat aux Finances est le gardien de la santé économique du CEERA. Il assure une gestion rigoureuse et transparente des ressources financières, développe des stratégies de diversification des sources de financement, optimise l'allocation des budgets entre les différents projets, veille à la conformité fiscale de l'association, et fournit des analyses précises pour éclairer les décisions stratégiques du bureau exécutif.",
    icon: <FileText className="h-6 w-6 text-ceera-orange" />,
    members: [{
      name: "Palé Hibatoullah",
      position: "Secrétaire aux Finances",
      image: "/assets/team/secretaire-finances.jpg"
    }, {
      name: "Ouattara Mariam",
      position: "Secrétaire aux Finances Adjoint 1",
      image: "/assets/team/secretaire-finances-adj1.jpg"
    }, {
      name: "Kamagaté Sania",
      position: "Secrétaire aux Finances Adjoint 2",
      image: "/assets/team/secretaire-finances-adj2.jpg"
    }]
  }, {
    title: "Secrétariat à la Culture et au Sport",
    description: "Le Secrétariat à la Culture et au Sport est l'âme vibrante du CEERA, célébrant l'identité culturelle d'Agnibilékrou et favorisant l'épanouissement physique des membres. Il organise des événements culturels innovants qui valorisent le patrimoine local, développe des programmes sportifs adaptés à tous les niveaux, crée des espaces d'échange interculturel, et utilise ces activités comme leviers de cohésion sociale et d'intégration au sein du collectif.",
    icon: <FileText className="h-6 w-6 text-ceera-orange" />,
    members: [{
      name: "Diallo Siriki Junior",
      position: "Secrétaire à la Culture et au Sport",
      image: "/assets/team/secretaire-culture-sport.jpg"
    }, {
      name: "Ouattara Masara",
      position: "Secrétaire à la Culture et au Sport Adjoint 1",
      image: "/assets/team/secretaire-culture-sport-adj1.jpg"
    }, {
      name: "Ouattara Yaya",
      position: "Secrétaire à la Culture et au Sport Adjoint 2",
      image: "/assets/team/secretaire-culture-sport-adj2.jpg"
    }]
  }, {
    title: "Secrétariat aux Affaires Sociales",
    description: "Le Secrétariat aux Affaires Sociales est le cœur bienveillant du CEERA, attentif aux besoins individuels des membres. Il met en place des mécanismes d'identification des situations de vulnérabilité, développe des programmes d'aide spécifiques (soutien financier, accompagnement moral, orientation vers des services spécialisés), renforce les liens de solidarité entre les membres, et promeut le bien-être collectif à travers des initiatives inclusives adaptées aux réalités socioéconomiques des adhérents.",
    icon: <Heart className="h-6 w-6 text-ceera-orange" />,
    members: [{
      name: "Ouattara Ibrahim",
      position: "Secrétaire aux Affaires Sociales",
      image: "/assets/team/secretaire-affaires-sociales.jpg"
    }, {
      name: "Fofana Salimata",
      position: "Secrétaire aux Affaires Sociales Adjoint 1",
      image: "/assets/team/secretaire-affaires-sociales-adj1.jpg"
    }, {
      name: "Diallo Aïcha",
      position: "Secrétaire aux Affaires Sociales Adjoint 2",
      image: "/assets/team/secretaire-affaires-sociales-adj2.jpg"
    }]
  }, {
    title: "Secrétariat aux Affaires Académiques",
    description: "Le Secrétariat aux Affaires Académiques est le catalyseur de l'excellence intellectuelle au sein du CEERA. Il analyse les besoins éducatifs des membres, conçoit des programmes de soutien scolaire personnalisés, organise des ateliers thématiques sur des sujets d'actualité, facilite l'accès aux ressources pédagogiques, développe des partenariats avec des institutions académiques, et accompagne les membres dans la définition et la réalisation de leurs projets d'études.",
    icon: <BookOpen className="h-6 w-6 text-ceera-orange" />,
    members: [{
      name: "Guei Gnomblehi Amos",
      position: "Secrétaire aux Affaires Académiques",
      image: "/assets/team/secretaire-affaires-academiques.jpg"
    }, {
      name: "Pini Léontine",
      position: "Secrétaire aux Affaires Académiques Adjoint 1",
      image: "/assets/team/secretaire-affaires-academiques-adj1.jpg"
    }, {
      name: "Traoré Ramdé kadidjatou",
      position: "Secrétaire aux Affaires Académiques Adjoint 2",
      image: "/assets/team/secretaire-affaires-academiques-adj2.jpg"
    }]
  }, {
    title: "Secrétariat à l'Environnement",
    description: "Le Secrétariat à l'Environnement est le gardien de l'engagement écologique du CEERA. Il développe une stratégie environnementale globale pour l'association, met en œuvre des projets concrets de protection de la biodiversité locale, sensibilise les membres et la communauté aux enjeux climatiques, promeut des pratiques écoresponsables dans toutes les activités du collectif, et évalue régulièrement l'impact environnemental des initiatives pour garantir une approche véritablement durable.",
    icon: <FileText className="h-6 w-6 text-ceera-orange" />,
    members: [{
      name: "Ouattara Brou Prince Blanchard",
      position: "Secrétaire à l'Environnement",
      image: "/assets/team/secretaire-environnement.jpg"
    }, {
      name: "Ouattara Bakary",
      position: "Secrétaire à l'Environnement Adjoint 1",
      image: "/assets/team/secretaire-environnement-adj1.jpg"
    }, {
      name: "Blendou Ange Mauricette",
      position: "Secrétaire à l'Environnement Adjoint 2",
      image: "/assets/team/secretaire-environnement-adj2.jpg"
    }]
  }, {
    title: "Secrétariat à l'Insertion Professionnelle",
    description: "Le Secrétariat à l'Insertion Professionnelle est l'architecte des carrières professionnelles des membres du CEERA. Il cartographie le marché de l'emploi local et national, crée des passerelles avec le monde de l'entreprise, organise des formations ciblées sur les compétences recherchées par les employeurs, propose un coaching personnalisé pour la recherche d'emploi, et développe un réseau d'alumni pour favoriser le partage d'opportunités et d'expériences professionnelles.",
    icon: <Handshake className="h-6 w-6 text-ceera-orange" />,
    members: [{
      name: "Kambou Ollo",
      position: "Secrétaire à l'Insertion Professionnelle",
      image: "/assets/team/secretaire-insertion-professionnelle.jpg"
    }, {
      name: "Ouattara Amie",
      position: "Secrétaire à l'Insertion Professionnelle Adjoint 1",
      image: "/assets/team/secretaire-insertion-professionnelle-adj1.jpg"
    }, {
      name: "Boko Ama Valentine",
      position: "Secrétaire à l'Insertion Professionnelle Adjoint 2",
      image: "/assets/team/secretaire-insertion-professionnelle-adj2.jpg"
    }]
  }, {
    title: "Commissariat aux Comptes",
    description: "Le Commissariat aux Comptes est le pilier de l'intégrité financière et de la gouvernance transparente du CEERA. Il effectue des audits indépendants et rigoureux de toutes les transactions financières, analyse l'adéquation entre les dépenses réalisées et les objectifs de l'association, formule des recommandations pour optimiser la gestion des ressources, et présente des rapports objectifs qui renforcent la confiance des membres et des partenaires dans la bonne gestion du collectif.",
    icon: <FileText className="h-6 w-6 text-ceera-orange" />,
    members: [{
      name: "YAO KOUADIO HENRI-JOEL",
      position: "Commissaire aux Comptes",
      image: "/assets/team/commissaire-comptes.jpg"
    }, {
      name: "KOUASSI KOFFI ADAMA",
      position: "Commissaire aux Comptes Adjoint 1",
      image: "/assets/team/commissaire-comptes-adj1.jpg"
    }, {
      name: "ADOU ANOH JONAS",
      position: "Commissaire aux Comptes Adjoint 2",
      image: "/assets/team/commissaire-comptes-adj2.jpg"
    }]
  }];
  return <div>
      <HeroSection title="L'Équipe du CEERA" subtitle="Découvrez le Bureau Exécutif National qui œuvre pour le développement du collectif" backgroundImage="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" showLogo={true} height="small" />

      <section className="section bg-gradient-to-r from-ceera-orange/20 to-ceera-orange/5">
        <div className="container mx-auto">
          <h2 className="section-title">Bureau Exécutif National (2025-2027)</h2>
          <p className="section-subtitle">
            Notre bureau exécutif est composé de membres dévoués qui travaillent avec passion pour atteindre les objectifs du CEERA.
            Le Bureau Exécutif National actuel a été élu pour un mandat de deux ans, s'étendant de 2025 à 2027.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto">
          <h2 className="section-title">Structure Organisationnelle</h2>
          <p className="section-subtitle mb-16">
            Le CEERA est structuré autour d'un Bureau Exécutif National (BEN) élu pour un mandat de 2 ans, 
            composé de différents secrétariats qui travaillent en synergie pour atteindre les objectifs de l'association.
          </p>
          
          <div className="space-y-16">
            {secretariats.map((secretariat, index) => <SecretariatSection key={index} title={secretariat.title} description={secretariat.description} icon={secretariat.icon} members={secretariat.members} />)}
          </div>
        </div>
      </section>
    </div>;
};
export default Team;
