// 1)Create a function that takes 3 numeric values, each of which is placed in a separate promise.
// Increase each number by 1 and return the result of the promises
function numbers (a, b, c){
   let promiseFirst = new Promise ((resolve, reject)=>{
      resolve(a+=1)
   });
   let promiseSecond = new Promise ((resolve, reject)=>{
      resolve(b+=1)
   });
   let promiseThird = new Promise ((resolve, reject)=>{
      resolve(c+=1)
   });
   Promise.all([promiseFirst, promiseSecond, promiseThird])
   .then(()=>{console.log(`1) First number: ${a} \n Second number: ${b} \n Third number: ${c}`)})
  }
numbers(1,3,6)


// 2)Rewrite as async/await pattern
async function callApi(){
     let responce = await fetch('url/to/api/endpoint') //some amazing endpoint
     if (responce.status == 200){
        let json = responce.json
        return json;
     }
     throw new Error (responce.status)
}
// 3*)Rewrite as Promise.all()

const foo = new Promise((resolve, reject) => {
     resolve ('Promise1');
   })
const bar = new Promise((resolve, reject) => {
  resolve ('Promise1');
});
Promise.all([foo, bar]).then((responce)=>{
      console.log(responce);
})

