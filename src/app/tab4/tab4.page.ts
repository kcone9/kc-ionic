import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http"
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private http:HttpClient) { }
  card=[]
  hot=[]
  rank=[]
  ngOnInit() {
    this.http.get("http://127.0.0.1:5050/ionic/lapp?list=3").subscribe((res:any)=>{
      this.card=res
    })
    this.http.get("http://127.0.0.1:5050/ionic/rec?list=5").subscribe((res:any)=>{
      var row=res.a1
      for(var r of row){
        r.bar=""
        r.ba=true
      }
      for(var i=0;i<row.length;i++){
        if(i==4){
          row[i].ba=false
          row[i].bar="有礼"
        }else if(i==5){
          row[i].ba=false
          row[i].bar="热门"
        }else if(i==12){
          row[i].ba=false
          row[i].bar="高端"
        }else if(i==6 || i==10){
          row[i].ba=false
          row[i].bar="易下"
        }
      }
      this.hot=row
    })
    this.http.get("http://127.0.0.1:5050/ionic/rec?list=6").subscribe((res:any)=>{
      var row=res.a1
      for(var r of row){
        r.no=true
        r.hr=false
        r.id=""
      }
      for(var i=0;i<row.length;i++){
        if(i==0 || i==1 || i==2){
          row[i].no=false
          row[i].id=i
        }else {
          row[i].id="0"+(i+1)
        }
        if(i==5){
          row[i].hr=true
        }
      }
      this.rank=row
      console.log(this.rank)
    })
  }
}
