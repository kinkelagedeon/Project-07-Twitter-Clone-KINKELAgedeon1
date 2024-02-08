import React from 'react';
// import Gedeon from "./../../images/Gedeon.jpg"


const Profile = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* <img
        className="w-full h-64 object-cover object-center"
        src={Gedeon}
        alt="Photo de couverture" 
      /> */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Gédéon Kinkela</div>
        <p className="text-gray-700 text-base">Inscrit en juin 2021</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          172 Suivant
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          5 abonnés
        </span>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Des postes
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Aime
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Réponses
        </span>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Points forts
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Médias
        </span>
      </div>
    </div>
  );
};

export default Profile;
