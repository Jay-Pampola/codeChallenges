console.log('Javascript Exercise (UDEMY)')

//codingExercise 15
/* Our First Variables Exercise
Please define TWO variables:
Define a variable called myLuckyNumber and set it equal to 37.
Define a variable called octopusLimbs and set it equal to 8.
*/
let myLuckyNumber = 37;
let octopusLimbs = 8;

//codingExercise 16
/* Our First Constants Exercise
Let's get some practice defining constants. In index.js, please define the following two variables:
    Define a constant called boilingPointC and set it to 100. 
    Define a second constant called boilingPointF and set it to 212. 
    That's it!
(technically, I can't test that you are using const instead of let...
so you're on the honor system here! DO THE RIGHT THING AND USE const! */
const boilingPointC = 100;
const boilingPointF = 212;

//codingExercise 17
/*Our First String Variables Practice
Please define the following string variables (you can use either let or const):
    bestColor should be set to the string purple (the best color on planet earth, as we all know);
    quote should be set to the string You had me at "hello" - be careful about quotation marks, 
    we want double quotes inside the string. */
let bestColor = 'purple';
const quote = 'You had me at "hello"';

//codingExercise 18
/*String Methods Practice
Let's get some practice working with string methods. 
I've provided you with a variable in index.js called message.
Without altering the original value stored in message, 
please define a variable called whisper that is a lowercased 
version of message, with all the extra space at the beginning and end removed.
You will need to use two string methods that we just covered.
Don't forget you can chain them together on a single line! */

// DON'T TOUCH THIS LINE!
const message = "    TASTE THE RAINBOW!  "; //DON'T CHANGE THIS LINE PLEASE!

// YOUR CODE BELOW THIS LINE:
let whisper = message.trim().toLowerCase();

//codingExercise 19
/*More String Methods Practice
I've provided you with a word variable, set to "skateboard".  
Your goal is to use string methods on word, so that you end up with the string "beard". 
Use a string method to extract the "board" part of "skateboard"  (using the slice method)
Replace the "o" in board with an "e" (using the replace method)
Save the result in a variable called facialHair
This is another exercise that is very easy to cheat! I can't verify that you actually call the correct string methods.  
You could just copy and paste the answer into the variable. BUT IF YOU DO THAT YOU WON'T BE ABLE TO LIVE WITH THE GUILT.  
IT WILL TEAR YOU APART FOR AS LONG AS YOU LIVE! So, please follow the spirit of the exercise :) */

// DON'T TOUCH THIS LINE! (please)
const word = "skateboard"; //Don't change this line!

// YOUR CODE BELOW THIS LINE:
let facialHair = word.slice(5).replace("o", "e");

//codingExercise 20
/*String Template Literal Exercise
I've provided you with two variables, die1 and die2 which represent six-sided dice.  
Each variable holds a randomly generated integer from 1 to 6.  
Please create a new variable called roll, which will be a string that displays each 
die as well as their sum.  
Follow this pattern:
die1: 3
die2: 5
roll: "You rolled a 3 and a 5. They sum to 8"
Here is another example with different numbers:
die1: 6
die2: 4,
roll: You rolled a 6 and a 4. They sum to 10"*/
// NO TOUCHING! (please)
const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6

// YOUR CODE BELOW THIS LINE:
const roll = `"You roll a ${die1} and a ${die2}. They sum to ${die1 + die2}."`;

//codingExercise 21
/* Our First Conditional Exercise
Let's get some practice with conditional statements!  In order to make your code repeatable and testable, 
I'm asking you to write your code inside a pre-defined function (something we have not yet covered in 
the course).   
Write your code between the two comments in index.js
You will automatically have access to a variable called num.  
Please do not try and define num or change num in any way! I will be setting the value of num when 
I test your code, so that I can test different outcomes
If num is an even number, print out "even".  Don't do anything if num is an odd number. */
function isEven(num) {
    //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
    if (num % 2 === 0) {
        console.log("even");
    }
    //AND THIS LINE ↑↑↑↑↑
};

//codingExercise 22
/* getColor Conditional Exercise
Let's get some practice with conditional statements!  In order to make your code repeatable 
and testable, I'm asking you to write your code inside a pre-defined function (something we 
have not yet covered in the course).   
Write your code between the two comments in index.js
You will automatically have access to a variable called phrase.  Please do not try and define 
phrase or change phrase in any way! I will be setting the value of phrase when I test your code.
Your job is to print out a color based upon the following rules:

if phrase is 'stop', you should print out 'red'
if phrase is 'slow', you should print out 'yellow'
if phrase is 'go', you should print out 'green'
if phrase is anything else, you should print out 'purple'
 */

function getColor(phrase) {
    //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
    if (phrase === 'stop') {
        console.log('red');
    } else if (phrase === 'slow') {
        console.log('yellow');
    } else if (phrase === 'go') {
        console.log('green');
    } else {
        console.log('purple');
    }
    //AND THIS LINE ↑↑↑↑↑
};

//codingExercise 23
/* Nested Conditionals Practice
Time for something a little bit different. I've given you a nested conditional that uses a 
variable called num.  I would like for you to change the value of num to another number, 
so that "YOU GOT ME!" is printed out. Don't change anything other than the value of num!  
Leave the conditional alone! */

// Change the value of num, so that "YOU GOT ME!" prints out
const num = 102; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :) 

// DO NOT TOUCH ANYTHING BELOW (please) 
if (num <= 100) {
    if (num >= 50) {
        console.log("HEY!");
    }
} else {
    if (num < 103) {
        if (num % 2 === 0) {
            console.log("YOU GOT ME!");
        }
    }
};

//codingExercise 24
/* Logical AND Mystery Exercise
I've provided you with a conditional statement that uses a variable called mystery  
Please change the value of mystery so that the conditional is true and "YOU GOT IT" is printed 
to the console.  Do not change anything other than the value of mystery on line 1! */

const mystery = 'Pretty 7'; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE

// LEAVE THIS CODE ALONE! (pretty please)
if (mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1) {
    console.log("YOU GOT IT!!!");
};

//codingExercise 25
/* Lotto Numbers Exercise
Let's get some practice creating arrays. Please define a variable called lottoNumbers and set it equal 
to an array containing any 6 numbers.  It's simple, but we've got to start somewhere! */

const lottoNumbers = [11, 21, 33, 44, 58, 61];

//codingExercise 26
/* Array Access Exercise
I've provided you with a leaderboard array, which consists of 4 strings.  
Without touching line 1, please make the following changes:
Unfortunately, I misspelled the 2nd name in the leaderboard array.  
I meant to write "Luna" instead of "Lua".  Please update it to "Luna" (without changing line 1)
Bellatrix has fallen off the leaderboard and has been replaced by Draco! 
Please update the last element of the array so that it holds "Draco" instead of "Bellatrix" 
(once again, please do this without changing line 1) */

const leaderboard = ['Harry', 'Lua', 'Hermione', 'Bellatrix']; //DON'T TOUCH THIS LINE!

// YOUR CODE BELOW HERE:

leaderboard[1] = "Luna";
leaderboard[3] = "Draco";

//codingExercise 27
/* Push/Pop/Shift/Unshift Practice
I've provided you with an array called planets. Unfortunately, I'm an idiot who doesn't 
know much about our solar system and I made some mistakes.  Please help me fix the planets 
array!  Using the array methods we just learned...

Remove the first element, "The Moon", from the planets array.  The moon is not a planet!
Add in "Saturn" at the very end of the planets array
Add "Mercury" as the first element in the planets array.
At the end of your hard work, planets should look like this: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn"]

(This one is super easy to cheat on.  Please use the array methods we just covered, rather than simply changing the values in planets directly) */

const planets = ['The Moon', 'Venus', 'Earth', 'Mars', 'Jupiter']; //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:
planets.shift();
planets.push("Saturn");
planets.unshift("Mercury");


//codingExercise 28
/* Nested Arrays Exercise
I've provided you with an array called airplaneSeats, which represents the rows of seats on a flight.  
Our friend Hugo is looking to book a seat on our flight. Fortunately, there is one middle seat available 
(it's set to null currently).  Please update the array element that is currently null, to instead be "Hugo". 
(Please don't directly change the code on line 6 where I'm initially setting it to null.  
This is an exercise in accessing data in nested arrays!) */

// DO NOT TOUCH!!! (please)
const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];

// YOUR CODE GOES BELOW THIS LINE:

airplaneSeats[3][1] = 'Hugo';

//codingExercise 29
/* Our First Object Exercise
It's time to practice creating your own object literal.  Please define a new variable called product.  
It should be an object literal with the following properties:
    name - set to the string "Gummy Bears"
    inStock - set to the boolean true
    price  - set to the number 1.99
    flavors - set to an array of at least three strings like ["grape", "apple", "cherry"] */

// Your code goes in here:
const product = {
    name: 'Gummy Bears',
    inStock: true,
    price: 1.99,
    flavors: ['grape', 'apple', 'cherry']
};

//codingExercise 30
/* Object Access Exercise
In index.js, you'll find a restaurant object that contains a name, address, city, state, and zipcode. 
Your task to is to create a variable named fullAddress that points to a string using the information from restaurant. 
    fullAddress should point to a string that includes the address, city, state, and zipcode from the restaurant object.
To make it harder to "cheat" by copy and pasting, I've randomly generated the address portion. 
For example, if address was "64 Johnson Ave", the fullAddress variable would look like this:
    fullAddress //"64 Johnson Ave, Brooklyn, NY 11206" */

//PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
};

//YOUR CODE GOES DOWN HERE:
const fullAddress = restaurant['address'] + ", " + restaurant['city'] + ", " + restaurant['state'] + " " + restaurant['zipcode'];
console.log(fullAddress);

//codingExercise 31
/* Our First For Loop Practice
Please use a for loop to print out the classic chorus lyrics of "I'm Blue" by Eiffel 65.  
Use a for loop to print out the string "Da ba dee da ba daa" exactly 6 times.  No more, and no less. */

// Print out "Da ba dee da ba daa" 6 times, using a for loop
for (let i = 0; i < 6; i++) {
    console.log("Da ba dee da ba daa");
};

//codingExercise 32
/* More For Loops Practice
Let's try writing a for loop that counts down, rather than up. Please write a for loop that prints the following numbers (in this order):

25
20
15
10
5
0 */

// Write a loop that prints:
// 25
// 20
// 15
// 10
// 5
// 0
for (let i = 25; i >= 0; i -= 5) {
    console.log(i);
};

//codingExercise 33
/* Iterating Arrays Exercise
I've provided you with an array of strings called people. Loop over the people array with a for loop, printing out each name in uppercase letters.  Your result should look something like:

SCOOBY
VELMA
DAPHNE
SHAGGY
FRED
Hint: use i from your loop as an array index!
 */

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (let i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase());
};

//codingExercise 34
/* For...Of Practice
Let's practice using for...of. I've provided you with an array called numbers.  Please use a for...of loop to loop over it, and print out the square of each value (the number multiplied by itself).

NOTES:

1. Udemy's coding exercise platform does NOT support the ** operator.
2. You could accomplish this by using a while loop or a for loop, but please use a for...of loop! Unfortunately, I can't enforce the type of loop you use, but please I'm begging you to use a for...of.  I will hunt you down if you don't.  Thank you and have a great day!

Your output should look like this:
1
4
9
16
25
36
49
64
81 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //DON'T CHANGE THIS LINE PLEASE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (let num of numbers) {
    console.log(num * num);
};

//codingExercise 35
/* Heart Function Exercise
It's time to write our first function!

Define a function called printHeart that prints out the string "<3"

Execute your function once */
// Write your function here:

function printHeart() {
    console.log('<3');
}

printHeart();


//codingExercise 36
/* Rant Exercise
Define a function called rant which accepts a string argument called message.  The function should print out an uppercased version of message 3 times (with 3 separate calls to console.log).  For example, rant("I hate beets") should print out:

I HATE BEETS
I HATE BEETS
I HATE BEETS
 */

// DEFINE YOUR FUNCTION:
function rant(message) {
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
};

//codingExercise 37
/* Multiple Args Exercise
In some dice games like Craps, a roll of two 1's is called "Snake Eyes".  
It's generally not a good roll.  Please write a function called isSnakeEyes, 
which accepts two numbers as inputs, representing two dice.  If the two numbers are both 1's, 
please print "Snake Eyes!" otherwise print "Not Snake Eyes!"

isSnakeEyes(1,1) //Snake Eyes!
isSnakeEyes(1,5) //Not Snake Eyes!
isSnakeEyes(4,5) //Not Snake Eyes!
Hint: Normally a function will return a value, but for the sake of having this work with the Udemy 
interpreter we will be using console.log() instead of return, to print the output. */

// define isSnakeEyes below:
const isSnakeEyes = (numOne, numTwo) => {
    if (numOne === 1 && numTwo === 1) {
        console.log('Snake Eyes!');
    } else {
        console.log('Not Snake Eyes!');
    }
};

//codingExercise 38
/* Return Value Practice
It's time to practice returning values from a function! Write a simple function multiply which accepts two numerical arguments and returns their product (multiply them together).  Make sure to return the value instead of printing it!

multiply(2,3) // 6
multiply(9,9) // 81
multiply(5,4) // 20 */

// DEFINE YOUR FUNCTION BELOW:
const multiply = (multiplier, multiplicand) => {
    return multiplier * multiplicand;
};

//codingExercise 39
/* isShortsWeather Function
I often struggle to know whether I should wear shorts or pants on a given day. 
(this is a complete lie.  It's really not that hard to decide.) 
Please help me decide by writing me a function called isShortsWeather. 
It should accept a single number argument, which we will call temperature(but you can name it whatever you want, of course). 
If temperature is greater than or equal to 75, return true. 
Otherwise, return false.   
This exercise assumes temperature is in Fahrenheit.  I apologize to all my Celsius-using students!

isShortsWeather(80) //true
isShortsWeather(48) //false
isShortsWeather(75) //true
*/

// DEFINE YOUR FUNCTION BELOW:
const isShortsWeather = (temperature) => {
    if (temperature >= 75) {
        return true;
    }
    return false;
};

//codingExercise 40
/* Last Element Exercise
Please write a function called lastElement which accepts a single array argument.  The function should return the last element of the array (without removing the element).  If the array is empty, the function should return null.

lastElement([3,5,7]) //7
lastElement([1]) //1
lastElement([]) //null */

// DEFINE YOUR FUNCTION BELOW:
const lastElement = (newArray) => {
    if (newArray.length === 0) {
        return null
    }
    return newArray[newArray.length - 1];
};


//codingExercise 41
/* Capitalize Exercise
Define a function called capitalize that accepts a string argument and returns a new string 
with the first letter capitalized (but the rest of the string unchanged).  
For example:
capitalize('eggplant') // "Eggplant"
capitalize('pamplemousse') // "Pamplemousse"
capitalize('squid') //"Squid"
Hints:
Remember that strings are immutable, meaning that you cannot simply change the first letter in the original string.  
You will need to make a new string that you return.
Single out the first letter and capitalize it. (use a string method to help!)
Add that first letter to the rest of the original string, sliced to omit the original first letter 
(use a string method to help!)
For example: 'eggplant' becomes 'E' + 'ggplant'
 */

// DEFINE YOUR FUNCTION BELOW:
function capitalize(newString) {
    return newString[0].toUpperCase() + newString.substr(1, newString.length);
};

//codingExercise 42
/* Sum Array Exercise
Write a function called sumArray which accepts a single argument: an array of numbers.  
It should return the sum of all the numbers in the array.

sumArray([1,2,3]) // 6
sumArray([2,2,2,2]) // 8
sumArray([50,50,1]) // 101

Hints:
You'll need a variable to keep track of the total.  It should start out as zero.
Loop over the array and for each element, add it to the total variable.
After you have added every number to total, return total. */

// DEFINE YOUR FUNCTION BELOW:
const sumArray = (arrOfNums) => {
    let total = 0;
    for (let i in arrOfNums) {
        total += arrOfNums[i];
    }
    return total;
};

//codingExercise 43
/* Days Of The Week Exercise
Write a function called returnDay. this function takes in one parameter (a number from 1-7) 
and returns the day of the week (1 is Monday, 2 is Tuesday, etc.)  If the number is less than 1 
or greater than 7, the function should return null. In some countries Sunday is treated as 
the first day of the week, but for this exercise we will use Monday as the first day.

Hint: store the days of the week in an array, or use an object with numerical keys.  
When the function is called, plug the number into the array/object you've created to 
retrieve the corresponding day name and then return that value.

returnDay(1) // "Monday"
returnDay(7) // "Sunday"
returnDay(4) // "Thursday"
returnDay(0) // null */

// DEFINE YOUR FUNCTION BELOW:
const returnDay = (day) => {
    if (day > 7 || day < 1) {
        return null;
    } else if (day === 1) {
        return 'Monday';
    } else if (day === 2) {
        return 'Tuesday';
    } else if (day === 3) {
        return 'Wednesday';
    } else if (day === 4) {
        return 'Thursday';
    } else if (day === 5) {
        return 'Friday';
    } else if (day === 6) {
        return 'Saturday';
    } else if (day === 7) {
        return 'Sunday';
    }
};


//codingExercise 44
/* Function Expression Exercise
Define a function that returns the square of a number. Define the function as a function expression, 
stored in a variable called squareNums.  NOTE: Udemy's coding exercise platform does NOT support the ** operator. 

square(4) //16
square(3) //9 */

//NOTE: Udemy's coding exercise platform does NOT support the ** operator.  
//You'll need to multiply a number by itself or use the Math.pow() method.
const squaredNums = (num) => {
    return Math.pow(num, 2)
};

//codingExercise 45
/* Methods Exercise
Define an object called square, which will hold methods that have to do with the geometry of squares. 
It should contain two methods, area and perimeter 

area should accept the length of a side (all sides are the same in a square) and then return the side squared. 
perimeter should accept the length of a side and return that side multiplied by 4.

square.area(10) //100
square.perimeter(10) //40 */

const square = {
    area(side) {
        return Math.pow(side, 2);
    },
    perimeter(side) {
        return side * 4;
    }
};

//codingExercise 46
/* Egg Laying Exercise
Define an object called hen.  It should have three properties:

name should be set to 'Helen'

eggCount should be set to 0

layAnEgg should be a method which increments the value of eggCount by 1 and returns the string "EGG".  
You'll need to use this.

hen.name // "Helen"
hen.eggCount // 0
hen.layAnEgg() // "EGG"
hen.layAnEgg() // "EGG"
hen.eggCount // 2 */

const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount++;
        return 'EGG';
    }
};

//codingExercise 47
/* Map Practice
It's time to get practice with the map method!
Define a variable named firstNames and assign it to the result of mapping over the existing array, fullNames, 
so that firstNames contains only the first names of the Harry Potter characters from the fullNames array.
e.g.,
console.log(firstNames); // ['Albus', 'Harry', 'Hermione', 'Ron', 'Rubeus', 'Minerva', 'Severus']

Please note:
The fullNames array is an array of objects with each object containing properties for the first and last names of each character. 
You may need to click the "Reset code" link if you do not see the fullNames array pre-loaded into the exercise's index.js file.
This exercise has been updated, you may see Q&A threads from this lecture that relate to the original exercise which no longer exists. 
They can be ignored. */

// DO NOT ALTER THE FOLLOWING CODE:
const fullNames = [
    { first: 'Albus', last: 'Dumbledore' },
    { first: 'Harry', last: 'Potter' },
    { first: 'Hermione', last: 'Granger' },
    { first: 'Ron', last: 'Weasley' },
    { first: 'Rubeus', last: 'Hagrid' },
    { first: 'Minerva', last: 'McGonagall' },
    { first: 'Severus', last: 'Snape' }];

// Write your code here
const firstNames = fullNames.map((names) => (names.first));

//codingExercise 48
/* Arrow Function Exercise
Write an arrow function expression called greet.  It should accept a single string argument, representing a person's name.  It should return a greeting string as shown below:

greet("Hagrid") //"Hey Hagrid!" 
greet("Luna") //"Hey Luna!"
Be sure to use arrow function syntax! */

const greet = name => (`Hey ${name}!`);

//codingExercise 49
/* Filter Exercise
Let's get some practice using the filter method. Write a function called validUserNames that accepts an array of usernames (strings).  
It should return a new array, containing only the usernames that are less than 10 characters. 
For example:
validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']);
// => ["mark", "carrie98", "MoanaFan"]

Note: The syntax for this solution might be a little strange to you at this point in the course because it requires you to write the code, 
that you just learned in the previous lecture, inside of a function. e.g.,

function validUserNames(usernames) {
  // your code here
}

or if you want to get fancy with an arrow function:
const validUserNames = usernames => // your code here;

There is no need to define an actual array of usernames, that part is done for you behind the scenes.
If you get stuck on this exercise, please see here for a quick video walkthrough.
 */

function validUserNames(usernames) {
    // your code here
    return usernames.filter((username) => (username.length < 10)
    );
};

//codingExercise 50
/* Some/Every Exercise
Define a function called allEvens that accepts a single array of numbers.  
If the array contains all even numbers, return true.  Otherwise, return false.  
Use some or every to help you do this!  (only one of them is actually useful here)

allEvens([2,4,6,8]) //true
allEvens([1,4,6,8]) //false
allEvens([1,2,3]) //false */

const allEvens = nums => {
    return nums.every((numbers) => (numbers % 2 === 0));
};
console.log(allEvens([2, 4, 6, 8]));
console.log(allEvens([1, 4, 6, 8]));
console.log(allEvens([1, 2, 3]));
