import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-agregar-edu',
  templateUrl: './agregar-edu.component.html',
  styleUrls: ['./agregar-edu.component.css']
})
export class AgregarEduComponent implements OnInit {

  @Output() onAgregarEducacion: EventEmitter<FormData> = new EventEmitter();

  entidad: string = "";
  titulo: string = "";
  fecha : string = "";
  ubicacion: string = "";

  abrirEducacion: boolean = false;
  aderir?: Subscription;
  activeForm: any = FormGroup;

  constructor(
    private fb: FormBuilder,
    private uiService: UiService
  ) { 
    this.activeForm = this.fb.group({
      entidad: new FormControl,
      titulo: new FormControl,
      fecha: new FormControl,
      ubicacion: new FormControl
    })

    this.aderir = this.uiService.onToggleEducacion()
          .subscribe((value:any) => this.abrirEducacion = value)
  }

  ngOnInit(): void {
  }

  onSubmit(submitForm: FormGroup){
    const entidad = submitForm.value;
    const formData = new FormData();
    formData.append('entidad', JSON.stringify(entidad))

    this.onAgregarEducacion.emit(formData);
    this.abrirEducacion = false;
    this.uiService.toggleAgregarEducacion();

  }

}
