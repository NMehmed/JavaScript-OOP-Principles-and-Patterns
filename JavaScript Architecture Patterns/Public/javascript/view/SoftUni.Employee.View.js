/*
* @Employee Presenter Object Implementation
*/

var SoftUni = SoftUni || {};
SoftUni.Employee = SoftUni.Employee || {};

/*
   @Object constructor
*/
SoftUni.Employee.View = function () {

}

SoftUni.Employee.View.prototype = {
    employeeTD: "<tr>" +
                    "<td>{firstName}</td>" +
                    "<td>{lastName}</td>" +
                    "<td>{lazy}</td>" +
                 "</tr>",

    getTableBody: function () {
        return $("tbody");
    },

    getAddBtn: function () {
        return $("#addEmployee");
    },

    getEmployeeData: function () {
        var employee = {};

        employee.firstName = $("#firstName").val();
        employee.lastName = $("#lastName").val();
        employee.lazy = $("#lazy").val();

        return employee;
    },

    addEmployeeToTable: function (employee) {
        var tbody = this.getTableBody();

        var htmltoAdd = this.generateHTMLToAdd(this.employeeTD, employee);

        tbody.append(htmltoAdd);
    },

    generateHTMLToAdd: function (html, model) {
        for (var key in model) {
            html = html.replace("{" + key + "}", model[key]);
        }

        return html;
    }
}