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
      .addToUi();
    ui.createMenu('TRIGGERS')
      .addItem('ENABLE TRIGGERS', 'enableTriggers')
      .addSeparator()
      //.addSubMenu(ui.createMenu('Sub-menu')
      //    .addItem('Second item', 'menuItem2'))
      .addItem('DISABLE TRIGGERS', 'disableTriggers')
      .addSeparator()
      .addItem('TRIGGERS STATUS', 'statusTriggers')
      .addToUi();
    ui.createMenu('MANUAL EMAIL SEND')
      .addItem('ENABLE TRIGGERS', 'enableTriggers')
      .addSeparator()
      //.addSubMenu(ui.createMenu('Sub-menu')
      //    .addItem('Second item', 'menuItem2'))
      .addItem('DISABLE TRIGGERS', 'disableTriggers')
      .addSeparator()
      .addItem('TRIGGERS STATUS', 'statusTriggers')
      .addToUi();
}

function createContactGroups() {//Create the Contact Groups we're going to reference
  try {
    var group14 = ContactsApp.getContactGroup('Auto-Email1()').getName();
    SpreadsheetApp.getUi().alert('Auto-Email1() Group ALREADY EXISTS')
  } catch (err) {
    ContactsApp.createContactGroup('Auto-Email1()');
    SpreadsheetApp.getUi().alert('Auto-EMail1() Group SUCCESSFULLY CREATED');
  }
  try {
    var group30 = ContactsApp.getContactGroup('Auto-Email2()').getName();
    SpreadsheetApp.getUi().alert('Auto-Email2() Group ALREADY EXISTS')
  } catch (err) {
    ContactsApp.createContactGroup('Auto-Email2()');
    SpreadsheetApp.getUi().alert('Auto-Email2() Group SUCCESSFULLY CREATED');
  }
  try {
    var group60 = ContactsApp.getContactGroup('Auto-Email3()').getName();
    SpreadsheetApp.getUi().alert('Auto-Email3() Group ALREADY EXISTS')
  } catch (err) {
    ContactsApp.createContactGroup('Auto-Email3()');
    SpreadsheetApp.getUi().alert('Auto-Email3() Group SUCCESSFULLY CREATED');
  }
  try {
    var groupGlobal = ContactsApp.getContactGroup('Global()').getName();
    SpreadsheetApp.getUi().alert('Global() Group ALREADY EXISTS')
  } catch (err) {
    ContactsApp.createContactGroup('Global()');
    SpreadsheetApp.getUi().alert('Global() Group SUCCESSFULLY CREATED');
  }
}
//ends function createContactGroups


function enableTriggers() {
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
     .alert('You clicked the enable triggers menu item!');
}

function disableTriggers() {
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
     .alert('You clicked the disable triggers menu item!');
}

function statusTriggers() {
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
     .alert('You clicked the status triggers menu item!');
}