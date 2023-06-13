"user strict";
 // recuperation du la div du formulaire
const todoForm = document.getElementsByClassName('todoForm');
 // Récupération du container qui contiendra nos futurs item.
const itemListContainer = document.getElementById('itemList');
 // On execute une fonction lors de l'envoi du formulaire.
 function additem() {
    
 
todoForm.addEventListener('submit', (event) => {
    // On désactive l'action du formulaire (redirection/refresh).
    event.preventDefault();

    // Récupération du champ de texte pour le nouveau item.
    const itemInput = document.getElementById('itemInput');

    // On attribut sa valeur à une variable (item).
    const item = itemInput.value;

    // On créé notre nouvel élément DOM <li> grâce à la fonction document.createElement("li"), 
    const li = document.createElement('li');

    // On défini le contenu de notre li par le texte récupéré dans notre champ de formulaire.
    li.textContent = item;
   
 });
       // On ajoute notre élément dans notre structure html existante en tant qu'élément enfant de notre container (récupéré plus haut).
 itemListContainer.appendChild(li);

}