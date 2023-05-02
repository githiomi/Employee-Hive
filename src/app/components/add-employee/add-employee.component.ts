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


  // Method called when the form is submitted (ngSubmit)
  submitForm(){

    // Form validation
    if (!this.employeeName || !this.employeeAge || !this.employeeGender || !this.employeeEmail || !this.employeePosition){
      alert("All fields are required");
      return;
    }

    // Check for gender
    if (this.employeeGender.trim().toLowerCase() !== "male" || this.employeeGender.trim().toLowerCase() !== "female"){
      alert("Gender must be male or female");
      return;
    }

    // If form is valid
    // Create a new employee


  }

}
