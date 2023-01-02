let urlty='https://script.google.com/macros/s/AKfycbwe8165j5h_re7yag3pxVXif-NELrngCizWuhlvJ1tbYtRUwwZmDtuHtSfa5aPyVJ8qBA/exec';
// let urlty='https://script.google.com/macros/s/AKfycbxfASiZCHoB2NkqInfnqEBM6qZpdeXM6_Ovqnfl4gI/dev'
fetch(urlty+'?a=alice&b=1&c=8')
.then(x => x.json())
.then(y => console.log(y));



let d=new Date();
let v=d.getMinutes()+d.getSeconds()+d.getMilliseconds(); //(min+sec+ms)60+60+1000=1120 max value
console.log(d.getMinutes(),d.getSeconds(),d.getMilliseconds(),v)
//Number('1120').toString(11)

// post v and store in local then 
// make get req. for v rowindex in sheet and
// delete v rowindex value in sheet
