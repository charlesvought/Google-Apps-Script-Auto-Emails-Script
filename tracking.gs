function doGet(e) {
  var token = e.parameter.token;
  callTracker(token);
  return HtmlService.createHtmlOutputFromFile('webpage.html');
}

function getTracker(campaignText, givenName, familyName, subjectLine) {
  var decodedToken = Utilities.getUuid() + Utilities.formatDate(new Date(), "EST", "YYYYMMddhhmmssSS");
  var encodedToken = Utilities.base64EncodeWebSafe(decodedToken);
  var trackerTag = "<img src='" + ScriptApp.getService().getUrl() + "?token=" + encodedToken + "' width='1' height='1'/>";
  var trackerSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Tracking');
  trackerSheet.insertRowsAfter(1,1);
  trackerSheet.getRange('A2').setValue(campaignText);
  trackerSheet.getRange('B2').setValue(givenName + ' ' + familyName);
  trackerSheet.getRange('C2').setValue(subjectLine);
  trackerSheet.getRange('D2').setValue(Utilities.formatDate(new Date(), "EST", "MM-dd-yyyy"));
  trackerSheet.getRange('F2').setValue('SENT').setBackground('#FF0000');
  trackerSheet.getRange('G2').setValue(encodedToken);
  trackerSheet.getRange('H2').setValue(decodedToken);
  return trackerTag
}

function callTracker(token) {
  var trackerSheetValues = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Tracking').getDataRange().getValues();
  for(i = 0; i < trackerSheetValues.length; i++){
    if(trackerSheetValues[i][6] == token) { //[6] Looking at contents of column "G"
        SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Tracking').getRange(i+1, 5).setValue(Utilities.formatDate(new Date(), "EST", "MM-dd-yyyy"));
        SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Tracking').getRange(i+1, 6).setValue('OPENED').setBackground('#00ff00');
    }
  }
  Logger.log('Email token has been received: ' + token);
  writeLog();
}