// Declaration de deux variables , parent et enfant click compteur, type nombre

let parentClick = 0;
let childClick = 0;

parent = document.getElementById("parent");
child = document.getElementById("child");
compteurparent = document.getElementById("parentcount");
compteurchild = document.getElementById("childcount");

console.log(child.innerText);

child.addEventListener("click", function () {
  console.log("j'ai cliqué sur child");
  childClick = childClick + 1;
  console.log(childClick);
  compteurchild.innerText = childClick;
});
// Initialisation de l'évènement, on prend la variable childClick popur lui rajouter 1 a chaque click, mais pour son affichage en texte on vient chercher innerText.

child.addEventListener("click", function (click) {
  click.stopPropagation();
  compteurchild.innerText = childClick;
});
// on stop la propoagation de l'événement avec stopPropagation, quand  on clique sur le lien , l'élément parent ne prend pas le clique de child

child.addEventListener("click", function (click) {
  click.preventDefault();
});
// on stop l'action de la fenêtre ouverte dans un autre lien, prevent default stop l'action prinipal d'une balise , la balise a est un lien , le lien est stopper.

parent.addEventListener("click", function () {
  console.log("j'ai cliqué sur parent");
  parentcount.innerText = ++parentClick;
});
// On initialise l'événement pour le parent , quand on clique dans le tableau violent parent , le compteur parent fait +1.
