
document.body.innerHTML += '<form id="dynForm" action="/action_page.php" method="post"><input type="hidden" name="q" value="a"></form>';
document.getElementById("dynForm").submit();

    <form action="javascript:alert('Hello there, I am being submitted');">
        <button type="submit">
            Let's do it
        </button>
    </form>
    <!-- Tested in Firefox, Chrome, Edge and Safari -->

We have not been able to verify your authority to this domain. On your domain registrar's website, locate your Domain Name System (DNS) settings and enter the following two
 CNAMEs: (Name: www, Destination: ghs.google.com) and
  (Name: c5rfvrhbtsqc, Destination: gv-qwyo7viicdpy6a.dv.googlehosted.com).
 See https://support.google.com/blogger/answer/1233387 for detailed instructions.

    <form action="https://script.google.com/macros/s/#####/exec" method="POST" target="_blank">
      <input type="text" name="name" />
      <input type="text" name="country" />
      <button type="submit">Submit</button>
    </form>

// The two samples below produce the same output
var values = sheet.getSheetValues(1, 1, 3, 3);
Logger.log(values);

var range = sheet.getRange(1, 1, 3, 3);
values = range.getValues();
Logger.log(values);


const doPost = (request = {}) => {
  const { postData: { contents, type } = {} } = request;
  return ContentService.createTextOutput(contents);
};


const doGet = (event = {}) => {
  const { parameter } = event;
  const { name = 'Anonymous', country = 'Unknown' } = parameter;
  const message = `Hello ${name} from ${country}`;
  const json = { name, country, message };
  return ContentService.createTextOutput(JSON.stringify(json)).setMimeType(ContentService.MimeType.JSON);
};

   var sheet = ss.getSheets()[0];
var cell = sheet.getRange("B2");
// Always show 3 decimal points
cell.setNumberFormat("0.000");

var formats = [[ "0.000", "0,000,000", "$0.00" ]];
var range = sheet.getRange("B2:D2");
range.setNumberFormats(formats);

var cell = sheet.getRange("B2");
cell.setValue(100);

    console.log(sheet.getRange('A1:A'+sheet.getLastRow()).getValues())
   console.log(sheet.getRange(sheet.getLastRow(),1).getValues())


function testFormula() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[1];
  var cell = sheet.getRange("A1");
  cell.setFormula("=QUERY('Sheet0'!A1:B5;\"SELECT A, B\"; 0)");
}

// getCell(row, column) 
// Returns a given cell within a range.

var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("B2:D4");

// The row and column here are relative to the range
// getCell(1,1) in this code returns the cell at B2
var cell = range.getCell(1, 1);
Logger.log(cell.getValue());


//////////////////////07BBNPG0866M2Z7
// getRowIndex() 
// Returns the row position for this range. Identical to getRow().
https://services.gst.gov.in/services/api/search/goodservice?gstin=07BBNPG0866M2Z7


We have not been able to verify your authority to this domain. On your domain registrar's website, locate your Domain Name System (DNS) settings and enter the following two CNAMEs:
 (Name: www, Destination: ghs.google.com) and (Name: z77blxnptz7n, Destination: gv-raziuvroaec7ao.dv.googlehosted.com). 
 \See https://support.google.com/blogger/answer/1233387 for detailed instructions.



var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("B2");
Logger.log(range.getRowIndex());

//////////////////////
// clearContent() 
// Clears the content of the range, leaving the formatting intact.


var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:D10");
range.clearContent();

//////////////////////////////////////////////////////
// getLastRow() 
// Returns the end row position.


var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("B2:D4");
// Logs "4.0"
Logger.log(range.getLastRow());
///////////////////////////////////////////////////
// getNumRows() 
// Returns the number of rows in this range.


var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("B2:D5");
Logger.log(range.getNumRows());

/////////////////////////////////////////////////
// getRow() 
// Returns the row position for this range. Identical to getRowIndex().


var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("B2");
Logger.log(range.getRow());
//////////////////////////////////////////////
// deleteRow(rowPosition) 
// Deletes the row at the given row position.


var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
// Rows start at "1" - this deletes the first row
sheet.deleteRow(1);
////////////////////////////////////////////////////////
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This represents ALL the data
var range = sheet.getDataRange();
var values = range.getValues();

// This logs the spreadsheet in CSV format with a trailing comma
for (var i = 0; i < values.length; i++) {
  var row = "";
  for (var j = 0; j < values[i].length; j++) {
    if (values[i][j]) {
      row = row + values[i][j];
    }
    row = row + ",";
  }
  Logger.log(row);
}