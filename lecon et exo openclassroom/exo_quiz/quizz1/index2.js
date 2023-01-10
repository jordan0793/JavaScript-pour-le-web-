document.addEventListener("DOMContentLoaded", function () {
  let tableaudereponses = document.querySelectorAll("li");
  console.log(tableaudereponses); /* le tableau sur les balises listes*/

  let blocPage = document.querySelector(".blocPage");
  console.log(blocPage);

  tableaudereponses.forEach((reponse) => {
    reponse.addEventListener("click", function () {
      tableaudereponses.forEach((element) => {
        element.classList.remove("sentenceInRed");
        console.log("il va faire tout noir");
      });
      reponse.classList.add("sentenceInRed");
    });
  });
});
/* tableaudereponses c'est le tableau , on travail a partir de element et de reponse , tous les 2 désigne l'indice dans le tableau mais tous les deux ne travail pas "dans la même dimension" l'astuce et d'obliger le tableau a tous mettre en noir dés le départ , element va servir a cela uniquement , ainsi la boucle boucle sur tous les élement du tableau , il les mets en noirs les uns aprés les autres. EN REVANCHE, reponse désigne aussi un indice du tableau de par la structure de la fonction fléchés tableaudereponses.forEach( (reponse) => il faut comprendre que ce qui est écrit entre parenthèse représente l'indice sur lequel on va travaillé ! sachant que tableaudereponses est une variable auquel est assujeti l'événement clique, cela voudra dire que lorque que l'onecoutera un clique sur l'indice reponse, uniquement cet indice sera mis en rouge car la classe css sera appellée*/
