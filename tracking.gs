function doGet(e) {
  var key = e.parameter.key;
  callTracker(key);
}

function getTracker() {
  var uniqkey = '46458113422461654353';
  var trackerTag = "<img src='"+ ScriptApp.getService().getUrl() + "?key=" +uniqkey+ "' width='1' height='1'/>"; 
  return trackerTag
}

function callTracker(key) {
  Logger.log('Email Callback has been received: ' + key);
  writeLog();
}