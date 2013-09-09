package com.telerik.plugins.eqatecanalytics;

import android.util.Log;
import eqatec.analytics.monitor.ILogAnalyticsMonitor;

public class Logger implements ILogAnalyticsMonitor{
	
	@Override
	public void logError(String error){
		Log.e("Monitor",error);
	}
	
	@Override
	public void logMessage(String message){
		Log.i("Monitor",message);
	}	
}
