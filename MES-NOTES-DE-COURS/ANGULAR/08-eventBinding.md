# <div style="color: #26B260">**Event Binding**</div>

[Sommaire](./00-Sommaire.md)

Liaison par événement, communication depuis le template HTML vers votre code TypeScript.

La syntaxe est entre parenthèse ( )="  "

```html
<!-- fichier app.component.html-->
<div class="container">
  <div class="row">
    <div class="col-xs-12">
      <h2>Mes appareils</h2>
      <ul class="list-group">
        <app-appareil></app-appareil>
        <app-appareil></app-appareil>
        <app-appareil></app-appareil>
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
