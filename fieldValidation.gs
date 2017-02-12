function groupValidation(groupName, array) {
//Validate Email Quota
var passValidation = true;
  if(array.length > MailApp.getRemainingDailyQuota()) {
    passValidation = false;
    Logger.log('Failed groupValidation: Insuffient Remaining Quota');
    writeLog();
 }
//Validate Provide Email address
var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
 for (i = 0; i < array.length; i++) {
   var validateEmail = array[i].getPrimaryEmail();
   if (emailPattern.test(validateEmail) == false) {
      passValidation = false;
      Logger.log('Failed groupValidation: Contact has invalid/blank e-mail address in ' + groupName);
      writeLog();
   }  
 }
//Validate First Name is populated
for (i = 0; i < array.length; i++) {
   var validateGivenName = array[i].getGivenName();
   if (validateGivenName == '' || validateGivenName == null) {
      passValidation = false;
      Logger.log('Failed groupValidation: Contact has invalid/blank Given Name in ' + groupName);
      writeLog();
   }  
 }
//Validate Family Name is populated
for (i = 0; i < array.length; i++) {
   var validateFamilyName = array[i].getFamilyName();
   if (validateFamilyName == '' || validateFamilyName == null) {
      passValidation = false;
      Logger.log('Failed groupValidation: Contact has invalid/blank Family Name in ' + groupName);
      writeLog();
   }  
 }
return passValidation;
}