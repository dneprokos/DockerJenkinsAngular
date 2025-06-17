import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/_services/authService/auth-service.service';
import { GlobalEventsManagerService } from 'src/app/_services/global-events-manager.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  showSpinner: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthServiceService,
    private globalEventsManager: GlobalEventsManagerService
  ) { }

  ngOnInit(): void {
    this.globalEventsManager.showNavBar(false);
  }

  login(): void {
    const result = this.authService.login(this.username, this.password);
    
    if (result) {
      this.globalEventsManager.showNavBar(true);   
      this.router.navigate(['home']);
      this.globalEventsManager.updateUserName(true);
    } else {
      alert("Invalid credentials");
    }
  }
}
