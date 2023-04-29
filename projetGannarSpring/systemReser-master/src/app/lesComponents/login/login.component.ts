import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Authen } from 'src/app/lesClasses/authen';
import { LoginService } from 'src/app/lesServices/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup;
  tablogin : Authen []=[];
  constructor(private fb :FormBuilder,private loginservice:LoginService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.nonNullable.group({
      email : ['',Validators.required],
      password : ['',Validators.required],
      nom:['',Validators.required],
      prenom:['',Validators.required]
    })
    this.loginservice.getLoginAdmin().subscribe((data:any)=>{
      this.tablogin = data
    })
  }
  user : boolean = false;
  loginUser(){
    this.loginservice.getLoginAdmin().subscribe(res=>{
      this.user = res.find((a:any)=>{
        return a.email == this.loginForm.value.email && a.password==this.loginForm.value.password &&a.nom == this.loginForm.value.nom && a.prenom == this.loginForm.value.prenom;
      })
      if(this.user){
        this.loginservice.isconnected = true;
        alert("Successfully information");
        this.router.navigate(['/admin']);
      }
      else{
        this.loginservice.isconnected = false;
        alert("Wrong information");
        this.loginForm.reset();
      }
    })
  }


}
