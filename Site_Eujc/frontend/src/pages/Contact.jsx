import React from 'react';
import { MapPin, Phone, Mail, Clock, Download, Heart } from 'lucide-react';

const Contact = () => {
  const handleDownloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Église Universelle de Jésus-Christ
ORG:EUJC
TEL:+243 998 430 792
EMAIL:contact@eujc.fr
ADR:;;AV/ Kalembe Lembe,  N°: 184;Commune de Lingwala;Kinshasa
URL:https://www.eujc.fr
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'EUJC-Contact.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div id="main-content" className="py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-deep-blue mb-6">
            Nous Contacter
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Nous serions ravis de vous accueillir dans notre communauté. 
            N'hésitez pas à nous contacter pour toute question ou pour planifier une visite.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-deep-blue mb-8">
                Informations de Contact
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-deep-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-deep-blue mb-1">Adresse</h3>
                    <p className="text-gray-600">
                    AV/ Kalembe Lembe,  N°: 184<br />
                    Commune de Lingwala, Kinshasa
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-deep-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-deep-blue mb-1">Téléphone</h3>
                    <a
                      href="tel:+33123456789"
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      +243 998 430 792
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-deep-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-deep-blue mb-1">Email</h3>
                    <a
                      href="mailto:contact@eujc.fr?subject=Demande d'information – EUJC"
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      eujc.officiel@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-deep-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-deep-blue mb-1">Horaires des Services</h3>
                    <div className="text-gray-600">
                      <p>Dimanche : Culte à 09h00</p>
                      <p>Samedi : Enseignement Spirituel à 14h30</p>
                      <p>Jeudi : Prière à 16h00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-serif font-semibold text-deep-blue mb-4">
                  Actions Rapides
                </h3>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:priere@eujc.fr?subject=Demande de prière"
                    className="flex items-center justify-center bg-deep-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors duration-200"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Demande de Prière
                  </a>
                  
                  <button
                    onClick={handleDownloadVCard}
                    className="flex items-center justify-center bg-soft-gold text-white px-6 py-3 rounded-lg font-medium hover:bg-yellow-600 transition-colors duration-200"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Télécharger vCard
                  </button>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-deep-blue mb-8">
                Nous Trouver
              </h2>
              
              <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1611.1113452204713!2d15.34205995389313!3d-4.335375048364142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a370078809ec7%3A0x92b6255e8fe952!2s%C3%89glise%20Universelle%20de%20Jesus-%20mchrist!5e0!3m2!1sfr!2sfr!4v1761033074244!5m2!1sfr!2sfr" 
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation de l'EUJC"
                ></iframe>
              </div>
              
              <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-deep-blue mb-2">Comment nous rejoindre :</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Bus : Boulevard du 30 juin ; Quartier 1 : arrêt socobelam</li>
                  <li>• Moto : Boulevard du 30 juin ; Station B.A.T/av.Kingabwa</li>
                  <li>• Accès handicapés disponible</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Planning */}
      <section className="py-16 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-deep-blue mb-8">
            Planifiez Votre Première Visite
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-deep-blue font-bold text-lg">1</span>
              </div>
              <h3 className="font-semibold text-deep-blue mb-2">Contactez-nous</h3>
              <p className="text-gray-600 text-sm">
                Appelez-nous ou envoyez-nous un email pour nous faire savoir de votre visite.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-deep-blue font-bold text-lg">2</span>
              </div>
              <h3 className="font-semibold text-deep-blue mb-2">Arrivez tôt</h3>
              <p className="text-gray-600 text-sm">
                Nous recommandons d'arriver 15 minutes avant le service pour un accueil personnalisé.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-deep-blue font-bold text-lg">3</span>
              </div>
              <h3 className="font-semibold text-deep-blue mb-2">Soyez vous-même</h3>
              <p className="text-gray-600 text-sm">
                Venez comme vous êtes ! Notre communauté vous accueillera avec joie et bienveillance.
              </p>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 mb-8">
            Nous croyons que Dieu a un plan merveilleux pour votre vie et nous serions honorés 
            de faire partie de votre parcours spirituel.
          </p>
          
          <a
            href="mailto:visite@eujc.fr?subject=Planification de première visite"
            className="bg-deep-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors duration-200 hover-lift"
          >
            Planifier ma visite
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-deep-blue mb-12 text-center">
            Questions Fréquentes
          </h2>
          
          <div className="space-y-8">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="font-semibold text-deep-blue mb-3">
                À quelle heure dois-je arriver pour le culte dominical ?
              </h3>
              <p className="text-gray-600">
                Le culte commence à 09h00 précises. Nous recommandons d'arriver vers 8h45 
                pour un accueil personnalisé et pour trouver une place confortable.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="font-semibold text-deep-blue mb-3">
                Y a-t-il des activités pour les enfants ?
              </h3>
              <p className="text-gray-600">
                Oui ! Nous avons une école du dimanche pour les enfants de 3 à 12 ans pendant 
                le culte, ainsi que diverses activités adaptées à leur âge tout au long de la semaine.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="font-semibold text-deep-blue mb-3">
                Comment puis-je m'impliquer dans l'église ?
              </h3>
              <p className="text-gray-600">
                Il existe de nombreuses façons de servir ! Contactez-nous pour découvrir 
                les différents ministères et groupes où vous pourriez contribuer selon vos dons et passions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;