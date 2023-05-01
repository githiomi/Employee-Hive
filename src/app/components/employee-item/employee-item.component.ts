import { Component, Input } from '@angular/core';
// Impport the employee interface
import { Employee } from 'src/app/models/Employee';

// Import font awesome icons
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.css']
})

// The component to handle logic for each single employee
export class EmployeeItemComponent {

  // Init font awesome icons
  faTimes = faTimes;

  textColor: string = 'steelblue';
  @Input() employee!: Employee;

}
