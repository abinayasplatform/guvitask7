// d.Print the total population of countries using reduce function   


let XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.send();

xhr.onload = function() {
    let countries = JSON.parse(xhr.responseText);


const totalPopulation = countries.reduce((acc, country) => acc + (country.population || 0), 0);

console.log("Total Population of all countries:");

console.log(totalPopulation);

}


// output


// Total Population of all countries:
// 7777721563