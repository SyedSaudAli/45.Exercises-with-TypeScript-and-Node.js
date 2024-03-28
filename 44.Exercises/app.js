"use strict";
function make_sandwich(...items) {
    console.log('Order Sandwich:');
    for (let i = 0; i < items.length; i++) {
        console.log(`${items[i]}`);
    }
    console.log("Whats your Favorite!");
}
make_sandwich('\nChicken sandwich', 'Club sandwich', 'Vegetable sandwich\n');
make_sandwich('Cheese Sandwich', 'Ham sandwich\n');
make_sandwich('Grilled cheese sandwich\n');
