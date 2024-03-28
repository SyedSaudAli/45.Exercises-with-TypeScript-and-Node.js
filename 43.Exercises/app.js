"use strict";
// 42 Exercises
function make_great(magi1) {
    for (let i = 0; i < magi1.length; i++) {
        console.log(magi1[i]);
    }
    ;
}
;
// 43 Exercises
function make_great2(magi2) {
    const great_magician = [];
    for (let i = 0; i < magi2.length; i++) {
        great_magician.push(magi2[i] + '" The Great');
    }
    return great_magician;
}
const magicians_E43 = ['Paul Daniels', 'Harry Houdini', 'Jeff McBride', 'Derren Brown'];
const great_magicians = make_great2(magicians_E43);
console.log("\nOriginal Magicians:");
make_great(magicians_E43);
console.log("\nGreat Magicians:");
make_great(great_magicians);
