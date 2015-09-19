/*
* @Employee Presenter Abstract Object
*/

var SoftUni = SoftUni || {};
SoftUni.Employee = SoftUni.Employee || {};
SoftUni.Employee.Presenter = SoftUni.Employee.Presenter || {};

/*
   @Object constructor
*/
SoftUni.Employee.Presenter.Abstract = function () {
    var that = this;
    this.eventConsts = new SoftUni.Constants.Events();

    $(document).on(this.eventConsts.ON_EMPLOYEE_ADDED, function (event, employee) {
        that.onEmployeeAdded(employee);
    });
}

SoftUni.Employee.Presenter.Abstract.prototype.addEmployee = function (employee) {
    $(document).trigger(this.eventConsts.ADD_EMPLOYEE, [employee, this]);
};