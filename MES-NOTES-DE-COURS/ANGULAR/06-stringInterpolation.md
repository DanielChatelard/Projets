# <div style="color: #26B260">**String Interpolation avec les doubles accolades{{ }}**</div>

[Sommaire](./00-Sommaire.md)

La syntaxe pour l'interpolation est les doubles accolades  {{ }} .
Ce qui se trouve entre les doubles accolades correspond à l'expression TypeScript que nous voulons afficher, elle ce trouve dans le fichier 'appareil.component.ts'.

```javascript
//La string interpolation sert à la communication entre le code TypeScript et le template HTML de votre component nommé appareil.

// fichier appareil.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  appareilName: string = 'Machine à laver';// interpolation par variable
  appareilStatus: string = 'éteint';

  constructor() { }

  ngOnInit(): void {
  }
  getStatus() {// interpolation avec la méthode getStatus()
    return this.appareilStatus;
  }

}
// fichier appareil.component.html
<li class="list-group-item">
  <h4>Appareil : {{ appareilName }} -- Statut : {{ getStatus() }}</h4>
</li>
```
