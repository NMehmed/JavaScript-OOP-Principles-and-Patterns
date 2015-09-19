/*
* Storage Manager
*/

var SoftUni = SoftUni || {};

/*
    @static
*/
SoftUni.Storage = function () {

}

/*
    @abstract
*/
SoftUni.Storage.prototype = {

    /*
        @abstract
    */
    add: function () {
        throw "Unimplemented abstract method call!";
    },

    /*
        @abstract
    */
    get: function () {
        throw "Unimplemented abstract method call!";
    },

    /*
        @abstract
    */
    update: function () {
        throw "Unimplemented abstract method call!";
    },

    /*
        @abstract
    */
    remove: function () {
        throw "Unimplemented abstract method call!";
    },

    /*
        @abstract
    */
    addObj: function () {
        throw "Unimplemented abstract method call!";
    },

    /*
       @abstract
    */
    getObj: function () {
        throw "Unimplemented abstract method call!";
    },

    /*
       @abstract
    */
    removeObj: function () {
        throw "Unimplemented abstract method call!";
    },

    /*
       @abstract
    */
    updateObj: function () {
        throw "Unimplemented abstract method call!";
    }
}