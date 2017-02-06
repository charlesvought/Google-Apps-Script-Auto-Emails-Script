function authenticationApp() {
    SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
     .alert('Thank you for authenticating this app');
}

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('SETUP')
      .addItem('CREATE CONTACT GROUPS', 'createContactGroups')
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
      .addItem('EXECUTE:GLOBAL()', 'sendGlobal')
      .addToUi();
  ui.createMenu('QUERY')
      .addItem('REMAINING EMAIL QUOTA', 'queryQuota')
      .addToUi();
}

/*************************Global Variables*******************************/
var emailSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Email');

var group1 = emailSheet.getRange('B2').getValue();
var group2 = emailSheet.getRange('B10').getValue();
var group3 = emailSheet.getRange('B18').getValue();
var group4 = emailSheet.getRange('B26').getValue();


/*************************Functions**************************************/


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

//function getClientInfoSet() {

function sendGlobal() {
var contactArray = ContactsApp.getContactsByGroup(ContactsApp.getContactGroup(group4));
  
for (i = 0; i < contactArray.length; i++) {
GmailApp.sendEmail(contactArray[i].getPrimaryEmail(), emailSheet.getRange('C26').getValue(), 'Dear ' + contactArray[i].getGivenName() + ',' + '\r\n\r\n' + emailSheet.getRange('C28').getValue());
}
  
var firstName = contactArray[0].getFullName();
var lastName = contactArray[0].getFamilyName();
var contactEmail = contactArray[0].getPrimaryEmail();
Logger.log(firstName + ' ' +  lastName + ' ' + contactEmail);
}

function queryQuota() {
SpreadsheetApp.getUi().alert('Total Emails Remaining = ' + MailApp.getRemainingDailyQuota());
}
