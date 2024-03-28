"use strict";
function make_cars(manufacturer, model, ...options) {
    const into = {
        manufacturer,
        model,
    };
    for (const [key, value] of options) {
        into[key] = value;
    }
    return into;
}
const information = make_cars('Honda Civic', 'FE4', ['Color', 'Black'], ['Engine', 'Gasoline'], ['Battery', 'Lithium-ion (e:HEV)']);
console.log(information);
