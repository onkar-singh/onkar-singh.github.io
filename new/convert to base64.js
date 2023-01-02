let encd = window.btoa(JSON.stringify(od)); // base64 JSON, for convert in front end

let decd=window.atob(encd); // sring JSON, for convert in app script and append in sheet

JSON.parse(decd); // text to JSON,  get from sheet to order page


 newUrl = 'http://example.com';
let currentUrl = window.location.href;    
window.open(currentUrl , '_blank'); // open window with url of current page    
location.href = newUrl; // redirect the previous window to the new url