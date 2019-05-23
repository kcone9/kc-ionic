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
  ngOnInit() {
    this.http.get("http://127.0.0.1:5050/ionic/nav").subscribe((res: any) => {
      console.log(res)
      this.list = res
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

  }
}
