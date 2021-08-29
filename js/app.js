//'30012fd1ab64f766dcb59a2557ddfc26'

document.getElementById('search-button').addEventListener('click', function(e){
    getWeatherForecast();
   
})
const getWeatherForecast = ()=>{
    const cityText = document.getElementById('input-field');
    const city = cityText.value;
    
    console.log(city);
    const url = `HTTPS://api.weatherapi.com/v1/current.json?key=a8bcc7b02eee4926b8d92058212908&q=${city}`
    console.log(url)
    if(city.length == 0){
        alert('Please Enter Valid a Name')
    }
    else{
        fetch(url)
    .then(res => res.json())
    .then(data => displayWeather(data))
    } 
    cityText.value = '';  
}


const displayWeather = result => {
    const searchResult = document.getElementById('weather-result')
    searchResult.textContent =''; 
    console.log(result);
  
        const div = document.createElement('div');

        div.innerHTML = `<img class="" src="${result.current.condition.icon}" alt="">
        <p class=" fs-4">${result.location.localtime}</p>
        <h4 class=text-success"><span>${result.current.condition.text}</h4>
        <h1 class="text-danger"><span>${result.location.name}, ${result.location.country} </h1>
        <h1 class="text-warning">Temperature: <span>${result.current.temp_c}</span>&deg;C</h1>
        <h3 class="text-dark">Humidity: <span>${result.current.humidity} </span></h3>
        `;
        searchResult.appendChild(div)
 
}