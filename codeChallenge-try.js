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
