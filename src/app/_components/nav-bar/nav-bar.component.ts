import { Component, OnInit } from '@angular/core';
import { GlobalEventsManagerService } from 'src/app/_services/global-events-manager.service';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/_services/authService/auth-service.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isComponentShown: boolean;
  userName: string;

  constructor(private globalEventsManager: GlobalEventsManagerService, private router: Router, private authService: AuthServiceService) {
    this.globalEventsManager.showNavBarEmitter.subscribe((mode)=>{           
      this.isComponentShown = mode;
    });
    globalEventsManager.showUserNameEmitter.subscribe((mode)=>{
      if (mode) this.userName = this.authService.getCurrentUser();
    })
    
   }

  ngOnInit() {
    this.globalEventsManager.showNavBar(true);
    this.userName = this.authService.getCurrentUser();
  }

  SignOut() {
    this.performSignOut();
  }

  private performSignOut(){
    this.router.navigate(['login']);
    this.globalEventsManager.showNavBar(false);
    this.authService.logout();
    this.userName = undefined;
  }

}
