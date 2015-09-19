/*
* @Employee Presenter Object Implementation
*/

var SoftUni = SoftUni || {};
SoftUni.Employee = SoftUni.Employee || {};
SoftUni.Employee.Presenter = SoftUni.Employee.Presenter || {};

/*
   @Object constructor
*/
SoftUni.Employee.Presenter.Impl = function (view) {
    SoftUni.Employee.Presenter.Impl.base.constructor.apply(this, arguments);

    this.view = view;
}

extend(SoftUni.Employee.Presenter.Impl, SoftUni.Employee.Presenter.Abstract);

SoftUni.Employee.Presenter.Impl.prototype.init = function () {
    this.bindEvents();
};

SoftUni.Employee.Presenter.Impl.prototype.bindEvents = function () {
    var that = this;
    var addbtn = this.view.getAddBtn();

    addbtn.click(function () {
        var employee = that.view.getEmployeeData();

        if (typeof employee !== "undefined" && typeof employee.firstName !== "undefined" && typeof employee.lastName !== "undefined") {
            that.addEmployee(employee);
        }

    });
}

SoftUni.Employee.Presenter.Impl.prototype.onEmployeeAdded = function (employee) {
    console.log(employee);
    this.view.addEmployeeToTable(employee);
}