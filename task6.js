//1) Found the average age.
const users = [ { gender: 'male', age: 22, }, { gender: 'female', age: 20, }, { gender: 'male', age: 32, } ];
const ages = []

for (let key in users){
    ages.push(users[key].age)
   }
function averageArr(arr) {
    return arr.reduce((total, a) => total + a, 0) / arr.length; 
}
console.log(`1) Average age of users: "${Math.ceil(averageArr(ages))}"`);

//2)Fix this code

const object = {
  a: 'somestring',
  b: 42,
  c: false,
  k: 11,
  l: 22
  };
const numbers = [];

Object.keys(object).forEach((item) => {
    if (typeof (object[item]) === 'number') {
        numbers.push(object[item]);
      }
 
});
console.log(numbers);