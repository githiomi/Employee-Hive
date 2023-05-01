import { Injectable } from '@angular/core';
// Import the observable to subscribe to
import { Observable, of } from 'rxjs';
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
  // getEmployees(): Employee[] {
  //   return Employees;
  // }

  // The same method can be done using observables
  getEmployees() : Observable<Employee[]> {
    // To return the observable direclty
    return of(Employees);
    
  }

}
