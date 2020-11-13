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
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(nameRegex.test(name)) {
            this._name = name;
        } else throw "Name is incorrect"
    }
    toString() {
        const options = {year: "numeric", month: "long", day: "numeric"}
        const empDate = !this.startDate ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "Id: " +this.id+" | Name: "+this.name+" | Salary: "+this.salary+
                        " | Gender: "+this.gender+" | Date: "+ empDate;
    }
}
try {
    let employeePayroll1 = new EmployeePayroll(1,"Bibhav", 100000, "M", new Date());
    console.log(employeePayroll1.toString());
    let employeePayroll2 = new EmployeePayroll(2,"Su", 100000, "M", new Date());
    console.log(employeePayroll2.toString());
} catch (e) {
    console.log("Name is Incorrect");
}