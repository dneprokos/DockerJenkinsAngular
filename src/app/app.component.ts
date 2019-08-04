import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './_services/authService/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    this.navigateUserToStartPage();
  }

  constructor(private authService: AuthServiceService, private router: Router) {       
  }

  title = 'DockerJenkinsAngular';

  private navigateUserToStartPage(){
    let isUserLoggedIn = this.authService.isUserLogged()

    if (isUserLoggedIn) this.router.navigate(['home']);
    else this.router.navigate(['login']);
  }

}
