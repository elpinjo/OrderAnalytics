app.service('myserv', function() {
          this.getServiceList = function () {
    return [];
}
this.getISEndpoint = function() { 
 return 'http://macbookpro.mgmt:5555/';
}
this.getAPIList = function() { 
 return [];
}
this.getCreatedTime = function() { 
 return "02-01-2025 22:31:47 CET";
}
this.getPackageInfo = function(){
 return{"packageName":"OrderAnalytics","displayName":"Order Analytics","status":"Development","tags":[""],"createdDate":"05-11-2024 19:42:29 CET","version":"1.0.1","buildNumber":"","description":"Order analytics provides the means to interact with IBM Event Automation for publishing and subscribing to events in relationship with Orders created or updated"};
}
});
