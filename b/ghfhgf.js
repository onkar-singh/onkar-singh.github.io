console.time();
while (1);
console.timeEnd();
console.dir(eb)
let xx= console.log.bind($$); 
or let xx= console.log.bind(document); // xx('hello')
or let xx= console.log.bind(this); 

Boolean(3.14)

btoa('txt-64')
atob('64-txt') 


const myFunction = (number) => {
    // Function goes here
}

const myFunction = number => number * 10;
const myFunction = (x, y) => x * y;

function foo() {console.log('m')};
function bar(){return foo(),foo(),42};
bar();

// seo https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemid
itemid
itemprop
itemref
itemscope
itemtype


 <meta http-equiv="refresh" content="4; URL='https://ahrefs.com/blog/301-redirects/'" /> 
 <meta content='0;url=http://ownknitted.com/' http-equiv='refresh'/>

  // Vibrate for 150ms 6 times, pausing for 250ms in between each one.
  navigator.vibrate([150, 250, 150, 250, 150, 250, 150, 250, 150, 250, 150]);
  //pausing time 250ms, vibration time 150ms


let text = "Pincode extract SCREAM FOR ICE 27345345 CREAM!27215234 -234544 ";
let pattern = /\D[1-9][0-9]{5}\s|\s[1-9][0-9]{5}\s|\S[1-9][0-9]{5}$/g;
let result = text.match(pattern);
Pincode extract from address .match(/\D[1-9][0-9]{5}\s|\s[1-9][0-9]{5}\s|\S[1-9][0-9]{5}$|[1-9][0-9]{5}$/g)[0].match(/\d+/g);

href="javascript:void(0)"

javascript:__doPostBack('ctl00$SingleMainContent$lvSearch$ctrl2$lnkSelect','')

document.querySelector('table').addEventListener('click',(e)=>{
    console.log(e.target.innerHTML,e.path[0].innerHTML,e.path[1].innerHTML)
})


el.click();
el.focus(); el.blur();
const frm = document.querySelector('form'); 
// trigger the submit event frm.submit(); // trigger the reset event frm.reset();

//insert html
// beforebegin: Before the element itself.
// afterbegin: Just inside the element, before its first child.
// beforeend: Just inside the element, after its last child.
// afterend: After the element itself.
document.getElementById("element").insertAdjacentHTML('afterbegin','<p>htmlText</p>')

https://script.google.com/macros/s/AKfycbwzNg3Tpz3ffpNIQylGTflIaLQfyDzsAJGavz_a8UvCf7OBWtMU4AQe1sPlGsDIj0Wa/exec
https://script.google.com/macros/s/AKfycbwzNg3Tpz3ffpNIQylGTflIaLQfyDzsAJGavz_a8UvCf7OBWtMU4AQe1sPlGsDIj0Wa/exec
https://script.google.com/macros/s/AKfycbwzNg3Tpz3ffpNIQylGTflIaLQfyDzsAJGavz_a8UvCf7OBWtMU4AQe1sPlGsDIj0Wa/exec
Primitive Types
The in-memory value of a primitive type is it's actual value (e.g. boolean true, number 42). A primitive type can be stored in the fixed amount of memory available.

// null
// undefined
// Boolean
// Number
// String

// https://script.google.com/macros/s/AKfycbxKySUJbt7Is2rMEwpqO6bCXHSEZO3AWNv2F6Qe3clKDGC4SYDkHFLd27xPM3a14a6L/exec 

<div id='yourUlId' class="subforums" style="display: none;"></div>
var yourUl = document.getElementById("yourUlId");
yourUl.style.display = yourUl.style.display === 'none' ? '' : 'none'; // toggle 

exec RegExp method , checks and returns an array
test RegExp method, checks and returns a Boolean
match String method , array or null
search String method, index of first hit or –1
replace String method, replaced string or same if no hit
split String method, array

let regx=new RegExp('vv', 'i'); // /vv/i

[0-9/] Date (American format, such as 4/22/2016).
[0-9:] Time, such as 7:44
[0-9:amp] Time with “am” or “pm”

[gG]reen, [rR]ed
M[ae][iy]er matches “Meyer”, “Mayer”, “Maier”, and “Meier”.”

[^0-9] – any character except a digit, the same as \D.
[^\s] – any non-space character, same as \S.
\d – is the same as [0-9],
\w – is the same as [a-zA-Z0-9_],
\s – is the same as [\t\n\v\f\r ]
{,} means *
{0,1} means ?              
{1,} means +
\< Start of word
\> End of word
\A Start of string
\Z End of string

Matches the results of a capture group. For example \1 matches the results of the first capture group & \3 matches the third.
Example /(\w)a\1/g  hah dad bad dab gag gab  hah, dad, gag

Lookaround positive=> Matches a group after the main expression without including it in the result.
Example /\d(?=px)/g  1pt 2px 3em 4px  2,4

Lookaround negative=> Specifies a group that can not match after the main expression
 (if it matches, the result is discarded).
Example /\d(?!px)/g  1pt 2px 3em 4px 1,3

positive lookbehind=> (?<=ABC)

negative lookbehind=> (?<!ABC)

\1      Contents of Group 1     r(\w)g\1x                regex
\2      Contents of Group 2      (\d\d)\+(\d\d)=\2\+\1   12+65=65+12
(?: … ) Non-capturing group     A(?:nt|pple)             Apple
T[ao]p     One of the characters in the brackets         Tap or Top

"Should I write color or colour?".match(/colou?r/g) // color, colour  or /colou{0,1}r/g
 /#[a-f0-9]{6}/gi;
 "Hello!... How goes?.....".match(/[.]{3,}/g) // ..., ....

var re = /^[0-9]{5}$/;
var field = "12683";
var checkzip = re.exec(feld);

/(?<=<div.*?id="id01".*?>)(.*?)(?=(Next)<\/button>[\s]+<\/p>[\s]+<\/div>[\s]+<\/div>[\s]+<\/div>)/gs

// Remove all tags from a string
var htmlRegexG = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;
'<html><body>Hello, <b>world</b>!<br /></body></html>'.replace(htmlRegexG, ''); // returns 'Hello, world';

var r1 = /<div>(.*?)<\/div>/g // Tag only
var r2 = /(?<=<div.*?class="some-class".*?>)(.*?)(?=<\/div>)/g // Tag+class

// Extract text between specific HTML tag /(?<=<body>).*?(?=<\/body>)/gs
var htmlRegexG = /(?<=<div.*?class="some-class".*?>)(.*?)(?=<\/div>)/g;
'<html><body>Probably.<div class="some-class">Hello, world!</div><br />Today</body></html>'.match(htmlRegexG); // returns ['Hello, world'];

// ?? used for left-hand side operand is (null or undefined)
const foo = null ?? 'default string';
console.log(foo);
// expected output: "default string"
const baz = 0 ?? 42;
console.log(baz);
// expected output: 0


// || used for any falsy value (0, '', NaN, null, undefined) 
const count = 0;
const text = "";
const qty = count || 42;
const message = text || "hi!";
console.log(qty);     // 42 and not 0
console.log(message); // "hi!" and not ""

!! converts Object to boolean.
If it was falsey (e.g., 0, null, undefined, etc.), it would be false, otherwise, true.
!object  // Inverted Boolean
!!object // Noninverted Boolean, so true Boolean representation

document.querySelector("input[name=main-categories]:checked").value

<input type="text" id="fname" onkeyup="javascript:{ console.log(window.event.key); alert('hello'); }">
<input type="text" id="fname" onkeyup="javascript:console.log(window.event.key)">
<a href="#" onclick="(function(){alert(this);})()">Click Me</a>

<input oninput="let p=this.selectionStart;this.value=this.value.toUpperCase();this.setSelectionRange(p, p);" />
<button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button>

<form>
  <lable>Enter name:</lable>
  <input type="text">
  <input value='x' type="reset">
</form>

function addGlobalEventListener(type, selector, callback, options) {
  document.addEventListener(type, e => {
    if (e.target.matches(selector)) callback(e)
  }, options)
}

addGlobalEventListener("click", ".btn", () => {
  console.log("Clicked Button")
}, { once: true })


hello = () => {

}
/////////////////////////////////////////
var x='';age=18;
(age < 3) ? x='Hi, baby!' :
  (age < 18) ? x='Hello!' :
  (age < 100) ? x='Greetings!' :
  'What an unusual age!';

alert( x );

/////////////////////////////////////////WBKOwbko
// This WILL run
div.innerHTML = '<script deferred>alert("XSS Attack");</script>';
 
// This will, too
div.innerHTML = '<img src=x onerror="alert(\'XSS Attack\')">';


'1'.padEnd(3,0)    // 100

'1'.padStart(3,0)  // 001

//save cursor position 
1.
<input id = "thing" onchange="this.value = this.value.toUpperCase(); pr()" style="text-transform:uppercase" /><p>
<b><span id="result"></span></b>
<script>function pr() {document.getElementById("result").innerHTML = document.getElementById("thing").value}</script>
2.
document.querySelector("input").addEventListener("input", function(event) {
  var input = event.target;
  var start = input.selectionStart;
  var end = input.selectionEnd;
  input.value = input.value.toLocaleUpperCase();
  input.setSelectionRange(start, end);
})
3.
<input oninput="let p=this.selectionStart;this.value=this.value.toUpperCase();this.setSelectionRange(p, p);" />

//<!-- <a> element links to the section below -->
<p><a href="#Section_further_down"> Jump to the heading below </a></p>
//<!-- Heading to link to -->
<h2 id="Section_further_down">Section further down</h2>

<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
<a href="tel:+1(555)5309">(555) 5309</a>

<label for="ice-cream-choice">Choose a flavor:</label>
<input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice">

<datalist id="ice-cream-flavors">
    <option value="Chocolate">
    <option value="Coconut">
    <option value="Mint">
    <option value="Strawberry">
    <option value="Vanilla">
</datalist>

crypto.getRandomValues(new Uint32Array(1));
crypto.getRandomValues(new Uint16Array(1));
crypto.getRandomValues(new Uint8Array(1));

crypto.getRandomValues(new Uint32Array(5));
crypto.getRandomValues(new Uint16Array(5));
crypto.getRandomValues(new Uint8Array(5));

var len = arr.length;
while (len--) {
    // blah blah
}

// convert all element to number
let k=['1','2','3']
k.map(Number)


remove dublicate from  Array.from(new Set(array))

  <link rel="preload" href="style.css" as="style" />
  <link rel="preload" href="main.js" as="script" />

document.getElementById("copy").addEventListener("click", async function() {
    const makeImagePromise = async () => {
        const response = await fetch('https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png');
        return await response.blob();
    }
    navigator.clipboard.write([new ClipboardItem({ "image/png": makeImagePromise() })])
      .then(function () { console.log('copied'); })
      .catch(function (error) { console.log(error); });
});

/* Get the element you want displayed in fullscreen */ 
var elem = document.getElementById("myvideo");

/* Function to open fullscreen mode */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

@media print {
@page{
    size: A4;
    margin: 0 ;
    orphans: 0!important;
    widows: 0!important;
}
h1 {
  page-break-after: avoid;
  page-break-inside:avoid;
 }
}


// Clone it
const original = { name: "MDN" };
const clone = structuredClone(original);


const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const om = document.getElementById.bind(document);
om('slide')
const mainContent = $('.main-content');
const externalLinks = $$('a[target="_blank"]');

let doc=document,qsa=(s,o=doc)=>o.querySelectorAll(s),qs=(s,o=doc)=>o.querySelector(s);

var c = console.log.bind(document); // c(455) // c("hello world")


// tab on focus
const isBrowserTabFocused = () => !document.hidden;
isBrowserTabFocused(); // true

//x = (0 == "");   // true
//x = (1 == "1");  // true
//x = (1 == true);   // true
//x = (0 === "");  // false
//x = (1 === "1");   // false
//x = (1 === true);  // false

num.toLocaleString('en-IN') // currency format
'4,54,646'

number.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })


// return 'Mobile' or 'Desktop'
const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? 'Mobile'
    : 'Desktop';
detectDeviceType();


let result = condition ? value1 : value2;
authenticated ? renderApp() : renderLogin();

 "foo300bar5".match(/\d+/)[0]
<input
  :value="searchText"
  @input="searchText = $event.target.value"
/>
   <pre>{{ $data.form | json }}</pre>

   <template v-for="i in [1, 2, 3, 4, 5, 6]" :key="i">
  <th scope="col" colspan="1" v-for="jam in jam" :key="jam">{{jam.kode}}</th>
</template>
/////////////////Join object //////////////////////////////////
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

//////////////////////////////////////////////////

function getRectArea(width, height) {
  if (width > 0 && height > 0) {
    return width * height;
  }
  return 0;
}
///////////////////////////////////////////////////
&&  and only true if both true
||  or  only false if both false
!  !(x == y)
!=  not equal value only
!== not equal value or not equal type
==  equal to value only
=== equal value and equal type
+=  //x += y => x = x + y
>=
<=
let voteable = (age < 18) ? "Too young":"Old enough";
(() => {alert('hi')})()
(async () => {alert('hi')})()
var foo = async (e) => { 'do something'}
var add = (arg) => {}
let ${0} = ${1:cond} ? ${2:true} : ${3: false}
2 < 12  true  
2 < "12"  true  
2 < "John"  false 
2 > "John"  false 
2 == "John" false 
"2" < "12"  false 
"2" > "12"  true  
"2" == "12" false
///////////////////////////////////////////////////
let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;

document.getElementById("seldt").valueAsDate = new Date();

function(src) {
  const e = document.createElement("script");
  e.src = src;
  document.head.appendChild(element);
};



Promise.resolve().then(()=> {
  new Promise(resolve => {
    setTimeout(() => {
      console.log('done 1');
      resolve();
    }, 1000);
  });
}).then(() => {
  console.log('done 2');
});
//AKfycbzzcjF5cTUJV0C9em7jHnZu8RCbNT8B_48hrkVs8-qT34QMelllnW0wSrqCNHEuOV-dsQ
//localStorage.setItem('gr5','AKfycbwzNg3Tpz3ffpNIQylGTflIaLQfyDzsAJGavz_a8UvCf7OBWtMU4AQe1sPlGsDIj0Wa')07BBNPG0866M2Z7

// setTimeout("window.close()",3000) 

let newUrl = 'http://example.com';
let currentUrl = window.location.href;    
window.open(currentUrl , '_blank'); // open window with url of current page    
location.href = newUrl; // redirect the previous window to the new url

<script async
    src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
</script>

    this.jsonCellsUrl = "http://spreadsheets.google.com/feeds/cells/" + this.key + "/od6/public/basic?alt=json-in-script";
    this.jsonListUrl = "http://spreadsheets.google.com/feeds/list/" + this.key + "/od6/public/basic?alt=json-in-script";

    fetch('https://api.github.com/users/manishmshiva')
    // Handle success
    .then(response => response.json())  // convert to json
    .then(json => console.log(json))    //print data to console
    .catch(err => console.log('Request Failed', err)); // Catch errors

////////////////////////////////////////////////////////////
-Some Of Things for yours
1- \w == [a-z A-Z 0-9 _]
2- \W == [^a-z A-Z 0-9 _]
3- \d == [0-9]
4- \D == [^0-9]
5- \s == Space==[]
6- \S == everything unless Space
7- \b == Word Bounding => \bor Ragab loves an orange
8- [^] == Negate Set [^ABC] Not Matches A Or B Or C
9- ^ == Startswith ^R => Ragab
10- $ == EndsWith $b =>Ragab
11- \A == Startswith From All Text
12- \Z == Endswith From All Text
13- A | B == Matches A Or B
14- [ABC] == Matches ABC
15- [A-Z] == Matches From A To Z
16- \w{10} == 10 characters
17- \d{10} == 10 digits
18- \w{10,} == 10 More Than
19- \d{10,} == 10 more Than
20- * == Matches Zero Or More
21- + == Matches One Or More
22- ? == Question Mark
23- \ == Skip


Regex: /^[0-9]+$/
Detects: integer

Regex: /^[0-9]+\.[0-9]+$/
Detects: float

Regex: /^\[.*\]$/
Detects: array

Regex: /^\{.*\}$/
Detects: object


/////////////////////////////////////////////////////////////
// data to be sent to the POST request
let _data = {
  title: "foo",
  body: "bar", 
  userId:1
}

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: "POST",
  body: JSON.stringify(_data),
  headers: {"Content-type": "application/json; charset=UTF-8"}
})
.then(response => response.json()) 
.then(json => console.log(json));
.catch(err => console.log(err));

///// get
fetch('https://api.github.com/users/manishmshiva', {
  method: "GET",
  headers: {"Content-type": "application/json;charset=UTF-8"}
})
.then(response => response.json()) 
.then(json => console.log(json)); 
.catch(err => console.log(err));

/////////////////////////
fetch('url')
  .then(response => {
    //handle response            
    console.log(response);
  })
  .then(data => {
    //handle data
    console.log(data);
  })
  .catch(error => {
    //handle error
  });

  ///////////////////////////////////////
  fetch('url', {
  Method: 'POST',
  Headers: {
    Accept: 'application.json',
    'Content-Type': 'application/json'
  },
  Body: body,
  Cache: 'default'
})
  ///////////////////////////////////////////
  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title:name,
    body:body,

  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
  })
  .then(function(response){ 
  return response.json()})
  .then(function(data)
  {console.log(data)
  title=document.getElementById("title")
  body=document.getElementById("bd")
  title.innerHTML = data.title
  body.innerHTML = data.body  
}).catch(error => console.error('Error:', error)); 
});

////////

window.addEventListener("offline", 
  ()=> console.log("No Internet")
);

//and for checking if online:

window.addEventListener("online", 
  ()=> console.log("Connected Internet")
);