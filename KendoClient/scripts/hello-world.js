// JavaScript Document

// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);

//var analytics = new Analytics();

Analytics.start('4ED47F3B623045788CFEB53ED9C90656',"0.0.0.1", function(){
        //on success
    },
    function(mes){
        alert('error starting monitor. Mes ' + mes);    
    });

// PhoneGap is ready
function onDeviceReady() {
    navigator.splashscreen.hide();
    
    
    Analytics.start('4ED47F3B623045788CFEB53ED9C90656',"0.0.0.1", function(){
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
    
    Analytics.stop(function(){
        //on success
    },
    function(mes){
        alert('error stopping monitor '  + mes);
    });    
}
