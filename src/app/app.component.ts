import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isEmpty = true;

  public isEmptyFalse(){
    this.isEmpty = false;
  }


}
