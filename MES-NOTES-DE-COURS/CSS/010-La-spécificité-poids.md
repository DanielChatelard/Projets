
# <span style="color:#26f260;">**Le poids des éléments, la spécificité.**</span>

[Sommaire](./00-Sommaire.md)

De façon générale, plus un sélecteur est précis, plus celui-ci sera considéré comme prioritaire.

Un sélecteur d'élément est peu spécifique : il cible tous les éléments d'un type donné dans la page, son score est donc faible.

Un sélecteur de classe est plus spécifique : dans la page, il ne cible que les éléments dont l'attribut class a la valeur choisie, son score est donc plus important.

Par exemple, si nous ciblons un élément en utilisant son nom de balise et sa classe, la règle CSS prioritaire sera la plus précise. Ce sera donc celle dont le sélecteur est composé du nom de la balise et de la classe. En effet, son poids sera plus important que si nous avions seulement donné la classe ou le nom de l'élément.

```css
 p {
    color: blue;
    }

    .important {
    color: red;
    }

    p .important {
    color: orange;
    }
```

Le selecteur avec une class <span style="color:lightgreen;">*.important*</span> est prioritaire sur un sélecteur html <span style="color:lightgreen;">*p*</span>, le sélecteur + une class est encore plus prioritaire <span style="color:lightgreen;">*p .important*</span>.

```css
 p {
    color: blue;
    }

    .important {
    color: red !important;
    }

    p .important {
    color: orange;
    }
```

Avec <span style="color:#ffaa00;">*!important*</span> c'est lui qui devient le plus prioritaire.
