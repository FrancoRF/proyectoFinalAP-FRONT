import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './components/hys/hys.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { EspacioComponent } from './components/acercade/espacio/espacio.component';
import { EspaItemComponent } from './components/acercade/espa-item/espa-item.component';
import { BotonEspaComponent } from './components/acercade/boton-espa/boton-espa.component';
import { AgregarEspaComponent } from './components/acercade/agregar-espa/agregar-espa.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { AgregarPerComponent } from './components/cabecera/agregar-per/agregar-per.component';
import { BotonPerComponent } from './components/cabecera/boton-per/boton-per.component';
import { PerItemComponent } from './components/cabecera/per-item/per-item.component';
import { PerfilesComponent } from './components/cabecera/perfiles/perfiles.component';
import { AgregarEduComponent } from './components/educacion/agregar-edu/agregar-edu.component';
import { BotonEduComponent } from './components/educacion/boton-edu/boton-edu.component';
import { EduItemComponent } from './components/educacion/edu-item/edu-item.component';
import { EducacionesComponent } from './components/educacion/educaciones/educaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExperienciaComponent,
    EducacionComponent,
    HysComponent,
    ProyectoComponent,
    FooterComponent,
    AcercadeComponent,
    EspacioComponent,
    EspaItemComponent,
    BotonEspaComponent,
    AgregarEspaComponent,
    CabeceraComponent,
    AgregarPerComponent,
    BotonPerComponent,
    PerItemComponent,
    PerfilesComponent,
    AgregarEduComponent,
    BotonEduComponent,
    EduItemComponent,
    EducacionesComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
