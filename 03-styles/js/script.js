console.log('You are at ' + document.location)

const Colored = document.querySelector('.colored');
console.log(Colored.style);

let quest = prompt('Какой ты хочешь цвет?');

// Вариант 1: 
//Colored.style.backgroundColor = quest;

//Вариант 2:
Colored.style['background-color'] = quest;