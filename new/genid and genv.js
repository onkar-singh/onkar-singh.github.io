new Intl.DateTimeFormat('zh').format(new Date('2022/03/01'))
new Intl.DateTimeFormat('AZ').format(new Date('2022/03/01'))

new Intl.DateTimeFormat('LT').format(new Date('2022/03/01')).replaceAll('-','')
new Date().toLocaleDateString('LT').replaceAll('-','')
// genrate id
function genid(v,i,b='a'){ // v='001'
  // var d = new Date();
  // let id1=d.getFullYear().toString().slice(-2)+(d.getMonth()+1).toString().padStart(2, '0')+d.getDate().toString().padStart(2, '0');
  let id1=new Date().toLocaleDateString('en-GB', {day : '2-digit',month : '2-digit',year : '2-digit'}).split('/').reverse().join('');
  let id2=Number(id1+v.padStart(3, '0')); // base 10 id2=221026(date)+001(count)
  let id3=id2.toString(32).padStart(6, '0'); // base 32
  let s = 0;while (id2) {s += id2 % 10;id2 = Math.floor(id2 / 10);}
  console.log('id1-'+Number(id1+v.padStart(3, '0'))+' id2-'+(b+id3+s)+' id3-'+btoa(b+id3+s)) // 0k1l6h12
  let p5=(i==1) ? Number(id1+v.padStart(3, '0')) :
  (i==2) ? b+id3+s :
  (i==3) ? [...btoa(btoa(b+id3+s))].reverse().join('') : '';
  return p5
}
// genid('001',1)  // a0k1l6h12 id2=221026(date)+001(count)

// get id value
function getidv(b) { // v='a0k1l6h12'
 let b1=atob(b);
 let v=b1.slice(1,9);
if(v.length==8){
 let idv=parseInt(v.slice(0,6), 32);
 let s1=v.slice(-2);
 let s = 0;while (idv) {s += idv % 10;idv = Math.floor(idv / 10);}
 // console.log(s1,s);
    if (s==s1) {
      return parseInt(v.slice(0,6), 32)
      } else {
        console.log('something wrongh')
     }
 }else{console.log('wrongh id')}
}
// getidv('0k1l6h12')  // 21026001

