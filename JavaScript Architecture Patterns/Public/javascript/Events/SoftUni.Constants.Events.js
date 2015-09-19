/*
* @Event Constans Singleton Object
*/

var SoftUni = SoftUni || {};
SoftUni.Constants = SoftUni.Constants || {};

SoftUni.Constants.Events;
(function () {
    var instance;

    SoftUni.Constants.Events = function Events () {
        if (instance) {
            return instance;
        }

        instance = this;

        /*
        * Naming convention for constants is to use all caps
        */
        this.ADD_EMPLOYEE = "ADD_EMPLOYEE";
        this.ON_EMPLOYEE_ADDED = "ON_EMPLOYEE_ADDED";
    };

}());




