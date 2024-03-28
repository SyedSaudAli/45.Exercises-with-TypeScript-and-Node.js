"use strict";
let usernames = [];
if (usernames.length === 0) {
    console.log('We need to find some users!');
}
else {
    let stage_of_life = 64;
    if (stage_of_life < 2) {
        console.log('The person is a baby');
    }
    else if (stage_of_life >= 2 && stage_of_life < 4) {
        console.log('The person is a toddler.');
    }
    else if (stage_of_life >= 4 && stage_of_life < 13) {
        console.log('The person is a kid.');
    }
    else if (stage_of_life >= 13 && stage_of_life < 20) {
        console.log('The person is a teenager.');
    }
    else if (stage_of_life >= 20 && stage_of_life < 65) {
        console.log('The person is an adult.');
    }
    else {
        console.log('The person is very aged.');
    }
}
