import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { faTrash, faPenClip } from '@fortawesome/free-solid-svg-icons';
import { PRO } from 'src/app/mock-tasck';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { ProyectosComponent } from '../proyectos/proyectos.component';

@Component({
  selector: 'app-pro-item',
  templateUrl: './pro-item.component.html',
  styleUrls: ['./pro-item.component.css']
})
export class ProItemComponent implements OnInit {

  activeForm: any = FormGroup;
  faDelete = faTrash;
  faPencil = faPenClip;

  @Input() pro: Proyecto = PRO[0];
  @Output() onEliminarPro: EventEmitter<Proyecto> = new EventEmitter();

  public abrirModal: boolean = false;

  titulo: string = "";
  descripcion: string = "";
  link: string = "";

  constructor(
    private proSer: ProyectoService,
    private fb: FormBuilder,
    private emit: ProyectosComponent
  ) { 
    this.activeForm = this.fb.group({
      titulo: new FormControl,
      descripcion: new FormControl,
      link: new FormControl
    })
  }

  ngOnInit(): void {
  }

  editarProyecto(submitForm: FormGroup):void {
    const entidad = submitForm.value;
    const formData = new FormData();
    formData.append('entidad', JSON.stringify(entidad))
    
    this.proSer.editProyecto(this.pro.id, formData).subscribe(
      res=>
      this.emit.ngOnInit()
    );
    this.abrirModal = false;
  }

  eliminarPro(pro: Proyecto){
    this.onEliminarPro.emit(pro)
  }

  openModal(){
    this.abrirModal = true;
  }

  cerrarModal(){
    this.abrirModal = false;
  }

}
