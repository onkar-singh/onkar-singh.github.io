////////////// Loops in Array of object ///////////////////
var arr = [ { name: 'a' }, { name: 'b' }, { name: 'c' } ];
var c = 0;

//////////////////////////////////
while (arr[c]) {
console.log(n.name);
c++;
} 

while ((arr[c]) && (arr[c].name)) {
console.log(n.name);
c++;
}
////////////////////////////////////

for(const n of arr) {
    console.log(n.name)
}

for (const [key, value] of arr) {
  console.log(key,value);
}
///////////////////////////////////

for (var j = 0; j < arr.length; j++){
  console.log(arr[j].name);
}
//////////////////////////////////

arr.forEach((cv,ci,arr)=>{
    console.log(cv.name);
})
///////////////////////////////////

const html = `<ul>${arr.map(arr => `<li>${arr.name} ${arr.family} -> ${arr.job}</li>`).join('')}</ul>`;

/////////////////////////////////////////////
// diferance in for..of and for..in loop

let list = [4, 5, 6];
for (let i in list) {  // i(index of arr)
  console.log(i); // "0", "1", "2", (index)
  console.log(list[i]); // "4", "5", "6"(value)
}

// for(const [key, value] of arr)
for (let i of list) {  // i(value of arr)
   console.log(i); // "4", "5", "6"
}
///////////////////////////////////

var arr = [3, 5, 7];
arr.foo = "hello";

for(let [key, val] of Object.entries(arr)) {
   console.log(key,val);
}
///////////////// async await for loop ////////////////////////////////
(async () => {
  for await (const num of asyncIterable) {
    console.log(num);
  }
})();

////////// Array methods /////////////////////////////

const ages = [32, 33, 16, 40];

ages.every((cv,ci,arr)=>{return age > 18;}) // true for all elements or false for one element 
ages.some((cv,ci,arr)=>{return age > 18;}) // true for all elements or false for one element 

ages.find((cv,ci,arr)=>{return age > 18;})
ages.findIndex((cv,ci,arr)=>{return age > 18;})

ages.forEach((cv,ci,arr)=>{return age > 18;})

ages.filter((cv,ci,arr)=>{return age >= 18;})// create new filltered arr 
ages.map((cv,ci,arr)=>{return age > 18;}) // create new maped arr
ages.sort((a,b)=>{return a-b}) // create new array with the items sorted

ages.reduce((cv,ci,arr)=>{return age > 18;}) // return single value
ages.reduceRight((cv,ci,arr)=>{return age > 18;}) //  works from right(last) to left