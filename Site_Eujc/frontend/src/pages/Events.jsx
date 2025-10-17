import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Users, BookOpen, Heart, Mic, Baby } from 'lucide-react';
import eventsData from '../data/events.json';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  const getTypeIcon = (type) => {
    switch (type) {
      case 'culte':
        return Users;
      case 'etude':
        return BookOpen;
      case 'priere':
        return Heart;
      case 'conference':
        return Mic;
      case 'famille':
        return Baby;
      case 'jeunesse':
        return Users;
      default:
        return Calendar;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'culte':
        return 'bg-blue-100 text-blue-800';
      case 'etude':
        return 'bg-green-100 text-green-800';
      case 'priere':
        return 'bg-purple-100 text-purple-800';
      case 'conference':
        return 'bg-orange-100 text-orange-800';
      case 'famille':
        return 'bg-pink-100 text-pink-800';
      case 'jeunesse':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.type === filter);

  const eventTypes = [
    { value: 'all', label: 'Tous les événements' },
    { value: 'culte', label: 'Cultes' },
    { value: 'etude', label: 'Enseignement bibliques' },
    { value: 'priere', label: 'Prière' },
    { value: 'conference', label: 'Conférences' },
    { value: 'famille', label: 'Famille' },
    { value: 'jeunesse', label: 'Jeunesse' }
  ];

  return (
    <div id="main-content" className="py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-deep-blue mb-6">
            Nos Événements
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Découvrez tous nos événements, cultes et activités pour grandir ensemble 
            dans la foi et la communion fraternelle.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {eventTypes.map((type) => (
              <button
                key={type.value}
                onClick={() => setFilter(type.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  filter === type.value
                    ? 'bg-deep-blue text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-16">
              <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                Aucun événement trouvé
              </h3>
              <p className="text-gray-500">
                Aucun événement ne correspond aux critères sélectionnés.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => {
                const IconComponent = getTypeIcon(event.type);
                return (
                  <div
                    key={event.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full mr-3">
                            <IconComponent className="w-5 h-5 text-deep-blue" />
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(event.type)}`}>
                            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                          </span>
                        </div>
                        {event.recurring && (
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            Récurrent
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-serif font-semibold text-deep-blue mb-3">
                        {event.title}
                      </h3>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="w-4 h-4 mr-2 text-soft-gold" />
                          <span className="text-sm">{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="w-4 h-4 mr-2 text-soft-gold" />
                          <span className="text-sm">{event.time}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-2 text-soft-gold" />
                          <span className="text-sm">{event.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {event.description}
                      </p>

                      <div className="pt-4 border-t border-gray-100">
                        <button className="w-full bg-deep-blue text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-800 transition-colors duration-200">
                          Plus d'informations
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-deep-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Rejoignez-nous !
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Tous nos événements sont ouverts à tous. Venez découvrir notre communauté 
            chaleureuse et grandir dans la foi avec nous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/nous-contacter"
              className="bg-white text-deep-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Nous contacter
            </a>
            <a
              href="mailto:evenements@eujc.fr?subject=Information sur les événements"
              className="bg-soft-gold text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-200"
            >
              S'inscrire aux événements
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;