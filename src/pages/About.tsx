import HeroSection from '@/components/HeroSection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { getRandomImage, uploadedImages } from '@/utils/imageUtils';

const About = () => {
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

      
      {/* Introduction Section with Logo */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-white via-ceera-orange/5 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-6xl mx-auto">
            <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0">
              <img 
                src="/lovable-uploads/532a1231-eba2-4266-882d-eac4fa510703.png" 
                alt="Logo CEERA" 
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-ceera-orange to-ceera-brown bg-clip-text text-transparent">
                Le CEERA
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Le Collectif des Élèves et Étudiants Ressortissants d'Agnibilékrou, 
                une association <span className="font-semibold text-ceera-orange">apolitique, laïque et à but non lucratif</span> dédiée 
                au bien-être et à l'épanouissement des élèves et étudiants de notre région.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Histoire Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-ceera-dark">Notre histoire</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-ceera-orange to-ceera-brown rounded-full mb-6"></div>
                </div>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  Officialisé le <span className="font-semibold text-ceera-orange">3 février 2023</span>, 
                  le CEERA rassemble les élèves et étudiants ressortissants d'Agnibilékrou dispersés dans diverses 
                  universités et grandes écoles.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  Créé comme un <span className="font-semibold">point de ralliement et une structure d'entraide</span>, 
                  le CEERA maintient les liens entre les ressortissants malgré la dispersion géographique.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  Reconnu par les autorités, le CEERA fonctionne avec un statut et un règlement intérieur rigoureux, 
                  témoignant du sérieux au sein de ce collectif.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="space-y-3 md:space-y-4">
                  <img 
                    src={getRandomImage(uploadedImages, 19)} 
                    alt="Étudiants CEERA" 
                    className="rounded-2xl w-full h-full object-cover shadow-lg hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="space-y-3 md:space-y-4">
                  <img 
                    src={getRandomImage(uploadedImages, 20)} 
                    alt="Activités CEERA" 
                    className="rounded-2xl w-full h-48 md:h-56 object-cover shadow-lg hover:shadow-xl transition-shadow"
                  />
                  <img 
                    src={getRandomImage(uploadedImages, 21)} 
                    alt="Culture CEERA" 
                    className="rounded-2xl w-full h-48 md:h-56 object-cover shadow-lg hover:shadow-xl transition-shadow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <div className="mb-6">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-ceera-orange to-ceera-brown bg-clip-text text-transparent">
                    Notre mission
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-ceera-orange to-ceera-brown rounded-full"></div>
                </div>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Promouvoir la <span className="font-bold text-ceera-orange">solidarité</span>, 
                  l'<span className="font-bold text-ceera-orange">excellence académique</span> et 
                  le <span className="font-bold text-ceera-orange">développement</span> culturel et social 
                  des élèves et étudiants ressortissants d'Agnibilékrou.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-ceera-orange/20 to-ceera-brown/20 rounded-3xl blur-2xl"></div>
                <img 
                  src={getRandomImage(uploadedImages, 22)} 
                  alt="Mission CEERA" 
                  className="relative rounded-2xl shadow-2xl w-full h-64 md:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions fréquentes</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Trouvez les réponses aux questions les plus courantes
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-xl border-2 border-gray-100 px-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="font-semibold text-base md:text-lg text-left hover:text-ceera-orange py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm md:text-base pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>;
};
export default About;
