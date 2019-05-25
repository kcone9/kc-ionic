import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http"
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(private http: HttpClient) { }
  list = []
  list1=[]
  list2=[]
  list3=[]
  list4=[]
  power=[]
  swit(i){
    for(var r of this.power){
      r.sate=true
      r.change=false
    }
    this.power[i].sate=false
    this.power[i].change=true
  }
  ngOnInit() {
    this.power.push({sate:false,change:true})
    for(var i=1;i<20;i++){
      this.power.push({sate:true,change:false})
    }
    this.http.get("http://127.0.0.1:5050/ionic/nav").subscribe((res: any) => {
      var row=res
      for(var r of row){
        r.more=true
      }
      this.list = row
    })
    this.http.get("http://127.0.0.1:5050/ionic/rec?list=1").subscribe((res: any) => {
      this.list1=res
    })
    this.http.get("http://127.0.0.1:5050/ionic/rec?list=2").subscribe((res: any) => {
      this.list2=res
    })
    this.http.get("http://127.0.0.1:5050/ionic/rec?list=3").subscribe((res: any) => {
      this.list3=res
    })
    this.http.get("http://127.0.0.1:5050/ionic/rec?list=4").subscribe((res: any) => {
      this.list4=res
    })
  }
}
