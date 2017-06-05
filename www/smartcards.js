var smartcards = {
    init: function (successCallback, errorCallback, options) {
        cordova.exec(successCallback, errorCallback, "reader", "init", options);
    },
    addEventListener: function (name, listener) {
        cordova.exec(null, null, "reader", "addEventListener", [name,  listener]);
    }
}

module.exports = smartcards;