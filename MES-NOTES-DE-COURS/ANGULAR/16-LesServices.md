# <div style="color: #26B260">**Les Services**</div>

[Sommaire](./00-Sommaire.md)

Les service sont une façon de centraliser du code et des données utilisés par différentes parties de votrre application.

1. Informations des appareils
2. Fonctions globales
3. Authentification

Pour être utilisé un service doit être injecté, il y a trois niveaux d'injection.

1. app.module.ts, le service est disponibles pour tout les component de l'application.

2. app.component.ts, le service sera disponible pour tout les components de l'application, mais ne sera pas disponible pour les autres services.

3. appareil.component.ts, dans un autres component, il sera disponibles uniquement pour ce component là et ses enfants

Créer un dossier 'services' dans le dossier 'app', puis créer un fichier 'appareil.service.ts' dans le dossier 'services'.

```javascript
// fichier appareil.services.ts
export class AppareilService {
    
}
```

## injecter ce service dans  AppModule  en l'ajoutant à l'array  providers  (n'oubliez pas d'ajouter l'import correspondant en haut du fichier :

```javascript
// fichier app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './services/appareil.services';// import

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
      AppareilService // déclaration du service
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

Pour pouvoir l'utiliser, il suffit de créer une variable dans le constructor.

```javascript
import { Component } from '@angular/core';
import { AppareilService } from './services/appareil.services';// import

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  lastUpdate = new Date();

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
  // Pour pouvoir l'utiliser, il suffit de créer une variable dans le constructor.
  constructor(private appareilService: AppareilService) {
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
