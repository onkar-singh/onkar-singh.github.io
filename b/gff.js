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


// SingleMainContent_UserInfoBoxControl2_ddlFacilityType value="1" 0
// SingleMainContent_UserInfoBoxControl2_ddlPhc value="2349" 1
// SingleMainContent_UserInfoBoxControl2_ddlSubCentre value="14710" 0

//document.getElementById('SingleMainContent_UserInfoBoxControl2_ddlFacilityType').value='1'

//await new Promise(resolve => setTimeout(resolve, 1000))
// const delay = t => new Promise(resolve => setTimeout(resolve, t));
// delay(1000).then(() => {console.log('Hello')});
// delay(1500).then(() => {console.log('Hello')});



    // .then(() => {
    //             console.log('wait for 10 seconds . . . . ');
    //             return new Promise(function(resolve, reject) { 
    //                 setTimeout(() => {
    //                     console.log('10 seconds Timer expired!!!');
    //                     resolve();
    //                 }, 10000)
    //             });
    //         })
    //         .then(() => {
    //             console.log('promise resolved!!!');

    //         })


const delay = t => new Promise(resolve => setTimeout(resolve, t));

 delay(100).then(() => {
     console.log('1')
     delay(1000).then(() => {
         console.log('2')
         delay(1000).then(() => {
             console.log('3')
                delay(1000).then(() => {
                 console.log('4')
             })
         })
     })
 })

// delay(400).then(() => {
//     let omk1=document.getElementById('SingleMainContent_UserInfoBoxControl2_ddlFacilityType')
// omk1.value=1
// let event1 = new Event('change');
// omk1.dispatchEvent(event1);
// });

// delay(1200).then(() => {
//     let omk2=document.getElementById('SingleMainContent_UserInfoBoxControl2_ddlPhc')
// omk2.value=2349
// let event2 = new Event('change');
// omk2.dispatchEvent(event2);

// });

// delay(2200).then(() => {
//     let omk3=document.getElementById('SingleMainContent_UserInfoBoxControl2_ddlSubCentre')
// omk3.value=14710
// let event3 = new Event('change');
// omk3.dispatchEvent(event3);

// });
// delay(3000).then(() => {
//    document.getElementById('SingleMainContent_UserInfoBoxControl2_ddlVillage').value=70524;
// });


document.querySelector('table').addEventListener('click',(e)=>{
    
    console.log(e.target.innerHTML)

})


let encd = window.btoa(JSON.stringify(od)); // base64 JSON, for convert in front end

let decd=window.atob(encd); // sring JSON, for convert in app script and append in sheet

JSON.parse(decd); // text to JSON,  get from sheet to order page

