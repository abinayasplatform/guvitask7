// a.Get all the countries from Asia continent / region using Filter function 

let XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.send();

xhr.onload = function() {
    let countries = JSON.parse(xhr.responseText);


    const asiaCountries = countries.filter(country => country.region === 'Asia');
    console.log("Countries from Asia continent / region : ")
    asiaCountries.forEach(country => 
        console.log(country.name.common)
        );

}




// output 


// Countries from Asia continent / region : 
// Laos
// Kuwait
// Sri Lanka
// China
// Bangladesh
// Turkey
// Singapore
// Iraq
// Brunei
// North Korea
// Iran
// Tajikistan
// Myanmar
// Afghanistan
// Cambodia
// India
// Saudi Arabia
// Qatar
// Syria
// Timor-Leste
// South Korea
// Maldives
// Kyrgyzstan
// Yemen
// Israel
// Hong Kong
// Bhutan
// Nepal
// United Arab Emirates
// Azerbaijan
// Palestine
// Taiwan
// Jordan
// Indonesia
// Lebanon
// Malaysia
// Armenia
// Mongolia
// Japan
// Philippines
// Macau
// Kazakhstan
// Oman
// Turkmenistan
// Georgia
// Thailand
// Bahrain
// Vietnam
// Uzbekistan
// Pakistan
