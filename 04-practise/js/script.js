butReq = document.querySelector('.request');
blockPopup = document.querySelector('.popup');
butReq.addEventListener('click', function() {
	blockPopup.style.display = 'flex';
})

closePopup = document.getElementsByClassName('closePopup')[0];
closePopup.addEventListener('click', function() {
	blockPopup.style.display = 'none';
})

openMenu = document.querySelector('.openMenu');
menu = document.querySelector('.menu');
openMenu.addEventListener('click', function() {
	menu.style.left = 0;
})

closeMenu = document.querySelector('.closeMenu');
closeMenu.addEventListener('click', () => {
	menu.style.left = '-50vw';
})