//Identify Sheet
var emailSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Email');

//Populate CellS on Load
emailSheet.getRange('B1')
  .setValue('INTERVALS');
//
emailSheet.getRange('D1')
  .setValue('SUBJECT LINE OF THE EMAIL');
emailSheet.getRange('D9')
  .setValue('SUBJECT LINE OF THE EMAIL');
emailSheet.getRange('D17')
  .setValue('SUBJECT LINE OF THE EMAIL');
emailSheet.getRange('D25')
  .setValue('SUBJECT LINE OF THE EMAIL');
//
emailSheet.getRange('D3')
  .setValue('BODY OF THE EMAIL');
emailSheet.getRange('D11')
  .setValue('BODY OF THE EMAIL');
emailSheet.getRange('D19')
  .setValue('BODY OF THE EMAIL');
emailSheet.getRange('D27')
  .setValue('BODY OF THE EMAIL');
//