import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo et description */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <img
                src="https://customer-assets.emergentagent.com/job_eujc-static/artifacts/ply6euqy_EUJCLOGO.jpg"
                alt="EUJC Logo"
                className="h-8 w-8 mr-3 opacity-80"
              />
              <span className="text-lg font-bold">E.U.J.C</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Église Universelle de Jésus-Christ - Une communauté de foi, d'espoir et d'amour 
              dédiée à servir Dieu et notre prochain.
            </p>
             {/* <p className="text-gray-400 text-sm mt-2 md:mt-0">
              "Car là où deux ou trois sont assemblés en mon nom, je suis au milieu d'eux." - Matthieu 18:20
            </p> */}
          </div>

          {/* Liens rapides */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/qui-sommes-nous" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Qui sommes-nous
                </a>
              </li>
              <li>
                <a href="/evenements" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Événements
                </a>
              </li>
              <li>
                <a href="/nous-contacter" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Nous contacter
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                <span className="text-sm">MUNGU NI MUNGU 2 Avenue Kingabwa, C/Limete</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                <a href="tel:+33123456789" className="text-sm hover:text-white transition-colors duration-200">
                  +243 1 23 45 67 89
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                <a 
                  href="mailto:contact@eujc.fr?subject=Demande d'information – EUJC" 
                  className="text-sm hover:text-white transition-colors duration-200"
                >
                  contact@eujc.fr
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
           <p className="text-gray-400 text-sm">
  © {new Date().getFullYear()}{" "} <a href="https://kynoviatech.com/" className="text-gray-400 hover:text-indigo-500 transition-colors duration-200" >
    KynoviaTech </a>. Tous droits réservés.
</p>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;