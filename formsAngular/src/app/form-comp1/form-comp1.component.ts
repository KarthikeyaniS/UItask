import { Component, OnInit } from '@angular/core';
'@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// @Component({
//   selector: 'app-form-comp1',
//   templateUrl: './form-comp1.component.html',
//   styleUrls: ['./form-comp1.component.css']
// })
// export class FormComp1Component  {
//   EmployeeName=new FormControl(' ');
//   updateEmployeeName(){
//     this.EmployeeName.setValue('John')
//   }
//   employeeForm=new FormGroup({
//     Name:new FormControl(' '),
//     Designation:new FormControl(' ')
//      })
//   submit(){
//     console.log(this.employeeForm.value);
//   }
// }

@Component({
  selector: 'app-form-comp1',
  templateUrl: './form-comp1.component.html',
  styleUrls: ['./form-comp1.component.css']
})
export class FormComp1Component implements OnInit {


   submit(login:any){
    console.log("form submited",login);
    
   }
  constructor() { }

  ngOnInit(): void {
  }

}
