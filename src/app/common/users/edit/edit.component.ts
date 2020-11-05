import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators,FormControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  editform : FormGroup;
  apiurl= 'http://localhost:3000/login';
  hide = true;
  public profileData : any;

  constructor(private formbuild : FormBuilder, private http: HttpClient) 
  {
    
   }

  ngOnInit(): void {
    this.getData();
    
  }

  getData(){
    this.http.get(this.apiurl).subscribe((data)=>{
      this.profileData = data;
     //  console.warn(this.profileData);
      
    })
 }

 onEdit(){
   this.http.post(this.apiurl,this.editform.value).subscribe((data)=>{
     this.getData();
   })
 }

 deletedata(id){
   this.http.delete(this.apiurl +'/'+id).subscribe((data)=>{
     this.getData();
     console.warn(id)
   })
 }

 

}
