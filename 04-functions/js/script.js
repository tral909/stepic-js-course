//common func
sayHello('shmat');

function sayHello(name) {
	console.log('Hello, ' + name);
}

//anonymus func
let myFunc = function() {
	alert('its anonym func!')
}

myFunc();

//strelochnie functions (new standart ES6)
let myText = (element, text) => {
	element.innerHTML = text;
}

myText(document.body, 'hello');

function haveEnough() {
	let money = prompt('how much money?');
	let apples = prompt('how many apples?');
	let breads = prompt('how many breads?');
	let applesMoney = parseInt(apples) * parseFloat(prompt('price for apple?'));
	let breadsMoney = parseInt(breads) * parseFloat(prompt('price for bread?'));
	return parseFloat(money) >= (applesMoney + breadsMoney) ? 'Вам хватает денег на покупки' : 'Вам не хватает денег';
}

haveEnough();

if (1) {
	var a = 1;
	let b = 2;
}

console.log(a);
console.log(b); //ошибка, let переменная видна только внутри условных блоков (на фук-ции не распространяется)