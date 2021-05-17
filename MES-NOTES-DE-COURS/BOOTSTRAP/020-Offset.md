
# <div style="color: #26B260">**Offset**</div>

[Sommaire](./00-Sommaire.md)

<span style="color: yellow">*offset*</span> crée un décalage.

```html

    <!-- offset, décalage -->
    <div class="container">
        <div class="row">
            <div class="col-md-4">.col-md-4</div>
            <div class="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
        </div>
        <div class="row">
            <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
            <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
        </div>
        <div class="row">
            <div class="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
        </div>
    </div>
```

[getbootstrap-offset](https://getbootstrap.com/docs/5.0/layout/columns/#offsetting-columns)

## La propriété est définie par :

m - pour les classes qui définissent la marge externe ;

p - pour les classes qui définissent la marge interne.

Pour le côté, on utilise les lettres suivantes :

t - pour les classes qui règlent le haut de la marge ;

b - pour les classes qui règlent le bas de la marge ;

l - pour les classes qui règlent la marge gauche ;

r - pour les classes qui règlent la marge droite ;

x - pour les classes qui règlent les marges horizontales (gauche et droite) ;

y - pour les classes qui règlent les marges verticales (haut et bas) ;

laissez vide - pour les classes qui règlent à la fois les marges verticales et horizontales.

## La taille est définie numériquement :

0 - pour les classes qui suppriment la marge, la réglant sur 0 ;

1 - (par défaut) pour les classes qui règlent la marge sur 0,25 rem ;

2 - (par défaut) pour les classes qui règlent la marge sur 0,5 rem ;

3 - (par défaut) pour les classes qui règlent la marge sur 1 rem (marge de base Bootstrap) ;

4 - (par défaut) pour les classes qui règlent la marge sur 1,5 rem ;

5 - (par défaut) pour les classes qui règlent la marge sur 3 rem ;

auto - pour les classes qui règlent la marge sur auto.

Par exemple :

Pour régler la marge externe du haut d'un élément sur 1,5 rem, ajoutez la classe   .mt-4  (m pour marge, t pour top (haut), 4 pour 1,5 rem).

Pour régler la marge interne de tous les côtés d'un élément sur 1 rem, ajoutez la classe   .p-3  (p pour padding (marge interne), 3 pour 1 rem).

Pour régler la marge interne verticale d'un élément sur 0, ajoutez la classe   .py-0  (p pour padding (marge interne), y pour haut et bas, c'est-à-dire les deux côtés dans le sens y, et 0 pour… 0).

Pour régler la marge externe horizontale d'un élément sur auto, ajoutez la classe   .mx-auto  (m pour marge, x pour gauche et droite, c'est-à-dire les deux côtés dans le sens x et auto pour… auto).
