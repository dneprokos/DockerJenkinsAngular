import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/_services/authService/auth-service.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private router: Router, private authService: AuthServiceService) { }

  ngOnInit() {
  }

  login() : void {
    let result = this.authService.login(this.username, this.password);
    
    if (result){   
      this.router.navigate(['home']);
    }      
    else alert("Invalid credentials");
  }

}
