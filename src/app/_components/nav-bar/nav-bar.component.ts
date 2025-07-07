import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { GlobalEventsManagerService } from "src/app/_services/global-events-manager.service";
import { Router } from "@angular/router";
import { AuthServiceService } from "src/app/_services/authService/auth-service.service";

interface NavLink {
  path: string;
  label: string;
  icon: string;
}

@Component({
  selector: "nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"],
})
export class NavBarComponent implements OnInit {
  @Input() isDrawer: boolean = false;
  @Input() drawerRef: any;
  @Output() closeDrawer = new EventEmitter<void>();

  isComponentShown: boolean = false;
  userName: string = "";

  navLinks: NavLink[] = [
    { path: "home", label: "Home", icon: "home" },
    { path: "check-box", label: "Check-boxes", icon: "check_circle" },
    { path: "input", label: "Input fields", icon: "text_fields" },
    { path: "drop-down", label: "Drop-downs", icon: "arrow_drop_down_circle" },
    {
      path: "radio-button",
      label: "Radio-buttons",
      icon: "radio_button_checked",
    },
    { path: "table", label: "Table", icon: "table_chart" },
    { path: "toggle", label: "Toggles", icon: "toggle_on" },
    { path: "date-picker", label: "Date pickers", icon: "date_range" },
    // Example for future extensibility:
    // { path: 'new-page', label: 'New Page', icon: 'add_circle' },
  ];

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
        this.userName = currentUser || "";
      }
    });
  }

  ngOnInit(): void {
    this.globalEventsManager.showNavBar(true);
    const currentUser = this.authService.getCurrentUser();
    this.userName = currentUser || "";
  }

  SignOut(): void {
    this.performSignOut();
    this.closeDrawer.emit();
  }

  onNavLinkClick(): void {
    if (this.isDrawer) {
      this.closeDrawer.emit();
    }
  }

  openDrawer(): void {
    if (this.drawerRef && this.drawerRef.toggle) {
      this.drawerRef.toggle();
    }
  }

  private performSignOut(): void {
    this.router.navigate(["login"]);
    this.globalEventsManager.showNavBar(false);
    this.authService.logout();
    this.userName = "";
  }
}
