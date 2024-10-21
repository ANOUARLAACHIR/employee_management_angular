import { Component } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {
  employees!: Employee[];

  constructor() {}
   
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.employees = [
      {
        "id": 1,
        "firstName": "Anouar",
        "lastName": "LAACHIR",
        "email": "anouar@gmail.com"
      }, 
      {
        "id": 2,
        "firstName": "Said",
        "lastName": "BAALI",
        "email": "said@gmail.com"
      }
    ]
  }
}
