import React, { useState, useEffect } from 'react';
import { MapPin, Users, Clock, BookOpen, Home, Phone, Mail  } from 'lucide-react';
import eglisesData from '../data/eglises.json';

const Eglises = () => {
  const [eglises, setEglises] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    setEglises(eglisesData);
  }, []);

  const filteredEglises =
    filter === 'all' ? eglises : eglises.filter((e) => e.type === filter);

  const villes = [
    { value: 'all', label: 'Toutes les églises' },
    { value: 'kinshasa', label: 'Kinshasa' },
    { value: 'paris', label: 'Paris' },
    { value: 'bruxelles', label: 'Bruxelles' },
    { value: 'montreal', label: 'Montréal' }
  ];

  return (
    <div id="main-content" className="py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-50 to-purple-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-deep-blue mb-6">
            Nos Églises
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Découvrez nos paroisses à travers le monde et rejoignez la famille EUJC la plus proche de chez vous.
          </p>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {villes.map((ville) => (
              <button
                key={ville.value}
                onClick={() => setFilter(ville.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  filter === ville.value
                    ? 'bg-deep-blue text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {ville.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Liste des Églises */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredEglises.length === 0 ? (
            <div className="text-center py-16">
              <Home className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                Aucune église trouvée
              </h3>
              <p className="text-gray-500">
                Aucune paroisse ne correspond aux critères sélectionnés.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEglises.map((eglise) => (
                <div
                  key={eglise.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-purple-100 rounded-full mr-3">
                        <MapPin className="w-5 h-5 text-deep-blue" />
                      </div>
                      <h3 className="text-xl font-serif font-semibold text-deep-blue">
                        {eglise.name}
                      </h3>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2 text-soft-gold" />
                        <span className="text-sm">Responsable : {eglise.responsable}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <BookOpen className="w-4 h-4 mr-2 text-soft-gold" />
                        <span className="text-sm">{eglise.adresse}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-soft-gold" />
                        <span className="text-sm">{eglise.horaire}</span>
                      </div>

                      <div className="flex items-center text-gray-600">
                        <Phone className="w-4 h-4 mr-2 text-soft-gold" />
                        <span className="text-sm">{eglise.telephone}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                        <Mail className="w-4 h-4 mr-2 text-soft-gold" />
                        <a href={`mailto:${eglise.email}`} className="text-sm text-blue-700 hover:underline">
                            {eglise.email}
                        </a>
                    </div>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {eglise.description}
                    </p>

                    <div className="pt-4 border-t border-gray-100">
                      <button className="w-full bg-deep-blue text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-800 transition-colors duration-200">
                        Voir sur la carte
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-deep-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Rejoignez une église EUJC près de chez vous !
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Nos paroisses vous accueillent dans un esprit de foi, d'amour et de fraternité. Venez vivre la communion avec nous.
          </p>
          <a
            href="/nous-contacter"
            className="bg-soft-gold text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-200"
          >
            Nous contacter
          </a>
        </div>
      </section>
    </div>
  );
};

export default Eglises;
