import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http"
// import { runInThisContext } from 'vm';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private http:HttpClient){}
  user="kcone"
  scroll1 = []
   h:any="2"
   m:any="0";
   s:any="0"
  time=null
  ngOnInit(){
    this.http.get("http://127.0.0.1:5050/ionic/scroll1").subscribe((res:any)=>{
      var row=res.reg
    for(var i of row){
      i.more=false
    }
    row.push({price:"MORE",offer:"查看更多",more:true})
    this.scroll1=row
    })
    this.time=setInterval(()=>{
      this.s=parseInt(this.s)
      this.m=parseInt(this.m)
      this.h=parseInt(this.h)
      this.s=this.s-1
      if(this.s<1){
        this.s=59
        if(this.m>0 || this.h>0){
          this.m=this.m-1
          if(this.m<1){
            this.m=59
            this.h=this.h-1
            if(this.h<1){
              clearInterval(this.h)
              this.time=null
              this.s=this.m=this.s=0
            }
          }
        }else{
          clearInterval(this.h)
          this.time=null
          this.s=this.m=this.s=0
        }
      }
      if(this.s<10){
        this.s="0"+this.s
      }
      if(this.m<10){
        this.m="0"+this.m
      }
      if(this.h<10){
        this.h="0"+this.h
      }
    },1000)
  }
  mo=true
}
