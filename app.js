//init weather ob
const weather = new Weather('Boston', 'MA');

document.addEventListener('DOMContentLoaded', getWeather);

//weather.changeLocation('Miami', 'FL');

function getWeather(){
    weather.getWeather()
        .then(results => {
            console.log(results);
        })
        .catch(err => console.log(err));
}