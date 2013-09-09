var exec = require('cordova/exec');

/**
 * Start Eqatec Analytics monitor
 * 
 * @param productId			The product id 
 * @param successCallback	The success callback
 * @param failureCallback	The error callback
 */
exports.start = function(accountId, version, successCallback, failureCallback) {
	console.log("Analytics.prototype.start");
	return exec(
				successCallback,			 
				failureCallback,						
				'EqatecAnalytics',				
				'start',								
				[accountId, version]);
};

/**
 * Stop Eqatec Analytics monitor
 * 
 * @param successCallback	The success callback
 * @param failureCallback	The error callback
 */
exports.stop = function(successCallback, failureCallback) {
	console.log("Analytics.prototype.stop");
	return exec(
				successCallback,			 
				failureCallback,						
				'EqatecAnalytics',				
				'stop',								
				[]);
};