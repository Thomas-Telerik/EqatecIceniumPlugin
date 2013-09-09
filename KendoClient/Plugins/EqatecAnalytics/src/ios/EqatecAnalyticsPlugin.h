#import <Cordova/CDV.h>
#import "EQATECAnalyticsMonitor.h"

@interface EqatecAnalyticsPlugin : CDVPlugin {
    EQATECAnalyticsMonitor *monitor;
}

- (void)start:(CDVInvokedUrlCommand*)command;
- (void)stop:(CDVInvokedUrlCommand*)command;

@end