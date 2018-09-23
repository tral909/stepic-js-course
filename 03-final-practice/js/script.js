const BODY = document.getElementsByTagName('body')[0];
BODY.style['background-color'] = prompt('Какой будет фон у страницы?');

const pageClass = document.getElementsByClassName('page')[0];
pageClass.style['color'] = prompt('Какой будет цвет текста на странице?');

const nameClass = document.querySelector('span.name');
nameClass.innerText = prompt('Как зовут человека, который вас вдохновляет');

const image = document.querySelector('img');
image.setAttribute('src', prompt('Введите адрес картинки'));

const shortBioClass = document.querySelectorAll('.shortBio')[0]
shortBioClass.innerText = prompt('Введите текст страницы');

const shortBioClass = document.querySelector('.shortBio');
shortBioClass.className += ' animated';