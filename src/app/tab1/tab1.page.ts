import { Component } from '@angular/core';
// import {LoadingController} from "ionic-angular"
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  user="kcone"
  sli={
    speed:3000,
    initalSlide:6
  }
}
