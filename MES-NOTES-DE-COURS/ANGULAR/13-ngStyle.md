# <div style="color: #26B260">**Directive par attribut ngStyle**</div>

[Sommaire](./00-Sommaire.md)

les directives par attribut modifient le comportement d'un objet déjà existant.  Vous avez déjà utilisé une directive de ce type sans le savoir : la directive  ngModel  que vous avez employée pour le two-way binding, qui modifie la valeur du  input  et répond à tout changement qu'on lui apporte.

ngStyle

Cette directive permet d'appliquer des styles à un objet du DOM de manière dynamique.

```html
<!-- fichier appareil.component.html -->
<li class="list-group-item">
  <div style="width: 20px;height: 20px;background-color: red"
  *ngIf="appareilStatus === 'allumé'"></div>
  <h4 [ngStyle]="{color: getColor()}">Appareil : {{ appareilName }} -- Statut : {{ getStatus() }}</h4>
  <input type="text" class="form-control" [(ngModel)]="appareilName">
</li>

```

```javascript
// fichier appareil.component.ts
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string | undefined;
  @Input() appareilStatus: string | undefined;
  
  constructor() { }

  ngOnInit() {
  }

  getStatus() {
    return this.appareilStatus;
  }
  getColor() {
    if(this.appareilStatus === 'allumé') {
      return 'green' ;
    } else if(this.appareilStatus === 'éteint') {
      return 'red';
    }
  }
}

```
