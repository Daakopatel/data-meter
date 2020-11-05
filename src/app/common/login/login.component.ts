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
  hide = true;
 apiurl= 'http://localhost:3000/login';


  constructor(private formbuild : FormBuilder, private http: HttpClient) 
  {
    this.formsubmit= this.formbuild.group({
      userName: '',
      password: ''
     })
   }

  ngOnInit(): void {
    this.getData()
    this.formsubmit = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]{8,}')]),
    });
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
