let money = prompt('how much money do you have?');
let apples = prompt('how many apples would you buy?');
let breads = prompt('how many breads would you buy?');
let applesMoney = parseInt(apples) * parseFloat(prompt('price for 1 apple?'));
let breadsMoney = parseInt(breads) * parseFloat(prompt('price for 1 bread?'));
document.write(parseFloat(money) >= (applesMoney + breadsMoney) ? 'true' : 'false');