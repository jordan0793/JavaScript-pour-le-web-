document.addEventListener("DOMContentLoaded", function () {
  /*Définition des variables pour la selection des réponses */

  let reponseQuestionnaire = document.querySelectorAll("label");
  console.log(reponseQuestionnaire);

  let selectors = document.querySelectorAll("li");
  console.log(selectors);

  let blocPage = document.querySelector(".blocPage");
  console.log(blocPage);

  let button = document.querySelector("imput");
  console.log("imput");

  let li_selection;

  selectors.forEach((selector) => {
    selector.addEventListener("click", function () {
      if (typeof li_selection !== "undefined") {
        li_selection.classList.remove("sentenceInRed");
      }
      selector.classList.add("sentenceInRed");
      li_selection = selector;
    });
  });
});

/* Méthode 1 : on utilise une boucle for each et on utilise un typeof, qui va permettre de savoir si li_selection existe, en premier lieu il n'existe pas car on a pas cliquer dessus.le texte est noir. Puis lorque l'on clique sur un autre , le précédent élément devient nopir et l'autre devient rouge*/
