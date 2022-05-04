import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ACER } from 'src/app/mock-tasck';
import { Acercade } from 'src/app/models/acercade';
import { AcerdadeService } from 'src/app/service/acerdade.service';
import { EspacioComponent } from '../espacio/espacio.component';

@Component({
  selector: 'app-espa-item',
  templateUrl: './espa-item.component.html',
  styleUrls: ['./espa-item.component.css']
})
export class EspaItemComponent implements OnInit {

  activeForm: any = FormGroup;

  @Input() espa: Acercade = ACER[0];
  @Output() onEliminarEspa: EventEmitter<Acercade> = new EventEmitter();

  public abrirModal: boolean = false;

  texto: string = "";

  constructor(
    private acerSer: AcerdadeService,
    private fb: FormBuilder,
    private emit: EspacioComponent
  ) { 
    this.activeForm = this.fb.group({
      texto: new FormControl
    })
  }

  ngOnInit(): void {
  }

  editarEspa(submitForm: FormGroup):void {
    const entidad = submitForm.value;
    const formData = new FormData();
    formData.append('entidad', JSON.stringify(entidad))
    
    this.acerSer.editContenedores(this.espa.id, formData).subscribe(
      res=>
      this.emit.ngOnInit()
    );
    this.abrirModal = false;
  }

  eliminarEspa(espa: Acercade){
    this.onEliminarEspa.emit(espa)
  }

  openModal(){
    this.abrirModal = true;
  }

  cerrarModal(){
    this.abrirModal = false;
  }


}
