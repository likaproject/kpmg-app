import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {

  URL: string = "";

  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      if(location.path() != ''){
        this.URL = location.path();
      } else {
        this.URL = '/auth'
      }
    });
  }
  


  ngOnInit() {
  }

}
