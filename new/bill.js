// http://www.ownknitted.com/bill#yUkeN1WMXRGcaRVW
// Dashmesh 221207011 // genlink(genid(ptd.id,3),ptd.cn);
var doc=document,zzz=(s,o=doc)=>o.querySelectorAll(s),zz=(s,o=doc)=>o.querySelector(s),zc=console.log.bind(doc);
let h1=location.hash.slice(1);let h=atob([...h1].reverse().join('')); 
let v,c=0,b=5,fgh,d=new Date();var pt;var od;
v=d.getMinutes()+d.getSeconds()+d.getMilliseconds(); //(min+sec+ms)60+60+1000=1120 max value
fgh=`cb,1x,${v},${h},${c},${b}`;
function getod() {
 c+=5;b+=5;fgh=`cb,1x,${v},${h},${c},${b}`;ndd(fgh);
  
}


console.log(fgh);

ndd(fgh); 

async function ndd(d9) { 
await fetch('https://script.google.com/macros/s/AKfycbzPYUBEhqRBtvJ9KAEZVUyrZ0un6gRHbZjQPm-PRPTxeXvFGF7FnbY9xqOSV6-ql1SzUQ/exec',
{method: 'POST',mode: 'no-cors',cache: 'no-cache',redirect: 'follow',body: d9})
.then(()=>{setTimeout(gzxc,500)})
.catch((err) => alert('hi '+err));}

 
function gzxc() {
  let sh=String(v).split('')[0]+'x!'+v+':'+v;
let uk='https://sheets.googleapis.com/v4/spreadsheets/1EyGFuUFh4Yq0rl2bfFssdRMnyRiRlNlsTl-zCoYAd3k/values/'+sh+'?key=AIzaSyAlGUI2hKuNq7LgZQlnc0oAbaHuNj0e340';
console.log(uk);
  fetch(uk)
.then(x => x.json())
.then(y => {
    zx=JSON.parse('['+y.values[0][0]+']');
  if (!pt) {
    pt=zx[0];od=zx.slice(1);
    zz('#ptn').innerHTML=pt.cn+(pt.gst&&(', '+pt.gst));
  }else{
    od=zx.slice(1);
  }

  
  console.log(pt,od);

  
  let odtr='';
  od.forEach((v,i)=>{
  odtr+=`<tr>
  <td>${v.dt}</td>
  <td>${v.id}</td>
  <td><div class="w3-tag bdr">Download</div></td>
  </tr>`;
    if (v.id==pt.ods[0].slice(2)) {
      zz('#mkl').style.display='none'
    }
  })
  zz('#bills tbody').innerHTML+=odtr;
});
}



function genid(v,i,b='a'){ 
  let id2;let id1;
  if(i==1){
  id1=new Date().toLocaleDateString('en-GB', {day : '2-digit',month : '2-digit',year : '2-digit'}).split('/').reverse().join('');
  id2=Number(id1+v.padStart(3, '0'));
  }else{
    id2=Number(v);
  }
  let id3=id2.toString(32).padStart(6, '0'); // base 32
  let s = 0;while (id2) {s += id2 % 10;id2 = Math.floor(id2 / 10);}
  let p5=(i==1) ? Number(id1+v.padStart(3, '0')) :
  (i==2) ? b+id3+s :
  (i==3) ? [...btoa(btoa(b+id3+s))].reverse().join('') : '';
  return p5
}

// var arr = [1,2,3,4,5,6,7,8,9,10];
// arr.slice(-5)

// genlink(genid(ptd.id,3),ptd.cn);
// async function genlink(id,cn) { // http://www.ownknitted.com/bill#3VEVNFTTqRGcaRVW
//   let url1="www.ownknitted.com/bill#"+id;
//   let txt1="\n\n"+cn+", download your bills from here👆";
//  await navigator.clipboard.writeText(url1+txt1);
//   //return url1
// }


 // window.history.replaceState( null, null, window.location.href );
// document.body.innerHTML +='<iFrame style="display:none" src="" name="myIframe"></iFrame>';
// var url51='https://script.google.com/macros/s/AKfycbwe8165j5h_re7yag3pxVXif-NELrngCizWuhlvJ1tbYtRUwwZmDtuHtSfa5aPyVJ8qBA/exec';
// document.body.innerHTML += '<form target="myIframe" style="display:none"  id="dynForm" action="'+url51+'" method="post"><input name="z" value="'+fgh+'" id="h" type="submit"></form>';

// document.querySelector('#dynForm #h').click();
// document.getElementById("dynForm").submit();
// document.getElementById("dynForm").submit((e)=>{
//             console.log(e)
//         });

// 'aghfhfhh'.slice(0,4) // first 4 char
// 'ayuguhgf'.slice(-2)  // last 2 char
// '#WVRacGRqRTJhREUz-a'.match(/[^#-].+[^-]\w{4}/g)

// console.log(b,'1x',v,h) // no. of bill(b), sheetname(s), rowindex(v), uid(h)
