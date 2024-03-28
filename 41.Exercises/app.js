"use strict";
function show_magicians(magi) {
    for (let i = 0; i < magi.length; i++) {
        console.log(`Magician's Names = "${magi[i]}"`);
    }
}
const magician = ['Paul Daniels', 'Harry Houdini', 'Jeff McBride', 'Derren Brown'];
show_magicians(magician);
