# <div style="color: #26B260">**Le Routing**</div>

[Sommaire](./00-Sommaire.md)

## <div style="color: #26B260">*Intégrer les routes dans 'app.module.ts'*</div>
 
```javascript
// fichier app.modules.ts, créer les routes.
import { Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'appreils', component: AppareilViewComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: AppareilViewComponent }
];
```

```javascript
// fichier app.modules.ts
// intégrer les routes dans l'application, allez dans l'array 'import'.
import { RouterModule, Routes } from '@angular/router';

imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) // appRoutes est les routes que nous avons créer plus haut.
  ],
```

```html
<!-- fichier app.component.html -->
<div class="container">
  <div class="row">
    <!-- Ajout pour afficher les routes-->
    <router-outlet></router-outlet>
  </div>
</div>
```

## <div style="color: #26B260">*Intégrer une barre de navigation pour naviger entre les routes dans 'app.component.html'*</div>

```html
<!-- fichier app.component.html -->
<div class="navbar navbar-default">
  <div class="container-fluid">
    <ul class="nav navbar-nav">
      <li routerLinkActive><a routerLink="auth">Authentification</a></li>
      <li routerLinkActive><a routerLink="appareils">Appareils</a></li>
    </ul>
  </div>
</div>
<div class="container">
  <div class="row">
    <router-outlet></router-outlet>
  </div>
</div>
```
