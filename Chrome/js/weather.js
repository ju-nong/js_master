const API_KEY = "e4d791bf0b2e45c1c5ccb3c63e448f6c";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(position.coords);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
    console.log(url);
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span:first-child");
        const weahter = document.querySelector("#weather span:last-child");

        city.innerText = data.name;
        weahter.innerText = `${data.weather[0].description} / ${data.main.temp} ℃`;
    });
}

function onGeoError(){
    alert("Can't find you. No Weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);