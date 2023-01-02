save in sheet
function sinsh(v,g) {
  let pkl5=localStorage.gr5; 
  let netb1 = 'https://script.google.com/macros/s/'+pkl5+'/dev?t55='+g+'&nm5='+JSON.stringify(v);  

  let myWindow1=window.open(netb1 , '_blank'); // script
  //let myWindow2=window.open(location.href , '_blank');  // webapp

  let readyStateCheckInterval = setInterval(function() {
    if (myWindow1.document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);
        setTimeout(function() {
           myWindow1.close();
           //window.close();
          }, 1000);
    }
     }, 50);
}