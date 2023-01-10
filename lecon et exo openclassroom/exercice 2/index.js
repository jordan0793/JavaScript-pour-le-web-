const newElt = document.createElement("p"); //creation de paragraphe, pas de <>
let elt = document.getElementById("main"); // injecte le p dans main mais pb d'apparition

elt.appendChild(newElt); // résolution appartion pb , création d'un enfant de main
console.log(elt.appendChild(newElt)); // application

elt.innerHTML = "<strong>grand</strong> contenu"; // ajout de balise html pour modifier le contenu

elt.classList.add("important"); // ajout de la classe important au contenu rouge italique
elt.style.color = "green"; // changement de coouleur avec style
