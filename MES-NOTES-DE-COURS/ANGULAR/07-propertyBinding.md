# <div style="color: #26B260">**Property Binding**</div>

[Sommaire](./00-Sommaire.md)

La liaison par propriété ou "property binding" est une autre façon de créer de la communication dynamique entre votre TypeScript et votre template, plutôt qu'afficher simplement le contenu d'une variable, vous pouvez modifier dynamiquement les propriétés d'un élément du DOM en fonction de données dans votre TypeScript.

La syntaxe est entre crochets [disabled]="!isAuth"

```html
<!--Fichier app.component.html -->
<div class="container">
  <div class="row">
    <div class="col-xs-12">
      <h2>Mes appareils</h2>
      <ul class="list-group">
        <app-appareil></app-appareil>
        <app-appareil></app-appareil>
        <app-appareil></app-appareil>
      </ul>
      <button class="btn btn-success" [disabled]="!isAuth">Tout allume</button>
    </div>
  </div>
</div>
```

```javascript
// fichier app.component.ts liaison ver le fichier app.component.html
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
}
```
