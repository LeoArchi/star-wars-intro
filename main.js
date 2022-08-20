var fadeIn = document.createElement("div");
fadeIn.classList.add("fadeIn");
fadeIn.innerHTML = "x";

var logo = document.createElement("img");
logo.src = "sw.png";
logo.classList.add("sw-logo");

var text = document.createElement("p");
text.classList.add("text");

var title = document.createElement("div");
title.classList.add("title");

title.innerHTML = "Episode IV";
title.appendChild(document.createElement("br"));
title.innerHTML = title.innerHTML + "UN NOUVEL ESPOIR";

var p1 = document.createElement("p");
p1.innerHTML =
  "C'est une époque de guerre civile. A bord de vaisseaux spatiaux opérant à partir d'une base cachée, les Rebelles ont emporté leur première victoire sur le maléfique Empire Galactique.";

var p2 = document.createElement("p");
p2.innerHTML =
  "Au cours de la bataille, des espions rebelles ont réussi à dérober les plans secrets de l'arme absolue de l'Empire : l'Etoile de la Mort, une station spatiale blindée dotée d'un équipement assez puissant pour annihiler une planète tout entière.";

var p3 = document.createElement("p");
p3.innerHTML =
  "Poursuivie par des sbires sinistres de l'Empire, la princesse Leia file vers sa base dans son vaisseau cosmique, porteuse des plans volés à l'ennemi qui pourront sauver son peuple et restaurer la liberté dans la galaxie....";

text.appendChild(title);

text.appendChild(document.createElement("br"));
text.appendChild(document.createElement("br"));

text.appendChild(p1);

text.appendChild(document.createElement("br"));
text.appendChild(document.createElement("br"));

text.appendChild(p2);

text.appendChild(document.createElement("br"));
text.appendChild(document.createElement("br"));

text.appendChild(p3);

var button = document.querySelector(".button");
button.addEventListener("click", (e) => {
  button.classList.add("hide");

  var intro = document.querySelector(".content");
  intro.appendChild(fadeIn);
  intro.appendChild(logo);
  intro.appendChild(text);

  toggleFullScreen();

  var audio = document.querySelector("audio");
  audio.play();
});

//https://webdevpuneet.com/web-browsers-full-screen-f11-toggle-function-on-a-web-page/#gsc.tab=0
function toggleFullScreen() {
  var doc = window.document;
  var docEl = doc.documentElement;

  var requestFullScreen =
    docEl.requestFullscreen ||
    docEl.mozRequestFullScreen ||
    docEl.webkitRequestFullScreen ||
    docEl.msRequestFullscreen;
  var cancelFullScreen =
    doc.exitFullscreen ||
    doc.mozCancelFullScreen ||
    doc.webkitExitFullscreen ||
    doc.msExitFullscreen;

  if (
    !doc.fullscreenElement &&
    !doc.mozFullScreenElement &&
    !doc.webkitFullscreenElement &&
    !doc.msFullscreenElement
  ) {
    requestFullScreen.call(docEl);
  } else {
    cancelFullScreen.call(doc);
  }
}
