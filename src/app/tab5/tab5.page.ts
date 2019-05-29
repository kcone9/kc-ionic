import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  constructor(private http: HttpClient) { }
  list = []
  six = []
  slide = {}
  ngOnInit() {
    this.http.get("http://127.0.0.1:5050/ionic/rec?list=7").subscribe((res: any) => {
      var row = res
      row[0].hr = false;
      row[1].hr = true
      this.list = row
    })
    this.http.get("http://127.0.0.1:5050/ionic/rec?list=8").subscribe((res: any) => {
      this.six = res
    })
    this.http.get("http://127.0.0.1:5050/ionic/rec?list=9").subscribe((res: any) => {
      var row = {list1:[],list2:[],list3:[],list4:[],list5:[],list6:[]};
      for(var i=0;i<res.length;i++){
        if(i>=0 && i<=2){
          row.list1.push(res[i])
        }
        if(i>=3 && i<=5){
          row.list2.push(res[i])
        }
        if(i>=6 && i<=8){
          row.list3.push(res[i])
        }
        if(i>=9 && i<=11){
          row.list4.push(res[i])
        }
        if(i>=12 && i<=14){
          row.list5.push(res[i])
        }
        if(i>=15 && i<=17){
          row.list6.push(res[i])
        }
      }
      console.log(row)
      this.slide = row
    })
  }

}
