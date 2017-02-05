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