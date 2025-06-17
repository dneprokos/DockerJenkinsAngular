import { Component, OnInit } from '@angular/core';
import { GlobalEventsManagerService } from 'src/app/_services/global-events-manager.service';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  isComponentShown: boolean = false;

  createdYear: Date = new Date(2019, 8, 6);
  yearNow: Date = new Date();
  email: string = 'dneprokos@gmail.com';
  skype: string = 'dneprokos';
  github: string = 'https://github.com/dneprokos';
  githubtext: string = 'dneprokos';
  linkedin: string = 'https://www.linkedin.com/in/kostiantyn-teltov/';
  linkedintext: string = 'Kostiantyn Teltov';
  
  constructor(private globalEventsManager: GlobalEventsManagerService) {
    this.globalEventsManager.showNavBarEmitter.subscribe((mode: boolean) => {           
      this.isComponentShown = mode;
    });
  }

  ngOnInit(): void {
  }
}
