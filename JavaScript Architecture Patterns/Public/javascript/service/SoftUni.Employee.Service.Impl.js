/*
* @Employee Service Object Implementation 
*/
var SoftUni = SoftUni || {};
SoftUni.Employee = SoftUni.Employee || {};
SoftUni.Employee.Service = SoftUni.Employee.Service || {};

/*
   @Object constructor
*/
SoftUni.Employee.Service.Impl = function () {
    SoftUni.Employee.Service.Impl.base.constructor.apply(this, arguments);
}

extend(SoftUni.Employee.Service.Impl, SoftUni.Employee.Service.Abstract);

SoftUni.Employee.Service.Impl.prototype.setStorage = function (storage) {
    this.storage = storage;
},

/*
   @public, override
*/
SoftUni.Employee.Service.Impl.prototype.addEmployee = function (employee) {
    var jsonObj = JSON.stringify(employee);

    var result = this.storage.add(employee);

    if (result) {
        this.onEmployeeAdded(employee);
    } else {
        this.onEmployeeAddError();
    }
}

/*
    @abstract
*/
SoftUni.Employee.Service.Impl.prototype.updateEmployee = function () {
    throw "Unimplemented abstract method call!";
}

/*
    @abstract
*/
SoftUni.Employee.Service.Impl.prototype.removeEmployee = function () {
    throw "Unimplemented abstract method call!";
}

/*
   @abstract
*/
SoftUni.Employee.Service.Impl.prototype.getEmployee = function () {
    throw "Unimplemented abstract method call!";
}

/*
   @abstract
*/
SoftUni.Employee.Service.Impl.prototype.getAllEmployees = function () {
    throw "Unimplemented abstract method call!";
}
