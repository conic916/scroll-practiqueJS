'use strict';

const squere = document.createElement('div');
document.body.appendChild(squere);

// flaga : true or false
let grow = true;

let size = 100; // wielkosc kwadratu 
squere.style.width = size + "px"; // konkatenacja +
squere.style.height = size + "px";

//window.innerWidth * 0.5    max.wielkosc kwadratu 

window.addEventListener("scroll", function () {

    // jesli poprzednie nie zadzialaja przejdzie do drugiego ifa i wykona dwa naraz: 
    if (size >= window.innerWidth / 2) {
        grow = false; // !grow
    } else if (size == 0) {
        grow = true;
    }
    // jesli if jest prawidlowe koncze dzialanie na if i rosnie
    // else w kazdym innym przypadku zmniejszy
    if (grow) // if grow is true 
    {
        size += 2;
        squere.style.width = size + "px";
        squere.style.height = size + "px";
    } else {
        size -= 2;
        squere.style.width = size + "px";
        squere.style.height = size + "px";
    }


});