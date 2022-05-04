import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EXPE } from 'src/app/mock-tasck';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { ExperienciasComponent } from '../experiencias/experiencias.component';

@Component({
  selector: 'app-expe-item',
  templateUrl: './expe-item.component.html',
  styleUrls: ['./expe-item.component.css']
})
export class ExpeItemComponent implements OnInit {

  activeForm: any = FormGroup;

  @Input() expe: Experiencia = EXPE[0];
  @Output() onEliminarExpe: EventEmitter<Experiencia> = new EventEmitter();

  public abrirModal: boolean = false;

  titulo: string = "";
  empresa: string = "";
  fecha: string = "";
  ubicacion: string = "";

  constructor(
    private expeSer: ExperienciaService,
    private fb: FormBuilder,
    private emit: ExperienciasComponent
  ) { 
    this.activeForm = this.fb.group({
      titulo: new FormControl,
      empresa: new FormControl,
      fecha: new FormControl,
      ubicacion: new FormControl
    })
  }

  ngOnInit(): void {
  }

  editarExperiencia(submitForm: FormGroup):void {
    const entidad = submitForm.value;
    const formData = new FormData();
    formData.append('entidad', JSON.stringify(entidad))
    
    this.expeSer.editExperiencia(this.expe.id, formData).subscribe(
      res=>
      this.emit.ngOnInit()
    );
    this.abrirModal = false;
  }

  eliminarExpe(expe: Experiencia){
    this.onEliminarExpe.emit(expe)
  }

  openModal(){
    this.abrirModal = true;
  }

  cerrarModal(){
    this.abrirModal = false;
  }

}
