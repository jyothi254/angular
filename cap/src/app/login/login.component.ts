import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
 CheckData(username){
   console.log(username);
 }

 submit(form){
   console.log(form); 
 }
  ngOnInit() {
  }

}
