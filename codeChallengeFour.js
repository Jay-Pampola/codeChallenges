let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistrant = false;
let age = 18;

if (age >= 18 && earlyRegistrant) {
    raceNumber += 1000;
}

if (age > 18 && earlyRegistrant) {
    console.log(`Your race start at 9:30 am and your racenumber is ${raceNumber}.`)
} else if (age > 18 && !earlyRegistrant) {
    console.log(`Your race start at 11:00am and your racenumber is ${raceNumber}.`)
} else if (age < 18) {
    console.log(`Your race start at 12:30am and your racenumber is ${raceNumber}.`)
} else {
    console.log('Proceed to Registration Desk. Thank you!')
}

