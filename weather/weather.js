const axios = require('axios');


// api key for openweathermap 
const api_key="33f5c0cbec69295c4b38885e1a615365"


// this function return the weather based on the zipcode
const getWeather = async ( zipcode ) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${ zipcode }&appid=${api_key}&units=metric`)
    return resp.data.main.temp;
}

// export getWeather 
module.exports = {
    getWeather
}