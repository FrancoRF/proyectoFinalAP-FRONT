import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  titulo: string = "Proyectos:"

  abrirProyecto: boolean = false;
  subcription?: Subscription;

  constructor(
    private uiService: UiService
  ) {
    this.subcription = this.uiService.onToggleProyecto()
    .subscribe(value => this.abrirProyecto = value)
  }

  ngOnInit(): void {
  }

  toogleAgregarProyecto(){
    this.uiService.toggleAgregarProyecto();
  }

}
