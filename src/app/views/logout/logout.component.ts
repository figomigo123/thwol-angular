import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../services/auth/token-storage.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit {

  constructor(public router: Router,
    public route: ActivatedRoute,
    public tokenStorageService: TokenStorageService) {


  }


  ngOnInit() {
    console.log("logout....");
    this.tokenStorageService.signOut();
    let l = (window.parent.location).replace("");
  }


}


