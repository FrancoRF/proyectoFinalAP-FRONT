import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-agregar-espa',
  templateUrl: './agregar-espa.component.html',
  styleUrls: ['./agregar-espa.component.css']
})
export class AgregarEspaComponent implements OnInit {

  @Output() onAgregarEspacio: EventEmitter<FormData> = new EventEmitter();

  texto: string = "";

  abrirEspacio: boolean = false;
  aderir?: Subscription;
  activeForm: any = FormGroup;

  constructor(
    private fb: FormBuilder,
    private uiService: UiService
  ) { 
    this.activeForm = this.fb.group({
      texto: new FormControl
    })

    this.aderir = this.uiService.onToggleEspacio()
          .subscribe(value => this.abrirEspacio = value)
  }

  ngOnInit(): void {
  }

  onSubmit(submitForm: FormGroup){
    const entidad = submitForm.value;
    const formData = new FormData();
    formData.append('entidad', JSON.stringify(entidad))

    this.onAgregarEspacio.emit(formData);
    this.abrirEspacio = false;
    this.uiService.toggleAgregarEspacio();

  }

}
