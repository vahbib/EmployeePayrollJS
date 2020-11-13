console.log("Welcome to employee payroll programming");
class EmployeePayroll {
    id;
    salary;
    gender;
    startDate;

    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    get name() { return this._name};
    set name(name){
            this._name = name;
    }
    toString() {
        const options = {year: "numeric", month: "long", day: "numeric"}
        const empDate = !this.startDate ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "Id: " +this.id+" | Name: "+this.name+" | Salary: "+this.salary+
                        " | Gender: "+this.gender+" | Date: "+ empDate;
    }
}
let employeePayroll = new EmployeePayroll(1,"Bibhav", 100000, "M", new Date());
console.log(employeePayroll.toString());