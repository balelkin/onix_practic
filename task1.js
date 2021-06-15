// 1) Given the variables a = 10 and b = 3. Find the remainder of dividing a by b.
let a = 10; 
let b = 3
console.log(`1) ${a} % ${b}:  ${a%b}`);

//2) Reduce 2 to 10 degrees. Write the result in the variable st.
 let st = 2**10
 console.log(`2) 2^10: ${st}`);

 //3) Display a random integer from 1 to 100.
 let random = Math.ceil(Math.random()*100)
 console.log(`3) Random 1-100: ${ random}`);

 //4 *) Given an array arr. Find the arithmetic mean of its elements. Check the problem on the array [12, 15, 20, 25, 59, 79].
 const arr = [12, 15, 20, 25, 59, 79]
 // 1-method:
 function average (arr){
     let total = 0
     for (let i = 0; i<arr.length; i++){
         total = (total + arr[i]) 
          }
     return total/arr.length
 }
console.log(`4) 1-method: arithmetic mean [${arr}]: ${average(arr)} `);
// 2-method:
function averageArr(arr) {
   return arr.reduce((total, a) => total + a, 0) / arr.length; 
}

console.log(`4) 2-method: arithmetic mean [${arr}]: ${averageArr(arr)}` );

// 5 *) Write a function that takes the number n and displays in the console a series of Fibonacci to the number n
function fibonacci (n){
    let element = 0
    
    let fibArr = []
    for (let i = 0; i < n; i++ ){
        if (fibArr.length >1){
            element += fibArr[fibArr.length - 2]
            if (element > n){
                break
            }
        }
        if (fibArr.length == 1) { 
            element = 1
        }
        if (fibArr.length == 0) { 
            element = 0
        }  
            fibArr.push(element)
    }
 let str = fibArr.join(", ")
   console.log(`5) Series of Fibonacci to ${n}: [${str}]`)
}
fibonacci(5)