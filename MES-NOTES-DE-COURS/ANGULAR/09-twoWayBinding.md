# <div style="color: #26B260">**Two-way Binding**</div>

[Sommaire](./00-Sommaire.md)

La liaison à double sens (ou two-way binding) utilise la liaison par propriété et la liaison par événement en même temps, on l'utilise, par exemple, pour les formulaires, afin de pouvoir déclarer et de récupérer le contenu des champs, entre autres.

Pour pouvoir utiliser le two-way binding, il vous faut importer  FormsModule  depuis  @angular/forms  dans votre application.

```javascript
// fichier app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';// ajout pour utiliser le 'two-way binding

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // ajout pour utiliser le 'two-way binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

La syntaxe se fait avec les crochets, les parenthèses et la directive (ngModel).

[(ngModel)]="appareilName"

```html
<!-- fichier appareil.component.html liaison two-way binding-->
<li class="list-group-item">
  <h4>Appareil : {{ appareilName }} -- Statut : {{ getStatus() }}</h4>
  <input type="text" class="form-control" [(ngModel)]="appareilName">
</li>
```
