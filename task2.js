
// 1) Given the string 'aaa @ bbb @ ccc'. Replace all @ with '!'.
let str = 'aaa @ bbb @ ccc'; 
console.log(`1) ${str.replace(/@/g, '!')}`);

// 2) Write a function that converts a string to an array of words.

let strToArray = 'Hello, I am Nikolay Balielov'
function arrStr (str){
   let arrStr = strToArray.split() 
   console.log(`2) String converted to Array: [${arrStr}]`);
}
arrStr(strToArray)

// 3) Given the line 'I-know-javascript!'. Replace all with '!'
let strLine = 'I-know-javascript!'
let modifiedStr = strLine.replace(/[A-Z, a-z, -]/g, '!')
console.log(`3) Modified string "${strLine}" -  "${modifiedStr}"`);

//4) Given an array ['I', 'know', 'javascript', '!']. Use the join method to convert the array to the string 'I learning javascript +!'. And make the first letter capitalized.
let array = ['I', 'know', 'javascript', '!']
let arrayToString = array.toString().replace(/,/g, ' ').replace('know', 'learning').replace(' !', ' +!')
console.log(`4) ${arrayToString}`);

//5) Write a function that takes a string and determines whether it is a polyndrome
function isPolindrom (str){
    
let polindromReverse = str.split('').reverse().join('')
if (polindromReverse.toUpperCase() == str.toUpperCase() ){
    return console.log(`5) The word "${str}" is a polyindrome`)
} else {
    return console.log(`5) The word "${str}" is not a polyindrome`)
}
}
isPolindrom('колобок')