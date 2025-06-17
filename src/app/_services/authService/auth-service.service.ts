import { Injectable } from '@angular/core';
import { Credentials } from 'src/app/_interfaces/credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private readonly expectedCredentials: Credentials = { userName: 'test@test.com', password: 'test' };

  constructor() { }

  login(userName: string, password: string): boolean {
    console.log(userName, password);

    if (userName.toLowerCase() === this.expectedCredentials.userName &&
        password === this.expectedCredentials.password) {
      sessionStorage.setItem('user', 'admin');
      return true;
    }
    return false;
  }

  logout(): void {
    sessionStorage.removeItem('user');
  }

  isUserLogged(): boolean {
    const userName = this.getCurrentUser();
    return userName === 'admin';
  }

  getCurrentUser(): string | null {
    return sessionStorage.getItem('user');
  }
}
