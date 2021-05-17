
# <span style="color: #26B260">Les boucles : La boucle for :</span>

[Sommaire](./00-Sommaire.md)

L'instruction <span style="color: #26B260">for</span> va nous permettre d'exécuter en boucle (le nombre de fois défini) un même bloc d'instructions.

Le premier paramètre de l'instruction <span style="color: #26B260">for</span> est la valeur d'initialisation (comme un compteur).

Le second est une condition évaluée avant chaque passage dans la boucle, si la condition est vérifiée, alors l'instruction est exécutée.

Le troisième paramètre est une expression évaluée à la fin de chaque itération (passage dans la boucle).

```javascript
    // let i=0,déclaration et initialisation de i,i < 6 est la condition, i++ est l'incrémentation
    for (let i = 0; i < 6; i++) {
        console.log(i)
};
```

## <span style="color: #26B260"> Les boucles : L'instruction do... while :</span>

<span style="color: #26B260">do...while :</span> la différence avec while est que la condition est analysée après l'exécution du bloc d’instructions.

```javascript
    let result = '';
    let i = 0;

    do {
        i = i + 1;
        result = result + i;
    } while (i < 5);

    console.log(result);
```

## <span style="color: #26B260"> Les boucles : L'instruction while :</span>

<span style="color: #26B260">While</span> va permettre de créer une boucle qui va s'exécuter tant que la condition renseignée entre parenthèses est vérifiée.

```javascript
    let n = 0;

    while (n < 3) {
        n++;
    };

    console.log(n);
```
