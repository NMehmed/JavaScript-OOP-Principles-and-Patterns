$(document).ready(function () {
    var employeeView = new SoftUni.Employee.View();
    var presenter = new SoftUni.Employee.Presenter.Impl(employeeView);
    var service = new SoftUni.Employee.Service.Abstract();

    presenter.init();
});