// c.Print the following details name, capital, flag, using forEach function  


let XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.send();

xhr.onload = function() {
    let continent = JSON.parse(xhr.responseText);
    let continent01 = JSON.parse(xhr.responseText);
    let continent02 = JSON.parse(xhr.responseText);

    console.log("FLAG : ");
   continent.forEach((continent) =>{
    console.log(continent.flag);           
   }
   )

   console.log("-----------------------------------------------------------------------");
   console.log("CAPITAL : ");
continent01.forEach((continent01) =>{
    console.log(continent01.capital)     
   }
   )

   console.log("-----------------------------------------------------------------------");
   console.log("NAME : ");
continent02.forEach((continent02) =>{
    console.log(continent02.name.common)    
   }
   )


}


// output



// FLAG : 
// 🇦🇩
// 🇹🇫
// 🇱🇦
// 🇨🇦
// 🇳🇬
// 🇻🇺
// 🇨🇿
// 🇲🇼
// 🇲🇱
// 🇮🇸
// 🇳🇴
// 🇻🇨
// 🇬🇵
// 🇨🇱
// 🇧🇲
// 🇰🇼
// 🇩🇲
// 🇲🇪
// 🇻🇮
// 🇨🇲
// 🇱🇰
// 🇨🇳
// 🇧🇩
// 🇸🇪
// 🇬🇩
// 🇹🇷
// 🇬🇳
// 🇹🇿
// 🇷🇼
// 🇸🇬
// 🇲🇦
// 🇧🇱
// 🇮🇶
// 🇧🇳
// 🇮🇲
// 🇰🇵
// 🇮🇷
// 🇨🇼
// 🇵🇾
// 🇦🇱
// 🇹🇯
// 🇧🇴
// 🇦🇹
// 🇰🇳
// 🇺🇲
// 🇨🇴
// 🇽🇰
// 🇧🇿
// 🇬🇼
// 🇲🇭
// 🇲🇲
// 🇵🇫
// 🇧🇷
// 🇭🇷
// 🇸🇴
// 🇦🇫
// 🇦🇮
// 🇨🇰
// 🇪🇭
// 🇳🇿
// 🇪🇷
// 🇰🇭
// 🇧🇸
// 🇧🇾
// 🇳🇫
// 🇹🇻
// 🇬🇸
// 🇲🇷
// 🇳🇨
// 🇧🇬
// 🇲🇿
// 🇳🇺
// 🇪🇪
// 🇮🇹
// 🇲🇹
// 🇸🇮
// 🇮🇳
// 🇵🇪
// 🇧🇮
// 🇱🇹
// 🇺🇸
// 🇭🇳
// 🇹🇴
// 🇸🇦
// 🇸🇷
// 🇶🇦
// 🇸🇭
// 🇬🇮
// 🇲🇵
// 🇲🇺
// 🇧🇧
// 🇷🇪
// 🇮🇴
// 🇸🇾
// 🇪🇬
// 🇸🇹
// 🇰🇮
// 🇹🇱
// 🇱🇸
// 🇸🇧
// 🇱🇾
// 🇰🇷
// 🇱🇮
// 🇳🇮
// 🇪🇨
// 🇲🇻
// 🇩🇿
// 🇰🇬
// 🇫🇮
// 🇦🇶
// 🇰🇪
// 🇨🇺
// 🇲🇸
// 🇵🇱
// 🇦🇽
// 🇪🇹
// 🇹🇬
// 🇧🇦
// 🇺🇾
// 🇬🇺
// 🇨🇻
// 🇹🇩
// 🇻🇦
// 🇵🇼
// 🇭🇹
// 🇾🇪
// 🇸🇿
// 🇿🇼
// 🇬🇷
// 🇮🇱
// 🇲🇫
// 🇦🇬
// 🇨🇾
// 🇸🇽
// 🇲🇨
// 🇫🇯
// 🇺🇦
// 🇲🇶
// 🇭🇰
// 🇵🇹
// 🇧🇹
// 🇳🇵
// 🇫🇷
// 🇮🇪
// 🇦🇪
// 🇬🇬
// 🇱🇨
// 🇩🇴
// 🇷🇸
// 🇧🇼
// 🇨🇮
// 🇬🇭
// 🇰🇲
// 🇦🇿
// 🇬🇧
// 🇨🇫
// 🇵🇸
// 🇧🇶
// 🇹🇼
// 🇵🇳
// 🇸🇲
// 🇸🇯
// 🇩🇯
// 🇼🇫
// 🇩🇰
// 🇵🇬
// 🇲🇬
// 🇧🇻
// 🇭🇺
// 🇹🇰
// 🇹🇹
// 🇬🇲
// 🇱🇺
// 🇨🇨
// 🇨🇬
// 🇦🇷
// 🇨🇩
// 🇬🇱
// 🇯🇴
// 🇧🇪
// 🇨🇭
// 🇮🇩
// 🇱🇧
// 🇲🇾
// 🇰🇾
// 🇸🇰
// 🇦🇲
// 🇨🇽
// 🇲🇳
// 🇵🇲
// 🇯🇵
// 🇿🇦
// 🇵🇭
// 🇫🇲
// 🇩🇪
// 🇱🇻
// 🇯🇲
// 🇲🇴
// 🇳🇷
// 🇫🇴
// 🇬🇾
// 🇧🇫
// 🇸🇩
// 🇷🇺
// 🇾🇹
// 🇦🇺
// 🇱🇷
// 🇲🇽
// 🇹🇳
// 🇦🇼
// 🇰🇿
// 🇴🇲
// 🇬🇫
// 🇳🇪
// 🇹🇲
// 🇸🇱
// 🇼🇸
// 🇸🇳
// 🇬🇪
// 🇳🇦
// 🇸🇸
// 🇹🇭
// 🇧🇭
// 🇭🇲
// 🇫🇰
// 🇯🇪
// 🇻🇳
// 🇬🇹
// 🇲🇩
// 🇲🇰
// 🇺🇿
// 🇷🇴
// 🇺🇬
// 🇸🇻
// 🇿🇲
// 🇬🇦
// 🇬🇶
// 🇪🇸
// 🇳🇱
// 🇻🇬
// 🇧🇯
// 🇵🇰
// 🇵🇦
// 🇹🇨
// 🇦🇴
// 🇦🇸
// 🇻🇪
// 🇨🇷
// 🇵🇷
// 🇸🇨
// -----------------------------------------------------------------------
// CAPITAL : 
// [ 'Andorra la Vella' ]
// [ 'Port-aux-Français' ]
// [ 'Vientiane' ]
// [ 'Ottawa' ]
// [ 'Abuja' ]
// [ 'Port Vila' ]
// [ 'Prague' ]
// [ 'Lilongwe' ]
// [ 'Bamako' ]
// [ 'Reykjavik' ]
// [ 'Oslo' ]
// [ 'Kingstown' ]
// [ 'Basse-Terre' ]
// [ 'Santiago' ]
// [ 'Hamilton' ]
// [ 'Kuwait City' ]
// [ 'Roseau' ]
// [ 'Podgorica' ]
// [ 'Charlotte Amalie' ]
// [ 'Yaoundé' ]
// [ 'Sri Jayawardenepura Kotte' ]
// [ 'Beijing' ]
// [ 'Dhaka' ]
// [ 'Stockholm' ]
// [ "St. George's" ]
// [ 'Ankara' ]
// [ 'Conakry' ]
// [ 'Dodoma' ]
// [ 'Kigali' ]
// [ 'Singapore' ]
// [ 'Rabat' ]
// [ 'Gustavia' ]
// [ 'Baghdad' ]
// [ 'Bandar Seri Begawan' ]
// [ 'Douglas' ]
// [ 'Pyongyang' ]
// [ 'Tehran' ]
// [ 'Willemstad' ]
// [ 'Asunción' ]
// [ 'Tirana' ]
// [ 'Dushanbe' ]
// [ 'Sucre' ]
// [ 'Vienna' ]
// [ 'Basseterre' ]
// [ 'Washington DC' ]
// [ 'Bogotá' ]
// [ 'Pristina' ]
// [ 'Belmopan' ]
// [ 'Bissau' ]
// [ 'Majuro' ]
// [ 'Naypyidaw' ]
// [ 'Papeetē' ]
// [ 'Brasília' ]
// [ 'Zagreb' ]
// [ 'Mogadishu' ]
// [ 'Kabul' ]
// [ 'The Valley' ]
// [ 'Avarua' ]
// [ 'El Aaiún' ]
// [ 'Wellington' ]
// [ 'Asmara' ]
// [ 'Phnom Penh' ]
// [ 'Nassau' ]
// [ 'Minsk' ]
// [ 'Kingston' ]
// [ 'Funafuti' ]
// [ 'King Edward Point' ]
// [ 'Nouakchott' ]
// [ 'Nouméa' ]
// [ 'Sofia' ]
// [ 'Maputo' ]
// [ 'Alofi' ]
// [ 'Tallinn' ]
// [ 'Rome' ]
// [ 'Valletta' ]
// [ 'Ljubljana' ]
// [ 'New Delhi' ]
// [ 'Lima' ]
// [ 'Gitega' ]
// [ 'Vilnius' ]
// [ 'Washington, D.C.' ]
// [ 'Tegucigalpa' ]
// [ "Nuku'alofa" ]
// [ 'Riyadh' ]
// [ 'Paramaribo' ]
// [ 'Doha' ]
// [ 'Jamestown' ]
// [ 'Gibraltar' ]
// [ 'Saipan' ]
// [ 'Port Louis' ]
// [ 'Bridgetown' ]
// [ 'Saint-Denis' ]
// [ 'Diego Garcia' ]
// [ 'Damascus' ]
// [ 'Cairo' ]
// [ 'São Tomé' ]
// [ 'South Tarawa' ]
// [ 'Dili' ]
// [ 'Maseru' ]
// [ 'Honiara' ]
// [ 'Tripoli' ]
// [ 'Seoul' ]
// [ 'Vaduz' ]
// [ 'Managua' ]
// [ 'Quito' ]
// [ 'Malé' ]
// [ 'Algiers' ]
// [ 'Bishkek' ]
// [ 'Helsinki' ]
// undefined
// [ 'Nairobi' ]
// [ 'Havana' ]
// [ 'Plymouth' ]
// [ 'Warsaw' ]
// [ 'Mariehamn' ]
// [ 'Addis Ababa' ]
// [ 'Lomé' ]
// [ 'Sarajevo' ]
// [ 'Montevideo' ]
// [ 'Hagåtña' ]
// [ 'Praia' ]
// [ "N'Djamena" ]
// [ 'Vatican City' ]
// [ 'Ngerulmud' ]
// [ 'Port-au-Prince' ]
// [ "Sana'a" ]
// [ 'Mbabane' ]
// [ 'Harare' ]
// [ 'Athens' ]
// [ 'Jerusalem' ]
// [ 'Marigot' ]
// [ "Saint John's" ]
// [ 'Nicosia' ]
// [ 'Philipsburg' ]
// [ 'Monaco' ]
// [ 'Suva' ]
// [ 'Kyiv' ]
// [ 'Fort-de-France' ]
// [ 'City of Victoria' ]
// [ 'Lisbon' ]
// [ 'Thimphu' ]
// [ 'Kathmandu' ]
// [ 'Paris' ]
// [ 'Dublin' ]
// [ 'Abu Dhabi' ]
// [ 'St. Peter Port' ]
// [ 'Castries' ]
// [ 'Santo Domingo' ]
// [ 'Belgrade' ]
// [ 'Gaborone' ]
// [ 'Yamoussoukro' ]
// [ 'Accra' ]
// [ 'Moroni' ]
// [ 'Baku' ]
// [ 'London' ]
// [ 'Bangui' ]
// [ 'Ramallah', 'Jerusalem' ]
// [ 'Kralendijk' ]
// [ 'Taipei' ]
// [ 'Adamstown' ]
// [ 'City of San Marino' ]
// [ 'Longyearbyen' ]
// [ 'Djibouti' ]
// [ 'Mata-Utu' ]
// [ 'Copenhagen' ]
// [ 'Port Moresby' ]
// [ 'Antananarivo' ]
// undefined
// [ 'Budapest' ]
// [ 'Fakaofo' ]
// [ 'Port of Spain' ]
// [ 'Banjul' ]
// [ 'Luxembourg' ]
// [ 'West Island' ]
// [ 'Brazzaville' ]
// [ 'Buenos Aires' ]
// [ 'Kinshasa' ]
// [ 'Nuuk' ]
// [ 'Amman' ]
// [ 'Brussels' ]
// [ 'Bern' ]
// [ 'Jakarta' ]
// [ 'Beirut' ]
// [ 'Kuala Lumpur' ]
// [ 'George Town' ]
// [ 'Bratislava' ]
// [ 'Yerevan' ]
// [ 'Flying Fish Cove' ]
// [ 'Ulan Bator' ]
// [ 'Saint-Pierre' ]
// [ 'Tokyo' ]
// [ 'Pretoria', 'Bloemfontein', 'Cape Town' ]
// [ 'Manila' ]
// [ 'Palikir' ]
// [ 'Berlin' ]
// [ 'Riga' ]
// [ 'Kingston' ]
// undefined
// [ 'Yaren' ]
// [ 'Tórshavn' ]
// [ 'Georgetown' ]
// [ 'Ouagadougou' ]
// [ 'Khartoum' ]
// [ 'Moscow' ]
// [ 'Mamoudzou' ]
// [ 'Canberra' ]
// [ 'Monrovia' ]
// [ 'Mexico City' ]
// [ 'Tunis' ]
// [ 'Oranjestad' ]
// [ 'Nur-Sultan' ]
// [ 'Muscat' ]
// [ 'Cayenne' ]
// [ 'Niamey' ]
// [ 'Ashgabat' ]
// [ 'Freetown' ]
// [ 'Apia' ]
// [ 'Dakar' ]
// [ 'Tbilisi' ]
// [ 'Windhoek' ]
// [ 'Juba' ]
// [ 'Bangkok' ]
// [ 'Manama' ]
// undefined
// [ 'Stanley' ]
// [ 'Saint Helier' ]
// [ 'Hanoi' ]
// [ 'Guatemala City' ]
// [ 'Chișinău' ]
// [ 'Skopje' ]
// [ 'Tashkent' ]
// [ 'Bucharest' ]
// [ 'Kampala' ]
// [ 'San Salvador' ]
// [ 'Lusaka' ]
// [ 'Libreville' ]
// [ 'Malabo' ]
// [ 'Madrid' ]
// [ 'Amsterdam' ]
// [ 'Road Town' ]
// [ 'Porto-Novo' ]
// [ 'Islamabad' ]
// [ 'Panama City' ]
// [ 'Cockburn Town' ]
// [ 'Luanda' ]
// [ 'Pago Pago' ]
// [ 'Caracas' ]
// [ 'San José' ]
// [ 'San Juan' ]
// [ 'Victoria' ]
// -----------------------------------------------------------------------
// NAME : 
// Andorra
// French Southern and Antarctic Lands
// Laos
// Canada
// Nigeria
// Vanuatu
// Czechia
// Malawi
// Mali
// Iceland
// Norway
// Saint Vincent and the Grenadines
// Guadeloupe
// Chile
// Bermuda
// Kuwait
// Dominica
// Montenegro
// United States Virgin Islands
// Cameroon
// Sri Lanka
// China
// Bangladesh
// Sweden
// Grenada
// Turkey
// Guinea
// Tanzania
// Rwanda
// Singapore
// Morocco
// Saint Barthélemy
// Iraq
// Brunei
// Isle of Man
// North Korea
// Iran
// Curaçao
// Paraguay
// Albania
// Tajikistan
// Bolivia
// Austria
// Saint Kitts and Nevis
// United States Minor Outlying Islands
// Colombia
// Kosovo
// Belize
// Guinea-Bissau
// Marshall Islands
// Myanmar
// French Polynesia
// Brazil
// Croatia
// Somalia
// Afghanistan
// Anguilla
// Cook Islands
// Western Sahara
// New Zealand
// Eritrea
// Cambodia
// Bahamas
// Belarus
// Norfolk Island
// Tuvalu
// South Georgia
// Mauritania
// New Caledonia
// Bulgaria
// Mozambique
// Niue
// Estonia
// Italy
// Malta
// Slovenia
// India
// Peru
// Burundi
// Lithuania
// United States
// Honduras
// Tonga
// Saudi Arabia
// Suriname
// Qatar
// Saint Helena, Ascension and Tristan da Cunha
// Gibraltar
// Northern Mariana Islands
// Mauritius
// Barbados
// Réunion
// British Indian Ocean Territory
// Syria
// Egypt
// São Tomé and Príncipe
// Kiribati
// Timor-Leste
// Lesotho
// Solomon Islands
// Libya
// South Korea
// Liechtenstein
// Nicaragua
// Ecuador
// Maldives
// Algeria
// Kyrgyzstan
// Finland
// Antarctica
// Kenya
// Cuba
// Montserrat
// Poland
// Åland Islands
// Ethiopia
// Togo
// Bosnia and Herzegovina
// Uruguay
// Guam
// Cape Verde
// Chad
// Vatican City
// Palau
// Haiti
// Yemen
// Eswatini
// Zimbabwe
// Greece
// Israel
// Saint Martin
// Antigua and Barbuda
// Cyprus
// Sint Maarten
// Monaco
// Fiji
// Ukraine
// Martinique
// Hong Kong
// Portugal
// Bhutan
// Nepal
// France
// Ireland
// United Arab Emirates
// Guernsey
// Saint Lucia
// Dominican Republic
// Serbia
// Botswana
// Ivory Coast
// Ghana
// Comoros
// Azerbaijan
// United Kingdom
// Central African Republic
// Palestine
// Caribbean Netherlands
// Taiwan
// Pitcairn Islands
// San Marino
// Svalbard and Jan Mayen
// Djibouti
// Wallis and Futuna
// Denmark
// Papua New Guinea
// Madagascar
// Bouvet Island
// Hungary
// Tokelau
// Trinidad and Tobago
// Gambia
// Luxembourg
// Cocos (Keeling) Islands
// Republic of the Congo
// Argentina
// DR Congo
// Greenland
// Jordan
// Belgium
// Switzerland
// Indonesia
// Lebanon
// Malaysia
// Cayman Islands
// Slovakia
// Armenia
// Christmas Island
// Mongolia
// Saint Pierre and Miquelon
// Japan
// South Africa
// Philippines
// Micronesia
// Germany
// Latvia
// Jamaica
// Macau
// Nauru
// Faroe Islands
// Guyana
// Burkina Faso
// Sudan
// Russia
// Mayotte
// Australia
// Liberia
// Mexico
// Tunisia
// Aruba
// Kazakhstan
// Oman
// French Guiana
// Niger
// Turkmenistan
// Sierra Leone
// Samoa
// Senegal
// Georgia
// Namibia
// South Sudan
// Thailand
// Bahrain
// Heard Island and McDonald Islands
// Falkland Islands
// Jersey
// Vietnam
// Guatemala
// Moldova
// North Macedonia
// Uzbekistan
// Romania
// Uganda
// El Salvador
// Zambia
// Gabon
// Equatorial Guinea
// Spain
// Netherlands
// British Virgin Islands
// Benin
// Pakistan
// Panama
// Turks and Caicos Islands
// Angola
// American Samoa
// Venezuela
// Costa Rica
// Puerto Rico
// Seychelles