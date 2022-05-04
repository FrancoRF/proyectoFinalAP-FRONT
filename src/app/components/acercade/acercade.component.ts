import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {

  titulo: string = "Acerca de mi:"

  abrirEspacio: boolean = false;
  subcription?: Subscription;

  constructor(
    private uiService: UiService
  ) { 
    this.subcription = this.uiService.onToggleEspacio()
    .subscribe(value => this.abrirEspacio = value)
  }

  ngOnInit(): void {
  }

  toogleAgregarEspacio(){
    this.uiService.toggleAgregarEspacio();
  }

}
