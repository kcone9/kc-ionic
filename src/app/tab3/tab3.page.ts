import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http"
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(private http:HttpClient){}
  lapp=[]
  ngOnInit(){
    this.http.get("http://127.0.0.1:5050/ionic/lapp?list=1").subscribe((res:any)=>{
      var row=res;
      for(var r of row){
        r.act=false
        r.font=false
      }
      row.push({src: "", title: "更多产品", pro: "敬请期待",act:true,font:true})
      console.log(row)
      this.lapp=row
    })
  }
}
