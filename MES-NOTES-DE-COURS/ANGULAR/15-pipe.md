# <div style="color: #26B260">**Pipes**</div>

[Sommaire](./00-Sommaire.md)

Le pipe  async  est un cas particulier mais extrêmement utile dans les applications Web, car il permet de gérer des données asynchrones, par exemple des données que l'application doit récupérer sur un serveur.

 L'avantage d'un pipe est de pouvoir modifier l'affichage de cet objet sans en modifier la nature.  Ajoutons le DatePipe dans le template grâce au caractère  |  :

```html
<!-- fichier app.component.html-->
<div class="container">
  <div class="row">
    <div class="col-xs-12">
      <h2>Mes appareils</h2>

      <p>Mis à jour : {{ lastUpdate | date: 'yMMMMEEEEd' | uppercase }}</p>

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
// fichier app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  lastUpdate = new Date();// pipe Date

  appareils = [
    {
      name: 'Machine à laver',
      status: 'allumé'
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
