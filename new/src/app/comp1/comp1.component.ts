import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  arr = ["wes","qwsdc"]
  stng = ""
  img=""
  value=" "

  name="devil"
  message="welcome to hell"
  date= new Date()
 public person={"fname":"devil", "lname":"kk"}


   varr=""
   clr=""
  up = false
  low=false
  perc=false
  curr=false
 slicee=false
 title=false

  constructor() { }

  ngOnInit(): void {
  }

storedata(){
this.arr.push(this.stng)
}
onclick(){
    console.log("hello");
    
}
upperCase(){
  this.up = !this.up
  
}
lowerCase(){
    this.low= !this.low
}
percentage(){
  this.perc= !this.perc
}
currency(){
  this.curr= !this.curr
}
titleCase(){
  this.title= !this.title
}
slice(){
  this.slicee= !this.slicee
}

}
