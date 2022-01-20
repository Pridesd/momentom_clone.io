function SuccessGetPosition(position){
    console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = "e9b6d8a13a940275da5e435e8ab82816";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json().then(data => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main},  ${data.main.temp}C `;
    }))
}

function errorGetPosition(){
    alert("위치정보를 가져오는데 실패했습니다.");
}
navigator.geolocation.getCurrentPosition(SuccessGetPosition, errorGetPosition);