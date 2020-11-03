import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators,FormControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  regform : any;
  apiurl= 'http://localhost:3000/login';
  hide = true;
  public profileData : any;



  constructor(private formbuild : FormBuilder, private http: HttpClient) 
  {
    this.regform = this.formbuild.group({
      firstName : '',
      lastName : '',
      userName : '',
      password : ''
    });
   }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
     this.http.get(this.apiurl).subscribe((data)=>{
       this.profileData = data;
       console.warn(this.profileData);
       
     })
  }

  onRegister(){
    this.http.post(this.apiurl,this.regform.value).subscribe((data)=>{
      this.getData();
    })
  }

}
