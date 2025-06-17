import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-fields',
  templateUrl: './input-fields.component.html',
  styleUrls: ['./input-fields.component.css']
})
export class InputFieldsComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  primaryProgrammingLanguage: string = '';
  otherProgrammingLenguages: string = '';
  yearsExperience: string = '';
  city: string = '';
  shortResume: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  print(): void {
    this.shortResume = '';
    console.log(this.firstName);
    console.log(this.lastName);

    this.shortResume = `
      Here is a short Candidate resume:
      \tFirst Name: ${this.firstName}
      \tLast Name: ${this.lastName}
      \tPrimary programming language: ${this.primaryProgrammingLanguage}
      \tOther programming languages: ${this.otherProgrammingLenguages}
      \tTotal years of experience in QA area: ${this.yearsExperience}
      \tLiving in: ${this.city}  
    `;
  }
}
