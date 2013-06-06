
#import <Cordova/CDV.h>

@interface EqatecAnalytics : CDVPlugin

- (void)start:(CDVInvokedUrlCommand*)command;
- (void)stop:(CDVInvokedUrlCommand*)command;

@end

/********* Echo.m Cordova Plugin Implementation *******/

#import "EQATECAnalyticsMonitor.h"
#import <Cordova/CDV.h>

@implementation EqatecAnalytics

EQATECAnalyticsMonitor *mon;

- (void)start:(CDVInvokedUrlCommand*)command
{
    CDVPluginResult* pluginResult = nil;
    NSString* id = [command.arguments objectAtIndex:0];
    NSString* version = [command.arguments objectAtIndex:1];

    mon = [EQATECAnalyticsMonitor monitorWithProductId:@id version:@version];

    if (id != nil && [id length] > 0 && version != nil && [version length] > 0) {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:echo];
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
    }

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)stop:(CDVInvokedUrlCommand*)command
{
    CDVPluginResult* pluginResult = nil;

    if (start != nil && [echo length] > 0) {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:echo];
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
    }

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end
