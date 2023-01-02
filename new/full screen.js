// onclick full screen
let kl=document.getElementById("full");
var elem = document.documentElement;
function openFullscreen(c) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
  c.outerHTML="<button class='w3-button w3-teal w3-right' onclick='closeFullscreen(this)'>Exit</button>";
}
function closeFullscreen(s) {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
  s.outerHTML="<button class='w3-button w3-teal w3-right' onclick='openFullscreen(this)'>Full</button>";
}

/// onclick full screen
// let kl=document.getElementById("full");
// var elem = document.documentElement;
// function openFullscreen(c) {
//   if (elem.requestFullscreen) {
//     elem.requestFullscreen();
//   } else if (elem.webkitRequestFullscreen) { /* Safari */
//     elem.webkitRequestFullscreen();
//   } else if (elem.msRequestFullscreen) { /* IE11 */
//     elem.msRequestFullscreen();
//   }
//   c.outerHTML="<button class='w3-button w3-teal w3-right' onclick='closeFullscreen(this)'>Exit</button>";
// }
// function closeFullscreen(s) {
//   if (document.exitFullscreen) {
//     document.exitFullscreen();
//   } else if (document.webkitExitFullscreen) { /* Safari */
//     document.webkitExitFullscreen();
//   } else if (document.msExitFullscreen) { /* IE11 */
//     document.msExitFullscreen();
//   }
//   s.outerHTML="<button class='w3-button w3-teal w3-right' onclick='openFullscreen(this)'>Full</button>";
// }