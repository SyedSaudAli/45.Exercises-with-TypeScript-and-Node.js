let personName: string = "sYeD sAuD AlI";

// Function to convert a string to title case
function toTitleCase(str: string): string {
    return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
}

console.log(`UpperCase: ${personName.toUpperCase()}`);
console.log(`LowerCase: ${personName.toLowerCase()}`);
console.log(`TitleCase: ${toTitleCase(personName)}`);