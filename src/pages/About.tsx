import HeroSection from '@/components/HeroSection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Target, Award, Users, UserPlus, Clock, Heart, FileText, Handshake } from 'lucide-react';
import { getRandomImage, uploadedImages } from '@/utils/imageUtils';

const About = () => {
  
  const values = [{
    icon: <Heart className="h-8 w-8 text-ceera-orange" />,
    title: "Solidarité",
    description: "Nous nous entraidons et soutenons mutuellement dans toutes les circonstances."
  }, {
    icon: <Award className="h-8 w-8 text-ceera-orange" />,
    title: "Excellence",
    description: "Nous visons l'excellence dans toutes nos activités et encourageons nos membres à se surpasser."
  }, {
    icon: <Users className="h-8 w-8 text-ceera-orange" />,
    title: "Inclusion",
    description: "Nous accueillons et valorisons tous les ressortissants d'Agnibilékrou sans discrimination."
  }, {
    icon: <Target className="h-8 w-8 text-ceera-orange" />,
    title: "Engagement",
    description: "Nous nous engageons activement pour le développement de notre communauté et de notre région."
  }];
  
  const faqs = [{
    question: "Qui peut devenir membre du CEERA ?",
    answer: "Peuvent adhérer à l'association toutes personnes volontaires, ayant le statut d'élève ou étudiant, quel que soit le lieu où cette personne sera orientée. Il faut obligatoirement être un ressortissant d'Agnibilékrou."
  }, {
    question: "Comment le CEERA est-il organisé ?",
    answer: "Le CEERA est dirigé par un bureau exécutif élu pour un mandat de 2 ans. Il est composé d'un président, de vice-présidents, d'un secrétaire général et de plusieurs secrétaires responsables de différents domaines."
  }, {
    question: "Quels sont les avantages d'être membre du CEERA ?",
    answer: "En plus de faire partie d'un réseau solidaire, les membres bénéficient de soutien en cas de maladie grave (cotisation exceptionnelle d'au moins 1000 FCFA), en cas de décès d'un parent (cotisation de 500 FCFA et plus), en cas de mariage (cotisation de 1000 FCFA) ou de naissance (cotisation de 500 FCFA et autres présents)."
  }, {
    question: "Où est situé le siège du CEERA ?",
    answer: "Le siège du CEERA est situé à Abidjan. Il dispose également d'une base dans la ville de Bouaké (CEERA-BOUAKÉ) et prévoit d'établir des bases dans toutes les villes où se trouvent des universités et grandes écoles (Agnibilékrou, Daloa, Yamoussoukro, Man, Korhogo, San-Pédro...)."
  }, {
    question: "Comment adhérer au CEERA ?",
    answer: "Pour adhérer au CEERA, il faut payer la somme unique de 1000 FCFA comme droit d'adhésion. Cette somme donne droit à une carte de membre."
  }];
  
  return <div>
      <HeroSection title="À propos du CEERA" subtitle="Découvrez notre histoire, notre mission et nos valeurs" backgroundImage={getRandomImage(uploadedImages, 18)} showLogo={false} />

      
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center mb-12">
            <img 
              src="/lovable-uploads/532a1231-eba2-4266-882d-eac4fa510703.png" 
              alt="Logo CEERA" 
              className="h-40 mb-8 md:mb-0 md:mr-10"
            />
            <div>
              <h2 className="text-3xl font-bold mb-4 text-ceera-orange">Le CEERA, c'est...</h2>
              <p className="text-lg font-medium">
                Le Collectif des Élèves et Étudiants Ressortissants d'Agnibilékrou, une association apolitique, 
                laïque et à but non lucratif dédiée au bien-être et à l'épanouissement des élèves et étudiants 
                de notre région.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre histoire</h2>
              <p className="mb-4">
                Le Collectif des Élèves et Étudiants Ressortissants d'Agnibilékrou (CEERA) est une association apolitique, 
                laïque et à but non lucratif créée pour le bien-être des élèves et étudiants ressortissants d'Agnibilékrou.
              </p>
              <p className="mb-4">
                Officialisé par récépissé de déclaration d'association N⁰195/P-AGNI/CAB le 03 février 2023, 
                tel que régi par la loi N⁰60-315 du 21 septembre 1960 relative aux associations, le CEERA 
                s'est donné comme mission principale de rassembler les élèves et étudiants ressortissants d'Agnibilékrou.
              </p>
              <p className="mb-4">
                Après le baccalauréat, les étudiants sont orientés dans diverses universités, grandes écoles et villes. 
                Pour maintenir les liens entre les ressortissants malgré cette dispersion géographique, 
                le CEERA a été créé comme un point de ralliement et une structure d'entraide.
              </p>
              <p>
                Aujourd'hui, le CEERA fonctionne sur la base d'un statut et d'un règlement intérieur et est 
                reconnu par les autorités politiques, témoignant du sérieux qui règne au sein de ce collectif.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src={getRandomImage(uploadedImages, 19)} alt="Étudiants CEERA" className="rounded-lg h-full object-cover" />
              </div>
              <div className="space-y-4">
                <img src={getRandomImage(uploadedImages, 20)} alt="Activités CEERA" className="rounded-lg h-[40%] object-cover" />
                <img src={getRandomImage(uploadedImages, 21)} alt="Culture CEERA" className="rounded-lg h-[60%] object-cover" />
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
            {values.map((value, index) => <div key={index} className="bg-white p-6 rounded-lg text-center shadow-md transition-transform hover:scale-105">
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      <section className="section bg-ceera-dark text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Nos implantations</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Siège principal</h3>
                <p className="mb-2">
                  Le siège du CEERA est situé à Abidjan. Il peut être transféré, en cas de besoin, 
                  en tout autre lieu du territoire national sur décision de l'assemblée générale.
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Bases existantes</h3>
                <p className="mb-2">
                  Le CEERA dispose d'une base dans la ville de Bouaké, dénommée CEERA-BOUAKÉ.
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Expansion future</h3>
                <p className="mb-2">
                  Le CEERA prévoit d'établir des bases dans toutes les villes où se trouvent des universités 
                  et grandes écoles, notamment à Agnibilékrou, Daloa, Yamoussoukro, Man, Korhogo, San-Pédro, et ailleurs.
                </p>
              </div>
            </div>
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
              {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="font-medium text-base text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>
      </section>
    </div>;
};
export default About;
