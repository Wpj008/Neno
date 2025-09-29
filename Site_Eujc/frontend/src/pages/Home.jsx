import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Heart, BookOpen, Phone } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Users,
      title: "Culte Dominical",
      description: "Rejoignez notre communauté chaque dimanche à 09h pour un temps de louange, d'enseignement et de communion fraternelle.",
      time: "Dimanche 09h00"
    },
    {
      icon: BookOpen,
      title: "Enseignement Spirituel",
      description: "Approfondissez votre connaissance des Écritures dans nos paroisses.",
      time: "Samedi 14h30"
    },
    {
      icon: Heart,
      title: "Prière",
      description: "Participez à nos temps de prière collective pour intercéder pour notre communauté et nos familles.",
      time: "Jeudi 16h00"
    }
  ];

  const galleryImages = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUY8uAKJ32USG48qk3f0TJemm2eL1lZl7AJnCs6i5SDI5H5V-zg8ld_nmkUq2amQkHac&usqp=CAU",
      alt: "Communauté EUJC - Accueil chaleureux"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7A6-1cQGpYWdz_McVsBHuNJO5PLHDyeRA3PqY_Ogh0v7qTHX_7oNEqlGUrtx0HDkD2mE&usqp=CAU",
      alt: "Étude biblique - Méditation "
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxfLsberRzhmeVWEAaVAyjbL9XssQFSBBuQQ&s",
      alt: "Fellowship - Communion fraternelle"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuHMDrwbUFJgXE6njap6Myaw0HbulLhpk9kF_d3ANNX1qDJHo3Lworrn2WBhgAEhTNg8Q&usqp=CAU",
      alt: "Parole de Dieu - Écritures saintes"
    }
  ];

  return (
    <div id="main-content">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-deep-blue mb-6 animate-fadeInUp">
              Bienvenue à l'EUJC
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto animate-fadeInUp">
              Église Universelle de Jésus-Christ, Une communauté vivante de foi,
               d’espérance et d’amour, où chacun est appelé à grandir spirituellement et à servir Dieu dans l’unité. </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp">
              <Link
                to="/evenements"
                className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg hover-lift"
              >
                <Calendar className="inline-block w-5 h-5 mr-2" />
                Nos Événements
              </Link>
              <Link
                to="/nous-contacter"
                className="btn-secondary px-8 py-4 rounded-lg font-semibold text-lg hover-lift"
              >
                <Phone className="inline-block w-5 h-5 mr-2" />
                Nous Contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-deep-blue mb-4">
              Nos Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez les différentes façons de grandir spirituellement et de servir au sein de notre communauté.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="service-card p-8 rounded-xl hover-lift">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                    <service.icon className="w-8 h-8 text-deep-blue" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-deep-blue mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="inline-block bg-soft-gold text-white px-4 py-2 rounded-full text-sm font-medium">
                    {service.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verse Section */}
      <section className="py-16 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-serif font-medium text-deep-blue mb-6 leading-relaxed">
            "Car là où deux ou trois sont assemblés en mon nom, je suis au milieu d'eux."
          </blockquote>
          <cite className="text-lg text-soft-gold font-semibold">
            — Matthieu 18:20
          </cite>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-deep-blue mb-4">
              La Vie de Notre Église
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez les moments de partage, de prière et de communion qui rythment la vie de notre communauté.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl hover-lift">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-deep-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Rejoignez Notre Communauté
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Que vous soyez nouveau dans la foi ou que vous cherchiez une église où grandir spirituellement, 
            vous êtes les bienvenus parmi nous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/qui-sommes-nous"
              className="bg-white text-deep-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 hover-lift"
            >
              Découvrir Notre Histoire
            </Link>
            <Link
              to="/nous-contacter"
              className="bg-soft-gold text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-colors duration-200 hover-lift"
            >
              Planifier Une Visite
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;