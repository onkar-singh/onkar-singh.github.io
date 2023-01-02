let pk='https://www.slideshare.net/api/oembed/2?url='+jk+'&format=json&callback=onkar';

let script = document.createElement('script');
script.setAttribute('src', pk);
document.getElementsByTagName('body')[0].appendChild(script);


function onkar(json) {
    
     console.log(json);
  
}
/////////////////////////////////////////////////////
function loadScript(src) {
  // creates a <script> tag and append it to the page
  // this causes the script with given src to start loading and run when complete
  let script = document.createElement('script');
  script.src = src;
  document.head.append(script);
}
loadScript('/my/script.js');


function loadScript(src) {
  let script = document.createElement('script');
  script.src = src;
  document.head.append(script);
}

loadScript('https://npmcdn.com/dexie@3.2.2/dist/dexie.min.js')