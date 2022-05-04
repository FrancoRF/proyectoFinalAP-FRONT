import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {

  titulo: string = "Habilidades:"

  abrirHabilidad: boolean = false;
  subcription?: Subscription;

  constructor(
    private uiService: UiService
  ) {
    this.subcription = this.uiService.onToggleHabilidad()
    .subscribe(value => this.abrirHabilidad = value)
  }

  ngOnInit(): void {
  }

  toogleAgregarHabilidad(){
    this.uiService.toggleAgregarHabilidad();
  }

}
