
# <div style="color: #26B260">**String = Chaine de caratères.**</div>

[Sommaire](./00-Sommaire.md)

```javascript
    //Trois sorte de syntaxe
    let str ='Mon texte entre simple quote';
    let str ="Mon texte entre double quote";
    let tr =`Mon texte avec les backticks`;
    // échapper un caractère
    let str ='C\'est';//avec un back-slash
    // retour à la ligne avec(\n).
    // retour chariot avec (\r).
    //Concaténation avec le signe +
    let str2 ='Ma seconde chaine';
    console.log(str + str2 + "texte 3");
   
```

## <span style="color: #26B260">**Où se documenter pour manipuler les strings**</span> => Sur le MDN

## <span style="color: #26B260">**La longueur d'une string**</span>

Avec la propriété (.length). Les espaces sont considérés comme des caractères.

```javascript
    const str = "Mon texte";// const ou let
    console.log(str.length, "Mon test".length);
    // affichera 9 pour Mon texte et 8 pour Mon test.
    // on peux test sa longueur
    console.log(str.length > 3);
```

## <span style="color: #26B260">**Mettre en majuscule**</span>

Avec la méthode (toUpperCase).

```javascript
    let str = " texte en minuscule";
    str = str.toUpperCase();// pour réassigner str en majuscule.
    console.log(str.toUpperCase(), "en minuscule".toUpperCase());
```

## <span style="color: #26B260">**Mettre en minuscule**</span>

Avec la méthode (toLowerCase).

```javascript
    let str = " texte en minuscule";
    str = str.toLowerCase();// pour réassigner str en majuscule.
    console.log(str.toLowerCase(), "en minuscule".toLowerCase());
```

## <span style="color: #26B260">**Accéder à un caractère grâce à sa position**</span>

Accéder à un caractère grâce à sa position en mettant des crochets. Les position en javascript commencent à zéro.

```javascript
    let str = "Jean";
    
    console.log(str[0], str[3], str[str.length - 1]);
    // str.length - 1, Méthode dynamique pour savoir la position de dernier caractère.
```

## <span style="color: #26B260">**La position d'une string dans une string**</span>

Avec la méthode (indexOf).

```javascript
    let str = "Bonjour, Jean";
    
    console.log(str.indexOf("Jean"));
    // indiquera que Jean est à la position 9.
    // si ce que je recherche n'est pas présent, indexOf retournera -1.
```

## <span style="color: #26B260">**détermine si une chaîne de caractères est contenue dans une autre**</span>

La méthode <span style="color: #2EFE2E">includes()</span> détermine si une chaîne de caractères est contenue dans une autre et renvoie true ou false selon le cas de figure.

```javascript
    str = 'Il est allé se balader';
    let search = 'se balader';
    console.log(str.includes(search));
```

## <span style="color: #26B260">**détermine si une chaîne de caractères commence dans une autre**</span>

La méthode <span style="color: #2EFE2E">startsWith()</span> renvoie un booléen indiquant si la chaine de caractères commence par la deuxième chaine de caractères fournie en argument.

```javascript
    str = 'Bonjour Jean !';
    const start = "Bonjour, !";
    console.log(str.startsWith(start));
```

## <span style="color: #26B260">**Remplace toutes les lettres "a" par "o"**</span>

La méthode <span style="color: #2EFE2E">replaceAll(1,2)</span> remplace le premier argument par le deuxième.

```javascript
    str = 'Ma banane a planté';
    console.log(str.replaceAll("a","o"));
    //Affichera Mo bonone o plonté
```

## <span style="color: #26B260">**Séparez grâce à un espace (" ") tous les mots contenues dans la variable "str"**</span>

La méthode <span style="color: #2EFE2E">split()</span> permet de diviser une chaîne de caractères à partir d'un séparateur pour fournir un tableau de sous-chaînes.

```javascript
    str = 'Une phrase complexe avec des mots';
    console.log(str.split(' '));
    //Affichera: Array(6) [ "Une", "phrase", "complexe", "avec", "des", "mots" ]
```

## <span style="color: #26B260">**Supprimer des espaces en début et fin d'une chaine de caractère**</span>

La méthode <span style="color: #2EFE2E">trim()</span> permet de retirer les blancs en début et fin de chaîne. Les blancs considérés sont les caractères d'espacement (espace, tabulation, espace insécable, etc.) ainsi que les caractères de fin de ligne (LF, CR, etc.).

```javascript
    str = '        Mon text avec trop d\'espace        ';
    console.log(str.trim());
    //Affichera: Mon text avec trop d'espace
```
