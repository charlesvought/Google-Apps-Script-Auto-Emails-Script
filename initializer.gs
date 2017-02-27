function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('SETUP')
      .addItem('CREATE CONTACT GROUPS', 'createContactGroups')
      .addItem('AUTHENTICATE APPLICATION', 'authenticationApp')
      //.addSeparator()
      //.addSubMenu(ui.createMenu('Sub-menu')
      //    .addItem('Second item', 'menuItem2'))
      //.addItem('DISABLE TRIGGERS', 'disableTriggers')
      .addToUi();
  ui.createMenu('CONFIG:TRIGGERS')
      .addItem('ENABLE TRIGGERS', 'enableTriggers')
      .addItem('DISABLE TRIGGERS', 'disableTriggers')
      .addItem('TRIGGERS STATUS', 'statusTriggers')
      .addToUi();
  ui.createMenu('SEND:MANUAL')
      .addItem('EXECUTE:GLOBAL()', 'sendGroup1')
      .addItem('EXECUTE:AUTO-EMAIL1()', 'sendGroup2')
      .addItem('EXECUTE:AUTO-EMAIL2()', 'sendGroup3')
      .addItem('EXECUTE:AUTO-EMAIL3()', 'sendGroup4')
      .addToUi();
  ui.createMenu('TESTING')
      .addItem('GET EMAIL QUOTA', 'queryQuota')
        .addSeparator()
          .addSubMenu(ui.createMenu('TEST CONTACT CAPTURE')
            .addItem('GLOBAL() CONTACTS', 'group1ContactTest')
            .addItem('AUTO-EMAIL1() CONTACTS', 'group2ContactTest')
            .addItem('AUTO-EMAIL2() CONTACTS', 'group3ContactTest')
            .addItem('AUTO-EMAIL3() CONTACTS', 'group4ContactTest'))
      .addToUi();
  SpreadsheetApp.getUi().showSidebar(HtmlService.createHtmlOutputFromFile('sidebar.html').setTitle('Auto-Email Reference & Change Log'));
}
/*************************onLoad*******************************/
//Declare Sheets
var emailSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Email');
var dataSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Data');
var logSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Log');
//Global Variables
var todaysDate = Utilities.formatDate(new Date(), "EST", "MM-dd-yyyy");
var currentTime = Utilities.formatDate(new Date(), "EST", "HH:mm:ss");
var userEmail = Session.getActiveUser().getEmail();
var username = extractTextBefore(userEmail,"@");
//Group1 = Global()
var group1 = emailSheet.getRange('B2').getValue();
var group1Subject = emailSheet.getRange('C2').getValue();
var group1Body = emailSheet.getRange('C4').getValue();
//Group2 = Auto-Email1()
var group2 = emailSheet.getRange('B10').getValue();
var group2Subject = emailSheet.getRange('C10').getValue();
var group2Body = emailSheet.getRange('C12').getValue();
//Group3 = Auto-Email2()
var group3 = emailSheet.getRange('B18').getValue();
var group3Subject = emailSheet.getRange('C18').getValue();
var group3Body = emailSheet.getRange('C20').getValue();
//Group4 = Auto-Email3()
var group4 = emailSheet.getRange('B26').getValue();
var group4Subject = emailSheet.getRange('C26').getValue();
var group4Body = emailSheet.getRange('C28').getValue();
/*************************Populate on Load*******************************/
var yellowColor = '#FFF000';
var redColor = '#FF0000';
var grayColor = '#CACACA';
var blueColor = '#00FFFF';
emailSheet.getRange('A1')
  .setValue('INFO');
emailSheet.getRange('A2')
  .setValue('DATE:')
  .setBackground(grayColor);
emailSheet.getRange('A3')
  .setValue(todaysDate);
emailSheet.getRange('A4')
.setValue('TIME:')
.setBackground(grayColor);
emailSheet.getRange('A5')
  .setValue(currentTime);
emailSheet.getRange('B1')
  .setValue('GROUP NAME');
emailSheet.getRange('D1')
  .setValue('SUBJECT LINE OF THE EMAIL');
emailSheet.getRange('D9')
  .setValue('SUBJECT LINE OF THE EMAIL');
emailSheet.getRange('D17')
  .setValue('SUBJECT LINE OF THE EMAIL');
emailSheet.getRange('D25')
  .setValue('SUBJECT LINE OF THE EMAIL');
emailSheet.getRange('D3')
  .setValue('BODY OF THE EMAIL');
emailSheet.getRange('D11')
  .setValue('BODY OF THE EMAIL');
emailSheet.getRange('D19')
  .setValue('BODY OF THE EMAIL');
emailSheet.getRange('D27')
  .setValue('BODY OF THE EMAIL');
/************************************************************************/
function createContactGroups() {//Create the Contact Groups we're going to reference
  try {
    ContactsApp.getContactGroup(group1).getName();
    SpreadsheetApp.getUi().alert(group1 +' Contact Group ALREADY EXISTS');
  } catch (err) {
    ContactsApp.createContactGroup(group1);
    SpreadsheetApp.getUi().alert(group1 + ' Contact Group SUCCESSFULLY CREATED');
  }
  try {
    ContactsApp.getContactGroup(group2).getName();
    SpreadsheetApp.getUi().alert(group2 +' Contact group ALREADY EXISTS');
  } catch (err) {
    ContactsApp.createContactGroup(group2);
    SpreadsheetApp.getUi().alert(group2 + ' Contact Group SUCCESSFULLY CREATED');
  }
  try {
    ContactsApp.getContactGroup(group3).getName();
    SpreadsheetApp.getUi().alert(group3 + ' Contact Group ALREADY EXISTS');
  } catch (err) {
    ContactsApp.createContactGroup(group3);
    SpreadsheetApp.getUi().alert(group3 + ' Contact Group SUCCESSFULLY CREATED');
  }
  try {
    ContactsApp.getContactGroup(group4).getName();
    SpreadsheetApp.getUi().alert(group4 + ' Contact Group ALREADY EXISTS');
  } catch (err) {
    ContactsApp.createContactGroup(group4);
    SpreadsheetApp.getUi().alert(group4 + ' Contact Group SUCCESSFULLY CREATED');
  }
}
/******************************EMAIL EXECUTION FUNCTIONS*************************/
function sendGroup1() {//Global() Contact Group
var contactArray = ContactsApp.getContactsByGroup(ContactsApp.getContactGroup(group1));
  if (fieldValidation(group1, contactArray) == true) {
    for (i = 0; i < contactArray.length; i++) {
    GmailApp.sendEmail(contactArray[i].getPrimaryEmail(), group1Subject, 'Dear ' + contactArray[i].getGivenName() + ',' + '\r\n\r\n' + group1Body + '\r\n\r\n' + 'Sincerely,' + '\r\n' + 'Sandy Abbott' + '\r\n' + 'Abbott & Associates' + '\r\n' + 'www.abbottcreditsolutions.com');
     }
  } else {
    GmailApp.sendEmail(Session.getActiveUser().getEmail(), 'Email Failed', 'Your inquiry was unable to complete');
    SpreadsheetApp.getUi().alert('Unable to Send at this time');
 }
}
function sendGroup2() {//Auto-Email1()
var contactArray = ContactsApp.getContactsByGroup(ContactsApp.getContactGroup(group2));
  if (fieldValidation(group2, contactArray) == true) {
    for (i = 0; i < contactArray.length; i++) {
    GmailApp.sendEmail(contactArray[i].getPrimaryEmail(), group2Subject, 'Dear ' + contactArray[i].getGivenName() + ',' + '\r\n\r\n' + group2Body + '\r\n\r\n' + 'Sincerely,' + '\r\n' + 'Sandy Abbott' + '\r\n' + 'Abbott & Associates' + '\r\n' + 'www.abbottcreditsolutions.com');
     }
  } else {
    GmailApp.sendEmail(Session.getActiveUser().getEmail(), 'Email Failed', 'Your inquiry was unable to complete');
    SpreadsheetApp.getUi().alert('Unable to Send at this time');
 }
}
function sendGroup3() {//Auto-Email2()
var contactArray = ContactsApp.getContactsByGroup(ContactsApp.getContactGroup(group3));
  if (fieldValidation(group3, contactArray) == true) {
    for (i = 0; i < contactArray.length; i++) {
    GmailApp.sendEmail(contactArray[i].getPrimaryEmail(), group3Subject, 'Dear ' + contactArray[i].getGivenName() + ',' + '\r\n\r\n' + group3Body + '\r\n\r\n' + 'Sincerely,' + '\r\n' + 'Sandy Abbott' + '\r\n' + 'Abbott & Associates' + '\r\n' + 'www.abbottcreditsolutions.com');
     }
  } else {
    GmailApp.sendEmail(Session.getActiveUser().getEmail(), 'Email Failed', 'Your inquiry was unable to complete');
    SpreadsheetApp.getUi().alert('Unable to Send at this time');
 }
}
function sendGroup4() {//Auto-Email3()
var contactArray = ContactsApp.getContactsByGroup(ContactsApp.getContactGroup(group4));
  if (fieldValidation(group4, contactArray) == true) {
    for (i = 0; i < contactArray.length; i++) {
      GmailApp.sendEmail(contactArray[i].getPrimaryEmail(), group4Subject, group4Body, {
        htmlBody:'<p>'+'Dear ' + contactArray[i].getGivenName() + ','
                       + '</p><p>'
                       + group4Body
                       + '</p><p></p><p>'
                       + 'Sincerely,'
                       + '<br />'
                       + 'Sandy Abbott'
                       + '<br />'
                       + 'Abbott & Associates'
                       + '<br />'
                       + '<a href="http://www.abbottcreditsolutions.com">www.Abbott Credit Solutions.com</a>'
                       + '</p>'
                       + getTracker()
      });
     }
  } else {
    GmailApp.sendEmail(Session.getActiveUser().getEmail(), 'Auto-Email-App: Automated Message (Failure to Execute)', 'An email-send function was unable to execute. Refer to the Log for details.');
    SpreadsheetApp.getUi().alert('function was unable to complete. Refer to the Log for details.'); 
 }
}
/******************************TESTING FUNCTIONS*********************************/
/*
function testEmailCapture(groupName) {
  if(groupName = group1) {
    contactArray[i].getPrimaryEmail(), group1Subject, 'Dear ' + contactArray[i].getGivenName() + ',' + '\r\n\r\n' + group1Body + '\r\n\r\n' + 'Sincerely,' + '\r\n' + 'Sandy Abbott' + '\r\n' + 'Abbott & Associates' + '\r\n' + 'www.abbottcreditsolutions.com'
  }
}
*/
function testContactCapture(groupName) {
var contactArray = ContactsApp.getContactsByGroup(ContactsApp.getContactGroup(groupName));
var contactInfoArray = [];
var alertContacts = '';
  for (i = 0; i < contactArray.length; i++) {
    contactInfoArray.push('First Name = ' + contactArray[i].getGivenName() + '\r\n' + 'Last Name = ' + contactArray[i].getFamilyName() + '\r\n' + 'Email: ' + contactArray[i].getPrimaryEmail() + '\r\n\r\n');
    alertContacts = alertContacts + contactInfoArray[i];
  }
  SpreadsheetApp.getUi().alert('Pass Validation = ' + fieldValidation(groupName, contactArray) + '\r\n' + 'Total # of Contacts in ' + groupName + ': ' + contactArray.length + '\r\n' + 'Total # of Email Quota remaining: ' + MailApp.getRemainingDailyQuota() + '\r\n\r\n' + alertContacts);
}
function group1ContactTest() {
  testContactCapture(group1);
}
function group2ContactTest() {
  testContactCapture(group2);
}
function group3ContactTest() {
  testContactCapture(group3);
}
function group4ContactTest() {
  testContactCapture(group4);
}
/******************************QUERY FUNCTIONS*************************/
function queryQuota() {
SpreadsheetApp.getUi().alert('Total Emails Remaining = ' + MailApp.getRemainingDailyQuota());
}
/******************************MISC FUNCTIONS**************************/
function authenticationApp() {
    SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
     .alert('Thank you for authenticating this application.');
}
function writeLog() {
var logEntry = Logger.getLog();
logSheet.appendRow([logEntry]);
}
function extractTextBefore(string, character) {
  var locateCharacter = string.search(character);
  var targetText = string.slice(0, locateCharacter);
return targetText
}
/**********************************************************************/