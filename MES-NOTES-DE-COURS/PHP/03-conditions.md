# <div style="color: #26B260">**Les conditions**</div>

[Sommaire](./00-Sommaire.md)

## <div style="color: #26B260">**1) if et else**</div>

Syntaxe :

```php
<?php
if (expression) {
  // Code à exécuter si expression est vraie.
} else {
  // Code à exécuter si expression est fausse.
}
?>
```

```php
<?php
$age = 21;

if ($age >= 18) {
  echo "Vous êtes majeur";
} else {
  echo "Vous êtes mineur";
}
?>
```

[if](https://www.php.net/manual/fr/control-structures.if.php)

[else](https://www.php.net/manual/fr/control-structures.else.php)

[Les booléens et la conversion en booléen](https://www.php.net/manual/fr/language.types.boolean.php)

[else if](https://www.php.net/manual/fr/control-structures.elseif.php)

## <div style="color: #26B260">**2) else if**</div>

```php
<?php
$valeur = 3;

if ($valeur === 1) {
  echo 'La variable $valeur est égale à 1';
} else if ($valeur === 2) {
  echo 'La variable $valeur est égale à 2';
} else if ($valeur === 3) {
  echo 'La variable $valeur est égale à 3';
} else {
  echo 'La variable $valeur n\'est pas égale à 1, 2 ou 3';
}
?>
```

## <div style="color: #26B260">**3) Les ternaires**</div>

```php
<?php
$pays = 'france';

if ($pays === 'france') {
  $francais = true;
} else {
  $francais = false;
}

// if-else transformé en ternaire.

$francais = ($pays === 'france') ? true:false;
?>
```

## <div style="color: #26B260">**4) switch**</div>

Un switch se décompose ainsi :

    switch : le mot-clé pour indiquer qu'on va utiliser le switch.

    $variable) : la valeur à comparer dans les case.

    case 'valeur' : les différentes valeurs de comparaison.

    break : indique de sortir du switch quand on a rencontré un case.

    default : si valeur n'a pas été trouvée dans les cases. Équivalent du else classique.

```php
switch (valeur) {
    case 'valeur0':
    case 'valeur1':
        // Code à exécuter.
        break;
    case 'valeur2':
        // Code à exécuter.
        break;
    default;
        // Code à exécuter.
}
```

Cas particulier du switch, choix multiple.

Si pour plusieurs case nous devons exécuter le même code, il est possible d'enchaîner les case sans répéter le bloc d'instructions. Nous écrirons alors seulement case 'valeur'.

```php
<?php
$pays = 'Norvège';

switch ($pays) {
    case 'Norvège':
    case 'Allemagne':
        echo "Hallo";
        break;
    case 'Angleterre':
        echo "Hello";
        break;        
    default:
        echo "De quel pays êtes-vous ?";
}   
?>
```

Le switch étant plus lisible, mieux structuré (moins d'accolades, une indentation plus adaptée), il est préféré à un enchaînement trop important de if ou de else if.
