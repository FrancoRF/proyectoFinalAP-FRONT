import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private agregarEspacio: boolean = false;
  private sujetoEspa = new Subject<any>();

  constructor() { }

  toggleAgregarEspacio():void {
    this.agregarEspacio = !this.agregarEspacio;
    this.sujetoEspa.next(this.agregarEspacio);
  }

  onToggleEspacio(): Observable<any> {
    return this.sujetoEspa.asObservable();
  }

}
