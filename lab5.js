class Person {
  constructor(fullName, money, sleepMode, healthRate) {
    this.fullName = fullName;
    this.money = money;
    this.sleepMode = sleepMode;
    this.healthRate = healthRate;
  }

  #healthRate;
  get healthRate() {
    return this.#healthRate;
  }

  set healthRate(healthRate) {
    this.#healthRate = healthRate;
    if (healthRate < 0 && healthRate > 100)
      return alert("Unavailable healthRate");
  }

  sleep(hours) {
    if (hours == 7) {
      return (this.sleepMode = "Happy");
    } else if (hours < 7) {
      return (this.sleepMode = "Tired");
    } else {
      return (this.sleepMode = "Lazy");
    }
  }

  eat(meals) {
    switch (meals) {
      case 3:
        return (this.healthRate = "100 %");
        break;
      case 2:
        return (this.healthRate = "75 %");
        break;
      case 1:
        return (this.healthRate = "50 %");
        break;
      default:
        return (this.healthRate = "you should eat 3,2 or 1 meals");
    }
  }

  buy(items) {
    return (this.money -= items * 10);
  }
} // end of Person class

class Employee extends Person {
  constructor(fullName, email, salary, isManager, workMood) {
    super(fullName);
    this.email = email;
    this.#salary = salary;
    this.isManager = isManager;
    this.workMood = "Happy";
  }
  #salary;
  get salary() {
    return this.#salary;
  }

  set salary(salary) {
    this.#salary = salary;
    if (salary < 1000) return alert("Unavailable Salary");
  }

  work(hours) {
    if (hours == 8) {
      this.workMood = "Happy";
    } else if (hours > 8) {
      this.workMood = "Tired";
    } else {
      this.workMood = "Lazy";
    }
    return alert(this.workMood);;
  }


} // end of Employee class

class Office {
  constructor(name, employees) {
    this.name = name;
    this.employees = employees;
  }
  
  getEmployee(email) {
    let result;
    if(allEmployees.length == 0){
      result = "Sorry we don't have any employee yet";
    }else {
      for(const emp of allEmployees){
        if(email == emp.email){
          emp.isManager == true ? emp.salary= "*****" : emp.salary;
          result = emp;
        }else {
          result = "sorry we don't have an employee with this email";
        }
      }
    }
    return result;
  } // get an employee by email


  getAllEmployees() {
    let result;
    if (allEmployees.length == 0) {
      result = "sorry we don't have employees yet";
    } else {
      result = allEmployees;
    }
    return result;
  } // get all employees


  hire() {
    let fullName = prompt("Full Name");
    let email = prompt("Email");
    let salary = parseInt(prompt("Salary"));
    let isManager = prompt("Is Manager? yes or no");
    isManager == "yes" ? true : false;
    let newEmployee = new Employee(fullName, email, salary, isManager);
    allEmployees.push(newEmployee);
    return "Employee hired Successfully!";
  } // hire new employee

  fire(email) {
    let result;
    let beforeFire = allEmployees;
    // console.log(beforeFire);
    const employee = this.getEmployee(email);
    allEmployees = allEmployees.filter((data) => data.email != employee.email);
    if(beforeFire.length == allEmployees.length){
      result = "sorry can't find this employee";
    } // error
    else {
      result = allEmployees;
    }

    return result;
  } // fire an employee
  
} // end of Office class






// Dashboard Control System App
alert("Welcome!");
var allEmployees = [
  new Employee("Tarek Khalifa","tarek@manager.com",5000,true,"Happy"),
]; // default value

let input;
while (input != "q") {
  input = prompt("add, get , get all, fire, or more");
  const office = new Office(); // instance of Office class
  switch (input) {
    case "add":
      let addNewEmp = office.hire();
      alert(addNewEmp);
      break;

    case "get":
      let getEmp = office.getEmployee(prompt("enter email"));
      if(typeof getEmp == "object"){
        document.write(
          `<div>
              <h3>Name: ${getEmp.fullName}</h3>
              <h3>Email: ${getEmp.email}</h3>
              <h3>Salary: ${getEmp.salary}</h3>
              <h3>Manager?: ${getEmp.isManager == true ? "Yes" : "No"}</h3>
              <h3>Work Mood: ${getEmp.workMood ? getEmp.workMood : "Unavailable"}</h3>
          </div>`
        );
        
      }else {
        alert(getEmp);
      }
      break;

    case "get all":
      let getAllEmp = office.getAllEmployees()
      if(typeof getAllEmp == "object"){
        alert(`We have ${getAllEmp.length} employee`)
        alert("You can see all employees information in the console");
        console.log(getAllEmp);
      }else {
        alert(getAllEmp);
      }
      break;

    case "fire":
      let fireEmp = office.fire(prompt("enter emlpoyee email"));
      if(typeof fireEmp == "object"){
        alert("Success! an employee fired!");
      }else {
        alert(fireEmp);
      }
      break;

      case "more":
          let answ = confirm("Do you want to know your work mood?");
          if(answ){
            office.getEmployee()
            let workMood = new Employee();
              workMood.work(prompt("How many hours work?")); 

          }
          break;

    default:
      alert("Please try again");
      input = prompt("you can enter q for quit");
  }
} // end of while loop
