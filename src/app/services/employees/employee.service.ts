import { Injectable, OnInit } from '@angular/core';
// Import  the HTTP inbuilt client to make calls
import { HttpClient, HttpHeaders} from '@angular/common/http';
// Import the observable to subscribe to
import { Observable, of } from 'rxjs';
// The mock employee data
import { Employees } from '../../Mock-Data';
// Import the employee interface
import { Employee } from '../../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService implements OnInit{

  // Server must be running before this can work
  private employeeUrl:string = 'http://localhost:3000/employees';

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    
    // Initialize the http client

  }

  // Method that will return the list of employees
  // getEmployees(): Employee[] {
  //   return Employees;
  // }

  // The same method can be done using observables for local data
  // getEmployees() : Observable<Employee[]> {
  //   // To return the observable direclty
  //   return of(Employees);
    
  // To get the employee data using the http client
  getEmployees() : Observable<Employee[]> {

    // Use the http client to get data from the given url
    return this.httpClient.get<Employee[]>(this.employeeUrl);

  }

}
