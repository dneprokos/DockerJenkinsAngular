import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalEventsManagerService {
  private _showNavBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public showNavBarEmitter: Observable<boolean> = this._showNavBar.asObservable();

  private _showUserName: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public showUserNameEmitter: Observable<boolean> = this._showUserName.asObservable(); 

  constructor() { }

  showNavBar(ifShow: boolean) {
    this._showNavBar.next(ifShow);
  }

  updateUserName(isUserUpdate: boolean) {
    this._showUserName.next(isUserUpdate);
  }
}
