# <div style="color: #26B260">**Directive structurelles ngIf**</div>

[Sommaire](./00-Sommaire.md)

Un component auquel on ajoute la directive  *ngIf="condition"  ne s'affichera que si la condition est "truthy" vrai (elle retourne la valeur  true  où la variable mentionnée est définie et non-nulle).

N'oubliez pas l'astérisque devant ces directives, qui signifie à Angular de les traiter comme directives structurelles !

```html
<li class="list-group-item">
  <div style="width: 20px;height: 20px;background-color: red"
  *ngIf="appareilStatus === 'éteint'"></div>
  <h4>Appareil : {{ appareilName }} -- Statut : {{ getStatus() }}</h4>
  <input type="text" class="form-control" [(ngModel)]="appareilName">
</li>
```
