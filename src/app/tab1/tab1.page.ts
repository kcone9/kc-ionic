import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {NavController} from "@ionic/angular"
import {Router} from "@angular/router"
// import { runInThisContext } from 'vm';
import {IndexPage} from "../index/index.page"
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private http:HttpClient,public navCtrl:NavController,private router:Router){}
  user="kcone"
  scroll = []
   h:any="2"
   m:any="0";
   s:any="0"
  time=null
  car=[]
  cars=[]
  carall=[]
  search(e){
    this.router.navigate(["/index"])
  }
  back(i){
    for(var r of this.car){
      r.back=false
    }
    var row=[]
    for(var r of this.carall){
      if(r.cid==(i+1)){
        row.push(r)
      }
    }
    this.cars=row
    this.car[i].back=true
  }
  ngOnInit(){
    this.http.get("http://127.0.0.1:5050/ionic/scroll").subscribe((res:any)=>{
      var row=res.reg
    for(var i of row){
      i.more=false
    }
    row.push({price:"MORE",offer:"查看更多",more:true})
    this.scroll=row
    })
    this.http.get("http://127.0.0.1:5050/ionic/rec?list=12").subscribe((res:any)=>{
      for(var r of res.a){
        r.back=false
      }
      res.a[0].back=true
      this.car=res.a
      this.carall=res.s
      var row=[]
      for(var r of res.s){
        if(r.cid==1){
          row.push(r)
        }
      }
      this.cars=row;
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
