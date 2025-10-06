import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModalComponent } from '../../../components/common-modal/common-modal.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

@Component({
  selector: 'app-employee-data',
  imports: [
    CommonModalComponent,
    AddEmployeeComponent
  ],
  templateUrl: './employee-data.component.html',
  styleUrl: './employee-data.component.css'
})

export class EmployeeDataComponent {

  showEmployeeModal = false;

  openAddModal() {
    this.showEmployeeModal = true;
    console.log('Add Employee Modal opened');
  }

  saveEmployee() {
    console.log('Saving employee...');
    // you can access AddEmployeeComponent data later using @ViewChild
    this.showEmployeeModal = false;
  }
}
