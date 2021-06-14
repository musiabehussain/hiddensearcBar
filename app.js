const searchr = document.querySelector(".searche");

const btno =  document.querySelector('.btne');

const input = document.querySelector('.input');



btno.addEventListener("click", ()  => {
     searchr.classList.toggle("active");
     input.focus();

});