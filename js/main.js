'use strict';

const mainElement = document.querySelector ('.js-main');
const titleElement = document.querySelector ('.js-title');
const selectElement = document.querySelector ('.js-select');
const buttonElement = document.querySelector ('.js-button');





function handlerClickButton(event){
const selectedItem = selectElement.value;
titleElement.innerHTML = selectedItem;
}





buttonElement.addEventListener("click", handlerClickButton);

//generar numero aleatorio
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    mainElement.classList.remove("backgroundCity", "backgroundCountryside")
    // if(numero aleatroio es par){
        mainElement.classList.add("backgroundCity")
    // } else {
        mainElement.classList.add("backgroundCountryside");
    }
//   }
  

console.log(getRandomInt(100));