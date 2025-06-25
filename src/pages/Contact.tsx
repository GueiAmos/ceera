
import HeroSection from '@/components/HeroSection';
import ContactForm from '@/components/ContactForm';
import { MapPin, Mail, Phone, Clock, Facebook, MessageCircle, Building, Users, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getRandomImage, uploadedImages } from '@/utils/imageUtils';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Building className="h-8 w-8 md:h-10 md:w-10 text-ceera-orange" />,
      title: "Siège",
      details: "Siège CEERA, Abidjan\nBase CEERA-BOUAKÉ, Bouaké"
    },
    {
      icon: <Mail className="h-8 w-8 md:h-10 md:w-10 text-ceera-orange" />,
      title: "Email",
      details: "collectifceera01@gmail.com"
    },
    {
      icon: <Phone className="h-8 w-8 md:h-10 md:w-10 text-ceera-orange" />,
      title: "Téléphone",
      details: "+225 01 02 76 14 11"
    },
    {
      icon: <Facebook className="h-8 w-8 md:h-10 md:w-10 text-ceera-orange" />,
      title: "Réseaux sociaux",
      details: "Facebook: CERA.Collectif\nTikTok: CEERA LIFE"
    }
  ];

  return (
    <div>
      <HeroSection 
        title="Contactez-nous"
        subtitle="Nous sommes à votre disposition pour répondre à vos questions"
        backgroundImage={getRandomImage(uploadedImages, 4)}
        showLogo={false}
      />

      <section className="section bg-gradient-to-r from-ceera-orange/10 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Comment nous joindre</h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-8 text-sm md:text-base">
            Contactez-nous par l'un des moyens ci-dessous ou en remplissant le formulaire.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-3">{info.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{info.title}</h3>
                <p className="text-muted-foreground whitespace-pre-line text-sm">{info.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Envoyez-nous un message</h2>
              <p className="mb-6 text-sm md:text-base">
                Questions sur le CEERA, nos activités ou l'adhésion ? 
                Remplissez ce formulaire et nous vous répondrons rapidement.
              </p>
              <ContactForm />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Nos services</h2>
              <p className="mb-6 text-sm md:text-base">
                Le CEERA dispose de services spécialisés pour répondre à vos besoins.
              </p>
              
              <div className="space-y-4 md:space-y-6">
                <div className="bg-yellow-50 border border-yellow-200 p-4 md:p-6 rounded-lg">
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-yellow-800">Services en cours de mise en place</h3>
                      <p className="text-yellow-700 text-sm">
                        Nous travaillons actuellement à la mise en place de nos services dédiés :
                      </p>
                      <ul className="mt-3 space-y-2 text-sm text-yellow-700">
                        <li>• <strong>Secrétariat Général</strong> - Questions administratives</li>
                        <li>• <strong>Service Communication</strong> - Relations presse et médias</li>
                        <li>• <strong>Affaires Académiques</strong> - Études et orientation</li>
                      </ul>
                      <p className="mt-3 text-sm text-yellow-700">
                        En attendant, contactez-nous via notre email principal ou le formulaire ci-contre.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 md:mt-8 p-4 md:p-6 bg-ceera-orange/10 rounded-lg border border-ceera-orange/20">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Users size={20} className="mr-2 text-ceera-orange" />
                  Bureau Exécutif
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Pour contacter les membres du bureau exécutif, consultez notre page équipe.
                </p>
                <Link to="/team" className="inline-flex items-center text-ceera-orange hover:underline text-sm">
                  Découvrir notre équipe 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="m9 18 6-6-6-6"/></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-ceera-orange/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Cher nouvel étudiant</h2>
            <p className="text-sm md:text-lg mb-6">
              Félicitations pour votre baccalauréat ! Le CEERA vous aide à vous intégrer 
              et à vous sentir en famille où que vous soyez orienté(e).
            </p>
            <p className="text-sm md:text-lg mb-6">
              Nos ambitions : développer Agnibilékrou par cette nouvelle génération !
            </p>
            <Link to="/membership" className="inline-block bg-ceera-orange hover:bg-ceera-brown text-white font-medium px-6 py-3 rounded-md transition-colors">
              Rejoignez-nous dès maintenant
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Où nous trouver</h2>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-full overflow-hidden">
                <img 
                  src={getRandomImage(uploadedImages, 5)} 
                  alt="Localisations du CEERA" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="mt-6 md:mt-8 text-center">
              <h3 className="text-lg md:text-xl font-bold mb-2">Notre implantation</h3>
              <p className="text-muted-foreground text-sm md:text-base">
                Siège à Abidjan, base à Bouaké. Extension prévue dans toutes les villes universitaires : 
                Agnibilékrou, Daloa, Yamoussoukro, Man, Korhogo et San-Pédro.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
