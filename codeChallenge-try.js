/* const shopForBeans = () => {
    return new Promise((resolve, reject) => {
        const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
        setTimeout(() => {
            let randomIndex = Math.floor(Math.random() * beanTypes.length);
            let beanType = beanTypes[randomIndex];
            console.log(`2. I bought ${beanType} beans because they were on sale.`);
            resolve(beanType);
        }, 1000);
    });
}

async function getBeans() {
    console.log(`1. Heading to the store to buy beans...`);
    let value = await shopForBeans();
    console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();
console.log("Describe what happens with this `console.log()` statement as well."); */

/*
function buildMassiveString() {
    massiveString = Array(1000).fill("STRING").join();
};
buildMassiveString();

const jin = {
    role: "vocalist"
};
const suga = {
    role: "rapper"
};
const jHope = {
    role: "rapper"
};
const rm = {
    role: "lead and rapper"
};
const jimin = {
    role: "vocalist"
};
const v = {
    role: "vocalist"
};
const jungkook = {
    role: "vocalist"
};

rm.laughingBuddy = jin;
suga.bestie = jHope;
jungkook.partnerInCrime = v;
v.bestie = jimin;
//v.partnerInCrime = jungkook; <-- circular references

const bts = [jin, suga, jHope, rm, jimin, v, jungkook];

console.log(bts);


// Setup
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
    records[id][prop] = value;
    return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
updateRecords(recordCollection, 2548, "artist", "");
updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");
updateRecords(recordCollection, 2468, "tracks", "Free");
updateRecords(recordCollection, 2548, "tracks", "");
updateRecords(recordCollection, 1245, "albumTitle", "Riptide");


console.log(recordCollection[2468].artist);
console.log(recordCollection);
*/

// Only change code below this line
// for loop
function countdown1(n) {
    if (n < 1) {
        return [];
    } else {
        let arr = [];
        for (let i = 1; i < (n + 1); i++) {
            //console.log([i]);
            arr.push(i);
        }
        return arr.reverse();
    }
}
// recursion
// Only change code below this line
function countdown2(n) {
    if (n < 1) {
        return [];
    } else {
        const countArr = countdown2(n - 1);
        countArr.unshift(n)
        return countArr;
    }
}
// Only change code above this line

console.log(countdownRecursive(10))

const rollTheDice = () => {
    
  // Math.random() gives us a random number from 0 up to, but not including, 1
  // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
  // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
    const dice = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min
    };
    //console.log(dice(1,6));
    let d1 = dice(1,6);
    let d2 = dice(1,6)
    
    return d1 + d2;
}

console.log(rollTheDice());

// Write your function here:
const calculateWeight = (earthWeight, planet) => {
    let planets = ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn'];
    if (planet === 'Mercury') {
        return earthWeight * 0.378;
    } else if (planet === 'Venus') {
        return earthWeight * 0.907;
    } else if (planet === 'Mars') {
        return earthWeight * 0.377;
    } else if (planet === 'Jupiter') {
        return earthWeight * 2.36;
    } else if (planet === 'Saturn') {
        return earthWeight * 0.916;
    } else {
        return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
    }
};

// Uncomment the line below when you're ready to try out your function
console.log(calculateWeight(100, 'Jupiter')); // Should print 236

// We encourage you to add more function calls of your own to test your code!
console.log(calculateWeight(100, 'Mercury'));
console.log(calculateWeight(100, 'Neptune'));

// Write your function here:
const howOld = (age, year) => {
    let todayYear = 2022;
    if (year > todayYear) {
        let calculatedAge = (year - todayYear) + age;
        //console.log(calculatedAge);
        return `You will be ${calculatedAge} in the year ${year}`;
    } else if (year < (todayYear - age)) {
        let calculatedNumOfYrs = (todayYear - age) - year;
        return `The year ${year} was ${calculatedNumOfYrs} years before you were born`
    } else if (year < todayYear) {
        let calculatedAge = age - (todayYear - year);
        return `You were ${calculatedAge} in the year ${year}`
    }
}




// Once your function is written, write function calls to test your code!
console.log(howOld(30, 2025));
console.log(howOld(30, 1985));
console.log(howOld(30, 1999));