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
