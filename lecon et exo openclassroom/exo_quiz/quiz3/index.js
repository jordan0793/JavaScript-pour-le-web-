document.addEventListener("DOMContentLoaded", function () {
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

  let button = document.querySelector("button");

  // let ValeurClickQuestion1 = document.querySelector(
  //   'input[name="rep0"]:checked'
  // );
  // let ValeurClickQuestion2 = document.querySelector(
  //   'input[name="rep1"]:checked'
  // );
  // let ValeurClickQuestion3 = document.querySelector(
  //   'input[name="rep2"]:checked'
  // );
  let vraiReponse = [1, 2, 2];

  let choix = document.querySelectorAll(".quiz-choix input");
  console.log("tttttt    " + choix);

  choix.forEach((e) => {
    e.addEventListener("click", function () {
      //     if(ValeurClickQuestion1==1 &&ValeurClickQuestion2==2 && ValeurClickQuestion3==2)
      //    {
      //    note=note+1
      // }
      let note = 0;
      let AfficherNote = document.querySelector(".NoteDefinitive");
      let reponseeleve = [];
      if (
        document.querySelector('input[name="rep0"]:checked') &&
        document.querySelector('input[name="rep1"]:checked') &&
        document.querySelector('input[name="rep2"]:checked')
      )
        reponseeleve.push(
          document.querySelector('input[name="rep0"]:checked').value
        );
      console.log(note);
      reponseeleve.push(
        document.querySelector('input[name="rep1"]:checked').value
      );
      console.log(document.querySelector('input[name="rep1"]:checked').value);
      reponseeleve.push(
        document.querySelector('input[name="rep2"]:checked').value
      );
      for (i = 0; i < reponseeleve.length; i++) {
        if (reponseeleve[i] == vraiReponse[i]) {
          note = note + 1;
        }
      }
      console.log("note    " + note);
      // AfficherNote.("note finale : " + note + "/2");
      "la note est de " + note;
      console.log(reponseeleve);
      button.disabled == false;

      button.addEvenListener("submit", function (e) {
        console.log("rrrrr");
        e.preventDefault();
        // e.stopPropagation();
        if (
          document.querySelector('input [name="rep0"]:checked').value == 1 &&
          'input [name="rep1"]:checked'.value == 2 &&
          'input [name="rep2"]:checked'.value == 2
        ) {
          document
            .querySelector('input [name="rep0"]:checked')
            .classList.add("juste").innerHTML = "juste";
          'input [name="rep1"]:checked'.classList.add("juste").innerHTML =
            "juste";
          'input [name="rep2"]:checked'.classList.add("juste").innerHTML =
            "juste";
        } else {
          document.classList.add("faux").innerHTML = "faux";
        }
        AfficherNote.innerHTML = "la note est de " + note;
      });
    });
  });
});

/* Trouver le moyen que quand on cliqque sur validez, on voit la note en haut */

// if(vraireponse[i]==valuerep[i]){
//   note++
// }

//       if (
//         document.querySelector('input[name="rep0"]:checked') &&
//         document.querySelector('input[name="rep1"]:checked') &&
//         document.querySelector('input[name="rep2"]:checked')
//       ) {
//         console.log(document.querySelectorAll('input[name="rep0"]:checked'));
//         console.log(document.querySelectorAll('input[name="rep1"]:checked'));
//         console.log(document.querySelectorAll('input[name="rep2"]:checked'));

//         button.disabled = false;
//       }
//     });
//   });
// });

// let tableau1 = false;
// let tableau2 = false;

// if (
//   document.querySelectorAll('input[name="rep0"]:checked') &&
//   document.querySelectorAll('input[name="rep1"]:checked')
// ) {
//   console.log(document.querySelectorAll('input[name="rep0"]:checked'));
//   tableau1 = true;
//   tableau2 = true;
//   console.log("ffff      " + tableau1, tableau2);
// }

// function verifquestionnaire() {
//   if (tableau1 === true && tableau2 === true) {
//     button.disabled = false;
//   }
// }

// let tableauQuestionnaire1 = document.querySelectorAll('input[name="rep0"]');
// console.log(tableauQuestionnaire1);

// tableauQuestionnaire1.forEach((e) => {
//   e.addEventListener("click", function () {
//     tableau1 = true;
//     verifquestionnaire();
//   });
// });
// let valeurClickreponse1 = document.querySelector(
//   'input[name="rep0"]:checked'
// );

// let valeurClickreponse2 = document.querySelector(
//   'input[name="rep1"]:checked'
// );
// console.log(valeurClickreponse1);
// console.log(valeurClickreponse2);
// if (valeurClickreponse1 == true && valeurClickreponse2 == true) {
//   disabled = false;
// }

// let tableauQuestionnaire2 = document.querySelectorAll('input[name="rep1"]');
// tableauQuestionnaire2.forEach((e) => {
//   e.addEvenListener("click", function () {
//     tableau2 = true;
//     verifquestionnaire();
//});

/* essai pour debug*/
