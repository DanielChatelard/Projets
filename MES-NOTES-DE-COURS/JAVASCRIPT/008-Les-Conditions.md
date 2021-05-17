
# <span style="color: #26B260">**Les conditions :**</span>

[Sommaire](./00-Sommaire.md)

## <span style="color: #26B260"> if... else :</span>

L'instruction <span style="color: #26B260"> if</span> exécute une instruction si une condition donnée est vraie ou équivalente à vrai. Si la condition n'est pas vérifiée, il est possible d'utiliser une autre instruction.

```javascript
    let firstname = 'Daniel';

    if (firstname == 'Daniel') { // On passe dans cette condition
    console.log("ma condition est vraie !");
    }

    if (firstname == 'Pierre') { // On ne passe pas dans cette condition
    console.log("ma condition est vraie !");
    }
```

Il est possible de chaîner plusieurs instructions <span style="color: #26B260"> if</span>, ainsi que de les imbriquer les unes dans les autres.

```javascript
    let age = 24;
    let firstname = 'Tristan';
    let ville = 'Nantes';
    
    if (age == 24) {
        if (firstname == 'Tristan') {
            if (ville == 'Nantes') {
            // Toutes les conditions sont remplies
            }
        }
    }
```

Il est possible de définir un bloc de code à exécuter dans le cas où la condition ne serait pas remplie, via une instruction <span style="color: #26B260">if...else</span>.

```javascript
    let age = 24;

    if (age == 24) {
        console.log("L'age est bien 24 !");
    } else {
        console.log("L'age est différent de 24");
    }
```

Il est également possible d'utiliser l'instruction <span style="color: #26B260">else if</span> de manière à couvrir plusieurs cas et à n'exécuter que le bloc de code correspondant à la condition évaluée à vrai. Ce bloc peut s'utiliser plusieurs fois de suite, on parle alors de chaîne.

```javascript
    let age = 24;

    if (age == 20) {
        // âge 20
    } else if (age == 22 ) {
        // âge 22
    } else if (age == 24 ) {
        // âge 24
    } else {
        // L'âge n'est pas 20, 22 ou 24
    }
```

Si une des conditions est évaluée à vrai, le programme n'évaluera pas les conditions suivantes.

```javascript
    let age = 17;

    if (age >= 18) {
        console.log('Vous êtes majeur.');
    } else {
        console.log('Vous êtes mineur.');
    }
```

## <span style="color: #26B260"> Switch:</span>

L'instruction <span style="color: #26B260">switch</span> permet d'évaluer une expression donnée et d'exécuter les instructions correspondant au cas qui y est associé.

```javascript
    switch (condition) {
    case valeur1:
        // Instructions à exécuter lorsque le résultat de la condition correspond à valeur1
        instructions1;
        break;
    case valeur2:
        // Instructions à exécuter lorsque le résultat de la condition correspond à valeur2
        instructions2;
        break;
    default:
        // Instructions à exécuter lorsqu'aucune des valeurs ne correspond à la condition à évaluer
        instructions-par-défaut;
        break;
};
```

```javascript
    let fruit = "kiwi";

switch (fruit) {
    case "banane":
        console.log("Vous avez choisi une banane.");
        break;
    case "pomme":
        console.log("Vous avez choisi une pomme.");
        break;
    case "kiwi":
        console.log("Vous avez choisi un kiwi.");
        break;
    case "clémentine":
        console.log("Vous avez choisi une clémentine.");
        break;
    default:
        console.log("Vous n'avez pas choisi un fruit de la liste.");
        break;
};

// Affichera "Vous avez choisi un kiwi."
```
