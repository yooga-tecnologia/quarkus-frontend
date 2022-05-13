import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-buttons',
  templateUrl: './nav-buttons.component.html',
  styleUrls: ['./nav-buttons.component.scss'],
})
export class NavButtonsComponent implements OnInit {
  constructor(public router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {}

  vendasPendetes() {
    this.router.navigateByUrl('page/salesList');
  }

  roboClients(){
    this.router.navigateByUrl('page/roboClients');
  }
}
