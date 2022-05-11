import { Component, OnInit } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public okMenu: boolean = false;

  faLogin = faAngleRight;

  constructor() { }

  ngOnInit(): void {
  }

  onMenu() {
    this.okMenu = true;
  }

  cerrarMenu(){
    this.okMenu = false
  }

  abrirLogin(){
    
  }

}
