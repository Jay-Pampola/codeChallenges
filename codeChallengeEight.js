let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//console.log(secretMessage.length);
//remove the last string
secretMessage.pop();
//console.log(secretMessage);
//console.log(secretMessage.length);

//add 'to' and 'Program' at the end
secretMessage.push('to', 'Program');
//console.log(secretMessage);

//change the string 'easily' to the string 'right
secretMessage.splice(7, 1, 'right');
//console.log(secretMessage);

//remove first string
secretMessage.shift();
//console.log(secretMessage);

//add the string 'Programming' at the beginning
secretMessage.unshift('Programming');
//console.log(secretMessage);

// remove strings 'get', 'right', 'the', 'first', 'time,' and replace single string 'know,'
secretMessage.splice(6, 5, 'know,');
//console.log(secretMessage);

// log the secretMassage using .join()
console.log(secretMessage.join(' '));