interface CarInformation {manufacturer: string,model: string,[key: string]: any;}

function make_cars(manufacturer : string , model : string , ...options: [string, any[]]) : CarInformation {
    const into : CarInformation = {
        manufacturer,
        model,
    };

    for (const[key , value] of options) {
        into[key] = value;
    }
    return into 
}

const information : string = make_cars('Honda Civic','FE4' ,['Color','Black'], ['Engine','Gasoline'],['Battery','Lithium-ion (e:HEV)']);
console.log(information);