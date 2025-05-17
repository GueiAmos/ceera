
import HeroSection from '@/components/HeroSection';
import ContactForm from '@/components/ContactForm';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-10 w-10 text-ceera-orange" />,
      title: "Adresse",
      details: "Siège du CEERA, Quartier Centre, Agnibilékrou, Côte d'Ivoire"
    },
    {
      icon: <Mail className="h-10 w-10 text-ceera-orange" />,
      title: "Email",
      details: "contact@ceera.org"
    },
    {
      icon: <Phone className="h-10 w-10 text-ceera-orange" />,
      title: "Téléphone",
      details: "+225 01 23 45 67\n+225 05 67 89 01"
    },
    {
      icon: <Clock className="h-10 w-10 text-ceera-orange" />,
      title: "Horaires",
      details: "Lundi - Vendredi : 9h - 17h\nSamedi : 9h - 12h"
    }
  ];

  const teams = [
    {
      name: "Kouamé Aya",
      role: "Présidente",
      email: "president@ceera.org",
      phone: "+225 01 23 45 67"
    },
    {
      name: "Konan Kouassi",
      role: "Secrétaire général",
      email: "secretariat@ceera.org",
      phone: "+225 07 89 01 23"
    },
    {
      name: "Koffi Amoin",
      role: "Trésorière",
      email: "tresorerie@ceera.org",
      phone: "+225 05 67 89 01"
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
              <h2 className="text-3xl font-bold mb-6">Notre équipe</h2>
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
                  <Clock size={20} className="mr-2 text-ceera-orange" />
                  Temps de réponse
                </h3>
                <p className="text-muted-foreground">
                  Nous nous efforçons de répondre à toutes les demandes dans un délai de 48 heures ouvrables. 
                  Merci de votre patience.
                </p>
              </div>
            </div>
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
                <p className="text-gray-600">Carte Google Maps d'Agnibilékrou</p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <h3 className="text-xl font-bold mb-2">Venir à nos locaux</h3>
              <p className="text-muted-foreground">
                Notre siège se trouve au centre-ville d'Agnibilékrou, à proximité de la mairie. 
                Nous sommes ouverts du lundi au vendredi de 9h à 17h et le samedi de 9h à 12h.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
