import { Component, OnInit } from '@angular/core';
import symbolicen from '../../assets/symbolicen.json';
import symbolicfr from '../../assets/symbolicfr.json';
import { DataService } from '../services/data.service';
import { createHostListener, createInjectable } from '@angular/compiler/src/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.scss']
})
export class TestpageComponent implements OnInit {

  
  listsymb = new Array();
  symbols: Symbol[];
  symbolsSelected: Symbol[];

  constructor(private dataService:DataService, private router:Router) {
    /*La méthode Object.keys() renvoie tableau contenant les noms des propriétés d'un objet
    * Ici, elle renvoie un tableau à partir du fichier JSON symbolicfr
    *La méthode map permet de parcourir les attributs : name, symbolizes etc. Comme la boucle "for each"
    */
    this.symbols = Object.keys(symbolicfr).map((value) => {
      return symbolicfr[value];
    });
  }


  ngOnInit(): void {
    /* On initialise un nouveau tableau*/
    this.symbolsSelected = [];
  }

   /*La methode select() prend en paramétre une instance de l'interface Symbol (model.ts)*/ 
   select(item: Symbol) {
     /* Si la taille du tableau symbolsSelected est supérieur ou égal à 5, ne plus rien retourner*/
     if(this.symbolsSelected.length >= 5 ){
      return 0;
     } 
     /* Si "symbolsSelected" ne contient pas l'item "isSlected" retourne false 
     * Alors on utilise la méthode push pour ajouter l'item passé en argument
     */
     if(!this.isSelected(item)) {
      this.symbolsSelected.push(item);
     } else {
       /*renvoie un nouveau tableau qui respecte la condition de callback
       * filter => créer tab => rajoute les item => rajoute si c vrai
       */ 
       this.symbolsSelected = this.symbolsSelected.filter((symbol) => item != symbol);
     }
   }

   /* isSelected prend en paramétee une instance de Symbol
   * Vérifie si symbolsSelected contient l'instance passée en argument
   */
   isSelected(symbol: Symbol): boolean {
     return  this.symbolsSelected.includes(symbol);
   }


 
goToResultPage(e,listsymb) {
  e.preventDefault();
  // 1 je set la valeur du subject
  this.dataService.setDataResult(listsymb);
  // 2 je navigue avec le router
  if(listsymb.length == 5) {
    this.router.navigate(['results']);
  }
  
  
}
}
 
