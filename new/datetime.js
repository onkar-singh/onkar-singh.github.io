new Intl.DateTimeFormat('zh').format(new Date('2022/03/01'))
new Intl.DateTimeFormat('AZ').format(new Date('2022/03/01'))

new Intl.DateTimeFormat('LT').format(new Date('2022/03/01')).replaceAll('-','')
new Date().toLocaleDateString('LT').replaceAll('-','')

var date=()=>{
 let d=new Date();
date.d1=d.toLocaleDateString('en-GB', { // d1 02 Dec 2022
  day : '2-digit',
  month : 'short',
  year : 'numeric'});
date.d2=d.toLocaleDateString('en-GB', { // d2 02/12/22
  day : '2-digit',
  month : '2-digit',
  year : '2-digit'});
date.d3=d.toLocaleDateString('ban', { // d3 02/12/2022
  day : '2-digit',
  month : '2-digit',
  year : 'numeric'});
date.d4=date.d2.split('/').reverse().join(''); // d4 221202
date.t1=d.toLocaleTimeString('en', { // t1 12:23PM 
 hour: "2-digit",
 minute: "2-digit",
 hour12: true }).replace(' ',''); 
date.t2=d.toLocaleTimeString('en', { // t2 12:23
 hour: "2-digit",
 minute: "2-digit",
 hour12: false }); 
console.log(date.d1+' | '+date.d2+' | '+date.d3+' | '+date.d4+' | '+date.t1+' | '+date.t2);
}
date();


var date={
    get d1(){ // '02:20PM'
        return new Date().toLocaleTimeString('en', {hour: "2-digit",minute: "2-digit",hour12: true}).replace(' ',''); 
    },
    get d2(){ // '14:20'
        return new Date().toLocaleTimeString('en', {hour: "2-digit",minute: "2-digit",hour12: false}); 
    }
}
date.d1,date.d2




let v =[525215,8754,365,12.157765682484568,1.0131471402070473];

 timepassed(v) 

function timepassed(t) {
  let x='';
  (t[0] < 59) ? x=t[0]+' min.' :
  (t[1] < 24) ? x=t[1]+' hour' :
  (t[2] < 30) ? x=t[2]+' day' :
  (t[3] < 12) ? x=Math.round(t[3])+' month' :
  (t[4] > 1) ? x=Math.round(t[4])+' year' :x='Date';
  return x
}

// milisecond
1 second		1000 ms				(1 x 1000)

1 minute		60,000 ms			(1 x 1000 x 60)

1 hour			3,600,000 ms			(1 x 1000 x 60 x 60)

1 day			86,400,000 ms		(1 x 1000 x 60 x 60 x 24)

1 week		604,800,000 ms		(1 x 1000 x 60 x 60 x 24 x 7)

1 month		2,628,000,000 ms 	((1 x 1000 x 60 x 60 x 24 x 365) /12)

1 Quarter		7,884,000,000 ms 	(((1 x 1000 x 60 x 60 x 24 x 365) /12) x 3)

1 year			31,536,000,000 ms	(1 x 1000 x 60 x 60 x 24 x 365)