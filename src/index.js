import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

// Notre premier composant React :)

// 1. Création d'un élément virtuel (virtual DOM) :
// - équivalent logique de document.createElement('div')
// - transpilé en React.createElement('div')
const App = () => (
  <div>
    <p className="message">salut !</p>
  </div>
);

// 2. Ajout de l'élément virtuel dans le DOM du navigateur (mount/render) :
// - équivalent logique de cible.appendChild(quoiajouter)
document.addEventListener('DOMContentLoaded', () => {
  const rootComponent = App();
  const targetNode = document.getElementById('root');
  render(rootComponent, targetNode);
});

