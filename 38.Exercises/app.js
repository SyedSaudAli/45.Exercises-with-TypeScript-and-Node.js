"use strict";
function describe_city(city, country = 'Unkown') {
    console.log(`${city} in ${country}`);
}
describe_city('Karachi', 'Pakistan');
describe_city('Tokyo', 'Japan');
describe_city('New York');
