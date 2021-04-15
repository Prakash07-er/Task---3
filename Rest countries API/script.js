var input = document.querySelector('.input_text');
var city_name = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=cb0ad68b10cfec78cedde2e2d579587b')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  city_name.innerHTML = nameValue;
  desc.innerHTML = " Weather Description -" +descValue;
  temp.innerHTML = " Current Temprature  -" +tempValue+ "K";

})

.catch(err => alert("Wrong city name!"));
})