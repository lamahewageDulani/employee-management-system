import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})

export class AddEmployeeComponent implements OnInit {

  employeeForum!: FormGroup;

  constructor (private fb: FormBuilder) { }

  ngOnInit(): void {
    this.employeeForum = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['',[Validators.email , Validators.maxLength(50)]],
      contactNo: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
      city: ['', [Validators.maxLength(50)]],
      address: ['', [Validators.maxLength(50)]]
    });
  }

  // convenience getter for easy access
  get f() {
    return this.employeeForum.controls;
  }

  get isFormValid(): boolean {
    return this.employeeForum.valid;
  }

  getFormData() {
    return this.employeeForum.value;
  }

  onSubmit(){

  }

}
