
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
  position
}: TeamMemberProps) => {
  return <Card className="h-full hover:shadow-lg transition-shadow">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center mb-4">
          <Avatar className="h-20 w-20 mb-4 bg-ceera-orange/20">
            <AvatarFallback className="bg-ceera-orange/20 text-ceera-orange text-xl font-bold">
              {name.split(' ').map(part => part[0]).join('')}
            </AvatarFallback>
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
    description: "La Présidence constitue l'autorité suprême du CEERA. Elle est chargée de définir les orientations stratégiques, de représenter l'association auprès des partenaires institutionnels et d'assurer la coordination générale des activités. La présidence veille au respect des statuts et règlements, supervise l'ensemble des secrétariats et prend les décisions finales concernant les initiatives importantes du collectif.",
    icon: <Users className="h-6 w-6 text-ceera-orange" />,
    members: [{
      name: "OUATTARA DRISSA",
      position: "Président"
    }, {
      name: "Ouattara Abran Rose",
      position: "1er Vice-président"
    }, {
      name: "Ouattara Lamine",
      position: "2ème Vice-président"
    }]
  }, {
    title: "Secrétariat Général",
    description: "Le Secrétariat Général constitue la mémoire institutionnelle de l'association. En plus de rédiger les procès-verbaux des réunions, il gère la correspondance officielle, tient à jour l'ensemble des archives administratives et assure le suivi des décisions prises lors des assemblées générales. Il est également en charge de la documentation de tous les événements importants et sert d'interface administrative entre les différentes structures du CEERA.",
    icon: <FileText className="h-6 w-6 text-ceera-orange" />,
    members: [{
      name: "Kouamé Kouadio Célestin",
      position: "Secrétaire Général"
    }, {
      name: "Akoua Awa",
      position: "Secrétaire Général Adjoint 1"
    }, {
      name: "ATTA yao vital",
      position: "Secrétaire Général Adjoint 2"
    }]
  }, {
    title: "Secrétariat à l'Organisation",
    description: "Le Secrétariat à l'Organisation est la pierre angulaire de la mise en œuvre des activités du CEERA. Il élabore le calendrier des manifestations, coordonne la logistique de tous les événements, gère les ressources matérielles et assure le bon déroulement des assemblées générales et des différentes rencontres. Ce secrétariat travaille en étroite collaboration avec les autres secrétariats pour garantir l'exécution efficace de tous les projets du collectif.",
    icon: <Calendar className="h-6 w-6 text-ceera-orange" />,
    members: [{
      name: "Kamagaté Lamine",
      position: "Secrétaire à l'Organisation"
    }, {
      name: "DIALLO ABOUBACAR",
      position: "Secrétaire à l'Organisation Adjoint 1"
    }, {
      name: "AIGNON Philipe",
      position: "Secrétaire à l'Organisation Adjoint 2"
    }]
  }, {
    title: "Secrétariat à la Communication",
    description: "Le Secrétariat à la Communication joue un rôle crucial dans la visibilité et le rayonnement du CEERA. Il développe et met en œuvre la stratégie de communication du collectif, gère les réseaux sociaux, produit les supports de communication (affiches, flyers, vidéos), et assure les relations avec la presse. Ce secrétariat est également responsable de la diffusion des informations importantes auprès des membres et veille à la cohérence de l'image du CEERA.",
    icon: <FileText className="h-6 w-6 text-ceera-orange" />,
    members: [{
      name: "Kumassi Koffi Kié Jean-Marc",
      position: "Secrétaire à la Communication"
    }, {
      name: "Trinité Samson",
      position: "Secrétaire à la Communication Adjoint 1"
    }, {
      name: "Kouadio Donatien",
      position: "Secrétaire à la Communication Adjoint 2"
    }]
  }, {
    title: "Secrétariat aux Finances",
    description: "Le Secrétariat aux Finances est le garant de la santé financière du CEERA. Il élabore le budget prévisionnel, collecte les cotisations, gère les dépenses, recherche des financements extérieurs et tient une comptabilité rigoureuse des ressources de l'association. Ce secrétariat établit également des rapports financiers réguliers, veille à la transparence des opérations financières et conseille la présidence sur les questions budgétaires.",
    icon: <FileText className="h-6 w-6 text-ceera-orange" />,
    members: [{
      name: "Palé Hibatoullah",
      position: "Secrétaire aux Finances"
    }, {
      name: "Ouattara Mariam",
      position: "Secrétaire aux Finances Adjoint 1"
    }, {
      name: "Kamagaté Sania",
      position: "Secrétaire aux Finances Adjoint 2"
    }]
  }, {
    title: "Secrétariat à la Culture et au Sport",
    description: "Le Secrétariat à la Culture et au Sport est le moteur de la vie socioculturelle du collectif. Il conçoit et organise les événements culturels et sportifs, valorise le patrimoine culturel d'Agnibilékrou, encourage la pratique sportive parmi les membres, et favorise les échanges interculturels. Ce secrétariat joue un rôle essentiel dans le renforcement du sentiment d'appartenance et la cohésion entre les membres du CEERA à travers des activités ludiques et enrichissantes.",
    icon: <FileText className="h-6 w-6 text-ceera-orange" />,
    members: [{
      name: "Diallo Siriki Junior",
      position: "Secrétaire à la Culture et au Sport"
    }, {
      name: "Ouattara Masara",
      position: "Secrétaire à la Culture et au Sport Adjoint 1"
    }, {
      name: "Ouattara Yaya",
      position: "Secrétaire à la Culture et au Sport Adjoint 2"
    }]
  }, {
    title: "Secrétariat aux Affaires Sociales",
    description: "Le Secrétariat aux Affaires Sociales est le cœur solidaire du CEERA. Il identifie les besoins sociaux des membres, apporte une assistance en cas de difficultés (maladie, décès d'un proche), facilite l'accès aux services essentiels (logement, restauration), et organise des actions de soutien collectif. Ce secrétariat est particulièrement attentif aux situations de précarité et met en œuvre des mécanismes d'entraide pour renforcer la solidarité au sein du collectif.",
    icon: <Heart className="h-6 w-6 text-ceera-orange" />,
    members: [{
      name: "Ouattara Ibrahim",
      position: "Secrétaire aux Affaires Sociales"
    }, {
      name: "Fofana Salimata",
      position: "Secrétaire aux Affaires Sociales Adjoint 1"
    }, {
      name: "Diallo Aïcha",
      position: "Secrétaire aux Affaires Sociales Adjoint 2"
    }]
  }, {
    title: "Secrétariat aux Affaires Académiques",
    description: "Le Secrétariat aux Affaires Académiques est le pilier du développement intellectuel des membres. Il organise des sessions de soutien scolaire et universitaire, informe sur les opportunités d'études et de bourses, veille au respect des droits des étudiants, et met en place des formations complémentaires. Ce secrétariat travaille à l'amélioration des performances académiques des membres et à leur orientation vers les filières les plus adaptées à leurs profils.",
    icon: <BookOpen className="h-6 w-6 text-ceera-orange" />,
    members: [{
      name: "Geï Amos",
      position: "Secrétaire aux Affaires Académiques"
    }, {
      name: "Pini Léontine",
      position: "Secrétaire aux Affaires Académiques Adjoint 1"
    }, {
      name: "Traoré Ramdé kadidjatou",
      position: "Secrétaire aux Affaires Académiques Adjoint 2"
    }]
  }, {
    title: "Secrétariat à l'Environnement",
    description: "Le Secrétariat à l'Environnement porte la vision écologique du CEERA. Il sensibilise les membres aux enjeux environnementaux, organise des actions concrètes de protection de l'environnement (reboisement, nettoyage), promeut les pratiques écologiques responsables, et développe des partenariats avec des organismes spécialisés. Ce secrétariat joue un rôle crucial dans l'engagement du collectif pour la préservation de l'environnement d'Agnibilékrou.",
    icon: <FileText className="h-6 w-6 text-ceera-orange" />,
    members: [{
      name: "Ouattara Brou Prince Blanchard",
      position: "Secrétaire à l'Environnement"
    }, {
      name: "Ouattara Bakary",
      position: "Secrétaire à l'Environnement Adjoint 1"
    }, {
      name: "Blendou Ange Mauricette",
      position: "Secrétaire à l'Environnement Adjoint 2"
    }]
  }, {
    title: "Secrétariat à l'Insertion Professionnelle",
    description: "Le Secrétariat à l'Insertion Professionnelle est la passerelle vers le monde du travail. Il développe un réseau de partenaires professionnels, identifie des opportunités de stages et d'emplois, organise des ateliers de préparation à l'emploi (CV, entretiens), et accompagne les membres dans leur transition vers la vie active. Ce secrétariat travaille à faciliter l'intégration professionnelle des membres du CEERA et à renforcer leur employabilité.",
    icon: <Handshake className="h-6 w-6 text-ceera-orange" />,
    members: [{
      name: "Kambou Ollo",
      position: "Secrétaire à l'Insertion Professionnelle"
    }, {
      name: "Ouattara Amie",
      position: "Secrétaire à l'Insertion Professionnelle Adjoint 1"
    }, {
      name: "Boko Ama Valentine",
      position: "Secrétaire à l'Insertion Professionnelle Adjoint 2"
    }]
  }, {
    title: "Commissariat aux Comptes",
    description: "Le Commissariat aux Comptes est le garant de la transparence financière du CEERA. Il procède à des audits réguliers des comptes, vérifie la conformité des dépenses avec les décisions prises, évalue la pertinence des choix financiers, et présente des rapports indépendants lors des assemblées générales. Cette structure autonome joue un rôle essentiel dans la bonne gouvernance de l'association et la confiance des membres.",
    icon: <FileText className="h-6 w-6 text-ceera-orange" />,
    members: [{
      name: "YAO KOUADIO HENRI-JOEL",
      position: "Commissaire aux Comptes"
    }, {
      name: "KOUASSI KOFFI ADAMA",
      position: "Commissaire aux Comptes Adjoint 1"
    }, {
      name: "ADOU ANOH JONAS",
      position: "Commissaire aux Comptes Adjoint 2"
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
