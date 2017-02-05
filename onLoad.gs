//Identify Sheet
var emailSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Email');

//Populate CellS on Load
emailSheet.getRange('B1')
  .setValue('INTERVALS');
emailSheet.getRange('B2')
  .setValue('Auto-Email1()');
emailSheet.getRange('B10')
  .setValue('Auto-Email2()');
emailSheet.getRange('B18')
  .setValue('Auto-Email3()');
emailSheet.getRange('B26')
  .setValue('Global()');
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