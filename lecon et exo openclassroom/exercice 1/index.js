let listeEl = document.querySelector("article > ul.important > li");

console.log(listeEl.nextElementSibling);

let mainContent = document.getElementById("main-content");
console.log(mainContent);
// création de la variable pour pouvoir effectuer des modification avec la nouvelle variable MainContent

console.log(document.getElementById("main-content"));
// simple appel de la fonction pour la visualisation de l'élément

let importants = document.getElementsByClassName("important");
console.log(importants);

console.log(document.getElementsByClassName("important"));
// Même procédé que pour le ID.

let articles = document.getElementsByTagName("article");
console.log(articles);
// Même procédé appliqué aux balises préétablies de html , comme <a> ou <article> etc ...

let listesImportantes = document.querySelector("article ul.important > li");
console.log(listesImportantes);

console.log(listesImportantes.nextElementSibling);
