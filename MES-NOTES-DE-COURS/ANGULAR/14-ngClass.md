# <div style="color: #26B260">**Directive par attribut ngClass**</div>

[Sommaire](./00-Sommaire.md)

ngClass  prend un objet clé-valeur, mais cette fois avec la classe à appliquer en clé, et la condition en valeur.

```html
<!-- fichier appareil.component.html-->
<li [ngClass]="{'list-group-item': true,
                'list-group-item-success': appareilStatus === 'allumé',
                'list-group-item-danger': appareilStatus === 'éteint'}">
  <div style="width:20px;height:20px;background-color:red;"
       *ngIf="appareilStatus === 'éteint'"></div>
  <h4 [ngStyle]="{color: getColor()}">Appareil : {{ appareilName }} -- Statut : {{ getStatus() }}</h4>
  <input type="text" class="form-control" [(ngModel)]="appareilName">
</li>
```

Angular appliquera donc systématiquement la classe  list-group-item , et selon le contenu de la variable  appareilStatus , appliquera l'une ou l'autre des deux autres classes.

Que ce soit pour  ngStyle  ou pour  ngClass , les objets JS peuvent être des variables valables dans votre TypeScript qui seront ensuite référencées par la directive, par exemple :  [ngClass]="myClassObject".
