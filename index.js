let ageStr = prompt('How old are you?');
let age = Number(ageStr);

let feedback = age < 0 ?
    `You're eligible to join.` :
    `You must be less than 0 years old to join.`;

alert(feedback);

prompt("what are you?");