import { Component, OnInit } from '@angular/core';
// Import the servie that holds the employee data
import { EmployeeService } from '../../services/employees/employee.service';
// The employee interface
import { Employee } from 'src/app/models/Employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

// This is the main employee component
export class EmployeesComponent {

  // Variable to hold the list of employees
  employees: Employee[] = [];  // Init it into an empty array

  // Constructor
  // Servies are added as parameters to the constructor
  constructor(private EmployeeService: EmployeeService) {
    // This is where we define services
  }

  // On initialization
  ngOnInit() : void {
    // We initialize services here
    // Here we can initialize the employee service
    // this.employees = this.EmployeeService.getEmployees();

    // We deal with observables by subscribing to it
    this.EmployeeService.getEmployees().subscribe(
      employees => {
        this.employees = employees;
      }
    );
  }

}
