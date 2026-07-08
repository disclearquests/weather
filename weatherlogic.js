let form=document.getElementById("search")
let input=document.getElementById("input")
let city=document.getElementById("city")
let temp=document.getElementById("temperature")
let humidity=document.getElementById("humidity")
let wind=document.getElementById("windspeed")
let desc=document.getElementById("desc")
let icon=document.getElementById("weathericon")
form.addEventListener("submit",async function(event){
    event.preventDefault();
    console.log("Submitted");
    console.log(input.value);
    const cityname=input.value.trim()
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid={you_api_key}&units=metric`
    const response = await fetch(url);
    const data = await response.json();
    if (data.cod=="404"){
        city.textContent="City not found";
        temp.textContent="";
        desc.textContent="";
        wind.textContent="";
        humidity.textContent="";
        icon.src="https://openweathermap.org/img/wn/02d@2x.png";
        return;
    }
    if (data.cod=="400"){
        city.textContent="Please enter a city";
        temp.textContent="";
        desc.textContent="";
        wind.textContent="";
        humidity.textContent="";
        icon.src="https://openweathermap.org/img/wn/02d@2x.png";
        return;
    }
    const iconcode=data.weather[0].icon
    city.textContent=data.name;
    temp.textContent=data.main.temp+"°C";
    desc.textContent=data.weather[0].description;
    humidity.textContent="Humidity: "+data.main.humidity+"%";
    wind.textContent="Wind Speed: "+data.wind.speed+"km/hr";
    icon.src=`https://openweathermap.org/img/wn/${iconcode}@2x.png`
    input.value="";
})