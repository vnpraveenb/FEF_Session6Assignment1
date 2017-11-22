/* Input the basic salary of an employee and validate if the employee salary greater than equals to 15000 and working_hr daily more than 10 hours. Then add 10% bonus to its basic salary and display the basic salary with bonus. Else add 5% bonus to its basic salary and display the result in a div box.
 */

 // Creating an Object using Constructor Object Pattern 
var employee = new Object();
employee.username = "Johndoe";
employee.skills = "JavaScript Coding";
employee.basicSalary = parseFloat(prompt("Please input the Employee's Salary"));
employee.workHours =  parseFloat(prompt("Please input the Employee's work hours"));

// id is a string variable is used to target different id in the HTML document to change their innerHTML
var divId = "before";


// Printing the employee details in the div containing id="before"
document.getElementById(divId).innerHTML = " Printing the Employee details before changing the salary <hr> "+ "Username: " + employee.username +" <br>" + "Skills: " + employee.skills +" <br>" + "Employee Working Hours: "+ employee.workHours + "<br>" + "Employee's Salary is: " + employee.basicSalary + "<br>" 



// Changing the value of id to get access a different HTML element 
var divId = "after";

 //Calling changeSalary function by hoisting
changeSalary();
 
 // Function to change the basicSalary property of the employee object
function changeSalary(){
    
    /* 
     *If-else statement to check if (basicSalary > 15000) and (workHours > 10) and changing the Employee's salary  *based on whether the condition is true or false. And also printing the employee details with bonus on HTML   *page
    */
    if((employee.basicSalary > 15000) &&  (employee.workHours > 10))
    {
        var bonus = employee.basicSalary * (10/100); // Declaring a local variable to store the value of bonus
        employee.basicSalary = employee.basicSalary + bonus; // Changing the value of basicSalary by adding bonus

        // Printing the employee details in the div containing id="after". Also, the bonus is 10%
        document.getElementById(divId).innerHTML = "Printing the Employee details after changing the salary <hr> " + "Username: " + employee.username +" <br>" + "Skills: " + employee.skills +" <br>" + "Employee Working Hours: "+ employee.workHours + "<br>" + "The Employee's bonus is: " + bonus + " <br>"+"Employee's Salary is: " + employee.basicSalary + "<br>"
    }
    else
    {
        var bonus = employee.basicSalary * (5/100); // Declaring a local variable to store the value of bonus
        employee.basicSalary = employee.basicSalary + bonus; // Changing the value of basicSalary by adding bonus
        
        // Printing the employee details in the div containing id="after". Also, the bonus is 5%
        document.getElementById(divId).innerHTML = "Printing the Employee details after changing the salary <hr> " + "Username: " + employee.username +" <br>" + "Skills: " + employee.skills +" <br>" +  "Employee Working Hours: "+ employee.workHours + "<br>" + "Employee's bonus is: " + bonus + " <br>" +"Employee's Salary is: " + employee.basicSalary + "<br>"
    }
    
}

 