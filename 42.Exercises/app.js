"use strict";
// 41 Exercises
function show_magicians(magi) {
    for (let i = 0; i < magi.length; i++) {
        console.log(`Magician's Names = "${magi[i]}"`);
    }
    ;
}
;
// 42 Exercises
function make_great(magi1) {
    for (let i = 0; i < magi1.length; i++) {
        magi1[i] = magi1[i] + '" is Great Magicians';
    }
    ;
}
;
const magicians = ['Paul Daniels', 'Harry Houdini', 'Jeff McBride', 'Derren Brown'];
make_great(magicians);
show_magicians(magicians);
