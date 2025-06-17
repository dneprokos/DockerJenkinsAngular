import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './_services/authService/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'DockerJenkinsAngular';

  constructor(private authService: AuthServiceService, private router: Router) {}

  ngOnInit(): void {
    this.navigateUserToStartPage();
  }

  private navigateUserToStartPage(): void {
    const isUserLoggedIn: boolean = this.authService.isUserLogged();

    if (isUserLoggedIn) {
      this.router.navigate(['home']);
    } else {
      this.router.navigate(['login']);
    }
  }
}
