// command line args for application
// sample imput 
// node app --location=Fremont --zip=94536

const argv = require('yargs-parser')(process.argv.slice(2))
//console.log(argv)

module.exports = {
    argv
}