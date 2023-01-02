var canvas = document.createElement("canvas");
canvas.height = 64;
canvas.width = 64;

var ctx = canvas.getContext("2d");
ctx.font = "64px serif";
ctx.fillText("👕", 0, 64); 
//ctx.fillText("🇮🇳", 0, 64); 
//ctx.fillText("❤️", 0, 64);

//document.querySelector('link[rel="icon"]').href= canvas.toDataURL();
//document.querySelector('link[rel="shortcut icon"]').href= canvas.toDataURL();

const link = document.createElement('link');
  link.rel = 'shortcut icon';
  link.href = canvas.toDataURL();
document.head.appendChild(link);

