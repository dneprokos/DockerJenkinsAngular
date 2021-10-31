import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-toggles',
  templateUrl: './toggles.component.html',
  styleUrls: ['./toggles.component.css']
})
export class TogglesComponent implements OnInit {
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  constructor() { }

  ngOnInit() {
  }

}
