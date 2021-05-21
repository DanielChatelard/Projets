# <div style="color: #26B260">**Directive structurelles ngFor**</div>

[Sommaire](./00-Sommaire.md)

Lorsque l'on ajoute la directive  *ngFor="let obj of myArray"  à un component, Angular itérera l'array  myArray  et affichera un component par objet  obj .

N'oubliez pas l'astérisque devant ces directives, qui signifie à Angular de les traiter comme directives structurelles !

```html
<div class="container">
  <div class="row">
    <div class="col-xs-12">
      <h2>Mes appareils</h2>
      <ul class="list-group">
        <app-appareil  *ngFor="let appareil of appareils"
                       [appareilName]="appareil.name"
                       [appareilStatus]="appareil.status"></app-appareil>
    </ul>
      <button class="btn btn-success"
              [disabled]="!isAuth"
              (click)="onAllumer()">Tout allumer</button>
    </div>
  </div>
</div>
```

```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
// Tableau pour ngFor
  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Frigo',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];
  
  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  onAllumer() {
    console.log('On allume tout !');
  }
}

```
