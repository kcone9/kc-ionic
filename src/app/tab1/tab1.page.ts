import { Component, ViewChild } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {NavController} from "@ionic/angular"
import {Router} from "@angular/router"
import {IonInfiniteScroll} from "@ionic/angular"
import {IndexPage} from "../index/index.page"
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild(IonInfiniteScroll) infinitScroll:IonInfiniteScroll
  constructor(private http:HttpClient,public navCtrl:NavController,private router:Router){}
  user="kcone"
  scroll = []
   h:any="2"
   m:any="0";
   s:any="0"
  time=null
  text=[0,1,2,3,4,5,6,7,8,9,10]
  car=[]
  cars=[]
  carall=[]
  phone=[]
  phones=[]
  phoneall=[]
  more=[]
  page=1
  gift=[{src:"https://cimgs1.fenqile.com/ibanner2/M00/32/C4/jqgHAFw1nImAH2kHAAAvT0Uh_3Y719_164x248.jpg"},
  {src:"https://cimgs1.fenqile.com/ibanner2/M00/31/FB/jagHAFr6zluAb1M4AACD67G3dmU674_164x248.jpg"},
  {src:"https://cimgs1.fenqile.com/ibanner2/M00/01/30/j6gHAFw1nMGATszfAACXwveIJI0986_164x248.jpg"},
  {src:"https://cimgs1.fenqile.com/ibanner2/M00/32/C4/jqgHAFw1nMuAEJ8YAACWsmkLUOY880_164x248.jpg"}]
  gifts=[{src:"https://cimgs1.fenqile.com/ibanner2/M00/26/6C/jqgHAFq6CASAF8QIAAKgp1ky5F0058_280x280.jpg",title:"【夏季活力版】京东E卡（800元）",pro:"京东E卡，给家人、朋友最好的爱",date:"58.44",dates:"x18期",img:"//cres1.fenqile.cn/fenqile_m/img/channel/i_like_before--053b2e8bb0.png",liked:"940人喜欢",work:"已售40件"},
  {src:"https://cimgs1.fenqile.com/ibanner2/M00/00/55/jagHAFpEXk6ATsfCAAEi4OMZHTg294_280x280.jpg",title:"【甜蜜告白礼盒】T400天鹅施华洛锆石项链套装",pro:"百搭经典，送礼佳选",date:"14.22",dates:"x24期",img:"//cres1.fenqile.cn/fenqile_m/img/channel/i_like_before--053b2e8bb0.png",liked:"722人喜欢",work:"已售29件"}]
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
  backp(i){
    for(var r of this.phone){
        r.back=false
    }
    this.phone[i].back=true
    var row=[]
    for(var r of this.phoneall){
      if(r.pid==(i+1)){
        row.push(r)
      }
    }
    this.phones=row
  }
  loaddata(e){
    setTimeout(()=>{
      this.page=this.page+1
      this.http.get("http://127.0.0.1:5050/ionic/rec?list=14&page="+this.page).subscribe((res:any)=>{
        if(res!=[]){
          this.more=this.more.concat(res)
          e.target.complete()
        }else{
          e.target.disabled=true
        }
      })
    },1000)
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
    this.http.get("http://127.0.0.1:5050/ionic/rec?list=13").subscribe((res:any)=>{
      for(var r of res.a){
        r.back=false
        if(r.pid==1){
          r.back=true
        }
      }
      this.phone=res.a
      var row=[]
      for(var r of res.s){
        r.back=false
        
      }
      for(var r of res.s){
        if(r.pid==1){
          row.push(r)
        }
      }
      this.phoneall=res.s
      this.phones=row
    })
    this.http.get("http://127.0.0.1:5050/ionic/rec?list=14&page="+this.page).subscribe((res:any)=>{
      this.more=res
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
