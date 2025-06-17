import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-drop-downs',
  templateUrl: './drop-downs.component.html',
  styleUrls: ['./drop-downs.component.css']
})
export class DropDownsComponent implements OnInit {
  selectedValue: string = '';
  selectedCar: string = '';

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  cars: Car[] = [
    {value: 'ford', viewValue: 'Ford'},
    {value: 'volvo', viewValue: 'Volvo'},
    {value: 'saab', viewValue: 'Saab'},
    {value: 'mercedes', viewValue: 'Mercedes'}
  ];

  constructor() { }

  ngOnInit(): void {
    this.selectedValue = this.foods[0].value;
    this.selectedCar = this.cars[0].value;
  }
}
