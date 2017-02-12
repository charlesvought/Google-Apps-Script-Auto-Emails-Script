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
       .addSeparator()
      .addItem('DISABLE TRIGGERS', 'disableTriggers')
       .addSeparator()
      .addItem('TRIGGERS STATUS', 'statusTriggers')
      .addToUi();
  ui.createMenu('SEND:MANUAL')
      .addItem('EXECUTE:GLOBAL()', 'sendGroup1')
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
}
/*************************Global Variables*******************************/
//Declare Sheets
var emailSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Email');
var dataSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Data');
var logSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Log');
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
  if (groupValidation(group1, contactArray) == true) {
    for (i = 0; i < contactArray.length; i++) {
    GmailApp.sendEmail(contactArray[i].getPrimaryEmail(), group1Subject, 'Dear ' + contactArray[i].getGivenName() + ',' + '\r\n\r\n' + group1Body + '\r\n\r\n' + 'Sincerely,' + '\r\n' + 'Sandy Abbott' + '\r\n' + 'Abbott & Associates' + '\r\n' + 'www.abbottcreditsolutions.com');
     }
  } else {
    GmailApp.sendEmail(Session.getActiveUser().getEmail(), 'Email Failed', 'Your inquiry was unable to complete');
    SpreadsheetApp.getUi().alert('Unable to Send at this time');
 }
}
function sendGroup2() {//Global() Contact Group
var contactArray = ContactsApp.getContactsByGroup(ContactsApp.getContactGroup(group2));
  if (groupValidation(group2, contactArray) == true) {
    for (i = 0; i < contactArray.length; i++) {
    GmailApp.sendEmail(contactArray[i].getPrimaryEmail(), group1Subject, 'Dear ' + contactArray[i].getGivenName() + ',' + '\r\n\r\n' + group1Body + '\r\n\r\n' + 'Sincerely,' + '\r\n' + 'Sandy Abbott' + '\r\n' + 'Abbott & Associates' + '\r\n' + 'www.abbottcreditsolutions.com');
     }
  } else {
    GmailApp.sendEmail(Session.getActiveUser().getEmail(), 'Email Failed', 'Your inquiry was unable to complete');
    SpreadsheetApp.getUi().alert('Unable to Send at this time');
 }
}
function sendGroup3() {//Global() Contact Group
var contactArray = ContactsApp.getContactsByGroup(ContactsApp.getContactGroup(group3));
  if (groupValidation(group3, contactArray) == true) {
    for (i = 0; i < contactArray.length; i++) {
    GmailApp.sendEmail(contactArray[i].getPrimaryEmail(), group1Subject, 'Dear ' + contactArray[i].getGivenName() + ',' + '\r\n\r\n' + group1Body + '\r\n\r\n' + 'Sincerely,' + '\r\n' + 'Sandy Abbott' + '\r\n' + 'Abbott & Associates' + '\r\n' + 'www.abbottcreditsolutions.com');
     }
  } else {
    GmailApp.sendEmail(Session.getActiveUser().getEmail(), 'Email Failed', 'Your inquiry was unable to complete');
    SpreadsheetApp.getUi().alert('Unable to Send at this time');
 }
}
function sendGroup4() {//Global() Contact Group
var contactArray = ContactsApp.getContactsByGroup(ContactsApp.getContactGroup(group4));
  if (groupValidation(group4, contactArray) == true) {
    for (i = 0; i < contactArray.length; i++) {
    GmailApp.sendEmail(contactArray[i].getPrimaryEmail(), group1Subject, 'Dear ' + contactArray[i].getGivenName() + ',' + '\r\n\r\n' + group1Body + '\r\n\r\n' + 'Sincerely,' + '\r\n' + 'Sandy Abbott' + '\r\n' + 'Abbott & Associates' + '\r\n' + 'www.abbottcreditsolutions.com');
     }
  } else {
    GmailApp.sendEmail(Session.getActiveUser().getEmail(), 'Email Failed', 'Your inquiry was unable to complete');
    SpreadsheetApp.getUi().alert('Unable to Send at this time');
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
  SpreadsheetApp.getUi().alert('Pass Validation = ' + groupValidation(groupName, contactArray) + '\r\n' + 'Total # of Contacts in ' + groupName + ': ' + contactArray.length + '\r\n' + 'Total # of Email Quota remaining: ' + MailApp.getRemainingDailyQuota() + '\r\n\r\n' + alertContacts);
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
/**********************************************************************/