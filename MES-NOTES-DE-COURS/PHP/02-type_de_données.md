# <div style="color: #26B260">**Les types de données, les variables et les constantes**</div>

[Sommaire](./00-Sommaire.md)

## <div style="color: #26B260">**1) les variables**</div>

On déclare une variable PHP en précédant son nom du symbole dollar $.

Le nom de la variable doit :

    commencer par une lettre ou le symbole souligné,

    être en anglais,

    être descriptif de son contenu.

Pour l'afficher dans du code HTML, nous utilisons echo suivi du nom de la variable.

```php
// Déclarer une variable avec $ et l'affichée avec echo.
<body>
    <?php 
      $userName = 'John';

      echo $userName; 
    ?>
</body>
```

[Les variables PHP (documentation PHP)](https://www.php.net/manual/fr/language.variables.basics.php)

[echo (documentation PHP)](https://www.php.net/manual/fr/function.echo.php)

## <div style="color: #26B260">**2) les types de données**</div>

Un type scalaire désigne un type simple, qui ne contient qu'une seule donnée, par exemple un nombre entier.

Les quatre types scalaires en PHP :

    Une chaîne de caractères : string (entre guillemets ou apostrophes)

    Un nombre entier : int

    Un nombre décimal : float (utiliser le point et non la virgule comme séparateur des décimales)

    Un booléen vrai/faux (true/false) : bool

On associe chaque variable à un seul type.

[Les types (documentation PHP)](https://www.php.net/manual/fr/language.types.php)

## <div style="color: #26B260">**3) les opérations simples**</div>

    Les opérateurs arithmétiques : addition et soustraction (+ et -) ; multiplication et division (* et /).

    Les opérateurs de chaînes : concaténation de chaînes de caractères à l'aide du point ( . ).

    La priorité des opérateurs : la multiplication et la division prioritaires sur addition, soustraction et concaténation. Possibilité d'utiliser des parenthèses pour définir une priorité.

    Les opérateurs d'affectation : permettent d'affecter directement une valeur, le résultat d'une opération, une concaténation de chaînes de caractères, etc.

[Les opérateurs arithmétiques (documentation PHP)](https://www.php.net/manual/fr/language.operators.arithmetic.php)

[Opérateurs de chaînes (documentation PHP)](https://www.php.net/manual/fr/language.operators.string.php)

[La priorité des opérateurs (documentation PHP)](https://www.php.net/manual/fr/language.operators.precedence.php)

[Les opérateurs d'affectation (documentation PHP)](https://www.php.net/manual/fr/language.operators.assignment.php)

## <div style="color: #26B260">**3) les constantes en PHP**</div>

    Une constante est définie avec la fonction define, et s'écris toujours en majuscule.

    Sa valeur ne peut pas être modifiée.

```php
// Déclaration d'une constante avec le mot clé define
<?php
define('AGE', 18);
>
// define('NOM_DE_LA_VARIABLE', valeur de la variable);
```

[Les constantes (documentation PHP)](https://www.php.net/manual/fr/language.constants.php)
