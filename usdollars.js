//   e.Print the country that uses US dollars as currency   


let XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.send();

xhr.onload = function() {
    let countries = JSON.parse(xhr.responseText);

    const countriesUsingUSD = countries.filter(country => {
        return country.currencies && country.currencies.USD;
      });

      if (countriesUsingUSD.length > 0) {

        console.log("Countries using US dollars as currency:");
        console.log("------------------------------------------------")
        countriesUsingUSD.forEach(country => {
          console.log(country.name.common);
        });
      } 
    }



    // output


// Countries using US dollars as currency:
// ------------------------------------------------
// United States Virgin Islands
// United States Minor Outlying Islands
// Marshall Islands
// Cambodia
// Bahamas
// United States
// Northern Mariana Islands
// British Indian Ocean Territory
// Timor-Leste
// Ecuador
// Guam
// Palau
// Caribbean Netherlands
// Micronesia
// El Salvador
// British Virgin Islands
// Panama
// Turks and Caicos Islands
// American Samoa
// Puerto Rico