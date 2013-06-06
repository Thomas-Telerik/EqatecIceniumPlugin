package com.telerik.plugins;


import org.apache.cordova.api.CallbackContext;
import org.apache.cordova.api.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import eqatec.analytics.monitor.AnalyticsMonitorFactory;
import eqatec.analytics.monitor.IAnalyticsMonitor;
import eqatec.analytics.monitor.Version;

public class EqatecAnalytics extends CordovaPlugin {	
	
	IAnalyticsMonitor m_Monitor = null;
	
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
        if (id != null && id.length() > 0 && version != null && version.length() > 0) 
		{   
    		try {
				if(m_Monitor != null)
				{
					m_Monitor = AnalyticsMonitorFactory.createMonitor(null, id, new Version(version));				
					m_Monitor.start();
				}
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
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

