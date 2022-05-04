import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  titulo: string = "Experiencias:"

  abrirExperiencia: boolean = false;
  subcription?: Subscription;

  constructor(
    private uiService: UiService
  ) {
    this.subcription = this.uiService.onToggleExperiencia()
    .subscribe(value => this.abrirExperiencia = value)
  }

  ngOnInit(): void {
  }

  toogleAgregarExperiencia(){
    this.uiService.toggleAgregarExperiencia();
  }

}
