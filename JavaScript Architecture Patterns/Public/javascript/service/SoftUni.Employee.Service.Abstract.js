/*
* @Employee Service Abstract Object
*/
var SoftUni = SoftUni || {};
SoftUni.Employee = SoftUni.Employee || {};
SoftUni.Employee.Service = SoftUni.Employee.Service || {};

/*
   @Object constructor
*/
SoftUni.Employee.Service.Abstract = function () {
    var that = this;
    this.eventConsts = new SoftUni.Constants.Events();

    $(document).on(this.eventConsts.ADD_EMPLOYEE, function (event, employee) {
        console.log(event, employee);

        that.onEmployeeAdded(employee);
    });
}

/*
    @abstract
*/
SoftUni.Employee.Service.Abstract.prototype.addEmployee = function () {
    throw "Unimplemented abstract method call!";
}

/*
    @abstract
*/
SoftUni.Employee.Service.Abstract.prototype.updateEmployee = function () {
    throw "Unimplemented abstract method call!";
}

/*
    @abstract
*/
SoftUni.Employee.Service.Abstract.prototype.removeEmployee = function () {
    throw "Unimplemented abstract method call!";
}

/*
   @abstract
*/
SoftUni.Employee.Service.Abstract.prototype.getEmployee = function () {
    throw "Unimplemented abstract method call!";
}

/*
   @abstract
*/
SoftUni.Employee.Service.Abstract.prototype.getAllEmployees = function () {
    throw "Unimplemented abstract method call!";
}

/*
   @TO DO 
*/


SoftUni.Employee.Service.Abstract.prototype.onEmployeeAdded = function (employee) {
    $(document).trigger(this.eventConsts.ON_EMPLOYEE_ADDED, [employee, this]);
}

SoftUni.Employee.Service.Abstract.prototype.onEmployeeAddError = function () {

}
