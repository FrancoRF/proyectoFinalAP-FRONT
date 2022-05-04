import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  titulo: string = "Educacion:"

  abrirEducacion: boolean = false;
  subcription?: Subscription;

  constructor(
    private uiService: UiService
  ) {
    this.subcription = this.uiService.onToggleEducacion()
    .subscribe(value => this.abrirEducacion = value)
  }

  ngOnInit(): void {
  }

  toogleAgregarEducacion(){
    this.uiService.toggleAgregarEducacion();
  }

}
