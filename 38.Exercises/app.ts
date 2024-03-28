function describe_city(city : string , country : string = 'Unkown') : void {
    console.log(`${city} in ${country}`)
}


describe_city('Karachi', 'Pakistan')
describe_city('Tokyo', 'Japan')
describe_city('New York')