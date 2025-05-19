
import HeroSection from '@/components/HeroSection';
import { FileText, User, BookOpen, Calendar, Award, Heart, Handshake, Target } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  position: string;
  description?: string;
  image?: string;
}

const TeamMember = ({ name, position, description, image }: TeamMemberProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-60 overflow-hidden bg-ceera-orange/20">
        {image ? (
          <img 
            src={image} 
            alt={`Photo de ${name}`} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            <div className="h-32 w-32 bg-ceera-orange/30 rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-ceera-orange">
                {name.split(' ').map(part => part[0]).join('')}
              </span>
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-ceera-orange font-medium mb-3">{position}</p>
        {description && (
          <p className="text-muted-foreground text-sm">{description}</p>
        )}
      </div>
    </div>
  );
};

const Team = () => {
  const presidenceMembers: TeamMemberProps[] = [
    {
      name: "OUATTARA DRISSA",
      position: "Président",
      description: "Chef du bureau exécutif, il convoque les assemblées générales et les réunions du bureau exécutif, représente l'association dans tous les actes de la vie civile et est investi de tous les pouvoirs à cet effet."
    },
    {
      name: "Ouattara Abran Rose",
      position: "1er Vice-président",
      description: "Seconde le Président dans l'exercice de ses fonctions et le remplace en cas d'absence ou d'empêchement. En outre, est chargé des relations extérieures."
    },
    {
      name: "Ouattara Lamine",
      position: "2ème Vice-président",
      description: "Seconde le 1er vice-président et le remplace en cas d'absence ou d'empêchement. Chargé de tenir le cahier de secrétariat et de conserver les documents et archives du CEERA."
    }
  ];

  const secretariatMembers: TeamMemberProps[] = [
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
  ];

  const organizationMembers: TeamMemberProps[] = [
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
  ];

  const communicationMembers: TeamMemberProps[] = [
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
  ];

  const financeMembers: TeamMemberProps[] = [
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
  ];

  const cultureSportMembers: TeamMemberProps[] = [
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
  ];

  const socialAffairsMembers: TeamMemberProps[] = [
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
  ];

  const academicAffairsMembers: TeamMemberProps[] = [
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
  ];

  const environmentMembers: TeamMemberProps[] = [
    {
      name: "Ouattara Brou Prince Blanchard",
      position: "Secrétaire à l'Environnement et au Développement Durable",
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
  ];

  const professionalInsertionMembers: TeamMemberProps[] = [
    {
      name: "Kambou Ollo",
      position: "Secrétaire à l'Insertion Professionnelle et à l'Entrepreneuriat",
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
  ];

  const auditMembers: TeamMemberProps[] = [
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
        title="L'Équipe du CEERA"
        subtitle="Découvrez le Bureau Exécutif National qui œuvre pour le développement du collectif"
        backgroundImage="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
        showLogo={true}
        height="small"
      />

      <section className="section bg-ceera-orange/10">
        <div className="container mx-auto">
          <h2 className="section-title">Bureau Exécutif National (2025-2027)</h2>
          <p className="section-subtitle">
            Notre bureau exécutif est composé de membres dévoués qui travaillent avec passion pour atteindre les objectifs du CEERA.
          </p>

          <div className="bg-gradient-to-r from-ceera-orange/20 to-ceera-orange/5 p-6 rounded-lg mb-16">
            <h3 className="text-2xl font-bold mb-4 text-center">Mandat 2025-2027</h3>
            <p className="text-center">
              Le Bureau Exécutif National actuel a été élu pour un mandat de deux ans, s'étendant de 2025 à 2027. 
              Chaque membre s'engage à œuvrer pour le développement du CEERA et le bien-être de ses adhérents.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto">
          <h2 className="section-title">Structure Organisationnelle</h2>
          <p className="section-subtitle">
            Le CEERA est structuré autour d'un Bureau Exécutif National (BEN) élu pour un mandat de 2 ans, composé de différents secrétariats qui travaillent en synergie pour atteindre les objectifs de l'association.
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

      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="mb-20">
            <h3 className="text-xl font-bold mb-6 border-l-4 border-ceera-orange pl-3">La Présidence</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {presidenceMembers.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-xl font-bold mb-6 border-l-4 border-ceera-orange pl-3">Le Secrétariat Général</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {secretariatMembers.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-xl font-bold mb-6 border-l-4 border-ceera-orange pl-3">Le Secrétariat à l'Organisation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {organizationMembers.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-xl font-bold mb-6 border-l-4 border-ceera-orange pl-3">Le Secrétariat à la Communication</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {communicationMembers.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-xl font-bold mb-6 border-l-4 border-ceera-orange pl-3">Le Secrétariat aux Finances</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {financeMembers.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-xl font-bold mb-6 border-l-4 border-ceera-orange pl-3">Le Secrétariat à la Culture et au Sport</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cultureSportMembers.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-xl font-bold mb-6 border-l-4 border-ceera-orange pl-3">Le Secrétariat aux Affaires Sociales</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {socialAffairsMembers.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-xl font-bold mb-6 border-l-4 border-ceera-orange pl-3">Le Secrétariat aux Affaires Académiques</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {academicAffairsMembers.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-xl font-bold mb-6 border-l-4 border-ceera-orange pl-3">Le Secrétariat à l'Environnement et au Développement Durable</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {environmentMembers.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-xl font-bold mb-6 border-l-4 border-ceera-orange pl-3">Le Secrétariat à l'Insertion Professionnelle</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {professionalInsertionMembers.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-xl font-bold mb-6 border-l-4 border-ceera-orange pl-3">Le Commissariat aux Comptes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {auditMembers.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-ceera-dark text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Nos valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Engagement</h3>
              <p className="text-gray-300">
                Nous nous engageons pleinement dans nos actions pour le développement d'Agnibilékrou et le bien-être de nos membres.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Solidarité</h3>
              <p className="text-gray-300">
                Nous croyons en la force du collectif et à l'entraide mutuelle pour soutenir chacun de nos membres dans son parcours.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-300">
                Nous visons l'excellence dans toutes nos actions, en promouvant le mérite et le dépassement de soi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
