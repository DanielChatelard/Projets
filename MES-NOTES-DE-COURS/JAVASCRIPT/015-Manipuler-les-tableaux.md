
# <div style="color: #26B260">Manipuler les tableaux</div>

[Sommaire](./00-Sommaire.md)

Méthodes à connaître par coeur:

- forEach()
- find()
- findIndex()
- map()
- reduce()
- filter()
- some()
- every()

## <span style="color: #26B260">Manipuler les tableaux : La méthode "forEach"</span>

La méthode forEach, permet d'exécuter une fonction sur chaque élément du tableau.

```javascript
    // Méthode forEach().
    let arr = [1, 4, 6, 8];
    arr.forEach(function (value,index) {  // forEach, pour chaque.        
        console.log(index,value);
    });
```

## <span style="color: #26B260">Manipuler les tableaux : La méthode " find"</span>

La méthode find(), retourne la première valeur trouvée répondant à une condition donnée, passée en paramètre sous la forme d'une fonction.Si aucune valeur ne respecte la condition, alors la méthode renvoie : undefined.Cette méthode ne parcourt donc pas forcément le tableau en entier, ce qui peut représenter un gain de performance !

Elle permet de trouver une valeur.

```javascript
    let arr = ["Jean", "Sam", "Steve", "Tom"];

    let callback = function (name, index) {
        if (name.includes('o')) {
            return true;
        } else {
            return false;
        }
    };
    let res = arr.find(callback);
    console.log('res :', res);
```

```javascript
    // ou aussi en plus court.
    let arr = ["Jean", "Sam", "Steve", "Tom"];

    let callback = function (name) {        
            return name.includes('o');        
    };
    let res = arr.find(callback);
    console.log('res :', res);
```

```javascript
    // ou encore comme ceci.
    let arr = ["Jean", "Sam", "Steve", "Tom"];

    let res = arr.find(function (name) {
        return name.includes('o');
    });
    console.log('res :', res);
```

- find() : retourne la première valeur trouvée répondant à une condition donnée.

## <span style="color: #26B260">Manipuler les tableaux : La méthode "findIndex"</span>

- findIndex() : retourne l'index de la première valeur trouvée répondant à une condition donnée.

```javascript
    let arr = ["Jean", "Sam", "Steve", "Tom"];
    
    let callback = function (element, index) {
        console.log(element,index); // vérifier avec quoi on travail, ici element et index.
        return element.length === 5;    
    };
    let index = arr.findIndex(callback);
    
    console.log('Index :', index, arr[index]);// (index)affichera l'index et arr[index], affichera la valeur dans l'index.
```

## <span style="color: #26B260">Manipuler les tableaux : La méthode "map"</span>

- map() : permet de créer un tableau à partir d'un autre tableau, souvent utilisé pour modifier un tableau ou pour recréer un tableau à partir d'un autre tableau.

```javascript
    // pour les nombres.
    let arr = [1, 2, 4, 56, 78, 99, 123, 456];

    let callback = function (value, index) {
        console.log(value, index);
        return value % 2 ? 'Impair :'+ value : 'Pair :' + value ;
    }
    
    let arr2 = arr.map(callback);
    
    console.log(arr2);

    // pour modifier un tableau qui contient des objets.
    let arr = [
        {age:22 },
        {age:17 },
        {age:56 },
    ];
    
    let callback = function (value, index) {
        console.log(value);
        return value.age;
    }
    
    let arr2 = arr.map(callback);
    
    console.log(arr2);
  
```

## <span style="color: #26B260">Manipuler les tableaux : La méthode "reduce"</span>

- reduce() : permet de réduire un tableau sous une donnée, ou un autre type de données.

```javascript
    let arr = [3, 4, 49, 230, 48, 123];
    
    let accumulation = arr.reduce(function (acc,value, index) { 
        console.log(acc, value, index);// toujours vérifier avec quoi on travail.
        
        acc = acc + value;// acc, valeur d'accumulation.
        
        return acc;
    }, 0);// zéro est la valeur initial de (acc) que l'on a définit.

    console.log(accumulation, arr);
```

## <span style="color: #26B260">Manipuler les tableaux : La méthode "filter"</span>

- filter() :permet de filtrer des éléments d'un tableau en fonction d'une condition.

```javascript
    let arr = [3, 4, 49, 230, 7, 48, 123];
    
    let arrfiltered = arr.filter(function (nb, index) { 
        console.log(nb, index);
        if (nb % 2) {
            return true;
        } else {
            return false;
        }
    });
    
    console.log('array filtré :', arrfiltered);
    
    // simplifié
    let arr = [3, 4, 49, 230, 7, 48, 123];
    
    let arrfiltered = arr.filter(function (nb, index) {
        console.log(nb, index);
        return nb % 2;// si le nombre est impair, ça retournera 1, et 1 = true.
        // return !(nb % 2); si le nombre est pair, ça retournera 0, et 0 = false.
    });
    
    console.log('array filtré :', arrfiltered);
```

## <span style="color: #26B260">Manipuler les tableaux : La méthode "some"</span>

- some() : teste si au moins un élément du tableau passe le test implémenté par la fonction fournie. Elle renvoie un booléen indiquant le résultat du test.

```javascript
    let arr = [3, 4, 49, 230, 7, 48, 123];

   let cond =  arr.some(function (value, index) { 
        console.log(value, index);// je vérifie avec quoi je travail.
        
        if (value < 10) {// condition value inférieur à 10
            return true;
        } else {
            return false;
        }
    });
   
    console.log(cond);
```

```javascript
    // simplifié
    let arr = [3, 4, 49, 230, 7, 48, 123];

    let cond = arr.some(function (value, index) { 
        console.log(value, index);// je vérifie avec quoi je travail.
        
        return value < 10;// condition value inférieur à 10
    });
    
    console.log(cond);
```

## <span style="color: #26B260">Manipuler les tableaux : La méthode "every"</span>

- every() : permet de tester si tous les éléments d'un tableau vérifient une condition donnée par une fonction en argument. Cette méthode renvoie un booléen pour le résultat du test.

  Permet de test un tableau et de vérifier que toutes les valeurs du tableau valide une condition.

```javascript
    let arr = [3, 4, 49, 230, 7, 48, 123];

    let cond = arr.every(function (value, index) {
        console.log(value, index);// je vérifie avec quoi je travail.
        
        return value > 0;
    });

    console.log('Toute les valeurs :', cond);
```
