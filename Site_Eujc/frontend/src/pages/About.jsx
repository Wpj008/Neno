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
      name: "Apôtre Boniface LUMPUNGU",
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
  La révélation a été donnée par Dieu à Jean MWAMBI KADIMA MULAYA (Papa Kady) en 1971, à Mwene-Ditu, au Kasaï Oriental (RDC).
</p>

<p>
  Il enseigna d’abord un petit groupe qui forma la première génération. Celle-ci forma la deuxième, puis la troisième, et enfin la quatrième.
</p>

<p>
  Cette Parole est riche, profonde et doit être étudiée pour être pratiquée. Kadima commença sa mission pastorale en 1975.
</p>

<p>
  Il fonda l’Église Universelle de Jésus-Christ (EUJC) en 1976 à Lubumbashi. Il forma la 1ère génération en 1982, la 2ème en 1984, la 3ème en 1990 et la 4ème en 1999.
</p>

<p className="mb-6">
  Il déclara que Christ est Esprit, un être divin, non charnel (2 Corinthiens 5:16).
</p>

<p>
  Un homme déchu ne peut être Messager du Christ. La Parole se révèle à une vierge, comme ce fut le cas de Marie, séparée de Joseph après le message de l’ange.
</p>

<p>
  Le salut est le but de l’EUJC. Autre signe : Saul devient Paul. L’homme doit quitter le mal et faire le bien.
</p>

<p>
  L’EUJC est une Église mère, présente sur les cinq continents. Son siège est à Lubumbashi, RDC.
</p>

<p>
  Elle suit Matthieu 28:19-20 : faire des disciples dans toutes les nations, des hommes accomplis spirituellement et charnellement.
</p>

<p>
  Jean MWAMBI KADIMA MULAYA est né en 1948 à Bibanga, Kasaï Oriental. Fils de Kadima et Kabedi, missionnaires protestants. Il était marié à Milemba Bukasa Berme et père de 10 enfants.
</p>

<p>
  Il était inspiré : père spirituel, prophète, voyant et révélateur.
</p>

<p>
  La révélation de l’EUJC est l’explication spirituelle de la Bible, selon 1 Corinthiens 2:10,13.
</p>

<p>
  Il disait : « La Bible est un rêve, elle a besoin de la lumière du Christ » (Nombres 12:5-6).
</p>

<p>
  Le Seigneur révèle ses secrets aux prophètes (Amos 3:7). Jésus dit : « Vous connaîtrez la vérité et la vérité vous affranchira » (Jean 8:32).
</p>

<p>
  Sans révélation, le peuple est sans frein (Proverbes 29:18 ; Matthieu 16:15-19).
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
                            
              « Ma nourriture, dit Jésus, est de faire la volonté de celui qui m’a envoyé » (Jean 4:34).</p>

<p>
  « Nul ne peut servir deux maîtres : il haïra l’un et aimera l’autre, ou s’attachera à l’un et méprisera l’autre. 
  Vous ne pouvez servir Dieu et Mamon » (Matthieu 6:24).
</p>

<p>
  « Selon la grâce de Dieu qui m’a été donnée, j’ai posé le fondement comme un sage architecte. 
  Un autre bâtit dessus. Mais que chacun prenne garde à la manière dont il bâtit dessus. 
  Car personne ne peut poser un autre fondement que celui qui a été posé, savoir Jésus-Christ » (1 Corinthiens 3:10-11).
</p><br></br>
                  
              <p className="text-lg text-gray-700 leading-relaxed">
  « Car nous marchons par la foi et non par la vue. 
  Dès maintenant, nous ne connaissons personne selon la chair. 
  Et si nous avons connu Christ selon la chair, maintenant nous ne le connaissons plus de cette manière » (2 Corinthiens 5:7, 16).
</p><br></br>

<p>
  La vision de l’Eglise Universelle de Jésus-Christ est d’évangéliser les nations par l’explication spirituelle des Écritures.
  Elle révèle le sens réel de la Bible et cherche à sauver les âmes.
</p>

<p>
  L’objectif est de faire de toutes les nations des disciples, des hommes accomplis spirituellement et charnellement.
</p>

<p>
  « Allez, faites de toutes les nations des disciples, les baptisant au nom du Père, du Fils et du Saint-Esprit » (Matthieu 28:19).
</p>

<p>
  Cette vision transforme les hommes en vrais adorateurs, qui adorent Dieu en Esprit et en Vérité.
</p>

<p>
  « L’heure vient, et elle est déjà venue, où les vrais adorateurs adoreront le Père en Esprit et en Vérité. 
  Ce sont là les adorateurs que le Père demande. Dieu est Esprit, et il faut que ceux qui l’adorent, l’adorent en Esprit et en Vérité » (Jean 4:23-24).
</p><br></br>


            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-deep-blue mb-6">
                Notre Mission
              </h2>

              <p>L’EUJC a pour objet de faire de toutes les nations des disciples.</p>
                <p>Ce sont des hommes complets spirituellement et charnellement (Matthieu 28:19).</p>
                  <p>Son messager, Mwambi KADIMA MULAYA, Père Spirituel, avait pour mission de témoigner du Christ.</p>
                    <p>Il révélait le sens réel des Écritures (Actes 10:39-42).</p>
                      <p>Il détenait la clé du ciel qu’il a transmise à son témoin oculaire.</p><br></br>

                          <p>Le souci primordial de Dieu est que tout homme se purifie de ses souillures.</p>
                        <p>Il veut qu’il devienne parfait.</p>
                      <p>C’est cette mission que porte l’Eglise Universelle de Jésus-Christ : faire connaître Dieu au monde.</p>
                    <p>La connaissance de Dieu donne la vie éternelle.</p>
                  <p>Cette vie se manifeste par l’abandon du mal, la pratique du bien, et la tolérance envers les fautes d’autrui.</p>
                <p>La vie éternelle se vit dès maintenant, sur la terre.</p><br></br>

              <p>L’EUJC a pour mission de sauver le monde.</p>
                <p>Elle veut libérer l’homme de la servitude, des maladies, des souffrances et du mal.</p>
                  <p>Elle prêche la volonté de Dieu selon la Bible et envers le prochain.</p>
                    <p>La mission de Jésus, reflétée par l’Eglise, comporte quatre étapes :</p>
                      <p>Accomplir la loi (Matthieu 5:17-19).</p>
                        <p>Servir et donner sa vie pour les autres (Marc 10:45).</p>
                      <p>Chercher et sauver les perdus (Luc 19:10).</p>
                    <p>Donner la vie éternelle (Jean 3:16-17).</p>
                  <p>Elle vise à pratiquer la loi réellement.</p>
                <p>Elle veut affranchir l’homme du péché et du pouvoir de Satan.</p>
              <p>Elle veut aussi le libérer de ses semblables et le guider vers la perfection.</p><br></br>

<ul className="space-y-4 text-lg text-gray-700">

                <p>Cette mission se décline en trois baptêmes :</p>

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
          <p>
  La doctrine de l’Église Universelle de Jésus-Christ explique spirituellement l’Écriture Sainte, la Bible. 
  Elle repose sur la Parole inspirée de Dieu, Parole spirituelle, car Dieu est Esprit. 
  Ses véritables adorateurs doivent l’adorer en Esprit et en Vérité.
  Depuis la Genèse jusqu’à l’Apocalypse, toute la Parole de Dieu est voilée et cachée. 
  Il faut l’interpréter selon la Sagesse de Dieu.
</p><br></br>

<div className="space-y-6 text-gray-700">
  <div className="bg-blue-50 p-6 rounded-lg">
    <h3 className="font-semibold text-deep-blue mb-3"> Prédication</h3>
    <p>
      Cette prédication est entièrement spirituelle.
    </p>
    <p>
      Elle révèle des choses que l’œil humain n’a jamais vues.
    </p>
    <p>
      Ce sont des choses que l’oreille humaine n’a jamais entendues.
    </p>
    <p>
      Elle rend le Message divin nouveau, dans un contexte spirituel.
    </p>
    <p>
      Les récits bibliques, dépouillés de leur contexte matériel, restent vivants et éternels.
    </p>
    <p>
      La création de l’homme, sa chute, la sortie d’Israël d’Égypte, la naissance de Jean-Baptiste et de Jésus, 
      ces vérités historiques se vivent encore spirituellement aujourd’hui.
    </p>
    <p>
      «Cela leur est arrivé à titre d’exemple et fut écrit pour nous avertir, nous pour qui la fin des siècles est arrivée» (1 Cor. 10:11).
    </p>
    <p>
      Cette prédication peut rendre l’homme parfait, c’est-à-dire avoir la vie éternelle.
    </p>
    <p>
      Elle rejette l’idée répandue que l’homme ne peut être parfait tant qu’il vit sur terre.
    </p>
    <p>
      «Or, vous le savez, lui (le Seigneur) est apparu pour ôter les péchés; et il n’y a pas de péché en lui...» (1 Jean 3:5-9).
    </p>
  </div>

  <div className="bg-blue-50 p-6 rounded-lg">
    <h3 className="font-semibold text-deep-blue mb-3"> L'Enseignement</h3>
    <p>
      L’Enseignement révèle le sens caché de la Parole de Dieu.
    </p>
    <p>
      Il est donné aux disciples jusqu’à l’avènement de l’Esprit-Saint en eux.
    </p>
    <p>
      Il donne une connaissance unique à tous les disciples.
    </p>
    <p>
      Ces derniers atteignent le rang de Maître et deviennent Un avec leur Maître.
    </p>
    <p>
      Ils partagent Un seul Seigneur, Un seul Roi, Un seul Baptême, Un seul Dieu (Éphésiens 4:5).
    </p>
    <p>
      Cet enseignement se donne par étapes.
    </p>
    <p>
      De la Genèse à l’Apocalypse, la Parole de Dieu est un chemin à parcourir.
    </p>
    <p>
      Jésus dit : «Je suis le chemin qui conduit à la vie éternelle» (Jean 14:6).
    </p>
    <p>
      Ce chemin est la Parole enseignée. Il a un début et une fin.
    </p>
    <p>
      «Je suis l’Alpha et l’Oméga, le Premier et le Dernier, le Commencement et la Fin» (Apocalypse 22:13).
    </p>
  </div>

  <div className="bg-blue-50 p-6 rounded-lg">
    <h3 className="font-semibold text-deep-blue mb-3"> Programme de Culte</h3>
    <p>
      Nos réunions dans les stations suivent ce rythme :
    </p>
    <p>
      Chaque mardi est consacré aux questions, réponses et dialogue biblique.
    </p>
    <p>
      Le mercredi, les mamans se rencontrent pour des cours et discussions sur la conduite chrétienne.
    </p>
    <p>
      Le samedi est réservé à l’enseignement de la Parole de Dieu à toute l’assemblée.
    </p>
    <p>
      Pendant cet enseignement, le mystère caché de Dieu est révélé au disciple.
    </p>
    <p>
      Le dimanche est généralement une journée de culte dominical.
    </p>
    <p>
      Ce programme de culte est le même partout où se trouve l’Église Universelle de Jésus-Christ.
    </p>
    <p>
      Dieu est avec nous chaque jour et à chaque instant.
    </p>
    <p>
      Le culte comporte trois parties principales :
    </p>
    <p>
      1. Invoquer et remercier Dieu pour tous ses bienfaits.
    </p>
    <p>
      2. Prier pour tout le monde, avec cinq offrandes, prières et communiqués.
    </p>
    <p>
      3. La parole.
    </p>
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