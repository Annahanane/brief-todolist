"use strict";

 
 // Récupération de la div du formulaire
const todoForm = document.querySelector('.todoForm');

 // Récupération du conteneur qui va contenir nos futurs éléments
const itemListContainer = document.getElementById('itemList');

 // Exécution d'une fonction lors de la soumission du formulaire
function addItem(event) {
  // On désactive l'action du formulaire (redirection/refresh).
  event.preventDefault();

  // Récupération du champ texte pour le nouvel item
  const itemInput = document.getElementById('itemInput');

  // On attribut sa valeur à une variable (item).
  const item = itemInput.value;

  // On créé notre nouvel élément DOM <li>  
  const li = document.createElement('li');

  // On défini le contenu de notre li par le texte récupéré dans notre champ de formulaire.
  li.textContent = item;

  // On ajoute 'li' dans notre structure html existante en tant qu'élément enfant
  itemListContainer.appendChild(li);

  // Effacer le champ texte après avoir ajouté l'élément
  itemInput.value = '';
}

 // Ajouter un écouteur d'événement de soumission au formulaire et appeler la fonction addItem
todoForm.addEventListener('submit', addItem);
