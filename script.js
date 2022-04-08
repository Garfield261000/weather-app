let button= document.querySelector('.button');
let input = document.querySelector('.searchbar');
let city = document.querySelector('.city');
let temp = document.querySelector('.temperature');
let desc = document.querySelector('.description');
let humidity = document.querySelector('.humidity');
let windspeed = document.querySelector('.windspeed');


button.addEventListener('click', function(e){
    e.preventDefault();
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=ae61152f5e2820b6435a522aa0175d9b')
    .then(response => response.json())
    .then(data => {
        temp_city = data['name'];
        temp_temperature = data['main']['temp'] - (273.15);
        temp_description = data['weather'][0]['description'];
        temp_humidty = data['main']['humidity'];
        temp_windspeed = data['wind']['speed']
        console.log(temp_city,temp_temperature,temp_description,temp_humidty,temp_windspeed)

    city.innerHTML = "Weather in " + temp_city
    temp.innerHTML = temp_temperature.toFixed(2)+"°C"
    desc.innerHTML = temp_description
    humidity.innerHTML = "Humidity:" + temp_humidty + "%"
    windspeed.innerHTML = "Wind speed:" + temp_windspeed + "km/hr"
   

})
.catch(err => alert("Invalid city"));
})


