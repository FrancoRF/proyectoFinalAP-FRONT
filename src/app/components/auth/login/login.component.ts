import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  faUser = faUser;
  loginFail = false;

  nombreUsuario: string = "";
  password: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onLogin(){

  }

}
