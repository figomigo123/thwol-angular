import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';

import { navItems } from './_nav';
import { navItems2 } from './_nav2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent implements OnInit {

  public navItems = navItems;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor(public router: Router,
    public route: ActivatedRoute,
    public tokenStorage: TokenStorageService) {


  }
  userType = "";

  ngOnInit(): void {
    let roles = this.tokenStorage.getUser().roles;

    if (roles.indexOf("ROLE_ADMIN") > -1) {
      this.navItems = navItems; this.userType = "Admin";
    }
    else if (roles.indexOf("ROLE_PROFESSOR") > -1) {
      this.navItems = navItems2; this.userType = "Professor";
    }

  }





}
