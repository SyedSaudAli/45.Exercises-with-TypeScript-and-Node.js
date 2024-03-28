type office_items = {
    name : string ;
    price : number ;
    quantitys : number ;
}

const furniture : office_items = {
    name : 'Tables',
    price : 10000,
    quantitys : 5,
}
const AC : office_items = {
    name : 'Haier',
    price : 50000 , 
    quantitys : 3
}

const stationerys : office_items = {
    name : 'office stationery',
    price : 3000,
    quantitys : 8
}

console.log('Furniture :\n', furniture);
console.log('Air Conditioner :\n', AC);
console.log('Stationery :\n', stationerys);