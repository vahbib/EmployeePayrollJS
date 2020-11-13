console.log("Welcome to employee payroll programming");
class EmployeePayroll {
    
    startDate;

    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }
    get id() { return this._id};
    set id(id) {
        let idRegex = RegExp("^[1-9]{1,}$");
        if (idRegex.test(id)) {
            this._id = id;
        } else throw "Id is Incorrect"
    }
    get name() { return this._name};
    set name(name){
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(nameRegex.test(name)) {
            this._name = name;
        } else throw "Name is incorrect"
    }
    get salary() { return this._salary};
    set salary(salary) {
        let salaryRegex = RegExp("^[1-9]{1,}$");
        if(salaryRegex.test(salary)) {
            this._salary = salary;
        } else throw "Salary is Incorrect"
    }
    get gender() { return this._gender};
    set gender(gender) {
        let genderRegex = RegExp("^M$|^F$");
        if(genderRegex.test(gender)) {
            this._gender = gender;
        } else throw "gender is incorrect"
    }
    toString() {
        const options = {year: "numeric", month: "long", day: "numeric"}
        const empDate = !this.startDate ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "Id: " +this.id+" | Name: "+this.name+" | Salary: "+this.salary+
                        " | Gender: "+this.gender+" | Date: "+ empDate;
    }
}
try {
    let employeePayroll1 = new EmployeePayroll(1,"Bibhav", 100000, "Q", new Date());
    console.log(employeePayroll1.toString());
    let employeePayroll2 = new EmployeePayroll(2,"Su", 100000, "M", new Date());
    console.log(employeePayroll2.toString());
} catch (e) {
    console.log("Something Went Wrong")
}