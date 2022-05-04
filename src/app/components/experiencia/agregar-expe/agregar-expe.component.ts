import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-agregar-expe',
  templateUrl: './agregar-expe.component.html',
  styleUrls: ['./agregar-expe.component.css']
})
export class AgregarExpeComponent implements OnInit {

  @Output() onAgregarExperiencia: EventEmitter<FormData> = new EventEmitter();

  titulo: string = "";
  empresa: string = "";
  fecha: string = "";
  ubicacion: string = "";

  abrirExperiencia: boolean = false;
  aderir?: Subscription;
  activeForm: any = FormGroup;

  constructor(
    private fb: FormBuilder,
    private uiService: UiService
  ) { 
    this.activeForm = this.fb.group({
      titulo: new FormControl,
      empresa: new FormControl,
      fecha: new FormControl,
      ubicacion: new FormControl
    })

    this.aderir = this.uiService.onToggleExperiencia()
          .subscribe(value => this.abrirExperiencia = value)
  }

  ngOnInit(): void {
  }

  onSubmit(submitForm: FormGroup){
    const entidad = submitForm.value;
    const formData = new FormData();
    formData.append('entidad', JSON.stringify(entidad))

    this.onAgregarExperiencia.emit(formData);
    this.abrirExperiencia = false;
    this.uiService.toggleAgregarExperiencia();

  }
}
