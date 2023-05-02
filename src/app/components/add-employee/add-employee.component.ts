import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  // Form input variables
  employeeName!: string;
  employeeAge!: number;
  employeeGender!: string;
  employeeEmail!: string;
  employeePosition!: string;
  isPaid: boolean = false;




}
