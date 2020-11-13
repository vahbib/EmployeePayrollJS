console.log("Welcome to employee payroll programming");
class EmployeePayroll {
    id;
    salary;

    constructor(id , name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }


    get name() { return this._name};
    set name(name){
        this._name = name;
    }
    toString() {
        return "Id: " +this.id+" | Name: "+this.name+" | Salary: "+this.salary;
    }
}
let employeePayroll = new EmployeePayroll(1,"Bibhav", 100000);
console.log(employeePayroll.toString());