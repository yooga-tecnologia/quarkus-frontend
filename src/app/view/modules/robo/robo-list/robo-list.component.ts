import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoboService } from '../robo.service';
import { ClipboardService } from 'ngx-clipboard';
import { Robo } from 'src/app/model/Robo';


@Component({
  selector: 'app-robo-list',
  templateUrl: './robo-list.component.html',
  styleUrls: ['./robo-list.component.scss']
})
export class RoboListComponent implements OnInit {

  roboList: Robo[];
  key: string = 'nome';
  reverse: boolean = false;
  isClicked: boolean = false;
  filter:any

  constructor(private roboService: RoboService,
    private router: Router,
    private clipboard: ClipboardService) { }

  async ngOnInit() {
    await this.loadRoboList();
  }

  async loadRoboList(){
    this.roboList = await this.roboService.listAllRoboClients();
  }

  sort(key:any) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
