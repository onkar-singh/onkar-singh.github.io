// let options = {day:'numeric',month:'short'};
// let today  = new Date();
// today.toLocaleDateString("en-US", options).split(' ').reverse().join(' ')

// ('24 Sep 2022').split(' 2022').join('');

// $0.onclick=function(){this.classList.toggle("w3-dropdown-hover")}

//   async function getUser() {
//     user = await new Promise(res=> {
//         res("Douglas Pires");
//     });
//   }

// getUser().then(()=>{
//         setTimeout(() => { console.log('hjj1')},500)
// })
//  .then(()=>{setTimeout(() => { console.log('hjj2')},1000)})

// const po = Promise.resolve(123);
// po.then(()=>{setTimeout(() => { console.log('hjj1')},500)})
    
//  .then(()=>{setTimeout(() => { console.log('hjj2')},1000)})

//     .then(()=>{console.log('hjj2')})
//     .then(()=>{console.log('hjj3')})
//     .then(()=>{console.log('hjj4')})
//     .then(()=>{console.log('hjj5')});

// let options = {day:'numeric',month:'short'};
// let today  = new Date();
// today.toLocaleDateString("en-US", options).split(' ').reverse().join(' ')

// ('24 Sep 2022').split(' 2022').join('');

// $0.onclick=function(){this.classList.toggle("w3-dropdown-hover")}

//   async function getUser() {
//     user = await new Promise(res=> {
//         res("Douglas Pires");
//     });
//   }

// getUser().then(()=>{
//         setTimeout(() => { console.log('hjj1')},500)
// })
//  .then(()=>{setTimeout(() => { console.log('hjj2')},1000)})

// const po = Promise.resolve(123);
// po.then(()=>{setTimeout(() => { console.log('hjj1')},500)})
    
//  .then(()=>{setTimeout(() => { console.log('hjj2')},1000)})

//     .then(()=>{console.log('hjj2')})
//     .then(()=>{console.log('hjj3')})
//     .then(()=>{console.log('hjj4')})
//     .then(()=>{console.log('hjj5')});

// const promise1 = Promise.resolve(123);

// promise1.then((value) => {
//   console.log(value);
//   // expected output: 123
// });

// const promise1 = console.log('1');
// const promise2 = await setTimeout(() => { console.log('hjj2')},1000);
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, console.log('3'));
// });

//   async function getUser() {
//     user = await Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });
//    }
// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });

// async function getUser() {
// const po = await Promise.resolve(123)
// .then(()=>{setTimeout(() => { console.log('hjj1')},500)})
// .then(()=>{setTimeout(() => { console.log('hjj2')},100)})
// }

// getUser().then(()=>{console.log('hjj5')});

const hi= async ()=> await console.log('hihi');
console.log('1');
(async ()=>{
   hi().then(()=>{
       console.log('aaaaaa')
   })
}
)()
console.log('2');

// const promise1 = Promise.resolve(123);

// promise1.then((value) => {
//   console.log(value);
//   // expected output: 123
// });

// const promise1 = console.log('1');
// const promise2 = await setTimeout(() => { console.log('hjj2')},1000);
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, console.log('3'));
// });

//   async function getUser() {
//     user = await Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });
//    }
// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });

// async function getUser() {
// const po = await Promise.resolve(123)
// .then(()=>{setTimeout(() => { console.log('hjj1')},500)})
// .then(()=>{setTimeout(() => { console.log('hjj2')},100)})
// }

// getUser().then(()=>{console.log('hjj5')});

const hi= async ()=> await console.log('hihi');
console.log('1');
(async ()=>{
   hi().then(()=>{
       console.log('aaaaaa')
   })
})();
console.log('2');