import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-buttons',
  templateUrl: './radio-buttons.component.html',
  styleUrls: ['./radio-buttons.component.css']
})
export class RadioButtonsComponent implements OnInit {
  favoriteSeason: string = '';
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  constructor() { }

  ngOnInit(): void {}
}
