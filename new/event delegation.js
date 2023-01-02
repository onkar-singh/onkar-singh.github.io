document.querySelector('#plist').addEventListener('click',(e)=>{
    
  // console.log(e.target.matches('li'),e.target.id)
  
   console.log(e.target.id); // party id
  e.path[0].parentElement.classList.toggle('w3-hide'); // party id
 // e.classList.toggle('w3-show');

})



let func = function(e) {
  console.log('Calling just once!');
  e.target.removeEventListener(e.type, func);
}
  
let elem = document.getElementById('example');
  
elem.addEventListener('click', func);



const button = document.getElementById('button');

const callbackFunc = () => {alert('run')}

button.addEventListener('click', callbackFunc, { once: true }) 



let printName = (name: string) => {
    console.log(name)
    printName = () => {}
}

printName('Sophia') // Sophia
printName('Nico')   // Nothing Happens



var quit = false;

function something() {
    if(quit) {
       return;
    } 
    quit = true;
    ... other code....
}


var quit = false;

function something() {
    if(quit) {
       return;
    } 
    quit = true;
    ... other code....
}



var once = function() {
    if(once.done) return;
    console.log('Doing this once!');
    once.done = true;
};

once(); once(); 

You could then reset a function if you wish:

once.done = false;