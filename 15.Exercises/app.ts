let guest_list : string[] = ['Mr.Ali','Mrs.Areeba', 'Mr.Mustafa','Mr.Saud','Mrs.Fatima'];

for (var i = 0 ; i<guest_list.length ; i++) {
    console.log('\nDear : ' + guest_list[i] + '\nyou`r invited to night Dinner party \n\ni`m very Thanks full to join a Party');
}

let not_invited_guest : string = 'Mrs.Areeba';
let new_guest : string = 'Mr.Saleem';
guest_list[1] = new_guest;

console.log ('\n\tupdate Guest List\n');
for (var i = 0 ; i<guest_list.length ; i++) {
    console.log('\nDear : ' + guest_list[i] + '\nyou`r invited to night Dinner party \n\ni`m very Thanks full to join a Party');
}

console.log(`\n\n\nDear ${not_invited_guest} you'r not invite Dinner Party\n`);