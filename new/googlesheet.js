https://docs.google.com/spreadsheets/d/{sheet_id}/gviz/tq?tqx=out:csv&sheet={sheet_name}

https://docs.google.com/spreadsheets/d/1_D1ff1lCQcJuK8-2k6VoD290mvRvYeR42lAu4MKYigw/gviz/tq?tqx=out:csv&sheet={sheet_name}

https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values/{sheetName}?alt=json&key={theKey}

https://docs.google.com/spreadsheets/d/{spreadsheetId}/gviz/tq

var id = '______your_speadsheet_id________';
var gid = '0';
var url = 'https://docs.google.com/spreadsheets/d/'+id+'/gviz/tq?tqx=out:json&tq&gid='+gid;
fetch(url)
  .then(response => response.text())
  .then(data => document.getElementById("json").innerHTML=myItems(data.substring(47).slice(0, -2))  
  );
function myItems(jsonString){
  var json = JSON.parse(jsonString);
  var table = '<table><tr>'
  json.table.cols.forEach(colonne => table += '<th>' + colonne.label + '</th>')
  table += '</tr>'
  json.table.rows.forEach(ligne => {
    table += '<tr>'
    ligne.c.forEach(cellule => {
        try{var valeur = cellule.f ? cellule.f : cellule.v}
        catch(e){var valeur = ''}
        table += '<td>' + valeur + '</td>'
      }
    )
    table += '</tr>'
    }
  )
  table += '</table>'
  return table
}

sheet_url = “https://docs.google.com/spreadsheets/d/1XqOtPkiE_Q0dfGSoyxrH730RkwrTczcRbDeJJpqRByQ/edit#gid=0"
url_1 = sheet_url.replace(‘/edit#gid=’, ‘/export?format=csv&gid=’)

https://codepen.io/mikesteelson/pen/wvevppe


var url = 'https://sheets.googleapis.com/v4/spreadsheets/' +
           spreadsheet_id + '/values/' + tab_name +
           '?alt=json&key=' + api_key;
($.getJSON(url, 'callback=?')).success(function(data) {
  // ...
};

https://developers.google.com/gdata/docs/2.0/reference

https://opensheet.elk.sh/1_D1ff1lCQcJuK8-2k6VoD290mvRvYeR42lAu4MKYigw/Sheet1

    const sheetData = await (
      await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${id}?key=${GOOGLE_API_KEY}`
      )
    ).json();

  const result = await (
    await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/${sheet}?key=${GOOGLE_API_KEY}`
    )
  ).json();


fetch(
  "https://opensheet.elk.sh/1o5t26He2DzTweYeleXOGiDjlU4Jkx896f95VUHVgS8U/Test+Sheet"
)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((row) => {
      // Do something with each row here.
    });
  });

https://docs.google.com/spreadsheets/d/1TXdSG8G_EnCuQITDXCAeAoWiPb9QJaj_q6yPZb-Zw9k/export?format=csv

https://docs.google.com/spreadsheets/d/e/2PACX-1vRSX_HGTUJ4owRT4DHUyfGwadIArcWHR0zpmCXTOhqCUihO/pub?gid=1624&single=true&output=csv&range=A2:A4

https://docs.google.com/spreadsheets/d/10kkgWTFISlsHikIxSH1gkIsbWpVqvLt8eOmOKFhFxPE/htmlview

https://web.whatsapp.com/send?phone=+919554259174&text=20201600000005300530
api.whatsapp.com/send?phone=919820098200
api.whatsapp.com/send?phone=919554259174&text=Hi There

https://sheets.googleapis.com/v4/spreadsheets/1312sJCNLitqaDvwl-DnLlFL9C5dj_Bsx5uLqmfHnYa4/values/Sheet1!A1:D5?key=AIzaSyAlGUI2hKuNq7LgZQlnc0oAbaHuNj0e340

https://sheets.googleapis.com/v4/spreadsheets/1_D1ff1lCQcJuK8-2k6VoD290mvRvYeR42lAu4MKYigw/values/Sheet1!28:28?key=AIzaSyAlGUI2hKuNq7LgZQlnc0oAbaHuNj0e340

https://docs.google.com/spreadsheets/d/1zdF7StPiiW-jTKGHuIyKtFvjHUcwerMwHCyIrH_HD4c/gviz/tq?tqx=out:html&sheet=myData&range=A1:D10&tq=SELECT+A%2CB%2CC