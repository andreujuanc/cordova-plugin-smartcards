var reader = {
    init:function(successCallback, errorCallback, opts){
        debugger;
        successCallback();
    },
    addEventListener: function(successCallback, errorCallback, opts){
        debugger;
        successCallback();
    }
};
cordova.commandProxy.add("reader", reader);