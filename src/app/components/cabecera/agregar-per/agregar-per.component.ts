import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-agregar-per',
  templateUrl: './agregar-per.component.html',
  styleUrls: ['./agregar-per.component.css']
})
export class AgregarPerComponent implements OnInit {

  @Output() onAgregarPerfil: EventEmitter<FormData> = new EventEmitter();

  nombre: string = "";
  titulo: string = "";
  ubicacion: string = "";
  email: string = "";

  public usFilePerfil: any = File;
  public usFilePortada: any = File;

  abrirPerfil: boolean = false;
  aderir?: Subscription;
  activeForm: any = FormGroup;

  constructor(
    private fb: FormBuilder,
    private uiService: UiService
  ) { 
    this.activeForm = this.fb.group({
      nombre: new FormControl,
      titulo: new FormControl,
      ubicacion: new FormControl,
      email: new FormControl
    })

    this.aderir = this.uiService.onTogglePerfil()
          .subscribe((value:any) => this.abrirPerfil = value)
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

  onSubmit(submitForm: FormGroup){
    const entidad = submitForm.value;
    const formData = new FormData();
    formData.append('entidad', JSON.stringify(entidad))
    formData.append('imagenPerfil', this.usFilePerfil);
    formData.append('imagenPortada', this.usFilePortada);

    this.onAgregarPerfil.emit(formData);
    this.abrirPerfil = false;
    this.uiService.toggleAgregarPerfil();

  }

}
