import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http"
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private http:HttpClient){}
  user="kcone"
  scroll1 = []
  ngOnInit(){
    this.http.get("http://127.0.0.1:5050/ionic/scroll1").subscribe((res:any)=>{
      var row=res.reg
    for(var i of row){
      i.more=false
    }
    row.push({price:"MORE",offer:"查看更多",more:true})
    // var n=parseInt(row.length)-1
    // row[n].more=true
    // console.log(row)
    this.scroll1=row
    })
  }
  mo=true
}
