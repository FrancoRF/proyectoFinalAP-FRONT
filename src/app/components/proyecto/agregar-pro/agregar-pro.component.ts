import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-agregar-pro',
  templateUrl: './agregar-pro.component.html',
  styleUrls: ['./agregar-pro.component.css']
})
export class AgregarProComponent implements OnInit {

  @Output() onAgregarProyecto: EventEmitter<FormData> = new EventEmitter();

  titulo: string = "";
  descripcion: string = "";
  link: string = "";

  abrirProyecto: boolean = false;
  aderir?: Subscription;
  activeForm: any = FormGroup;

  constructor(
    private fb: FormBuilder,
    private uiService: UiService
  ) { 
    this.activeForm = this.fb.group({
      titulo: new FormControl,
      descripcion: new FormControl,
      link: new FormControl
    })

    this.aderir = this.uiService.onToggleProyecto()
          .subscribe(value => this.abrirProyecto = value)
  }

  ngOnInit(): void {
  }

  onSubmit(submitForm: FormGroup){
    const entidad = submitForm.value;
    const formData = new FormData();
    formData.append('entidad', JSON.stringify(entidad))

    this.onAgregarProyecto.emit(formData);
    this.abrirProyecto = false;
    this.uiService.toggleAgregarProyecto();

  }

}
