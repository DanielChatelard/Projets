# <div style="color: #26B260">**Propriétés personnalisées**</div>

[Sommaire](./00-Sommaire.md)

Il est possible de créer des propriétés personnalisées dans un component afin de pouvoir lui transmettre des données depuis l'extérieur.

```html
<!-- fichier app.component.html-->
<div class="container">
  <div class="row">
    <div class="col-xs-12">
      <h2>Mes appareils</h2>
      <ul class="list-group">
        <app-appareil [appareilName]="appareilOne" [appareilStatus]="'éteint'"></app-appareil>
        <app-appareil [appareilName]="appareilTwo" [appareilStatus]="'allumé'"></app-appareil>
        <app-appareil [appareilName]="appareilThree" [appareilStatus]="'éteint'"></app-appareil>
    </ul>
      <button class="btn btn-success"
              [disabled]="!isAuth"
              (click)="onAllumer()">Tout allumer</button>
    </div>
  </div>
</div>
```

```javascript
// fichier app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  
  appareilOne = 'Machine à laver';
  appareilTwo = 'Frigo';
  appareilThree = 'Ordinateur';

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

```javascript
// fichier appareil.component
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
}
```
