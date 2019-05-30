import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http"
@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  constructor(private http:HttpClient) { }
  record=[]
  his=[]
  back(){
    history.back()
  }
  ngOnInit() {
    this.http.get("http://127.0.0.1:5050/ionic/rec?list=10").subscribe((res:any)=>{
      var row=[]
      for(var r of res){
        row.push({title:r})
      }
      for(var i=0;i<res.length;i++){
        if(i==res.length){
          row[i].red=true
        }else{
          row[i].red=false
        }
      }
      this.record=row
    })
    this.http.get("http://127.0.0.1:5050/ionic/rec?list=11").subscribe((res:any)=>{
      this.his=res
    })
  }
}
