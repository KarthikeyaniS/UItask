import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  book = false;

  books = [
    {
      'bookid': 101,
      'bookstatus': 'Available',
      'name': 'after',
      'year': 2000,
      'description': 'lorem ipsum'
    },
    {
      'bookid': 101,
      'bookstatus': 'Available',
      'name': 'after',
      'year': 2000,
      'description': 'lorem ipsum'
    },
    {
      'bookid': 101,
      'bookstatus': ' Not Available',
      'name': 'after',
      'year': 2000,
      'description': 'lorem ipsum'
    }, 


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
