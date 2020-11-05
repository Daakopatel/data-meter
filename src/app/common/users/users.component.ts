import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  apiurl= 'http://localhost:3000/login';
  firstName : any;

  constructor(private http: HttpClient) 
  {
    
   }

  ngOnInit(): void {
    
    this.http.get(this.apiurl).subscribe((data)=>{
      this.firstName = data;
      console.warn(this.firstName);
      
    })
  }

}
