let crypto = [
  {
    name : "Bitcoin",
    price: 1388.37
  },
  {
    name : "Ethereum",
    price: 716
  },
  {
    name : "Litecoin",
    price: 140
  }
]

const h2s = document.querySelectorAll('.block h2');
const parags = document.querySelectorAll('.block p');
const graphs = document.querySelectorAll('.block div');

for (i in crypto) {
  h2s[i].innerText = crypto[i].name;
  parags[i].innerText = crypto[i].price;
  graphs[i].style.width = crypto[i].price;
}