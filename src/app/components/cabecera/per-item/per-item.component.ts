import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PER } from 'src/app/mock-tasck';
import { Perfil } from 'src/app/models/perfil';
import { PerfilService } from 'src/app/service/perfil.service';
import { PerfilesComponent } from '../perfiles/perfiles.component';

@Component({
  selector: 'app-per-item',
  templateUrl: './per-item.component.html',
  styleUrls: ['./per-item.component.css']
})
export class PerItemComponent implements OnInit {

  activeForm: any = FormGroup;

  @Input() per: Perfil = PER[0];
  @Output() onEliminarPer: EventEmitter<Perfil> = new EventEmitter();

  public abrirModal: boolean = false;
  public usFilePerfil: any = File;
  public usFilePortada: any = File;

  nombre: string = "";
  titulo: string = "";
  ubicacion: string = "";
  email: string = "";

  constructor(
    private eduPer: PerfilService,
    private fb: FormBuilder,
    private emit: PerfilesComponent
  ) { 
    this.activeForm = this.fb.group({
      nombre: new FormControl,
      titulo: new FormControl,
      ubicacion: new FormControl,
      email: new FormControl
    })
  }

  ngOnInit(): void {
  }

  capturarPerfil(event: any) {
    const imgPerfil = event.target.files[0];
    this.usFilePerfil = imgPerfil;
  }

  capturarPortada(event: any) {
    const imgPortada = event.target.files[0];
    this.usFilePortada = imgPortada;
  }

  editarPerfil(submitForm: FormGroup):void {
    const entidad = submitForm.value;
    const formData = new FormData();
    formData.append('entidad', JSON.stringify(entidad));
    formData.append('imagenPerfilEditada', this.usFilePerfil);
    formData.append('imagenPortadaEditada', this.usFilePortada);
    
    this.eduPer.editPerfil(this.per.id, formData).subscribe(
      res=>
      this.emit.ngOnInit()
    );
    this.abrirModal = false;
  }

  eliminarPer(per: Perfil){
    this.onEliminarPer.emit(per)
  }

  openModal(){
    this.abrirModal = true;
  }

  cerrarModal(){
    this.abrirModal = false;
  }

}
