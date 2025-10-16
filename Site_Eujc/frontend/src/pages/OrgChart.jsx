import React, { useState, useEffect } from 'react';
import { Search, Mail, Phone, Users, Filter } from 'lucide-react';
import teamData from '../data/team.json';

const OrgChart = () => {
  const [team, setTeam] = useState([]);
  const [filteredTeam, setFilteredTeam] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMinistry, setSelectedMinistry] = useState('all');

  useEffect(() => {
    setTeam(teamData);
    setFilteredTeam(teamData);
  }, []);

  useEffect(() => {
    let filtered = team;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(member =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.ministry.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by ministry
    if (selectedMinistry !== 'all') {
      filtered = filtered.filter(member =>
        member.ministry.toLowerCase().includes(selectedMinistry.toLowerCase())
      );
    }

    setFilteredTeam(filtered);
  }, [searchTerm, selectedMinistry, team]);

  const ministries = [
    { value: 'all', label: 'Tous les représentants' },
    { value: 'bureau', label: 'Bureau Supreme' },
    { value: 'provincial', label: 'Représentant Provincial' },
    { value: 'régional', label: 'Représentant Regional' },
    { value: 'jeunesse', label: 'Ministère de la Jeunesse' },
    { value: 'évangélisation', label: "Ministère d'Évangélisation" },
    { value: 'enfance', label: "Ministère de l'Enfance" },
    { value: 'administration', label: 'Administration' },
    { value: 'finances', label: 'Finances' }
  ];

  const getMinistryColor = (ministry) => {
    const colors = {
      'Bureau Supreme': 'bg-purple-100 text-purple-800',
      'Représentant Provincial': 'bg-pink-100 text-pink-800',
      'Représentant Régional': 'bg-blue-100 text-blue-800',
      'Ministère de la Jeunesse': 'bg-green-100 text-green-800',
      "Ministère d'Évangélisation": 'bg-orange-100 text-orange-800',
      "Ministère de l'Enfance": 'bg-yellow-100 text-yellow-800',
      'Administration': 'bg-gray-100 text-gray-800',
      'Finances': 'bg-red-100 text-red-800'
    };
    return colors[ministry] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div id="main-content" className="py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-deep-blue mb-6">
            Organigramme
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Découvrez l’équipe dévouée qui œuvre au sein des différents sièges de notre Église, 
            contribuant activement à son rayonnement spirituel et à l’épanouissement de notre communauté.
          </p>
        </div>
      </section>

      {/* Ministry Structure Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-deep-blue mb-12 text-center">
            Organisation des Sièges
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif font-semibold text-deep-blue mb-2">Bureau Supreme</h3>
              <p className="text-gray-600 text-sm">Coordonatrice et Représentant Légal</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif font-semibold text-deep-blue mb-2">Représentants Provinciaux</h3>
              <p className="text-gray-600 text-sm">Siège Politique, Administratif, Economique et Spirituel</p>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif font-semibold text-deep-blue mb-2">Représentants Régionaux</h3>
              <p className="text-gray-600 text-sm">Siège Politique, Administratif, Economique et Spirituel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher par nom, rôle ou ministère..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white min-w-48"
                value={selectedMinistry}
                onChange={(e) => setSelectedMinistry(e.target.value)}
              >
                {ministries.map((ministry) => (
                  <option key={ministry.value} value={ministry.value}>
                    {ministry.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredTeam.length === 0 ? (
            <div className="text-center py-16">
              <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                Aucun membre trouvé
              </h3>
              <p className="text-gray-500">
                Aucun membre de l'équipe ne correspond aux critères de recherche.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredTeam.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift"
                >
                  <div className="p-6">
                    <div className="text-center mb-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white text-xl font-bold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <h3 className="text-lg font-serif font-semibold text-deep-blue mb-1">
                        {member.name}
                      </h3>
                      <p className="text-soft-gold font-medium mb-2">
                        {member.role}
                      </p>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getMinistryColor(member.ministry)}`}>
                        {member.ministry}
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {member.description}
                    </p>

                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600">
                        <Mail className="w-4 h-4 mr-2 text-soft-gold" />
                        <a
                          href={`mailto:${member.email}`}
                          className="text-sm hover:text-blue-600 transition-colors duration-200"
                        >
                          {member.email}
                        </a>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Phone className="w-4 h-4 mr-2 text-soft-gold" />
                        <a
                          href={`tel:${member.phone}`}
                          className="text-sm hover:text-blue-600 transition-colors duration-200"
                        >
                          {member.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-deep-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Envie de Servir ?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Rejoignez notre équipe ! Nous cherchons toujours des personnes passionnées 
            pour servir dans différents ministères de l'église.
          </p>
          <a
            href="mailto:service@eujc.fr?subject=Intérêt pour servir dans un ministère"
            className="bg-white text-deep-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Exprimer mon intérêt
          </a>
        </div>
      </section>
    </div>
  );
};

export default OrgChart;