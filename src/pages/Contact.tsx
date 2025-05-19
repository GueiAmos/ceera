
import HeroSection from '@/components/HeroSection';
import ContactForm from '@/components/ContactForm';
import { MapPin, Mail, Phone, Clock, Facebook, MessageCircle, Building, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Building className="h-10 w-10 text-ceera-orange" />,
      title: "Siège",
      details: "Siège du CEERA, Abidjan, Côte d'Ivoire\nBase CEERA-BOUAKÉ, Bouaké, Côte d'Ivoire"
    },
    {
      icon: <Mail className="h-10 w-10 text-ceera-orange" />,
      title: "Email",
      details: "collectifceera01@gmail.com"
    },
    {
      icon: <Phone className="h-10 w-10 text-ceera-orange" />,
      title: "Standard téléphonique",
      details: "+225 01 02 76 14 11"
    },
    {
      icon: <Facebook className="h-10 w-10 text-ceera-orange" />,
      title: "Réseaux sociaux",
      details: "Facebook: CERA.Collectif des étudiants ressortissants d'Agnibilékrou\nTikTok: CEERA LIFE"
    }
  ];

  const departments = [
    {
      title: "Secrétariat Général",
      description: "Pour toute question administrative et correspondance officielle.",
      email: "sg@ceera.org"
    },
    {
      title: "Service Communication",
      description: "Pour les demandes médias et relations presse.",
      email: "communication@ceera.org"
    },
    {
      title: "Affaires Académiques",
      description: "Pour les questions liées aux études et à l'orientation.",
      email: "academique@ceera.org"
    }
  ];

  return (
    <div>
      <HeroSection 
        title="Contactez-nous"
        subtitle="Nous sommes à votre disposition pour répondre à toutes vos questions"
        backgroundImage="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
        showLogo={true}
      />

      <section className="section bg-gradient-to-r from-ceera-orange/10 to-white">
        <div className="container mx-auto">
          <h2 className="section-title">Comment nous joindre</h2>
          <p className="section-subtitle">
            N'hésitez pas à nous contacter par l'un des moyens ci-dessous ou en remplissant le formulaire.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">{info.icon}</div>
                <h3 className="text-xl font-bold mb-3">{info.title}</h3>
                <p className="text-muted-foreground whitespace-pre-line">{info.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold mb-6">Envoyez-nous un message</h2>
              <p className="mb-6">
                Vous avez des questions sur le CEERA, nos activités ou comment devenir membre ? 
                Remplissez ce formulaire et nous vous répondrons dans les plus brefs délais.
              </p>
              <ContactForm />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Nos services</h2>
              <p className="mb-6">
                Le CEERA dispose de plusieurs services spécialisés pour répondre à vos besoins spécifiques. N'hésitez pas à contacter directement le service concerné.
              </p>
              
              <div className="space-y-6">
                {departments.map((dept, index) => (
                  <div key={index} className="bg-secondary/20 p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-1">{dept.title}</h3>
                    <p className="text-muted-foreground mb-3">{dept.description}</p>
                    <div className="flex items-center text-ceera-orange">
                      <Mail size={16} className="mr-2" />
                      <span>{dept.email}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-ceera-orange/10 rounded-lg border border-ceera-orange/20">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Users size={20} className="mr-2 text-ceera-orange" />
                  Bureau Exécutif
                </h3>
                <p className="text-muted-foreground mb-4">
                  Pour contacter les membres du bureau exécutif ou en savoir plus sur notre organisation, consultez notre page dédiée à l'équipe du CEERA.
                </p>
                <Link to="/team" className="inline-flex items-center text-ceera-orange hover:underline">
                  Découvrir notre équipe 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="m9 18 6-6-6-6"/></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-ceera-orange/10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Cher nouvel étudiant</h2>
            <p className="text-lg mb-8">
              Félicitations pour l'obtention de votre baccalauréat ! Après le bac, ce n'est pas une fin mais un nouveau départ. 
              Le CEERA est là pour vous aider à vous intégrer et à vous sentir toujours en famille où que vous soyez orienté(e).
            </p>
            <p className="text-lg mb-8">
              Nos ambitions sont grandes : développer la ville d'Agnibilékrou par cette nouvelle génération de jeunes !
            </p>
            <Link to="/membership" className="inline-block bg-ceera-orange hover:bg-ceera-brown text-white font-medium px-6 py-3 rounded-md transition-colors">
              Rejoignez-nous dès maintenant
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto">
          <h2 className="section-title">Où nous trouver</h2>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              {/* Placeholder for Google Map iframe */}
              <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center p-8">
                <Building className="h-16 w-16 text-ceera-orange mb-4" />
                <h3 className="text-xl font-bold mb-2">Nos localisations</h3>
                <p className="text-center max-w-md">
                  Le CEERA dispose d'un siège à Abidjan et d'une base à Bouaké.
                  Nous prévoyons de nous étendre dans toutes les principales villes universitaires de Côte d'Ivoire.
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <h3 className="text-xl font-bold mb-2">Notre implantation</h3>
              <p className="text-muted-foreground">
                Notre siège principal est situé à Abidjan, avec une base à Bouaké (CEERA-BOUAKÉ). 
                Nous prévoyons de nous étendre dans toutes les villes universitaires de Côte d'Ivoire, 
                notamment à Agnibilékrou, Daloa, Yamoussoukro, Man, Korhogo et San-Pédro.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
