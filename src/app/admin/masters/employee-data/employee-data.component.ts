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

  @ViewChild(AddEmployeeComponent) addEmployeeForm!: AddEmployeeComponent;
  showEmployeeModal = false;

  openAddModal() {
    this.showEmployeeModal = true;
    console.log('Add Employee Modal opened');
  }

  saveEmployee() {
    if (this.addEmployeeForm.isFormValid) {
      console.log('Saving employee...', this.addEmployeeForm.getFormData());
      this.showEmployeeModal = false;
    } else {
      console.log('Form is invalid. Please correct the errors.');
    }
  }
}
