import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators,FormControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.scss']
})
export class AddusersComponent implements OnInit {
  adduserform : FormGroup;
  apiurl= 'http://localhost:3000/login';
  hide = true;
  public profileData : any;

  constructor(private formbuild : FormBuilder, private http: HttpClient) 
  {
    this.adduserform = this.formbuild.group({
      firstName : '',
      lastName : '',
      userName : '',
      password : ''
    });
   }

  ngOnInit(): void {
    this.getData();
    this.adduserform = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName : new FormControl('', [Validators.required]),
      userName: new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]{8,}')]),
    });
  }

  getData(){
    this.http.get(this.apiurl).subscribe((data)=>{
      this.profileData = data;
     //  console.warn(this.profileData);
      
    })
 }

 onEdit(){
   this.http.post(this.apiurl,this.adduserform.value).subscribe((data)=>{
     this.getData();
   })
 }
 

}
