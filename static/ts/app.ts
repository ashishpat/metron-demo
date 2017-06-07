/// <reference path="../../node_modules/metronical.metron/dist/gen/metron.d.ts" />

metron.onready(() => {
    /*
     * Storage example that uses either IndexedDB or sessionStorage
     */
    var store: metron.store = new metron.store();
    store.init().then(function() {
        return store.setItem("config.name", "michael szul");    
    }).then(function(result) {
        console.log(result);
        return store.getItem("config.name", "value");
    }).then(function(result) {
        console.log(result);
    }).catch(function(reason) {
        console.log(reason);
    });
});
