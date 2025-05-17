
import HeroSection from '@/components/HeroSection';
import ContactForm from '@/components/ContactForm';
import { MapPin, Mail, Phone, Clock, Facebook, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-10 w-10 text-ceera-orange" />,
      title: "Adresse",
      details: "Siège du CEERA, Abidjan, Côte d'Ivoire\nBase CEERA-BOUAKÉ, Bouaké, Côte d'Ivoire"
    },
    {
      icon: <Mail className="h-10 w-10 text-ceera-orange" />,
      title: "Email",
      details: "collectifceera01@gmail.com"
    },
    {
      icon: <Phone className="h-10 w-10 text-ceera-orange" />,
      title: "Téléphone",
      details: "+225 01 02 76 14 11\n+225 07 69 88 86 15\n+225 07 69 96 92 25"
    },
    {
      icon: <Facebook className="h-10 w-10 text-ceera-orange" />,
      title: "Réseaux sociaux",
      details: "Facebook: CERA.Collectif des étudiants ressortissants d'Agnibilékrou\nTikTok: CEERA LIFE"
    }
  ];

  const teams = [
    {
      name: "OUATTARA DRISSA",
      role: "Président",
      email: "contact@ceera.org",
      phone: "+225 07 69 88 86 15"
    },
    {
      name: "Ouattara Abran Rose",
      role: "1er Vice-Président",
      email: "vicepresident1@ceera.org",
      phone: "+225 01 02 76 14 11"
    },
    {
      name: "Kouamé Kouadio Célestin",
      role: "Secrétaire Général",
      email: "sg@ceera.org",
      phone: "+225 07 69 96 92 25"
    }
  ];

  return (
    <div>
      <HeroSection 
        title="Contactez-nous"
        subtitle="Nous sommes à votre disposition pour répondre à toutes vos questions"
        backgroundImage="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
      />

      <section className="section bg-white">
        <div className="container mx-auto">
          <h2 className="section-title">Nos coordonnées</h2>
          <p className="section-subtitle">
            N'hésitez pas à nous contacter par l'un des moyens ci-dessous ou en remplissant le formulaire.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-secondary/50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">{info.icon}</div>
                <h3 className="text-xl font-bold mb-3">{info.title}</h3>
                <p className="text-muted-foreground whitespace-pre-line">{info.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-secondary/50">
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
              <h2 className="text-3xl font-bold mb-6">Bureau exécutif</h2>
              <p className="mb-6">
                Vous pouvez également contacter directement les membres de notre bureau exécutif pour des questions spécifiques.
              </p>
              
              <div className="space-y-6">
                {teams.map((member, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-ceera-orange mb-3">{member.role}</p>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-center">
                        <Mail size={16} className="mr-2" />
                        <span>{member.email}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone size={16} className="mr-2" />
                        <span>{member.phone}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-6 bg-ceera-orange/10 rounded-lg border border-ceera-orange/20">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <MessageCircle size={20} className="mr-2 text-ceera-orange" />
                  Rejoignez-nous
                </h3>
                <p className="text-muted-foreground mb-4">
                  Vous pouvez également nous contacter et suivre nos activités sur nos réseaux sociaux :
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Facebook size={16} className="mr-2 text-ceera-orange" />
                    <span>CERA.Collectif des étudiants ressortissants d'Agnibilékrou</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 448 512" fill="currentColor" className="mr-2 text-ceera-orange">
                      <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
                    </svg>
                    <span>CEERA LIFE</span>
                  </li>
                </ul>
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
            <div className="aspect-video rounded-lg overflow-hidden">
              {/* Placeholder for Google Map iframe */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <p className="text-gray-600">Le CEERA dispose d'un siège à Abidjan et d'une base à Bouaké</p>
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
