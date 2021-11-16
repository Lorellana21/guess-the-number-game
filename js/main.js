'use strict';

const mainElement = document.querySelector ('.js-page');
const titleElement = document.querySelector ('.js-title');
const selectElement = document.querySelector ('.js-select');
const buttonElement = document.querySelector ('.js-button');


function refreshTitle(){
const selectedItem = selectElement.value;
titleElement.innerHTML = selectedItem;
}

function getRandomInt(){
    const number =  Math.floor(Math.random() * 100);
    return number;
  }
  

const removeBackgroundClass = () => {
mainElement.classList.remove("backgroundCity", "backgroundCountryside");
}

function setNewBackground(randomNumber){
    if(randomNumber % 2 === 0){
        mainElement.classList.add("backgroundCity");
    } else { 
        mainElement.classList.add("backgroundCountryside");
    }
}

function refreshBackground(){
    const number = getRandomInt();
    removeBackgroundClass();
    setNewBackground(number);

}

function handlerClickButton(){
    refreshTitle();
    refreshBackground();
}
buttonElement.addEventListener("click", handlerClickButton);