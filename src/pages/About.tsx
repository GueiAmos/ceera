
import HeroSection from '@/components/HeroSection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Target, Award, Users, UserPlus, Clock, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-ceera-orange" />,
      title: "Solidarité",
      description: "Nous nous entraidons et soutenons mutuellement dans toutes les circonstances."
    },
    {
      icon: <Award className="h-8 w-8 text-ceera-orange" />,
      title: "Excellence",
      description: "Nous visons l'excellence dans toutes nos activités et encourageons nos membres à se surpasser."
    },
    {
      icon: <Users className="h-8 w-8 text-ceera-orange" />,
      title: "Inclusion",
      description: "Nous accueillons et valorisons tous les ressortissants d'Agnibilékrou sans discrimination."
    },
    {
      icon: <Target className="h-8 w-8 text-ceera-orange" />,
      title: "Engagement",
      description: "Nous nous engageons activement pour le développement de notre communauté et de notre région."
    }
  ];

  const faqs = [
    {
      question: "Qui peut devenir membre du CEERA ?",
      answer: "Tous les élèves et étudiants ressortissants d'Agnibilékrou peuvent devenir membres du CEERA. Nous accueillons également les sympathisants qui partagent nos valeurs et souhaitent contribuer à nos actions."
    },
    {
      question: "Comment le CEERA est-il organisé ?",
      answer: "Le CEERA est dirigé par un bureau exécutif élu pour un mandat de 2 ans. Il est composé d'un président, d'un vice-président, d'un secrétaire général, d'un trésorier et de plusieurs responsables de commissions."
    },
    {
      question: "Quelles sont les activités organisées par le CEERA ?",
      answer: "Le CEERA organise diverses activités tout au long de l'année : journées culturelles, séances de soutien scolaire, actions sociales et solidaires, activités sportives, et conférences-débats sur des thèmes variés."
    },
    {
      question: "Comment le CEERA finance-t-il ses activités ?",
      answer: "Le financement du CEERA provient principalement des cotisations de ses membres, de dons, de partenariats et des revenus générés par certaines activités organisées par l'association."
    },
    {
      question: "Le CEERA collabore-t-il avec d'autres associations ?",
      answer: "Oui, le CEERA collabore régulièrement avec d'autres associations d'étudiants et d'élèves, ainsi qu'avec des ONG et des institutions pour la réalisation de projets communs."
    }
  ];

  return (
    <div>
      <HeroSection 
        title="À propos du CEERA"
        subtitle="Découvrez notre histoire, notre mission et nos valeurs"
        backgroundImage="https://images.unsplash.com/photo-1472396961693-142e6e269027"
      />

      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre histoire</h2>
              <p className="mb-4">
                Le Collectif des Élèves et Étudiants Ressortissants d'Agnibilékrou (CEERA) a été fondé en 2015 par un groupe d'étudiants 
                animés par la volonté de créer un espace de solidarité et d'entraide pour tous les ressortissants de cette région.
              </p>
              <p className="mb-4">
                Depuis sa création, le CEERA n'a cessé de croître, accueillant chaque année de nouveaux membres et élargissant son champ d'action. 
                Ce qui a commencé comme un simple groupe d'entraide est devenu une association dynamique et influente.
              </p>
              <p>
                Aujourd'hui, le CEERA compte plusieurs centaines de membres actifs et s'impose comme un acteur important du développement 
                académique, culturel et social d'Agnibilékrou.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                  alt="Étudiants CEERA" 
                  className="rounded-lg h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                  alt="Activités CEERA" 
                  className="rounded-lg h-[40%] object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1466442929976-97f336a657be" 
                  alt="Culture CEERA" 
                  className="rounded-lg h-[60%] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-ceera-dark text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-center">Notre mission</h2>
          <p className="text-lg max-w-3xl mx-auto text-center mb-12">
            Le CEERA a pour mission de promouvoir la solidarité, l'excellence académique et le développement culturel 
            et social des élèves et étudiants ressortissants d'Agnibilékrou.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 p-6 rounded-lg flex items-start">
              <div className="mr-4 mt-1">
                <UserPlus size={24} className="text-ceera-orange" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Rassembler</h3>
                <p className="text-gray-300">
                  Nous rassemblons tous les élèves et étudiants originaires d'Agnibilékrou pour créer un réseau de solidarité 
                  et d'entraide basé sur nos valeurs communes et notre attachement à notre région.
                </p>
              </div>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg flex items-start">
              <div className="mr-4 mt-1">
                <Award size={24} className="text-ceera-orange" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Former</h3>
                <p className="text-gray-300">
                  Nous accompagnons nos membres dans leur parcours académique et professionnel en leur offrant des formations, 
                  du mentorat et des opportunités de développement personnel.
                </p>
              </div>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg flex items-start">
              <div className="mr-4 mt-1">
                <Clock size={24} className="text-ceera-orange" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Préserver</h3>
                <p className="text-gray-300">
                  Nous préservons et promouvons notre patrimoine culturel en organisant des événements culturels et en sensibilisant 
                  nos membres à l'importance de nos traditions.
                </p>
              </div>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg flex items-start">
              <div className="mr-4 mt-1">
                <Heart size={24} className="text-ceera-orange" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Contribuer</h3>
                <p className="text-gray-300">
                  Nous contribuons au développement d'Agnibilékrou à travers des actions sociales et des projets communautaires 
                  qui répondent aux besoins de la population locale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-secondary/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-center">Nos valeurs</h2>
          <p className="text-lg max-w-3xl mx-auto text-center mb-12">
            Le CEERA s'appuie sur des valeurs fortes qui guident toutes ses actions et initiatives.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg text-center shadow-md transition-transform hover:scale-105">
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-center">Questions fréquentes</h2>
          <p className="text-lg max-w-3xl mx-auto text-center mb-12">
            Vous avez des questions sur le CEERA ? Consultez nos réponses aux questions les plus fréquemment posées.
          </p>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
