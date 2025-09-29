import React from 'react';
import { Heart, Target, BookOpen, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Amour",
      description: "Nous croyons que l'amour de Dieu transforme les cœurs et unit les peuples au-delà de toutes différences."
    },
    {
      icon: BookOpen,
      title: "Vérité",
      description: "La Parole de Dieu est notre fondement et notre guide dans toutes les décisions de la vie."
    },
    {
      icon: Users,
      title: "Communion",
      description: "Nous valorisons la communion fraternelle et l'entraide mutuelle au sein de notre communauté."
    },
    {
      icon: Target,
      title: "Mission",
      description: "Nous sommes appelés à partager l'Évangile et à servir notre prochain avec compassion."
    }
  ];

  const pastoralTeam = [
    {
      name: "Apôtre Boniface LUPUNGU",
      role: "Représentant Légal",
      description: "L'Apôtre Boniface, Représentant Légal de l'Église Universelle de Jésus-Christ, incarne l'autorité administrative de notre communauté. Par sa sagesse et son dévouement.",
                    
      image: "https://eujc.church/relegal%20Boniface.jpg"
    },
    {
      name: "Maman Berme MILEMBA ",
      role: "Coordonatrice de la Chefferie Spirituelle",
      description: "Madame Berme, Coordinatrice de la Chefferie Spirituelle, assure la liaison entre les ministères avec rigueur et discernement. Elle veille à l’unité doctrinale et au bon fonctionnement des instances spirituelles.",
      image: "https://i.ytimg.com/vi/YIDoe5qkE6c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBdyiC3vAZ1slrXbErIJI7gwXev3g"
    }
  ];

  return (
    <div id="main-content" className="py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-deep-blue mb-6">
            Qui sommes-nous
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Découvrez l'histoire, la vision et les valeurs qui guident l'Église Universelle de Jésus-Christ 
            dans sa mission d'amour et de service.
          </p>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-deep-blue mb-8 text-center">
            Notre Histoire
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
            <p className="mb-6">
              
Comment est venu jusqu’à nous ce Messager?
Cette revelation a été donnée par Dieu à son humble Messager de l’Eglise Universelle de Jésus-Christ, Jean de Dieu MWAMBI KADIMA MULAYA, vers l’an 1971.</p>

<p>A peine avoir reçu ce Message, en bon maître, il a enseigné à un petit groupe des gens qui deviendront plus tard toute une génération a part entière.</p><br></br>

<p> Ces derniers l’ont transmis à ceux de la deuxième génération et de la deuxième à la troisième ; ces derniers à la quatrième génération. 

    Cette parole dont la nature est très perfectible, multidimensionnelle et dont la richesse est grandiose et sa valeur inexprimable.</p><br></br>

            <p className="mb-6">
              
              Il faut l’apprendre et la réapprendre pour en avoir la maîtrise et la pratique. Ainsi Mwambi Kadima en tant qu'Apôtre, commença sa mission pastoral en 1975 et fit sortir la premier génération an 1978.

                Avant de nous confier les péripéties de sa vie, Messager Jean MWAMBI KADIMA MULAYA a précisé que Christ est Esprit, un être divin et non un être charnel.
            </p>
            <p>
              C’est pourquoi, tout comme un cheval déjà monté ne sert qu’à son chevalier, un homme déchu ne peut être Messager du Christ.</p>
              <p> C’est aussi pourquoi la Parole de Dieu ne se révèle qu’à une vierge, c’est le cas de Marie. En recevant l’ange du Seigneur, </p>
              <p>Marie a été interdite d’entrer en contact charnel avec Joseph. Aussi, quand l’ange vient auprès de Marie, il lui dit; «Salut, Marie».</p>
              <p> Le salut est bien le but poursuivi par l'EUJC (l’Eglise du Christ). C’est aussi son signe. Un autre signe de cette Eglise c’est l’exemple de Saul, qui devient Paul.</p>
              <p> Autrement dit, l’homme doit cesser de faire le mal et persévérer à faire le bien.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-deep-blue mb-6">
                Notre Vision
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
               «Ma nourriture, réclame Jésus, est de faire la volonté de celui qui m’a envoyé» (Jn 4:34).</p>
               <p> «Nul ne peut servir deux maîtres, car il haïra l’un et aimera l’autre, ou s’attachera à l’un et méprisera l’autre.</p>
               <p> Vous ne pouvez  donc servir Dieu et Mamon», (Math. 6:24). «Selon la grâce de Dieu qui m’a été donnée, j’ai posé le fondement comme un sage architecte,
                et un autre bâtit dessus. Mais que chacun prenne garde à la manière dont il bâtit dessus. Car personne ne peut poser un autre fondement que celui qui a été posé, savoir Jésus-Christ.» (1 Cor. 3:10-11).</p><br></br>

                  
              <p className="text-lg text-gray-700 leading-relaxed">
                «Car nous marchons par la foi et non par la vue. Ainsi, dès maintenant, nous ne connaissons personne selon la chair; et si nous avons connu Christ selon la chair, 
                maintenant nous ne le connaissons plus de cette manière.» (2Cor. 5:7, 16).

              </p>
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-deep-blue mb-6">
                Notre Mission
              </h2>

              <p>L’EUJC a pour objet d’aller faire de toutes les nations des disciples, les rendre des hommes faits ou chrétiens en passant par la montagne;
                 c’est-à-dire les hommes complets sur le plan spirituel et charnel (Math. 28:19).</p><br></br>

                      <p>Son messager est Mwambi KADIMA MULAYA qui en est le Père Spirituel, sa mission était de témoigner Christ c’est-à-dire montrer les sens réels des écritures;
                         Actes 10:39-42. Il détenait la clé du ciel qu’il a laissé à son témoin oculaire.</p><br></br>

                  <p>«Allez, faites de toutes les nations des disciples, les baptisant au nom du Père, du Fils et du Saint-Esprit.» (Mt. 28:19). </p><br></br>


                <p> L’EUJC à pour mission de sauver le monde, lui faire connaître Dieu et procurer la liberté. Affranchir l’homme de la servitude de ses semblables,
                   de la maladie, des souffrances, des palabres et du mal. Prêcher à l’homme ce qu’est la volonté de Dieu à travers la Bible et vis-à-vis de son prochain.</p><br></br>



              <ul className="space-y-4 text-lg text-gray-700">

                <p>Cette mission consiste à faire marcher l’homme dans un chemin ayant 3 parties:</p>

                <li className="flex items-start">
                  <span className="text-soft-gold mr-3">•</span>
                  Baptême au nom du Père
                </li>
                <li className="flex items-start">
                  <span className="text-soft-gold mr-3">•</span>
                  Baptême au nom du Fils
                </li>
                <li className="flex items-start">
                  <span className="text-soft-gold mr-3">•</span>
                 Baptême au nom du Saint-Esprit
                </li>
              
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Déclaration de Foi */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-deep-blue mb-8 text-center">
           Principes doctrinaux
          </h2>
          <div className="space-y-6 text-gray-700">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-deep-blue mb-3">Les Écritures</h3>
              <p>Nous affirmons que la Bible est la Parole inspirée de Dieu, et constitue l’autorité ultime en matière de foi, de vie et de conduite.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-deep-blue mb-3">La Trinité</h3>
              <p>Nous croyons en un Dieu unique et éternel, manifesté en trois personnes divines : le Père, le Fils et le Saint-Esprit.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-deep-blue mb-3">Jésus-Christ</h3>
              <p>Nous croyons en Jésus-Christ, qui s’est offert en sacrifice pour nos péchés et est ressuscité afin de nous rendre justes devant Dieu.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-deep-blue mb-3">Le Salut</h3>
              <p>Nous croyons que le salut est une grâce divine, offerte librement par Dieu et reçue par la foi en Jésus-Christ, indépendamment des œuvres humaines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-16 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-deep-blue mb-12 text-center">
           Principes Fondamentaux
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center hover-lift">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-soft-gold rounded-full mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-deep-blue mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe Pastorale */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-deep-blue mb-12 text-center">
            Autorités Écclésiales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {pastoralTeam.map((pastor, index) => (
              <div key={index} className="text-center hover-lift">
                <div className="mb-6">
                  <img
                    src={pastor.image}
                    alt={pastor.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-soft-gold"
                  />
                </div>
                <h3 className="text-xl font-serif font-semibold text-deep-blue mb-2">
                  {pastor.name}
                </h3>
                <p className="text-soft-gold font-medium mb-4">
                  {pastor.role}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {pastor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;