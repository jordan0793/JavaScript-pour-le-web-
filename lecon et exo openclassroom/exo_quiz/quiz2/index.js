document.addEventListener("DOMContentLoaded", function () {
  /* Méthode 1 : on utilise une boucle for each et on utilise un typeof, qui va permettre de savoir si li_selection existe, en premier lieu il n'existe pas elle est indéfinie, car on a pas cliquer dessus.le texte est noir. Puis lorque l'on clique sur un autre , le précédent élément devient noir et l'autre devient rouge*/

  let selectors = document.querySelectorAll("li");
  let li_selection;

  selectors.forEach((selector) => {
    selector.addEventListener("click", function () {
      if (typeof li_selection !== "undefined") {
        li_selection.classList.remove("sentenceBlue");
      }
      selector.classList.add("sentenceInBlue");
      li_selection = selector;
    });
  });
  /*     question 2 : mettre le boutton du questionnaire actif quand toutes les réponses sont selectionnées */
  /* La méthode de guillauyme consiste a récupérer les éléments questionnaire 1 et questionnaire 2 et de les qualifiés en false dés le départ, de cette manière elles seront qualifiées de true par la suite et le bouttons s'activera, donc le code correspondant est : */

  let button = document.querySelector("button");
  console.log(button);
  let tableau1 = false;
  let tableau2 = false;

  // Fonction qui vérifie si toutes les questions ont eu des réponses;
  // Si c'est le cas, j'affiche le bouton, nous appellerons donc cette fonction au moment opportun.
  function verifquestionnaire() {
    if (tableau1 === true && tableau2 === true) {
      button.disabled = false;
    }
  }
  let tableauQuestionnaire1 = document.querySelectorAll('input[name="rep0"]');
  console.log(tableauQuestionnaire1);
  /* On reprend pour le premier tableau, on reprend la variable tableau 1 et on travail dedans, il faut vérifier que si on clique dans le tableau 1 la fonction Verifquestionnaire soit appliquer, mais pour l'appliquer il faut que le questionnaire soit vrai , on est cependant encore dans le travail préparatoire car on a pas écouter le clique. on écrit : */
  tableauQuestionnaire1.forEach((e) => {
    e.addEventListener("click", function () {
      tableau1 = true;
      verifquestionnaire();
    });
  });
  /* Ainsi pour le tableau1 , pour chaque indice (e), on va venir écouter le clique,On écrit la formule de manière à ce qu'elle s'applique, donc on utilise pas de if , c'est une application , le if est déja défini au dessus. Ici le clique existe à l'un des indices du tableau 1 , alors le tableau 1 est vrai ET nous appellons la formule vérififquestionnaire qui ne sera pour le moment qu'a moitié vrai , il faudra réitéré l'opération pour le tableau 2 */

  let tableauQuestionnaire2 = document.querySelectorAll('input[name="rep1"]');
  tableauQuestionnaire2.forEach((e) => {
    e.addEvenListener("click", function () {
      tableau2 = true;
      vérififquestionnaire();
    });
  });

  /* essai pour debug*/

  button.addEvenListener("click", function (e) {
    let valeurClickreponse1 = document.querySelector(
      'input[name="rep0"]:checked'
    );
    let valeurClickreponse2 = document.querySelector(
      'input[name="rep1"]:checked'
    );

    if ((valeurClickreponse1 = true && valeurClickreponse2 == true)) {
      button = false;
    }
  });

  /* Ensuite une fois les deux variables tableau rendu vrai, le bouton rendu activé, il faut se pencher sur le probléme de la note et de l'apparition d'une réponse juste en vert et en rouge barré pour une fausse, on établira un compteur qui prend +1 a chaque fois que la valeur de l'input est égale au click effectuer par l'utilisation.*/
  //   console.log(button);
  //   button.addEvenListener("click", function () {
  //     console.log("button");
  //     button.disabled = true;
  //     let note = 0;
  //     let valeurVraiReponse1 = 1;
  //     let valeurVraiReponse2 = 2;

  //     let valeurClickreponse1 = document.querySelector(
  //       'input[name="rep0"]:checked'
  //     );

  //     let valeurClickreponse2 = document.querySelector(
  //       'input[name="rep1"]:checked'
  //     );

  //     console.log("reponse1 : " + valeurClickeponse1.value);
  //     console.log("reponse2 : " + valeurClickreponse2.value);

  //     if (valeurClickreponse1.value == valeurVraiReponse1) {
  //       console.log("la réponse 1 est bonne");
  //       document
  //         .querySelector('input[name="rep0"]:checked')
  //         .classList.add("juste");
  //       note++;
  //       //note=1
  //     } else {
  //       console.log("la réponse 1 est fausse");

  //       document
  //         .querySelector('input[name="rep0"]:checked')
  //         .classlist.add("faux");

  //       console.log("note finale : " + note + "/2");
  //     }
  //   });
  // },
  // false
});
