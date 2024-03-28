"use strict";
let Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < Numbers.length; i++) {
    let Ordinal = '';
    if (Numbers[i] === 1) {
        Ordinal = 'st';
    }
    else if (Numbers[i] === 2) {
        Ordinal = 'nd';
    }
    else if (Numbers[i] === 3) {
        Ordinal = 'rd';
    }
    else if (Numbers[i] === 4) {
        Ordinal = 'th';
    }
    else if (Numbers[i] === 5) {
        Ordinal = 'th';
    }
    else if (Numbers[i] === 6) {
        Ordinal = 'th';
    }
    else if (Numbers[i] === 7) {
        Ordinal = 'th';
    }
    else if (Numbers[i] === 8) {
        Ordinal = 'th';
    }
    else if (Numbers[i] === 9) {
        Ordinal = 'th';
    }
    console.log(`${Numbers[i]}${Ordinal}`);
}
