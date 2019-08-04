import { Injectable } from '@angular/core';
import { Credentials } from 'src/app/_interfaces/credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  expectedCredentials: Credentials = { userName: 'test@test.com', password: 'test' };

  constructor() { }

  login(userName: string, password: string): Boolean {
    console.log(userName, password);


    if (userName.toLocaleLowerCase() === this.expectedCredentials.userName &&
     password === this.expectedCredentials.password) {
      sessionStorage.setItem('user', 'admin');
      return true
    }
    else return false;
  }

  logout(){
    sessionStorage.removeItem('user');
  }

  isUserLogged(): Boolean{
    let userName = sessionStorage.getItem('user'); 
    
    if (userName && userName === 'admin') return true;    
    return false;
  }
}
