import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators,FormControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formsubmit : FormGroup;
  public profileData : any;
 apiurl= 'http://localhost:3000/login';


  constructor(private formbuild : FormBuilder, private http: HttpClient) 
  {
    this.formsubmit= this.formbuild.group({
      firstName: '',
      lastName: '',
      number: ''
     })
   }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.http.get(this.apiurl).subscribe((data)=>{
      this.profileData = data;
      console.warn(this.profileData);
    })
  }

  onSubmit(){
    this.http.post(this.apiurl,this.formsubmit.value,).subscribe((data)=>{
      this.getData();
      this.formsubmit.reset();
    })
  }  

}
