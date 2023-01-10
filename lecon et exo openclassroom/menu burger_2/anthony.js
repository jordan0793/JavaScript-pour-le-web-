document.addEventListener("DOMContentLoaded", function () {
    document; //* Attendre que le HTML soit chargé complétement avant d'appliquer le JS, formuyle non obligatoire mais vivement recommandé
  

    // Déclaration de variable, on vient chercher soit avec des selector ou des ById les éléments, une variable représentera un point précis du HTML. 
    const menu = document.querySelector("button");
    const closed = document.querySelector(".closed");
    const container = document.querySelector(".container");
  
    // C'est là qu'on appelle la fonction , donc variable.addEventListerner, on lui effectuera une écoute sur le clique, le e.prevent défault permettra de de pas ouvrir de nouvelle fenetre de navigation. 

    // Lecture : quand j'appelle la class closed a être écoutez , autrement dit quand j'appelle le boutton ou le liens closed a être écoutez , donc quand j'appelle a écoutez le "click " sur closed , j'applique : que dans le container , la classe entre patrenthèse ( menu_ouvert ) soit retiré , removed. en revanche quand je clique sur menu , la classe menuouvert doit être ajoutez et appliquer au html.
    closed.addEventListener("click", (e) => {
      e.preventDefault();
      container.classList.remove("menuOuvert");
    });
  
    menu.addEventListener("click", (e) => {
      e.preventDefault();
      container.classList.add("menuOuvert");
    });
  });
  
  Envoyer un message dans @AnthonyC
  
