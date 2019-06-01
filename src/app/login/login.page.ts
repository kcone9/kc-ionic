import { Component, OnInit } from '@angular/core';
import {ToastController} from "@ionic/angular"
import {HttpClient,HttpHeaders} from "@angular/common/http"
import {Router} from "@angular/router"
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private toast:ToastController,private http:HttpClient,private router:Router) { }
  user="登录分期乐"
  swit=true
  phone=""
  btn="登录"
  ver="输入8位数字和字母"
  footer="没有账号？极速注册"
  name=""
  pass=""
  switch(){
    this.swit=!this.swit
    if(this.swit==true){
      this.user="登录分期乐"
      this.phone=""
      this.btn="登录"
      this.ver="输入8位数字和字母"
      this.footer="没有账号？极速注册"
    }else{
      this.user="注册分期乐账号"
      this.phone="获取验证码"
      this.btn="下一步"
      this.ver="6位数字验证码"
      this.footer="已有账号？立即登录"
    }
  }
  username(e:any){
    this.name=e.target.value
  }
  password(e:any){
    this.pass=e.target.value
  }
  confirm(e:any){
    if(this.swit==true){
      if(this.name!="" || this.pass!=""){
        console.log(this.name,this.pass)
        const httpOptions={
          headers:new HttpHeaders({
            "Content-Type":"application/x-www-form-urlencoded"
          }),
          withCredentials:true 
        }
        this.http.post("http://127.0.0.1:5050/user/login",`name=${this.name}&pass=${this.pass}`,httpOptions).subscribe((res:any)=>{
          console.log(res)
          if(res.code==1){
            this.toasts("登录成功")
            setTimeout(()=>{
              this.router.navigate([""])
            },1500)
          }else{
            this.toasts("登录失败,用户名或密码错误")
          }
        })
      }else{
        this.toasts("用户名或密码为空")
      }
    }else{
      this.toasts("短信注册处于研究阶段，敬请期待")
    }
  }
  async toasts(e){ //async 是异步函数
    var toast =await this.toast.create({
      message:e, 
      duration:1500,
      position:"top",  
    });
    toast.present();
  }
  ngOnInit() {

  }
}
