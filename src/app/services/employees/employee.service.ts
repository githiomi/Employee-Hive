import { Injectable } from '@angular/core';
// The mock employee data
import { Employees } from '../../Mock-Data';
// Import the employee interface
import { Employee } from '../../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  // Method that will return the list of employees
  getEmployees(): Employee[] {
    return Employees;
  }
  
}
