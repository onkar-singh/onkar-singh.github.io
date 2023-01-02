var url5='https://script.google.com/macros/s/AKfycbyTfUxZfVNUqBy1MCxaWaJUhnUl-fGGEJXSKn0mTMBxqfr_s7uhlZurmjxgbzbY7S-M/exec';

var ptd= { "id": 22125444, "cn": "rahulllllmk36y3ukkjj", "mn1": "34567877", "gst": "", "add": "xygx xetfxg", "ods": [ "as66", "as73" ], "mn2": "", "pin": "" };


sendd(url5,ptd,'Party Details ');





async function sendd(urld,d9,b) {
  await fetch(urld, {
    method: 'POST',
    mode: 'no-cors',
    cache: 'no-cache',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    body: JSON.stringify(d9)
  })
    .then((res) => {
      console.log(b+' data send ', d9 ,res)
    })
    .catch((error) => {
      if(localStorage.gr5!='hi2'){
      alert('error in '+b+' sendd fn- '+JSON.stringify(d9)+' '+error+'\nTake a screenshot for Onkar');}
      console.log('error in '+b+' sendd fn- '+JSON.stringify(d9)+error);
     
    });
}
