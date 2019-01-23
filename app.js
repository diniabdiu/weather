//init weather ob
const weather = new Weather('Boston', 'MA');
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

//weather.changeLocation('Miami', 'FL');

function getWeather(){
    weather.getWeather()
        .then(results => {
            ui.paint(results);
        })
        .catch(err => console.log(err));
}