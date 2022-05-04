import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  titulo: string = "Perfil:"

  abrirPerfil: boolean = false;
  subcription?: Subscription;

  constructor(
    private uiService: UiService
  ) {
    this.subcription = this.uiService.onTogglePerfil()
    .subscribe(value => this.abrirPerfil = value)
  }

  ngOnInit(): void {
  }

  toogleAgregarPerfil(){
    this.uiService.toggleAgregarPerfil();
  }


}
