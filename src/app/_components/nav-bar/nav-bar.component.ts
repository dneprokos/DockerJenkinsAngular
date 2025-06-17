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
  isComponentShown: boolean = false;
  userName: string = '';

  constructor(
    private globalEventsManager: GlobalEventsManagerService,
    private router: Router,
    private authService: AuthServiceService
  ) {
    this.globalEventsManager.showNavBarEmitter.subscribe((mode: boolean) => {           
      this.isComponentShown = mode;
    });
    
    globalEventsManager.showUserNameEmitter.subscribe((mode: boolean) => {
      if (mode) {
        const currentUser = this.authService.getCurrentUser();
        this.userName = currentUser || '';
      }
    });
  }

  ngOnInit(): void {
    this.globalEventsManager.showNavBar(true);
    const currentUser = this.authService.getCurrentUser();
    this.userName = currentUser || '';
  }

  SignOut(): void {
    this.performSignOut();
  }

  private performSignOut(): void {
    this.router.navigate(['login']);
    this.globalEventsManager.showNavBar(false);
    this.authService.logout();
    this.userName = '';
  }
}
