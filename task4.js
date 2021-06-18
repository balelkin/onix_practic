//1) Given 2 arrays: ['a', 'b', 'c'] and [1, 2, 3]. Combine them into one. Add elements 111 to it at the end
const arr1 = ['a', 'b', 'c']
const arr2 = [1, 2, 3]
function concatEl(arr1, arr2, number){
   const newArr = arr1.concat(arr2)
   newArr.push(number)
   console.log(`1) New combo array: [${newArr}]`); 
   return newArr
}
concatEl(arr1, arr2, 111)

// 2) Given an array [1, 2, 3]. Make an array of it [3, 2, 1].
const numArr = [1, 2, 3]
function reverseArr (arr){
    return arr.reverse()
}
console.log(`2) Array: [${numArr}] to reverse: [${reverseArr(numArr)}]`);

//3) Given an array ['learn', 'css', 'nodejs']. 
//Use shift, pop to display the first and last element. 
//Create new array which have two elements ['learn', 'nodejs'].
const stringArr = ['learn', 'css', 'nodejs']
function elementArr (arr){
    const firstEl =new Array (arr.shift()) 
    const lastEl = new Array (arr.pop())
    const newArray = firstEl.concat(lastEl)
    console.log(`3) [${newArray}]`); } 
 elementArr(stringArr)

 // 4*) Given the 2nd array: [1,2,3,4,5,6] and [5,6,7,8,9]. Find all unique elements.
const firstArr = [1,2,3,4,5,6]
const secondArr = [5,6,7,8,9]
//let concatArr = a.concat(b)
function filter(arr1, arr2){
    return Array.from (new Set(arr1.concat(arr2)))
}
console.log(`4*) [${filter(firstArr, secondArr)}]`);

//5 *) Given object {js: 'test', jq: 'hello', css: 'world'}.
//Get an array of its keys, and an array of its value.

const object = {js: 'test', jq: 'hello', css: 'world'}
console.log(`5*) Array with keys [${Object.keys(object)}], array with values [${Object.values(object)}]`);