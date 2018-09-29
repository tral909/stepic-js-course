const form = document.forms[0];
const result = document.querySelector('.result');

form.onsubmit = function(e) {
	e.preventDefault();
	result.innerText = Math.sin(Math.radians(form.elements.degrees.value));
}

// Converts from degrees to radians.
Math.radians = function(degrees) {
  return degrees * Math.PI / 180;
};
 
// Converts from radians to degrees.
Math.degrees = function(radians) {
  return radians * 180 / Math.PI;
};