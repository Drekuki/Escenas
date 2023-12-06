let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

var Cangrejo = document.querySelector('.cangrejo')
var Titulo = document.querySelector('.titulo')
var Texto = document.querySelector('.text')


Cangrejo.addEventListener('click', InicioAnimacion)

function InicioAnimacion() {
  Titulo.classList.remove('oculto')
  Texto.classList.remove('oculto')

}

var Cangrejo2 = document.querySelector('.cangrejo2')
var Ballenas = document.querySelector ('.ballenas')
var Texto2 = document.querySelector('.text2')
var tiburon = document.querySelector('.tiburones')

Cangrejo2.addEventListener('click', InicioAnimacion2)

function InicioAnimacion2 (){
  Ballenas.classList.remove('oculto2')

}

Ballenas.addEventListener('click', Iniciodialogo)

function Iniciodialogo () {
  Texto2.classList.remove ('oculto2')
  /* sale el tiburon 1 segundos despues del clic a las ballenas */
  setTimeout(function(){
    tiburon.classList.add('tibu-animado')
  },1000) /* fin salida tibu**/
  
}
