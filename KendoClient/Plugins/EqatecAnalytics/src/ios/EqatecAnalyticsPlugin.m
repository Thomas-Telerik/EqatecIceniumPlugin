#import "EqatecAnalyticsPlugin.h"

@implementation EqatecAnalyticsPlugin

- (void)start:(CDVInvokedUrlCommand*)command
{
    CDVPluginResult* pluginResult = nil;
    NSString* id = [command.arguments objectAtIndex:0];
    NSString* version = [command.arguments objectAtIndex:1];

    if (self->monitor != nil && self->monitor.status.isStarted) {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    }
    else if (id != nil && [id length] > 0 && version != nil && [version length] > 0) {
        self->monitor = [EQATECAnalyticsMonitor monitorWithProductId:id version:version];
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
    }

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)stop:(CDVInvokedUrlCommand*)command
{
    CDVPluginResult* pluginResult = nil;

    if (self->monitor != nil && self->monitor.status.isStarted) {
        [self->monitor stop];
        self->monitor = nil;
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
    }

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end