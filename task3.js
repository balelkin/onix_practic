// 1) Given object { js: ['I', 'Angular', 'nodeJS'], php: 'love', css: 'world' }. Log the sentence "I love nodejs" with it.

let data = { js: ['I', 'Angular', 'nodeJS'], php: 'love', css: 'world' }
let newData = new Object(data.js).concat(data.php)
let updateArr = new Array (newData.shift())
updateArr.push(newData.pop())
updateArr.push(newData.pop())
console.log(`1) String of Object: [${updateArr}]`);

//2) Given the object {q: null w: null e: null r: null t: null y: null}  make a string from the keys of this object. (do it in two or more ways)
const object = {q: null, w: null, e: null, r: null, t: null, y: null}
const string = Object.keys(object).join('')
const string2 = Object.keys(object).toString()
console.log(`2) Method 1 string of object: ${string2}`);
//console.log(string);
console.log(`2) Method 2 string of object: ${string}`);


//3 *) Create an object in which the key is the days of the week 
//from Monday to Friday (working days of the week) and the value 
//is the number from 1-8 (hours of work), then from this object  
//create two arrays in the first to transfer all keys and in the second all values. 
//And calculate total work hours.

const dayWeek = {monday: 6, tuesday: 6, wednesday: 5, thursday: 6, friday: 2}
const hours = Object.values(dayWeek)
const day = JSON.stringify(Object.keys(dayWeek));
const workHours =  JSON.stringify(hours)
let total = 0
for (let i = 0; i<hours.length; i++){
total +=  hours[i]
}

console.log(`3*) working day: ${day}
   working hours from day week: ${workHours}
   total work hours: "${total}"`);

//4 *) Write a function that compares two objects

const obj1 = {a: 1, b: 2, c: 3}
const obj2 = {a: 1, b: 2, c: 3}
function compares(obj1, obj2){
if (JSON.stringify(obj1) === JSON.stringify(obj2)){
   console.log( '4*) Objects compare');
} else {
   console.log( '4*) Objects not compare');
}

}
compares(obj1, obj2)