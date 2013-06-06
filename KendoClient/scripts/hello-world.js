// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);


if(window.plugins == null)
    console.log("plugins null");

/*window.plugins.analytics.start('4ED47F3B623045788CFEB53ED9C90656',"0.0.0.1", function(){
        //on success
    },
    function(mes){
        alert('error starting monitor. Mes ' + mes);    
    });*/

/*if (window.sqlitePlugin !== undefined) 
{
    console.log("sqlite");
    var db = window.sqlitePlugin.openDatabase("reddit");
}*/

// PhoneGap is ready
function onDeviceReady() {
    navigator.splashscreen.hide();    
    
    console.log("device ready");
    window.plugins.analytics.start('4ED47F3B623045788CFEB53ED9C90656',"0.0.0.1", function(){
        //on success
    },
    function(mes){
        alert('error starting monitor. Mes ' + mes);    
    });
}

//=======================Say Hello (Page 1) Operations=======================//
function sayHello() {
    var sayHelloInputElem = document.getElementById('helloWorldInput');
    var sayHelloTextElem = document.getElementById('helloWorldText');
    var inputText = document.getElementById('txtName');

    sayHelloTextElem.innerHTML = 'Hello, ' + inputText.value + '!';
    sayHelloTextElem.style.display = 'block';
    sayHelloInputElem.style.display = 'none';
}

function sayHelloReset() {
    var sayHelloInputElem = document.getElementById('helloWorldInput');
    var sayHelloTextElem = document.getElementById('helloWorldText');
    var inputText = document.getElementById('txtName');

    inputText.value = '';
    sayHelloTextElem.style.display = 'none';
    sayHelloInputElem.style.display = 'block';
   
    window.plugins.analytics.stop(function(){
        //on success
    },
    function(mes){
        alert('error stopping monitor '  + mes);
    });    
}
