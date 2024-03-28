"use strict";
const current_users = ['saud', 'asim', 'uzair', 'hamza', 'mustafa'];
const new_users = ['saud', 'asim', 'talha', 'saima', 'SALEEM', 'qamar', 'khurram'];
for (let i = 0; i < new_users.length; i++) {
    if (current_users.includes(new_users[i]))
        console.log(`Sorry, the username "${new_users[i]}" is already taken. Please enter a new username.`);
    else {
        console.log(`The username "${new_users[i].toLowerCase()}" is available.`);
    }
}
