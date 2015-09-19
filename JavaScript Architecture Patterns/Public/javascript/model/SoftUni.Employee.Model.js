/*
* @Employee Model Object
*/

var SoftUni = SoftUni || {};
SoftUni.Employee = SoftUni.Employee || {};

SoftUni.Employee.Model = function (employee) {
    this.firstName = employee.firstName;
    this.lastName = employee.lastName;
    this.isLazy = employee.isLazy;
}
