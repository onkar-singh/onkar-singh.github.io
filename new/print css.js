  let bh1='https://image.slidesharecdn.com/'+pl+'/'+klj.split('/')[4]+"-" + '1' + "-1024.jpg";
  const imgj = new Image();
  imgj.onload = function() {
  let hj='@page{size:'+this.width+'px '+this.height+'px;';
  document.body.innerHTML+='<style>'+hj+'margin:0px;}'+'body{margin:0px}'+'</style>';}
  imgj.src=bh1;

@media print {
  body > .ok {visibility: hidden;position: absolute;}
  img{display: block;}
 }

header, footer, aside, nav, form, iframe, .menu, .hero, .adslot {
  display: none!important;
}

hr {
  break-before: always;
}
auto: the default — a break is permitted but not forced
avoid: avoid a break on the page, column or region
avoid-page: avoid a page break
page: force a page break
always: an alias of page
left: force page breaks so the next is a left page
right: force page breaks so the next is a right page
document.getElementById('myDiv').clientHeight;
document.getElementById('myDiv').offsetHeight;
document.getElementById("mydiv").offsetWidth; // 728 + borders width
document.getElementById("yourDiv").clientWidth; 
