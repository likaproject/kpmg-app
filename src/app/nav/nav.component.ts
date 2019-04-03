import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {

  URL: string = "";

  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      if(location.path() != ''){
        this.URL = location.path();
      } else {
        this.URL = '/users'
      }
    });
  }

    ngOnInit() {

    }
 
    isThisPage() {
      console.log(this.URL == '/users');
      return this.URL == '/users';
    }

}
