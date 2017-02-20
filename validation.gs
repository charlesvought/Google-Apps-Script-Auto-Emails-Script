function fieldValidation(groupName, array) {
var passValidation = true;

  //Validate Email Quota
  if(array.length > MailApp.getRemainingDailyQuota()) {
    passValidation = false;
    Logger.log('Failed groupValidation: Insuffient Remaining Quota');
    writeLog();
}

for (i = 0; i < array.length; i++) {
   //Validate Provide Email address
   var validateEmail = array[i].getPrimaryEmail();
   var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   //Validate givenName is populated
   var validateGivenName = array[i].getGivenName();
   //Validate Family Name is populated
   var validateFamilyName = array[i].getFamilyName();
   if (emailPattern.test(validateEmail) == false) {
      passValidation = false;
      Logger.log('Failed groupValidation: Contact has invalid/blank e-mail address in ' + groupName);
   }
   if (validateGivenName == '' || validateGivenName == null) {
      passValidation = false;
      Logger.log('Failed groupValidation: Contact has invalid/blank Given Name in ' + groupName);
   }
   if (validateFamilyName == '' || validateFamilyName == null) {
      passValidation = false;
      Logger.log('Failed groupValidation: Contact has invalid/blank Family Name in ' + groupName);
   }

 }
writeLog();
return passValidation
}