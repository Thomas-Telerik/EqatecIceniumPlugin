package com.telerik.plugins.eqatecanalytics;

import org.apache.cordova.api.CallbackContext;
import org.apache.cordova.api.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

import android.app.Activity;
import eqatec.analytics.monitor.IAnalyticsMonitorSettings;
import eqatec.analytics.monitor.ILogAnalyticsMonitor;
import eqatec.analytics.monitor.AnalyticsMonitorFactory;
import eqatec.analytics.monitor.IAnalyticsMonitor;
import com.telerik.plugins.eqatecanalytics.Logger;

public class EqatecAnalyticsPlugin extends CordovaPlugin {	
	
	IAnalyticsMonitor m_Monitor = null;
	ILogAnalyticsMonitor m_Logger = new Logger();
	@Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("start")) {
            String id = args.getString(0); 
            String version = args.getString(1);
            this.start(id, version, callbackContext);
            return true;
        }
		
		if (action.equals("stop")) {
            this.stop(callbackContext);
            return true;
        }
        return false;
    }

    private void start(String id, String version, CallbackContext callbackContext) {
        m_Logger.logMessage("Starting monitor");
    	if (id != null && id.length() > 0 && version != null && version.length() > 0) 
		{   
    		try {
				if(m_Monitor != null)
				{
					IAnalyticsMonitorSettings settings = AnalyticsMonitorFactory.createSettings(id, new eqatec.analytics.monitor.Version(version));
					settings.setLoggingInterface(m_Logger);
					Activity context = cordova.getActivity();
					m_Monitor = AnalyticsMonitorFactory.createMonitor(context.getBaseContext(), settings);				
					//m_Monitor = AnalyticsMonitorFactory.createMonitor(context.getBaseContext(), id, new Version(version));
					m_Monitor.start();
				}
			} catch (Exception e) {
				m_Logger.logMessage("Exception in monitor");
				callbackContext.error("Exception while starting monitor " + e.getMessage());
				e.printStackTrace();
				return;
			}
        	
			//create and start monitor
        	callbackContext.success("Monitor started");
        
        } 
        else 
		{
            callbackContext.error("Expected non-empty id and version.");
        }        
    }
    	
	
	private void stop(CallbackContext callbackContext) {
		m_Logger.logMessage("Stopping monitor");
		if(m_Monitor != null)
		{
			m_Monitor.stop();
			callbackContext.success("Monitor stopped");
		}
		else
		{
			callbackContext.error("You have to start the monitor first!");
		}
	}	
        
}

