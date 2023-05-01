import { Component, Input } from '@angular/core';
// Impport the employee interface
import { Employee } from 'src/app/models/Employee';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.css']
})

// The component to handle logic for each single employee
export class EmployeeItemComponent {

  @Input() employee!: Employee;

}
