
// for args
const argv = require('./config/yargs').argv;
// to read the weather
const weatherReader = require('./weather/weather');

// static array to find weather for multiple locations
const test_locations =[

        ["Fremont","94536"],
        ["San Francisco","94016"],
];

function myFunc(index,item){
    console.log(index);
    console.log(item);
}



let getWeather = async(localtion,zipcode) => {

    try {
               
        let temp = await weatherReader.getWeather(zipcode);
        return `The Weather in ${localtion},${zipcode} is ${temp}°C`;

    } catch (e) {
        return `No Weather info for:  ${localtion},${zipcode}`
    }
}
// function to read waether and display
function displayWeather(loc,zip){
    try{
        console.log(loc);
        console.log(zip);
        getWeather(loc,zip)
            .then(message => console.log(message))
            .catch(err => console.log(err));

    }
    catch(error){
        console.log(error);
    }
}



// validate the input and get the weather

var location = argv['location'];
var zip = argv['zip'];
var mode = "single";
var file_name = null;
if( argv["mode"] == "list"){
    mode = "list";
    file_name = argv["file"];
}


// execute based on the mode
if( mode == "single"){
    // validate and execute for single mode
    console.log("application running in single mode");
    if(location != null && zip != null){
    
        displayWeather(location,zip);
    
    }else{
        console.log("invalid arguments");
        console.log("sampled command=","node app --location=Fremont --zip=94536");
    }
}
else{ 
    // for list mode
    console.log("application running in list mode");
    test_locations.forEach(function(item){
        
        displayWeather(item[0],item[1]);
    });
}
