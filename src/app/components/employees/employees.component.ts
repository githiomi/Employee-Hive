import { Component } from '@angular/core';
// The mock employee data
import { Employees } from 'src/app/Mock-Data';
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
  employees: Employee[] = Employees;  

}
