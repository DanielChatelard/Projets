
# <span style="color:#26f260;">**Float.**</span>

[Sommaire](./00-Sommaire.md)

Pour placer un bloc par rapport au contenu principal, on utilise :

<span style="color:#00fffb;">*float: left*</span> pour le placer à gauche.

```css
    .floatBlue {
    width: 200px;
    height: 70px;
    float: left;
    background-color: #5233FF;
    }
```

<span style="color:#00fffb;">*float: right*</span> pour le placer à droite.<br>

Pour empêcher un élément d'être placé après un élément flottant, on utilise :<br>
<span style="color:#00fffb;">*clear: none*</span> C'est la valeur par défaut. Pas de restriction, les éléments se positionneront à côté d'éléments flottants s'il y en a.

<span style="color:#00fffb;">*clear: left*</span> pour empêcher de le placer à côté d'un élément en <span style="color:#00fffb;">*float: left*</span>.

<span style="color:#00fffb;">*clear: right*</span> pour empêcher de le placer à côté d'un élément en <span style="color:#00fffb;">*float: right*</span>.

<span style="color:#00fffb;">*clear: both*</span> pour les deux empêche un élément de se placer à côté d'éléments placés en <span style="color:#00fffb;">*float: left*</span> ou <span style="color:#00fffb;">*float: right*</span>
