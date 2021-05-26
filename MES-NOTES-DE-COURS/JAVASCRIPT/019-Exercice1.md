# <div style="color: #26B260">Exercice 1</div>

[Sommaire](./00-Sommaire.md)

## <div style="color: #26B260">*Les variables*</div>

Dans un fichier javascript

1. Utilisez la fonction "prompt()" pour demander à l'utilisateur son âge
2. Stocker le résultat
3. Afficher l'âge dans une alert
4. Afficher le type de la valeur entrée

```javascript
//Utilisez la fonction "prompt()" pour demander à l'utilisateur son âge
prompt('Quel est votre age ?');

//Stocker le résultat
const age = prompt('Quel est votre age ?');

//Afficher l'âge dans une alert
alert(age);

//Afficher le type de la valeur entrée
console.log(age, typeof age);

// Convertir avec le +unaire age en nombre
console.log(age, typeof age, +age);

// Avec toute convertion, il faut rajouter des vérifications, ne pas faire confiance à l'utilisateur.

```

## <div style="color: #26B260">*Questions :*</div>

1. De quand date la première version de Javascript ? En 1995.
2. Quel est l'objectif de javascript, à quel besoin réponds-t-il ? Dynamiser le site, et améliorer l'experience utilisateur.
3. Quel est l'utilisation du javascript ?
On peut l'utiliser pour manipuler le DOM, donnée serveur, application, elle est multiple.
4. Le javascript est-il un langage bas niveau ou haut niveau ? Et pourquoi ?
C'est un langage de haut niveau.
5. Qu'est-ce que le typage dynamique ?
L'interpréteur va assigner la valeur et le type, en fonction de la valeur de la variable.
6. Quels sont les différents type de variables ? Undefined, number, string, function, bigIn, Object, Symbol.
7. Qu'est-ce qu'un polyfill ?
C'est un bout de code qui va rajouter des fonctionalités à un navigateur.
8. Qu'est-ce qu'un "transpiler" ? Et Citez moi s'en un ou deux transpiller javascript.
C'est un logiciel qui va permettre de traduire du code vers dun autre code, afin que le code soit supporté par le navigateur. il existe deux transpiler les plus connu sont, webpack et babel.
9. Qu'est-ce qu'une instruction et comment sont-elles délimitées ?
Une instruction c'est une ligne de code, qui est délimitée par un point-virgule (;)

10. Qu'es-ce que la porté d'une variable ?
C'est son champ accèssibilité, il faut la déclarer avant son utilisation.Si je déclare une variable dans une fonction son scope, sera dans le bloc d'instructions entre les accolades de la fonction.

## <div style="color: #26B260">*Exercice 1 :*</div>

Déclare une variable nommé "age" contenant le nombre 24

```javascript
let age = 24;
```

Déclare une constante nommé "name" contenant le nom (la chaîne de charactère) de ton choix

```javascript
const name = "Daniel";
```

## <div style="color: #26B260">*Exercice 2 :*</div>

Affiche dans la console de ton navigateur les variables "age" et "name"

```javascript
console.log(age, name);
```

## <div style="color: #26B260">*Exercice 3 :*</div>

Multiplie la variable "age" par 3 et affichez le résultat dans la console

Résultat souhaité : 72

```javascript
//Si utilisé qu'une seule fois
console.log(age * 3);

//Si la const produit est utilisé plusieurs fois
const produit = age * 3;
console.log(produit);
```

## <div style="color: #26B260">*Exercice 4 :*</div>

Soustrais la variable "age" avec "age" et affiche le résultat dans la console

Résultat souhaité : 0

```javascript
console.log(age - age);

// Si j'ai besoin de stocker le résultat.
let diff = age -age;
console.log(diff);
```

## <div style="color: #26B260">*Exercice 5 :*</div>

Divise la variable "age" par 3 et affichez le résultat dans la console

Résultat souhaité : 8

```javascript
console.log(age / 3);
```

## <div style="color: #26B260">*Exercice 6 :*</div>

- Assigne à la variable "age" (déjà créée) le résultat de la variable "age" moins 3
- Puis affiche la variable "age" dans la console

Résultat souhaité : 21

```javascript
age = age -3;
console.log(age);

// ou raccourci
age -= 3;
console.log(age);
```

## <div style="color: #26B260">*Exercice 7 :*</div>

- Assigne à la variable "age" (déjà créée) le résultat de la variable "age" multiplié par 10
- Puis affiche la variable "age" dans la console

Résultat souhaité : 210

```javascript
age = age * 10;
console.log(age);

// ou raccourci
age *= 10;
console.log(age);
```

## <div style="color: #26B260">*Exercice 8 :*</div>

- Déclare une variable "age2" et assigne la valeur 50
- Puis affiche la variable "age2" dans la console

```javascript
let age2 = 50;
console.log(age2);
```

## <div style="color: #26B260">*Exercice 9 :*</div>

- Additionne "age" avec "age2"
- Puis affiche le resultat de l'addition dans la console

Résultat souhaité : 260

```javascript
console.log(age + age2);
```

C'est un exemple pour montrer la marche à suivre sur les prochains exercices.
// Exercice Exemple : Affiche dans la console le résultat de : "age" est-il inférieur à "age2" ?

Réponsé éxemple : console.log ('Exercice exemple :', age < age2);

```javascript
console.log ('Exercice exemple :', age < age2);// affichera false
```

## <div style="color: #26B260">*Exercice 10 :*</div>

Affiche dans la console le résultat de : "age" est-il supérieur à "age2" ?

```javascript
console.log ('Exercice exemple :', age > age2);// affichera true
```

## <div style="color: #26B260">*Exercice 11 :*</div>

Affiche dans la console le résultat de : "age2" est-il inférieur à "age" ?

```javascript
console.log ('Exercice exemple :', age2 < age);// affichera true
```

## <div style="color: #26B260">*Exercice 12 :*</div>

Affiche dans la console le résultat de : "age2" est-il supérieur ou égale à 50 ?

```javascript
console.log ('Exercice exemple :', age2 >= 50);// affichera true
```

## <div style="color: #26B260">*Exercice 13 :*</div>

Affiche dans la console le résultat de : "age" est-il inférieur ou égale à 10 ?

```javascript
console.log ('Exercice exemple :', age <= 10);// affichera false
```

## <div style="color: #26B260">*Exercice 14 :*</div>

Affiche dans la console le résultat de : "age" est-il égale à 210 ?

```javascript
console.log ('Exercice exemple :', age == 210);// affichera false
```

## <div style="color: #26B260">*Exercice 15 :*</div>

Affiche dans la console le résultat de : "age" est-il strictement égale en valeur et en type à 210 ?

```javascript
console.log ('Exercice exemple :', age === 210);// affichera true
```

## <div style="color: #26B260">*Exercice 16 :*</div>

- Opérateurs logiques : Écris la phrase suivante et affiche dans la console le résultat.
 Indice : Il vous faut utiliser les opérateurs logiques.

     la variable ex16var1 doit être strictement égale à 215 ET
     la variable ex16var2 doit être vrai ET
     la variable ex16var3 doit être strictement égale à la string "blog".

 Résultat souhaité : true

```javascript
let ex16var1 = 215;
let ex16var2 = true;
let ex16var3 = "blog";

console.log(ex16var1 === 215 && ex16var2 && ex16var3 === "blog");// affichera true
```

## <div style="color: #26B260">*Exercice 17 :*</div>

- Opérateurs logiques : Écris la phrase suivante et affiche dans la console le résultat.
 Indice : Il vous faut utiliser les opérateurs logiques.

     (la variable ex17var1 multiplié par 2 et diviser par 5 doit être strictement égale à 8 ET
     la variable ex17var2 doit être non égale simple du nombre 5) OU
     la variable ex17var3 doit être égale à faux

 Résultat souhaité : true

```javascript
let ex17var1 = 20;
let ex17var2 = "5";
let ex17var3 = false;

console.log('Ex 17:'(((ex17var1 * 2 / 5) === 8) && ex17var2 != 5) || ex17var3 === false );// affichera true
```

## <div style="color: #26B260">*Exercice 18 :*</div>

Déclare une variable de ton choix sans lui affecter de valeur et affiche le résultat dans la console.

```javascript
let var1;
console.log(var1);// affichera undefined, car elle n'a pas de valeur.
console.log(var1, typeof var1);// affichera undefined, aussi pour le type
```

## <div style="color: #26B260">*Exercice 19 :*</div>

Affiche dans la console le type de toutes les variables déclarées précédemment.

```javascript
let var1;
console.log(typeof var1, typeof age, typeof name, typeof ex17var3);// affichera undefined number string boolean.
```

## <div style="color: #26B260">*Exercice 20 :*</div>

Ecrire un script dans la balise "head" du fichier index.html de ce dossier qui affiche la chaine de charactères "head"

```html
<head>
    <script type="text/javascript">
        console.log('head');// affichera head en premier dans la console car lorsque le navigateur lit le code la balise script se trouve dans la balise head qui est au début du code html.
        // On met la balise script plutot à la fin du code html avant la balise de fermeture du body.
    </script>
</head>
```

## <div style="color: #26B260">*Exercice 21 :*</div>

Ecrire un script à la fin de la balise "body" du fichier index.html de ce dossier qui affiche la chaine de charactères "body"

```html
<body>

    <script src="index.js"></script>
    <script src="bonus.js"></script>

    <script type="text/javascript">
        console.log('body');// sera lu à la fin
    </script>
</body>
```

## <div style="color: #26B260">*Exercice 22 :*</div>

Créer un fichier app.js dans ce dossier qui affiche dans la console la chaine de charactères "app.js" et importer le dans le fichier index.html de ce dossier

```javascript
// fichier app.js
console.log("app.js");
```

```html
<!--fichier index.html-->
<body>

    <!-- import du fichier app.js-->
    <script src="app.js"></script>
</body>
```

## <div style="color: #26B260">*Bonus 1 :*</div>

1. Déclarer une variable nommée "bonus" et par défaut assignez-lui le nombre 2
2. En utilisant un opérateur artihmétique, déterminez si la valeur contenue dans la variable "bonus"
       est paire ou impaire
3. Assignez le nombre 3 à la variable "bonus"
4. Comme pour le point 2, affichez dans la console si la variable "bonus" est paire ou impaire

Dans le point 2 et 4, la façon qui nous permet de déterminer
si un nombre est paire ou impaire en utilisant un certain opérateur
est identique.
Résultat souhaité :

- Pour le point 2 => 0
- Pout le point 4 => 1

Expliquez en quelques lignes ce que représente 0 et 1
ce que cela traduit de la valeur contenue dans la variable "bonus"

```javascript
let bonus = 2;
console.log(bonus % 2);// % modulo, retourne le reste, si le reste est 1, il est impaire.
bonus = 3;
console.log(bonus, bonus % 2);// affichera 3 et 1 pour le reste, donc il est impaire.

```

## <div style="color: #26B260">*Bonus 2 :*</div>

Complétez le bonus 1, en y ajoutant une condition qui affiche dans la console :

- "Nombre paire" si la valeur contenue dans la variable "bonus" est paire
- "Nombre impaire" si la valeur contenue dans la variable "bonus" est impaire

```javascript
if(bonus %2) {
    console.log(bonus, 'impaire');
} else {
    console.log(bonus, 'paire');
}
```
