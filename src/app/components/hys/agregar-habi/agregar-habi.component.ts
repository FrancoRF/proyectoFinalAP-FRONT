import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-agregar-habi',
  templateUrl: './agregar-habi.component.html',
  styleUrls: ['./agregar-habi.component.css']
})
export class AgregarHabiComponent implements OnInit {

  @Output() onAgregarHabilidad: EventEmitter<FormData> = new EventEmitter();

  titulo: string = "";
  porcentaje: number = 0;

  abrirHabilidad: boolean = false;
  aderir?: Subscription;
  activeForm: any = FormGroup;

  constructor(
    private fb: FormBuilder,
    private uiService: UiService
  ) { 
    this.activeForm = this.fb.group({
      titulo: new FormControl,
      porcentaje: new FormControl
    })

    this.aderir = this.uiService.onToggleHabilidad()
          .subscribe(value => this.abrirHabilidad = value)
  }

  ngOnInit(): void {
  }

  onSubmit(submitForm: FormGroup){
    const entidad = submitForm.value;
    const formData = new FormData();
    formData.append('entidad', JSON.stringify(entidad))

    this.onAgregarHabilidad.emit(formData);
    this.abrirHabilidad = false;
    this.uiService.toggleAgregarHabilidad();

  }
}
