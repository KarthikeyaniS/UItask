import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  EmployeeName= new FormControl(' ')
  updateEmployeeName(){
    this.EmployeeName.setValue('john')
  }
  employeeForm=new FormGroup({
    Name: new FormControl(' '),
    Designation: new FormControl(' '),
    
    Country: new FormControl(' '),
    City: new FormControl(' ')
  })
  onSubmit(){
    console.log(this.employeeForm.value)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
