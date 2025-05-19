
import { Card, CardContent } from '@/components/ui/card';
import HeroSection from '@/components/HeroSection';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Building, Users, FileText, Calendar, BookOpen, Heart, Handshake } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  position: string;
  description?: string;
  image?: string;
}

interface SecretariatProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  members: TeamMemberProps[];
}

const TeamMember = ({ name, position, description }: TeamMemberProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
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
        {description && (
          <p className="text-muted-foreground text-sm mt-2">{description}</p>
        )}
      </CardContent>
    </Card>
  );
};

const SecretariatSection = ({ title, description, icon, members }: SecretariatProps) => {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-2 mb-6">
        <div className="bg-ceera-orange/10 p-3 rounded-full">
          {icon}
        </div>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <p className="text-muted-foreground mb-8">{description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

const Team = () => {
  const secretariats: SecretariatProps[] = [
    {
      title: "Présidence",
      description: "Le Président est le chef du bureau exécutif. Il convoque les assemblées générales et les réunions, représente l'association dans tous les actes de la vie civile et est investi de tous les pouvoirs à cet effet.",
      icon: <Users className="h-6 w-6 text-ceera-orange" />,
      members: [
        {
          name: "OUATTARA DRISSA",
          position: "Président",
          description: "Chef du bureau exécutif, il convoque les assemblées générales et les réunions du bureau exécutif, représente l'association dans tous les actes de la vie civile."
        },
        {
          name: "Ouattara Abran Rose",
          position: "1er Vice-président",
          description: "Seconde le Président dans l'exercice de ses fonctions et le remplace en cas d'absence ou d'empêchement. Chargé des relations extérieures."
        },
        {
          name: "Ouattara Lamine",
          position: "2ème Vice-président",
          description: "Seconde le 1er vice-président et le remplace en cas d'absence ou d'empêchement. Chargé de tenir le cahier de secrétariat."
        }
      ]
    },
    {
      title: "Secrétariat Général",
      description: "Le Secrétaire Général est le responsable administratif de l'association. Il rédige les procès-verbaux des délibérations, assure la correspondance et garde les archives.",
      icon: <FileText className="h-6 w-6 text-ceera-orange" />,
      members: [
        {
          name: "Kouamé Kouadio Célestin",
          position: "Secrétaire Général",
          description: "Responsable administratif de l'association, il rédige les procès-verbaux, assure les correspondances et garde les archives de l'association."
        },
        {
          name: "Akoua Awa",
          position: "Secrétaire Général Adjoint 1"
        },
        {
          name: "ATTA yao vital",
          position: "Secrétaire Général Adjoint 2"
        }
      ]
    },
    {
      title: "Secrétariat à l'Organisation",
      description: "Le Secrétaire à l'Organisation assure l'organisation matérielle pratique de toutes les manifestations du CEERA (réunions, rencontres, conférences, débats, colloques, AG).",
      icon: <Calendar className="h-6 w-6 text-ceera-orange" />,
      members: [
        {
          name: "Kamagaté Lamine",
          position: "Secrétaire à l'Organisation",
          description: "Assure l'organisation matérielle pratique de toutes les manifestations du CEERA (réunions, rencontres, conférences, débats, colloques, AG)."
        },
        {
          name: "DIALLO ABOUBACAR",
          position: "Secrétaire à l'Organisation Adjoint 1"
        },
        {
          name: "AIGNON Philipe",
          position: "Secrétaire à l'Organisation Adjoint 2"
        }
      ]
    },
    {
      title: "Secrétariat à la Communication",
      description: "Le Secrétaire à la Communication est chargé de recueillir toutes les informations utiles intéressant directement ou indirectement le CEERA. Il est responsable des publications du collectif.",
      icon: <FileText className="h-6 w-6 text-ceera-orange" />,
      members: [
        {
          name: "Kumassi Koffi Kié Jean-Marc",
          position: "Secrétaire à la Communication",
          description: "Chargé de recueillir toutes les informations utiles intéressant directement ou indirectement le CEERA et des publications du CEERA."
        },
        {
          name: "Trinité Samson",
          position: "Secrétaire à la Communication Adjoint 1"
        },
        {
          name: "Kouadio Donatien",
          position: "Secrétaire à la Communication Adjoint 2"
        }
      ]
    },
    {
      title: "Secrétariat aux Finances",
      description: "Le Secrétaire aux Finances est chargé des affaires financières du CEERA. Il gère les versements et retraits mais ne peut faire ces mouvements qu'avec l'accord et la signature du Président.",
      icon: <FileText className="h-6 w-6 text-ceera-orange" />,
      members: [
        {
          name: "Palé Hibatoullah",
          position: "Secrétaire aux Finances",
          description: "Chargé des affaires financières du CEERA. Les versements et les retraits relèvent de ses attributions avec l'accord et la signature du Président."
        },
        {
          name: "Ouattara Mariam",
          position: "Secrétaire aux Finances Adjoint 1"
        },
        {
          name: "Kamagaté Sania",
          position: "Secrétaire aux Finances Adjoint 2"
        }
      ]
    },
    {
      title: "Secrétariat à la Culture et au Sport",
      description: "Le Secrétaire à la Culture et au Sport est chargé des affaires culturelles et sportives. Il organise les événements culturels, sportifs et récréatifs et défend l'image du CEERA dans ces domaines.",
      icon: <FileText className="h-6 w-6 text-ceera-orange" />,
      members: [
        {
          name: "Diallo Siriki Junior",
          position: "Secrétaire à la Culture et au Sport",
          description: "Chargé des affaires culturelles et sportives (sport, culture, séminaire, conférence, débats, colloques, forum, activités récréatives…)."
        },
        {
          name: "Ouattara Masara",
          position: "Secrétaire à la Culture et au Sport Adjoint 1"
        },
        {
          name: "Ouattara Yaya",
          position: "Secrétaire à la Culture et au Sport Adjoint 2"
        }
      ]
    },
    {
      title: "Secrétariat aux Affaires Sociales",
      description: "Le Secrétaire aux Affaires Sociales est chargé des problèmes de santé des élèves et étudiants, ainsi que de leurs problèmes sociaux (logements, bourses, restauration, transport).",
      icon: <Heart className="h-6 w-6 text-ceera-orange" />,
      members: [
        {
          name: "Ouattara Ibrahim",
          position: "Secrétaire aux Affaires Sociales",
          description: "Chargé des problèmes de santé des élèves et des étudiants. Responsable des problèmes sociaux (logements, bourses, restaurations, transports…)."
        },
        {
          name: "Fofana Salimata",
          position: "Secrétaire aux Affaires Sociales Adjoint 1"
        },
        {
          name: "Diallo Aïcha",
          position: "Secrétaire aux Affaires Sociales Adjoint 2"
        }
      ]
    },
    {
      title: "Secrétariat aux Affaires Académiques",
      description: "Le Secrétaire aux Affaires Académiques est chargé des questions scolaires et académiques comme les inscriptions, la scolarité, les examens, les orientations et veille aux droits et devoirs des élèves et étudiants.",
      icon: <BookOpen className="h-6 w-6 text-ceera-orange" />,
      members: [
        {
          name: "Geï Amos",
          position: "Secrétaire aux Affaires Académiques",
          description: "Chargé des affaires scolaires et académiques (droits et devoirs des élèves et étudiants, fonctionnement du système éducatif)."
        },
        {
          name: "Pini Léontine",
          position: "Secrétaire aux Affaires Académiques Adjoint 1"
        },
        {
          name: "Traoré Ramdé kadidjatou",
          position: "Secrétaire aux Affaires Académiques Adjoint 2"
        }
      ]
    },
    {
      title: "Secrétariat à l'Environnement",
      description: "Le Secrétaire à l'Environnement et au Développement Durable est chargé de la gestion saine et durable de l'environnement et du cadre de vie des élèves et étudiants.",
      icon: <FileText className="h-6 w-6 text-ceera-orange" />,
      members: [
        {
          name: "Ouattara Brou Prince Blanchard",
          position: "Secrétaire à l'Environnement",
          description: "Chargé de la gestion saine et durable de l'environnement et du cadre de vie des élèves et étudiants."
        },
        {
          name: "Ouattara Bakary",
          position: "Secrétaire à l'Environnement Adjoint 1"
        },
        {
          name: "Blendou Ange Mauricette",
          position: "Secrétaire à l'Environnement Adjoint 2"
        }
      ]
    },
    {
      title: "Secrétariat à l'Insertion Professionnelle",
      description: "Le Secrétaire à l'Insertion Professionnelle est chargé de trouver des stages et emplois pour les membres du Collectif. Il établit des partenariats avec des entreprises pour faciliter l'insertion des élèves et étudiants.",
      icon: <Handshake className="h-6 w-6 text-ceera-orange" />,
      members: [
        {
          name: "Kambou Ollo",
          position: "Secrétaire à l'Insertion Professionnelle",
          description: "Tenu de trouver des stages et/ou emplois pour les membres du Collectif. Mandaté pour trouver des entreprises et cabinets pour l'insertion des membres."
        },
        {
          name: "Ouattara Amie",
          position: "Secrétaire à l'Insertion Professionnelle Adjoint 1"
        },
        {
          name: "Boko Ama Valentine",
          position: "Secrétaire à l'Insertion Professionnelle Adjoint 2"
        }
      ]
    },
    {
      title: "Commissariat aux Comptes",
      description: "Les Commissaires aux Comptes contrôlent la gestion financière du bureau exécutif, examinent les comptes annuels et dressent un rapport spécial à l'Assemblée Générale. Ils peuvent vérifier l'état de la caisse à tout moment.",
      icon: <FileText className="h-6 w-6 text-ceera-orange" />,
      members: [
        {
          name: "YAO KOUADIO HENRI-JOEL",
          position: "Commissaire aux Comptes",
          description: "Chargé de contrôler la gestion financière du bureau exécutif et d'examiner et donner un avis sur la politique financière de l'association."
        },
        {
          name: "KOUASSI KOFFI ADAMA",
          position: "Commissaire aux Comptes Adjoint 1"
        },
        {
          name: "ADOU ANOH JONAS",
          position: "Commissaire aux Comptes Adjoint 2"
        }
      ]
    }
  ];

  return (
    <div>
      <HeroSection 
        title="L'Équipe du CEERA"
        subtitle="Découvrez le Bureau Exécutif National qui œuvre pour le développement du collectif"
        backgroundImage="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
        showLogo={true}
        height="small"
      />

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
            {secretariats.map((secretariat, index) => (
              <SecretariatSection 
                key={index} 
                title={secretariat.title} 
                description={secretariat.description}
                icon={secretariat.icon}
                members={secretariat.members}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
