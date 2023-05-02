import { Component, Input } from '@angular/core';
// Import the UI service to keep track of the showForm state
import { UiService } from 'src/app/services/ui/ui.service';
// Import subscriotion to consume the service subject
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  // Component properties
  showAddEmployeeForm!: boolean;
  subscription!: Subscription;

  @Input() appTitle:string = 'Employee Tracker';

  // Constructor to init the service
  constructor(
    private uiService:UiService
  ){}

  // Function called when the add employee btn is clicked
  toggleAddEmployeeForm() {

    this.uiService.toggleShowForm();

  }

}