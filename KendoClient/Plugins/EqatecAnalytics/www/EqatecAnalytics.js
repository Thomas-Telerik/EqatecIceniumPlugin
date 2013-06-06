var Analytics = function(){
    
    function start(accountId, version, successCallback, failureCallback) {
	return cordova.exec(
				successCallback,			 
				failureCallback,						
				'EqatecAnalytics',				
				'start',								
				[accountId, version]);
    };
    
    function stop(successCallback, failureCallback) {
	return cordova.exec(
				successCallback,			 
				failureCallback,						
				'EqatecAnalytics',				
				'stop',								
				[]);
    };
    
    return{
    start:start,    
    stop:stop
    };
}();


//var Analytics = function () {};

/**
 * Start Eqatec Analytics monitor
 * 
 * @param productId			The product id 
 * @param successCallback	The success callback
 * @param failureCallback	The error callback
 */
/*Analytics.prototype.start = function(accountId, version, successCallback, failureCallback) {
	return cordova.exec(
				successCallback,			 
				failureCallback,						
				'EqatecAnalytics',				
				'start',								
				[accountId, version]);
};*/

/**
 * Stop Eqatec Analytics monitor
 * 
 * @param successCallback	The success callback
 * @param failureCallback	The error callback
 */
/*Analytics.prototype.stop = function(successCallback, failureCallback) {
	return cordova.exec(
				successCallback,			 
				failureCallback,						
				'EqatecAnalytics',				
				'stop',								
				[]);
};*/

/**
 * Load Analytics
 */

/*if(!window.plugins) {
    window.plugins = {};
}

if (!window.plugins.analytics) {
    window.plugins.analytics = new Analytics();
}*/