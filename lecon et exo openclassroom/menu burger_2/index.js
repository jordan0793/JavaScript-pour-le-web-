// formule de départ, par défaut
document.addEventListener("DOMContentLoaded", function () {
  //   document;

  // Declarer une variable en allaant chercher un élément dans le css

  let menu = document.querySelector(".LinkOpen");
  console.log(menu);
  // qd je clique sur menu , ça m'ouvre la navigation, donc il faut ajouter la classe .invisible à nav. ensuite il faut enlever , donc rendre remote invisible.

  let fermer = document.querySelector(".LinkClose");
  console.log(fermer);

  let container = document.querySelector(".container");
  console.log(container);
  // Appel de la fonction

  menu.addEventListener("click", (e) => {
    e.preventDefault();
    container.classList.add("menu_ouvert");
  });

  fermer.addEventListener("click", (e) => {
    e.preventDefault();
    container.classList.remove("menu_ouvert");
  });
});
