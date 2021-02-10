let employeeDetails = [
  {Name: "Vibhor", Age: 23, Salary: 15000, DOB: "29 Jul 1997"},
  {Name: "Rohan", Age: 23, Salary: 8000, DOB: "30 Dec 1997"},
  {Name: "Adit", Age: 23, Salary: 3000, DOB: "31 Jul 1997"},
  {Name: "Kritka", Age: 22, Salary: 900, DOB: "1 Apr 1998"},
  {Name: "Radhika", Age: 21, Salary: 800, DOB: "20 Jun 1999"},
  {Name: "Sahil", Age: 19, Salary: 700, DOB: "13 Aug 2001"},
];

// filter all employees with salary greater than 5000
employeeDetails.forEach((emp) => (emp.Salary > 5000) ? console.log(emp) : null);

// group employee on the basis of their age
let groupByAge = {};

for(let emp of employeeDetails) {
  if(!groupByAge[emp.Age]) {
    groupByAge[emp.Age] = [];
  }
  groupByAge[emp.Age].push(emp);
}
console.log(groupByAge);

// fetch employees with salary less than 1000 and age greater than 20. Then give them an increment 5 times their salary.
employeeDetails.forEach((emp) => {
  if (emp.Salary < 1000 && emp.Age > 20) {
    console.log(`${emp.Name} Salary Before increment: ${emp.Salary}`);
    emp.Salary *= 5;
    console.log(`${emp.Name} Salary After increment: ${emp.Salary}`);
  }
});
