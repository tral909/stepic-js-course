form = document.forms[0];
temp = document.querySelector('.temperature');
wind = document.querySelector('.windSpeeed');
err = document.querySelector('.error');
data = null;

form.onsubmit = function(e) {
  e.preventDefault();
  city = form.elements.city.value;
  renderData(city);
}

function renderData(city) {
  url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=099715979800997fed902c8c415868c1';
  xhr = new XMLHttpRequest();
  xhr.open('GET', url, false);
  xhr.send();
  if (xhr.status != 200) {
    err.style.color = 'red';
    err.innerText = xhr.status + ' ' + xhr.statusText;
    err.style.display = 'block';
  } else {
    data = JSON.parse(xhr.responseText);
    temp.innerText = Math.round(data.main.temp - 273.15);
    wind.innerText = data.wind.speed;
    err.style.display = 'none';
  }
}