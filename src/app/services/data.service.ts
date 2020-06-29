import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

dataResult = new BehaviorSubject([]);

  constructor() {  }
    /* 
    On crée une méthode get
    sur laquelle on pourra s'abonner avec .subscribe()
    sur le component de la page result
    */

    getDataResult() {
      return this.dataResult;
    }
    /*
    On crée une méthode set qui  permettra de charger le subject avec la data
    (depuis le component testpage)
    */
   setDataResult(value) {
     this.dataResult.next(value);
   }
 
}
