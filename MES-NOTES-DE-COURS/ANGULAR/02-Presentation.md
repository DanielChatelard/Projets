# <div style="color: #26B260">**Présentation structure Angular**</div>

[Sommaire](./00-Sommaire.md)

<span style="color: yellow">*e2e*</span>, veut dire end to end, dossier qui contient des tests end to end, ce sont des tests écris coté navigateur pour tester les réactions cotée navigateur, le html.

<span style="color: yellow">*node_modules*</span>, qui détient toutes les dépendances de notre projet

<span style="color: yellow">*angular.json*</span>, c'est un fichier qui contient les informations sur notre projet, les styles, les scripts, les configurations, etc.

<span style="color: yellow">*package.json*</span>, on peut voir les dépendances, les types de script que l'on peut appeler(ng, start, build, test, lint, e2e)

<span style="color: yellow">*src*</span> dossier source où on n'a tout notre projet, tous les fichiers sources pour notre application.
On trouve à l'intérieur :<br>
le dossier style.scss, contient tout les style de notre application.

<span style="color: yellow">*environnement*</span>, ce dossier contient nos variables d'environnement.

<span style="color: yellow">*assets*</span>, ce dossier contient les images.

<span style="color: yellow">*app*</span>, ce dossier contient notre application, dont.

![img_13.png](images/img_13.png)

ils correspondent à un composant.(html pour la page, scss pour le style, spec pour les tests, ts pour typescript).
app.module.ts et app.routing.modules.ts

![img_14.png](images/img_14.png)

<span style="color: yellow">*app.component.ts*</span>, ce fichier contient

```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon-projet-angular-ocr';
}

```
