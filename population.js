//  b.Get all the countries with a population of less than 2 lakhs using Filter function 


let XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.send();

xhr.onload = function() {
    let countries = JSON.parse(xhr.responseText);

    const countriesWithLowPopulation = countries.filter(country => {
        return country.population < 200000;
      });
  
      console.log("Countries with population less than 2 lakhs:");

      countriesWithLowPopulation.forEach(country => {
        console.log(country.name.common);

      });

}


// output 


// Countries with population less than 2 lakhs:
// Andorra
// French Southern and Antarctic Lands
// Saint Vincent and the Grenadines
// Bermuda
// Dominica
// United States Virgin Islands
// Grenada
// Saint Barthélemy
// Isle of Man
// Curaçao
// Saint Kitts and Nevis
// United States Minor Outlying Islands
// Marshall Islands
// Anguilla
// Cook Islands
// Norfolk Island
// Tuvalu
// South Georgia
// Niue
// Tonga
// Saint Helena, Ascension and Tristan da Cunha
// Gibraltar
// Northern Mariana Islands
// British Indian Ocean Territory
// Kiribati
// Liechtenstein
// Antarctica
// Montserrat
// Åland Islands
// Guam
// Vatican City
// Palau
// Saint Martin
// Antigua and Barbuda
// Sint Maarten
// Monaco
// Guernsey
// Saint Lucia
// Caribbean Netherlands
// Pitcairn Islands
// San Marino
// Svalbard and Jan Mayen
// Wallis and Futuna
// Bouvet Island
// Tokelau
// Cocos (Keeling) Islands
// Greenland
// Cayman Islands
// Christmas Island
// Saint Pierre and Miquelon
// Micronesia
// Nauru
// Faroe Islands
// Aruba
// Samoa
// Heard Island and McDonald Islands
// Falkland Islands
// Jersey
// British Virgin Islands
// Turks and Caicos Islands
// American Samoa
// Seychelles
