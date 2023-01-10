/*Rechercher l'élément*/
let buttonOpen = document.getElementsByClassName("buttonOpen"); // On récupère l'élément sur lequel on veut détecter le clic
console.log(buttonOpen);

/*Mettre une fonction à l'élement*/
buttonOpen.addEventListener("click", function () {
  buttonOpen.classlist.remove("menu");
});
