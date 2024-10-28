async function getWeatherData(location) {
    console.log("fetch started...");

    const APIKEY = '3V7UCZ9RMPXTS4MRDDMBJLU7P';
    const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${APIKEY}`; 

    console.log(URL);

    try {
        const response = await fetch(URL, {mode:"cors"});
        const data = await response.json();

        return data;
    }
    catch (err) {
        console.error(err);
    }
    
}

function getLocation() {
    return prompt("Type location");
}

function client() {
    const location = getLocation();
    getWeatherData(location)
        .then((data) => displayWeather(data))
        .catch((error) => console.error(error));
};

function displayWeather(data) {
    data.days.forEach((day) => {
        console.log(`${day.datetime}: ${day.temp}`);
    });
}

client();